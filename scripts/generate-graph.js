'use strict';

const fs   = require('fs');
const path = require('path');

// ═══════════════════════════════════════════════════════════════════
// CONFIGURATION
// ═══════════════════════════════════════════════════════════════════
const WIKI_DIR      = path.join(__dirname, '..', 'wiki');
const HTML_FILE     = path.join(__dirname, '..', 'index.html');
const WATCH_FLAG    = process.argv.includes('--watch');
const DEBOUNCE_MS   = 500;

// Folders to scan (in order)
const CATEGORIES = ['concepts', 'entities', 'comparisons', 'guides'];

// Special-case filename → display name mappings (full stem)
const SPECIAL_NAMES = {
  'rdf':         'RDF',
  'owl':         'OWL',
  'rdfs':        'RDFS',
  'sparql':      'SPARQL',
  'shacl':       'SHACL',
  'uri-and-iri': 'URI and IRI',
  'w3c':         'W3C',
  'dbpedia':     'DBpedia',
};

// Special-case individual word tokens (applied when stem is not found above)
const SPECIAL_WORDS = {
  'rdf':    'RDF',
  'owl':    'OWL',
  'rdfs':   'RDFS',
  'sparql': 'SPARQL',
  'shacl':  'SHACL',
  'w3c':    'W3C',
};

// Small words that stay lowercase (unless they are the first word)
const LOWERCASE_WORDS = new Set(['and', 'or', 'vs', 'the', 'a', 'an', 'of', 'in', 'on', 'at', 'to', 'for', 'with']);

// ═══════════════════════════════════════════════════════════════════
// NAME HELPERS
// ═══════════════════════════════════════════════════════════════════

/**
 * Convert a filename stem (without .md) to a display node name.
 * e.g. "class-and-property" → "Class and Property"
 *      "rdf"               → "RDF"
 */
function stemToName(stem) {
  if (SPECIAL_NAMES[stem]) return SPECIAL_NAMES[stem];
  return stem
    .split('-')
    .map((w, i) => {
      const lower = w.toLowerCase();
      if (SPECIAL_WORDS[lower]) return SPECIAL_WORDS[lower];
      if (i > 0 && LOWERCASE_WORDS.has(lower)) return lower;
      return w.charAt(0).toUpperCase() + w.slice(1);
    })
    .join(' ');
}

/**
 * Convert a wikilink target (e.g. "URI and IRI", "Knowledge Graph") to a
 * canonical node name.  Wikilinks use the display name directly, so we just
 * return the string as-is after trimming.
 */
function normalizeLinkTarget(target) {
  return target.trim();
}

// ═══════════════════════════════════════════════════════════════════
// RELATIONSHIP LABEL NORMALIZATION
// ═══════════════════════════════════════════════════════════════════

// Priority order for deduplication (lower index = higher priority)
const LABEL_PRIORITY = ['is-a', 'has-part', 'built-on', 'imports', 'used-by', 'extends', 'related', 'see-also'];

/**
 * Normalize a raw relationship label string to a canonical short label.
 */
function normalizeLabel(raw) {
  // Strip trailing colon and whitespace before comparing
  const s = raw.trim().replace(/:$/, '').trim().toLowerCase();
  if (s === 'is-a' || s === 'is a') return 'is-a';
  if (s === 'has-part' || s === 'has part') return 'has-part';
  if (s === 'related' || s === 'related to') return 'related';
  if (s === 'used-by' || s === 'used by') return 'used-by';
  if (s === 'built on' || s === 'built-on') return 'built-on';
  if (s === 'imports' || s === 'imports from') return 'imports';
  if (s === 'extends') return 'extends';
  if (s === 'see also' || s === 'see-also') return 'see-also';
  return 'related';
}

/**
 * Return the higher-priority label between two labels.
 */
function higherPriorityLabel(a, b) {
  const pi = LABEL_PRIORITY.indexOf(a);
  const qi = LABEL_PRIORITY.indexOf(b);
  const pi2 = pi === -1 ? LABEL_PRIORITY.length : pi;
  const qi2 = qi === -1 ? LABEL_PRIORITY.length : qi;
  return pi2 <= qi2 ? a : b;
}

// ═══════════════════════════════════════════════════════════════════
// MARKDOWN SCANNING
// ═══════════════════════════════════════════════════════════════════

/**
 * Recursively collect all .md files under a directory.
 */
