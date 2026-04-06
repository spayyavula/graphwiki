# Ontology Learning Wiki

This is an LLM-wiki project for learning ontologies in depth. The LLM (you) owns and maintains all wiki content. The human curates sources.

## Project Purpose

Build a comprehensive, interconnected knowledge base about ontologies — from foundational concepts (RDF, OWL, RDFS, SKOS) through advanced topics (description logics, reasoning, ontology design patterns) to practical applications (knowledge graphs, semantic web, linked data).

## Directory Structure

```
graphwiki/
├── sources/          # RAW SOURCES — immutable, human-curated
│   ├── papers/       # Academic papers, arxiv PDFs/notes
│   ├── articles/     # Blog posts, tutorials, web articles
│   ├── books/        # Book chapters, textbook excerpts
│   └── web-clips/    # Quick captures from the web
├── wiki/             # THE WIKI — LLM-generated, LLM-maintained
│   ├── index.md      # Master catalog by category
│   ├── concepts/     # Concept pages (one per ontology concept)
│   ├── entities/     # Entity pages (tools, standards, people, orgs)
│   ├── guides/       # How-to guides and tutorials
│   └── comparisons/  # Comparison pages (X vs Y)
├── logs/
│   └── log.md        # Append-only chronological activity log
└── CLAUDE.md         # This file — the schema
```

## Core Operations

### Ingest
When a new source is added to `sources/`:
1. Read the source thoroughly
2. Discuss key takeaways with the human
3. Create or update relevant wiki pages in `wiki/`
4. Update `wiki/index.md` with new entries
5. Add cross-references and backlinks between related pages
6. Append entry to `logs/log.md`

### Query
When asked a question about ontologies:
1. Search relevant wiki pages first
2. Synthesize an answer with citations to wiki pages
3. If the answer reveals a gap, offer to create a new wiki page
4. Good Q&A exchanges can be filed as new guide pages

### Lint
Periodic health checks:
- Find contradictions between pages
- Identify stale or incomplete sections
- Detect orphan pages (no backlinks)
- Flag missing cross-references
- Suggest new pages for coverage gaps

## Wiki Page Conventions

### Concept Pages (`wiki/concepts/`)
```markdown
# {Concept Name}

**Definition:** One-line definition.

**Also known as:** Aliases, acronyms.

## Overview
2-3 paragraph explanation accessible to a learner.

## Key Properties
- Bullet points of important characteristics

## Relationships
- **Is-a:** Parent concepts
- **Has-part:** Component concepts
- **Related:** Sibling/related concepts
- **Used-by:** Tools, standards, or practices that use this

## Examples
Concrete examples with code/syntax where applicable.

## Sources
- Links to source files that informed this page

## See Also
- [[Related Page 1]]
- [[Related Page 2]]
```

### Entity Pages (`wiki/entities/`)
For tools (Protege, OWL API), standards (W3C specs), people, organizations.

### Guide Pages (`wiki/guides/`)
Step-by-step practical guides (e.g., "How to model a domain in OWL").

### Comparison Pages (`wiki/comparisons/`)
Structured comparisons (e.g., "OWL vs RDFS", "Protege vs TopBraid").

## Ontology Learning Roadmap

### Foundation
- What is an ontology (philosophy vs CS)
- Knowledge representation basics
- RDF / RDF Schema
- Triples, graphs, URIs, literals

### Core
- OWL (Web Ontology Language) — profiles (Lite, DL, Full)
- Description Logics (ALC, SHOIN, SROIQ)
- SPARQL query language
- Reasoning and inference

### Design
- Ontology Design Patterns (ODPs)
- Upper ontologies (BFO, DOLCE, SUMO)
- Modular ontology design
- Ontology alignment and mapping

### Practice
- Tools: Protege, OWL API, rdflib, Jena
- Building domain ontologies
- Ontology evaluation and validation (SHACL, ShEx)
- Knowledge graphs in production

### Advanced
- Ontology learning from text (NLP + ontologies)
- LLMs for ontology engineering
- Formal verification
- Temporal and fuzzy ontologies

## Rules
- NEVER modify files in `sources/` — they are immutable
- Wiki pages use Obsidian-style `[[wikilinks]]` for cross-references
- Every claim should trace to a source file or be marked `[needs-source]`
- Use `[coverage: high|medium|low]` tags on sections
- Log every ingest/lint operation in `logs/log.md`
