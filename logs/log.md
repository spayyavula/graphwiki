# Activity Log

> Append-only chronological record of all wiki operations.

## [2026-04-05] init | Project created

- Initialized LLM-wiki structure for ontology learning
- Created directory layout: sources/, wiki/, logs/
- Defined schema in CLAUDE.md
- Learning roadmap: Foundation → Core → Design → Practice → Advanced

## [2026-04-05] ingest | Seeded foundational wiki content

- Created 15 concept pages: Ontology, Knowledge Graph, RDF, OWL, RDFS, SPARQL, Triple, URI and IRI, Semantic Web, Linked Data, Description Logic, Taxonomy, Class and Property, Inference and Reasoning, SHACL
- Created 4 entity pages: W3C, Protege, Wikidata, DBpedia
- Created 3 comparison pages: Ontology vs Taxonomy, OWL vs RDFS, Property Graph vs RDF
- Created 2 guide pages: Getting Started with Ontologies, Your First RDF Graph
- All pages extensively cross-linked with Obsidian wikilinks
- Total: 24 interconnected wiki pages forming a navigable knowledge graph
- Coverage: Foundation and Core layers well covered; Design, Practice, Advanced layers pending source material

## [2026-04-05] sources | Added stock market ontology sources

- Added 13 articles covering major financial ontology standards:
  - FIBO (2,436 classes, the definitive financial ontology)
  - ISO 20022 (universal financial messaging, OWL via TR 22126-2:2025)
  - GLEIF/LEI (7 OWL ontologies for legal entity identification)
  - XBRL (business reporting, 15,000+ US GAAP elements)
  - FIGI (universal instrument identifier, OWL available)
  - ISDA CDM (common domain model, Rosetta DSL)
  - FpML (OTC derivatives XML standard)
  - FIX Protocol (real-time trading messages)
  - ISO 10962/CFI (instrument classification, JSON-LD/Turtle)
  - FinRegOnt (regulatory compliance, imports FIBO + LKIF)
  - Schema.org financial extensions (JSON-LD, FIBO-aligned)
  - FDC3 (desktop interoperability, JSON Schema)
  - GoodRelations (e-commerce ontology, OWL)
- Added 8 academic papers on financial knowledge graphs:
  - KG Construction for Stock Markets with LLMs (Lee et al. 2025)
  - FinCaKG-Onto: causality KG + FIBO (2025)
  - FinKario: dual-structure KG, 305K+ entities (2025)
  - FinReflectKG: agentic KG from SEC 10-K filings (2024)
  - FinDKG: dynamic KG from 400K WSJ articles (2024)
  - Stock Market Monitoring/Surveillance ontology (2018)
  - OntoFiC: financial fraud detection ontology (2023)
  - Structure First, Reason Next: LLM + KG (2026)
- Added 6 web clips: Wikidata financial structure, DBpedia classes, LSEG PermID, identifier standards, SemanticXBRL, LKIF
- Total: 27 source files ready for ingestion into wiki

## [2026-04-05] ingest | Ingested 27 stock market ontology sources into wiki

- Created 11 new concept pages: Financial Ontology, Financial Instrument, Securities, Derivatives, Legal Entity, Financial Identifier, Financial Knowledge Graph, Market Data, Stock Exchange, SKOS, LKIF
- Created 19 new entity pages: FIBO, ISO 20022, GLEIF, XBRL, FIGI, ISDA CDM, FpML, FIX Protocol, FinRegOnt, FDC3, Schema.org Financial, GoodRelations, ISO 10962 CFI, FinDKG, FinKario, FinReflectKG, OntoFiC, SemanticXBRL, PermID
- Created 3 new comparison pages: FIBO vs Schema.org Financial, FpML vs FIX vs ISO 20022, Financial Identifier Comparison
- Created 2 new guide pages: Building a Financial Knowledge Graph, Exploring FIBO
- Updated index.md with new sections: Financial Ontology Concepts, Standards & Ontologies, Financial KG Projects
- Regenerated wiki-graph.html: 59 nodes, 507 edges
- Total wiki: 26 concepts | 19 entities | 4 guides | 6 comparisons = 55 pages

## [2026-04-08] sources+ingest | Added academic source packs for learning ontology and financial ontology

- Added `sources/web-clips/learning-ontology-academic-source-pack.md` with university-hosted ontology and semantic web references from MIT, Columbia, Berkeley, and Harvard
- Added `sources/web-clips/financial-ontology-academic-source-pack.md` with a first batch of academic finance KG references from Columbia and NYU, plus repository-backed domain standards already used in the wiki
- Created 2 new guide pages: Learning Ontology Academic Source Guide, Financial Ontology Academic Source Guide
- Updated `wiki/index.md` to include the new guide pages and refreshed the last-updated date
- This ingest batch establishes a stronger academic source base for future multi-topic GraphWiki expansion, but further curation is still needed before Carbon Science, Materials Science, Thermodynamics, and Algo Trading can be treated as first-class topic datasets

## [2026-04-08] sources+ingest | Added thermodynamics/materials source packs and second-pass finance curation

- Added `sources/web-clips/thermodynamics-academic-source-pack.md` with university-hosted thermodynamics references from MIT, Berkeley, Princeton, and Caltech
- Added `sources/web-clips/materials-science-academic-source-pack.md` with verified materials-science and materials-thermodynamics sources from MIT, Berkeley, and Caltech
- Added `sources/web-clips/financial-ontology-industry-source-pack.md` to extend the finance branch with aggregator and investment-firm-facing graph/identifier infrastructure material, especially LSEG/PermID and Bloomberg-Columbia material
- Created 2 new guide pages: Thermodynamics Academic Source Guide and Materials Science Academic Source Guide
- Updated `Financial Ontology Academic Source Guide` to include the industry extension layer
- Updated `wiki/index.md` to include the additional guide pages
- These additions strengthen the source base for future topic expansion, but Carbon Science and Algo Trading still require dedicated source passes before they can be promoted to first-class topic datasets