function collectMarkdownFiles(dir) {
  const results = [];
  if (!fs.existsSync(dir)) return results;
  for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
    const full = path.join(dir, entry.name);
    if (entry.isDirectory()) {
      results.push(...collectMarkdownFiles(full));
    } else if (entry.isFile() && entry.name.endsWith('.md')) {
      results.push(full);
    }
  }
  return results;
}

/**
 * Extract all [[Target]] and [[Target|display]] wikilink targets from text.
 * Returns an array of raw target strings.
 */
function extractWikilinks(text) {
  const pattern = /\[\[([^\]|]+)(?:\|[^\]]*)?\]\]/g;
  const targets = [];
  let m;
  while ((m = pattern.exec(text)) !== null) {
    targets.push(m[1].trim());
  }
  return targets;
}

/**
 * Extract typed edges from a markdown file's content.
 * Returns an array of { target, label } objects.
 *
 * - ## Relationships section: parses "- **Label:** [[T1]], [[T2]]" lines
 * - ## See Also section: label = "see-also"
 * - All other wikilinks in the body: label = "related"
 */
function extractTypedEdges(text) {
  const WIKILINK_RE = /\[\[([^\]|]+)(?:\|[^\]]*)?\]\]/g;
  const results = []; // { target, label }

  // Split into lines and track which section we are in
  const lines = text.split('\n');
  let section = 'body'; // 'body' | 'relationships' | 'see-also'

  // Track character offsets consumed by Relationships / See Also lines
  // so we can exclude them from the body scan
  const sectionLineIndices = new Set();

  for (let i = 0; i < lines.length; i++) {
    const line = lines[i];
    const headingMatch = line.match(/^##\s+(.+)/);
    if (headingMatch) {
      const heading = headingMatch[1].trim().toLowerCase();
      if (heading === 'relationships') {
        section = 'relationships';
      } else if (heading === 'see also') {
        section = 'see-also';
      } else {
        section = 'body';
      }
      sectionLineIndices.add(i);
      continue;
    }

    if (section === 'relationships') {
      // Match "- **Label:** [[T1]], [[T2]], ..."
      const relMatch = line.match(/^\s*-\s+\*\*([^*]+)\*\*:?\s*(.*)/);
      if (relMatch) {
        const label = normalizeLabel(relMatch[1]);
        const rest  = relMatch[2];
        let m;
        WIKILINK_RE.lastIndex = 0;
        while ((m = WIKILINK_RE.exec(rest)) !== null) {
          results.push({ target: m[1].trim(), label });
        }
        sectionLineIndices.add(i);
      } else if (/^\s*$/.test(line)) {
        // blank line — stay in section
        sectionLineIndices.add(i);
      } else if (/^\s*-/.test(line)) {
        // bullet without bold label — treat as "related"
        WIKILINK_RE.lastIndex = 0;
        let m;
        while ((m = WIKILINK_RE.exec(line)) !== null) {
          results.push({ target: m[1].trim(), label: 'related' });
        }
        sectionLineIndices.add(i);
      }
    } else if (section === 'see-also') {
      WIKILINK_RE.lastIndex = 0;
      let m;
      while ((m = WIKILINK_RE.exec(line)) !== null) {
        results.push({ target: m[1].trim(), label: 'see-also' });
      }
      sectionLineIndices.add(i);
    }
  }

  // Body wikilinks — any line NOT already consumed by a special section
  for (let i = 0; i < lines.length; i++) {
    if (sectionLineIndices.has(i)) continue;
    WIKILINK_RE.lastIndex = 0;
    let m;
    while ((m = WIKILINK_RE.exec(lines[i])) !== null) {
      results.push({ target: m[1].trim(), label: 'related' });
    }
  }

  return results;
}

// ═══════════════════════════════════════════════════════════════════
// GRAPH BUILDER
// ═══════════════════════════════════════════════════════════════════

