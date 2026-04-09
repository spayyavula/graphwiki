# GraphWiki

GraphWiki is a graph-based LLM wiki. It turns curated source material into interconnected wiki pages and visualizes those relationships as an interactive knowledge graph.

The current repository is focused on ontology learning, with especially strong coverage of ontology fundamentals and financial ontologies. The product direction is broader than a single domain: GraphWiki is intended to support multiple topic maps, such as learning ontology, financial ontology, algorithmic trading, carbon science, materials science, and thermodynamics, all presented through the same graph-first interface.

## What GraphWiki Does

GraphWiki combines three things:

1. Curated source material stored as markdown files.
2. LLM-maintained wiki pages generated and updated from those sources.
3. A D3-based graph viewer that makes topic relationships explorable instead of buried in isolated documents.

Instead of browsing topics as a folder tree or a long list of pages, readers can search, click, and traverse a graph of concepts, entities, guides, and comparisons.

## Core Idea

This repository follows an LLM-wiki pattern:

- Humans curate the raw source material.
- The LLM owns the generated wiki content.
- A graph compiler reads the wiki pages, extracts wikilinks, and rebuilds the interactive graph.

That gives you a workflow where knowledge stays file-based and inspectable, while the interface stays visual and exploratory.

## Current Scope

The repository currently contains:

- Ontology fundamentals such as RDF, RDFS, OWL, SPARQL, SKOS, SHACL, triples, URIs, and reasoning.
- Financial ontology material such as FIBO, FIGI, LEI, ISDA CDM, ISO 20022, XBRL, and related research papers.
- Comparison pages for adjacent concepts and standards.
- A front-end graph viewer that presents the current knowledge base as a graph.

The UI now reflects the broader GraphWiki direction, including topic selection in the header. At the moment, only the learning-ontology graph is embedded in this build. The other topic entries are visible as product direction but do not yet have active data sources wired into this repository state.

## Repository Structure

```text
graphwiki/
├── sources/                # Human-curated raw sources
│   ├── articles/
│   ├── papers/
│   ├── books/
│   └── web-clips/
├── wiki/                   # LLM-maintained wiki content
│   ├── index.md
│   ├── concepts/
│   ├── entities/
│   ├── guides/
│   └── comparisons/
├── scripts/
│   └── generate-graph.js   # Compiles wiki pages into embedded graph data
├── logs/
│   └── log.md              # Append-only project activity log
├── icons/                  # PWA icons
├── index.html              # Main static app
├── manifest.webmanifest    # PWA manifest
├── sw.js                   # Service worker
├── offline.html            # Offline fallback page
├── about.md                # Human-readable project overview
├── CLAUDE.md               # Project operating schema and content rules
└── netlify.toml            # Netlify configuration
```

## Content Model

GraphWiki organizes wiki pages into four graph categories:

- Concepts: foundational ideas and technical terms.
- Entities: standards, tools, organizations, datasets, and named systems.
- Comparisons: structured side-by-side pages such as one standard vs another.
- Guides: practical walkthroughs and how-to material.

Each page can link to other pages using Obsidian-style wikilinks like `[[OWL]]` or `[[URI and IRI|URIs]]`. The graph builder converts those links into node relationships.

## How the Graph Is Built

The graph compiler is implemented in [scripts/generate-graph.js](scripts/generate-graph.js).

At a high level, it:

1. Scans `wiki/concepts`, `wiki/entities`, `wiki/comparisons`, and `wiki/guides`.
2. Creates one graph node per markdown page.
3. Extracts page definitions and full content.
4. Parses wikilinks and relationship sections to infer typed edges.
5. Deduplicates edges and normalizes relationship labels.
6. Writes the resulting graph data into `index.html`.

Relationship labels are normalized into a small vocabulary such as:

- `is-a`
- `has-part`
- `built-on`
- `imports`
- `used-by`
- `extends`
- `related`
- `see-also`

## Front-End App

The graph viewer is a single static page in [index.html](index.html).

It includes:

