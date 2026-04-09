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

## [2026-04-08] sources+ingest | Added starter source packs for carbon science and algo trading

- Added `sources/web-clips/carbon-science-academic-source-pack.md` with verified university-hosted material spanning carbon-cycle science, carbon capture, and carbon materials
- Added `sources/web-clips/algo-trading-academic-source-pack.md` with university-hosted material on execution costs, order-book algorithms, high-frequency trading, and market microstructure
- Created 2 new guide pages: Carbon Science Academic Source Guide and Algo Trading Academic Source Guide
- Updated `wiki/index.md` to include the new guide pages
- This batch closes the first-pass source coverage gap for all six planned GraphWiki topics, but Carbon Science and Algo Trading still need dedicated concept/entity page creation before they can be promoted to first-class topic datasets in the selector

## [2026-04-08] ingest | Added first Carbon Science and Algo Trading wiki pages

- Created 7 new concept pages: Algorithmic Trading, Market Microstructure, Limit Order Book, High-Frequency Trading, Carbon Cycle, Carbon Capture and Storage, Carbon Allotrope
- Created 2 new guide pages: Getting Started with Carbon Science, Getting Started with Algo Trading
- Updated `wiki/index.md` with new topic sections and guide links
- These pages establish the first real wiki layer for Carbon Science and Algo Trading and make both topics visible in the generated graph, but they still need more entities and comparisons before they are ready as full selector datasets

## [2026-04-08] ingest+ui | Added topic entities/comparisons and promoted Carbon/Algo into selector views

- Created 2 new entity pages: UCAR and FIX Trading Community
- Created 2 new comparison pages: Algorithmic Trading vs High-Frequency Trading and Carbon Cycle vs Carbon Capture and Storage
- Updated `wiki/index.md` with the new entity and comparison entries and refreshed coverage totals
- Extended the GraphWiki topic selector so Carbon Science and Algo Trading render as focused subgraphs instead of only appearing inside the full graph
- This batch gives both newer branches enough structure to browse as distinct topic views, though more entities and concept depth are still needed before Thermodynamics and Materials Science can be promoted the same way

## [2026-04-08] ingest+ui | Added first Thermodynamics and Materials Science concepts and promoted both topics into selector views

- Created 4 new concept pages: Thermodynamics, Entropy, Materials Science, and Phase Diagram
- Updated `wiki/index.md` with dedicated Thermodynamics and Materials Science concept sections and refreshed coverage totals
- Extended the GraphWiki topic selector so Thermodynamics and Materials Science now render as focused subgraphs alongside the existing four topic views
- This batch completes the first-pass selector coverage for all six planned GraphWiki topics, though both branches still need deeper entity and comparison coverage

## [2026-04-08] ingest | Added bridge concepts and comparisons for Thermodynamics and Materials Science

- Created 3 new concept pages: Kinetics, Phase Transition, and Solid State Chemistry
- Created 2 new comparison pages: Thermodynamics vs Kinetics and Materials Science vs Solid State Chemistry
- Updated `wiki/index.md` and the selector-backed topic cores so the Thermodynamics and Materials Science branches have stronger internal structure
- This batch makes both newer science branches feel less like source-guide placeholders and more like real learning graphs

## [2026-04-08] guide+ui | Added starter guides for Thermodynamics and Materials Science

- Created 2 new guide pages: Getting Started with Thermodynamics and Getting Started with Materials Science
- Updated `wiki/index.md` and the science topic cores so both branches have dedicated learner-facing entry paths
- Tightened focused graph expansion so adjacent concepts can enrich a topic view, while comparisons, guides, and entities appear only when deliberately included in that topic's core set

## [2026-04-08] ingest | Added first Thermodynamics and Materials Science entity pages

- Created 3 new entity pages: MIT OpenCourseWare, Princeton Combustion Energy Frontier Research Center, and UC Berkeley Computational Solid Mechanics Lab
- Created 1 new comparison page: Phase Diagram vs Phase Transition
- Updated `wiki/index.md` and the science topic cores so the newer branches now include source-backed institutions and a tighter phase-behavior comparison

## [2026-04-09] ingest | Reframed Materials Science around a stronger physics-facing angle

- Expanded `wiki/concepts/materials-science.md` so the branch now foregrounds structure, defects, vibrations, elasticity, phase behavior, and other physics-facing ideas alongside chemistry and engineering
- Updated `Getting Started with Materials Science` to explicitly route learners through both the chemistry view and the physics-and-structure view of the field
- Updated `Materials Science Academic Source Guide` so the source map more clearly supports the mechanics-facing and structure-based perspective already present in the repository's university source pack

## [2026-04-09] ingest | Added condensed-matter framing to the Materials Science branch

- Created `wiki/concepts/condensed-matter-physics.md` to make the physics-oriented view of materials explicit inside the wiki graph
- Created `wiki/comparisons/materials-science-vs-condensed-matter-physics.md` to distinguish the broader materials field from the physics-centered condensed-matter perspective
- Updated the materials branch guides, cross-links, and index so the new node is surfaced as part of the Materials Science learning path rather than left implicit