function buildGraph() {
  const nodes = [];       // { id, category, definition, content }
  const nodeSet = new Set();

  // 1. Discover nodes — one per .md file (skip index.md)
  for (const category of CATEGORIES) {
    const catDir = path.join(WIKI_DIR, category);
    if (!fs.existsSync(catDir)) continue;
    for (const entry of fs.readdirSync(catDir, { withFileTypes: true })) {
      if (!entry.isFile() || !entry.name.endsWith('.md')) continue;
      const stem = entry.name.slice(0, -3); // remove .md
      if (stem === 'index') continue;
      const name = stemToName(stem);
      const filePath = path.join(catDir, entry.name);
      const text = fs.readFileSync(filePath, 'utf8');
      const defMatch = text.match(/\*\*Definition:\*\*\s*(.+)/);
      const definition = defMatch ? defMatch[1].trim() : '';
      nodes.push({ id: name, category, definition, content: text });
      nodeSet.add(name);
    }
  }

  // 2. Discover edges — parse typed wikilinks from every .md file
  const rawEdges = [];

  for (const category of CATEGORIES) {
    const catDir = path.join(WIKI_DIR, category);
    if (!fs.existsSync(catDir)) continue;
    for (const entry of fs.readdirSync(catDir, { withFileTypes: true })) {
      if (!entry.isFile() || !entry.name.endsWith('.md')) continue;
      const stem = entry.name.slice(0, -3);
      if (stem === 'index') continue;
      const sourceName = stemToName(stem);
      const filePath   = path.join(catDir, entry.name);
      const text       = fs.readFileSync(filePath, 'utf8');
      const typedEdges = extractTypedEdges(text);
      for (const { target: rawTarget, label } of typedEdges) {
        const target = normalizeLinkTarget(rawTarget);
        if (target !== sourceName && nodeSet.has(target)) {
          rawEdges.push({ source: sourceName, target, label });
        }
      }
    }
  }

  // 3. Also scan any sub-directories we may have missed (recursive)
  const allMdFiles = collectMarkdownFiles(WIKI_DIR);
  for (const filePath of allMdFiles) {
    const stem = path.basename(filePath, '.md');
    if (stem === 'index') continue;
    // Skip files we already processed via CATEGORIES above
    const relParts = path.relative(WIKI_DIR, filePath).split(path.sep);
    if (relParts.length === 2 && CATEGORIES.includes(relParts[0])) continue;
    // Unknown category — add as node with category = parent folder name
    const category  = relParts[0] || 'other';
    const name      = stemToName(stem);
    const text  = fs.readFileSync(filePath, 'utf8');
    if (!nodeSet.has(name)) {
      const defMatch = text.match(/\*\*Definition:\*\*\s*(.+)/);
      const definition = defMatch ? defMatch[1].trim() : '';
      nodes.push({ id: name, category, definition, content: text });
      nodeSet.add(name);
    }
    const typedEdges = extractTypedEdges(text);
    for (const { target: rawTarget, label } of typedEdges) {
      const target = normalizeLinkTarget(rawTarget);
      if (target !== name && nodeSet.has(target)) {
        rawEdges.push({ source: name, target, label });
      }
    }
  }

  // 4. Deduplicate edges (undirected — treat A→B and B→A as same)
  // Keep the most specific (highest-priority) label when duplicates exist.
  const edgeMap  = new Map(); // key → { source, target, label }
  for (const e of rawEdges) {
    const a   = e.source < e.target ? e.source : e.target;
    const b   = e.source < e.target ? e.target : e.source;
    const key = `${a}|||${b}`;
    if (!edgeMap.has(key)) {
      edgeMap.set(key, { source: e.source, target: e.target, label: e.label });
    } else {
      const existing = edgeMap.get(key);
      const best = higherPriorityLabel(existing.label, e.label);
      if (best !== existing.label) {
        edgeMap.set(key, { source: e.source, target: e.target, label: best });
      }
    }
  }
  const edges = Array.from(edgeMap.values());

  return { nodes, edges };
}

// ═══════════════════════════════════════════════════════════════════
// SERIALISE TO JS LITERAL (matches existing HTML formatting style)
// ═══════════════════════════════════════════════════════════════════