- Embedded graph data generated from the wiki.
- D3 force-directed layout and interaction logic.
- Search and filtering affordances.
- Sidebar content display for node details.
- Apple-inspired light/dark UI.
- Topic selector branding for the broader GraphWiki product direction.
- PWA support with install metadata, icons, service worker, and offline fallback.

This intentionally avoids a heavy framework. The site is static, fast to deploy, and easy to inspect.

## Local Development

### Requirements

- Node.js
- npm

### Install

There are currently no runtime dependencies to install for the graph compiler, but Node.js is required to run the scripts.

### Rebuild the Graph

```bash
npm run graph
```

This regenerates the embedded graph data in `index.html` from the markdown wiki files.

### Watch for Changes

```bash
npm run graph:watch
```

This reruns the graph generation script when wiki content changes.

### Run Locally

You can serve the site with any static file server. For example:

```bash
python -m http.server 4173
```

Then open:

```text
http://127.0.0.1:4173/
```

Using a local server is recommended when testing PWA behavior because service workers do not register reliably from raw `file://` URLs.

## Editing Workflow

### Adding New Sources

1. Add source material under `sources/`.
2. Keep source files immutable once curated.
3. Ask the LLM to read the sources and update the wiki pages.
4. Regenerate the graph with `npm run graph`.
5. Review the resulting graph and page connections.
6. Append an entry to `logs/log.md`.

### Updating Wiki Content

- Wiki pages live under `wiki/`.
- The LLM is expected to maintain these pages.
- Claims should trace back to a source file or be marked `[needs-source]`.
- Pages should include cross-references and backlinks where appropriate.

### Source of Truth

- `sources/` is the raw evidence layer.
- `wiki/` is the generated knowledge layer.
- `index.html` is the presentation layer.

## Topic Selection Vision

GraphWiki is intended to support multiple domain graphs behind a common interface. The visible topic selector currently lists:

- Algo Trading
- Carbon Science
- Financial Ontology
- Learning Ontology
- Materials Science
- Thermodynamics

In this repo state, only the ontology-focused graph is active. Restoring full topic switching would require separate graph datasets and a manifest-driven topic loader similar to the older deployed interface.

## SEO and Product Positioning

The site is now branded for search and sharing as GraphWiki, not just as a single ontology graph.

That includes:

- Descriptive metadata for search engines.
- Open Graph and Twitter card tags.
- JSON-LD structured data.
- PWA naming aligned with GraphWiki.
- Copy that describes the broader LLM-wiki and multi-topic graph concept.

This makes the site legible both to users and to crawlers as a reusable graph-based wiki product rather than a one-off ontology demo.

## PWA Support

GraphWiki includes:

- [manifest.webmanifest](manifest.webmanifest)
- [sw.js](sw.js)
- [offline.html](offline.html)
- install icons under [icons](icons)

The service worker provides:

- cached app shell assets
- runtime caching for selected resources
- offline fallback navigation behavior

## Deployment

The site is deployed as a static Netlify app.

Relevant configuration:

- [netlify.toml](netlify.toml)
- publish directory: `.`
- build command: `echo done`

Important note: Netlify dashboard overrides can break deployment even when `netlify.toml` is correct. If the dashboard is set to a stale framework configuration such as `.next`, production deploys will fail until the override is corrected.

## Recommended Publishing Flow

1. Update source material or wiki pages.
2. Run `npm run graph`.
3. Review `index.html` locally.
4. Commit the wiki and app changes together.
5. Push to GitHub.
6. Verify the Netlify production deploy picked up the latest commit.

## Project Rules

Key working rules are defined in [CLAUDE.md](CLAUDE.md). Highlights:

- Never modify files in `sources/` casually; they are the curated evidence base.
- Use wikilinks in wiki pages.
- Keep claims attributable to sources.
- Log ingest and lint activity.

## Roadmap Ideas

- Restore full multi-topic graph switching.
- Split graph data into external topic manifests instead of embedding a single dataset.
- Add landing pages per topic graph.
- Generate richer structured data from wiki pages.
- Add sitemap and robots support for better indexing.
- Add guide pages that are generated from strong user Q&A flows.

## License and Ownership

No explicit open-source license is currently defined in this repository. If this project is intended for broader public reuse, add a license file and any contribution guidelines you want to enforce.