function serializeGraph(graph) {
  const nodesByCategory = {};
  for (const cat of CATEGORIES) nodesByCategory[cat] = [];
  for (const n of graph.nodes) {
    const bucket = nodesByCategory[n.category] || (nodesByCategory['other'] = []);
    bucket.push(n);
  }

  let out = 'const GRAPH_DATA = {\n  nodes: [\n';

  for (const cat of Object.keys(nodesByCategory)) {
    const bucket = nodesByCategory[cat];
    if (!bucket || bucket.length === 0) continue;
    out += `    // ── ${cat} ──\n`;
    for (const n of bucket) {
      // Escape </ inside strings to prevent browser from prematurely closing <script>
      const safeDef = JSON.stringify(n.definition || '').replace(/<\//g, '<\\/');
      const safeCon = JSON.stringify(n.content || '').replace(/<\//g, '<\\/');
      out += `    { id: ${JSON.stringify(n.id)}, category: ${JSON.stringify(n.category)}, definition: ${safeDef}, content: ${safeCon} },\n`;
    }
  }

  out += '  ],\n  edges: [\n';

  // Group edges by source for readability
  let lastSource = null;
  for (const e of graph.edges) {
    if (e.source !== lastSource) {
      out += `    // ${e.source} → ...\n`;
      lastSource = e.source;
    }
    const safeLabel = JSON.stringify(e.label || 'related').replace(/<\//g, '<\\/');
    out += `    { source: ${JSON.stringify(e.source)}, target: ${JSON.stringify(e.target)}, label: ${safeLabel} },\n`;
  }

  out += '  ]\n};';
  return out;
}

// ═══════════════════════════════════════════════════════════════════
// HTML INJECTION
// ═══════════════════════════════════════════════════════════════════

/**
 * Replace the GRAPH_DATA block in the HTML.
 * The block starts with `const GRAPH_DATA = {` and ends with `};`
 * (the first `};` that follows).
 */
function injectGraphData(html, newDataJs) {
  // Match from `const GRAPH_DATA = {` up to and including the closing `};`
  // Use a non-greedy approach: find the marker, then scan for `};`
  const startMarker = 'const GRAPH_DATA = {';
  const startIdx    = html.indexOf(startMarker);
  if (startIdx === -1) {
    throw new Error('Could not find "const GRAPH_DATA = {" in index.html');
  }

  // Find the matching closing `};` — we look for it after the opening brace
  // The structure is a flat object with two array properties, so we track depth.
  let depth  = 0;
  let endIdx = -1;
  for (let i = startIdx + startMarker.length - 1; i < html.length; i++) {
    const ch = html[i];
    if (ch === '{' || ch === '[') depth++;
    else if (ch === '}' || ch === ']') {
      depth--;
      if (depth === 0) {
        // include the `;` if present
        endIdx = html[i + 1] === ';' ? i + 2 : i + 1;
        break;
      }
    }
  }

  if (endIdx === -1) {
    throw new Error('Could not find end of GRAPH_DATA block in index.html');
  }

  return html.slice(0, startIdx) + newDataJs + html.slice(endIdx);
}

// ═══════════════════════════════════════════════════════════════════
// MAIN GENERATION
// ═══════════════════════════════════════════════════════════════════

function generate() {
  if (!fs.existsSync(HTML_FILE)) {
    console.error(`Error: ${HTML_FILE} not found.`);
    process.exit(1);
  }

  const graph     = buildGraph();
  const dataJs    = serializeGraph(graph);
  const html      = fs.readFileSync(HTML_FILE, 'utf8');
  const newHtml   = injectGraphData(html, dataJs);

  fs.writeFileSync(HTML_FILE, newHtml, 'utf8');

  const ts = new Date().toLocaleTimeString();
  console.log(`[${ts}] Generated index.html: ${graph.nodes.length} nodes, ${graph.edges.length} edges`);
}

// ═══════════════════════════════════════════════════════════════════
// ENTRY POINT
// ═══════════════════════════════════════════════════════════════════

if (!WATCH_FLAG) {
  generate();
} else {
  generate(); // initial run

  console.log(`Watching wiki/ for changes... (Ctrl+C to stop)`);

  let debounceTimer = null;

  function scheduleRegenerate() {
    if (debounceTimer) clearTimeout(debounceTimer);
    debounceTimer = setTimeout(() => {
      debounceTimer = null;
      generate();
    }, DEBOUNCE_MS);
  }

  // fs.watch is recursive on Windows/macOS; on Linux add recursive manually
  try {
    fs.watch(WIKI_DIR, { recursive: true }, (eventType, filename) => {
      if (filename && filename.endsWith('.md')) {
        scheduleRegenerate();
      }
    });
  } catch (err) {
    // Fallback: watch each category dir individually (Linux without inotify)
    for (const cat of CATEGORIES) {
      const catDir = path.join(WIKI_DIR, cat);
      if (fs.existsSync(catDir)) {
        fs.watch(catDir, scheduleRegenerate);
      }
    }
  }
}
