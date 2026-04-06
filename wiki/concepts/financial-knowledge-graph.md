# Financial Knowledge Graph

**Definition:** A [[Knowledge Graph]] applied to the financial domain, representing entities, instruments, markets, events, and their relationships as typed [[Triple]]s queryable via [[SPARQL]] and supporting [[Inference and Reasoning]] for risk, compliance, and trading applications.

**Also known as:** Finance KG, financial graph database, semantic financial graph.

## Overview

Financial knowledge graphs extend the general [[Knowledge Graph]] paradigm into a domain where precision, temporal accuracy, and regulatory traceability are non-negotiable. Unlike general-purpose KGs such as [[Wikidata]] or [[DBpedia]], financial KGs must handle high-frequency updates (market prices change by the millisecond), strict data provenance requirements (regulatory audit trails), and complex relationship types (ownership chains, derivative underliers, index constituents). The [[RDF]] + [[SPARQL]] stack inherited from the [[Semantic Web]] provides the interoperability layer, while property graph databases (Neo4j, TigerGraph) are often preferred in production for traversal performance.

Key application areas include credit risk modeling (traversing [[Legal Entity]] ownership graphs to compute consolidated exposure), compliance monitoring (mapping transactions to [[Financial Instrument]] classes and checking against regulatory obligation rules from [[FIBO]] or [[FinRegOnt]]), fraud detection (anomaly detection over transaction networks), and investment research (correlating company events with instrument price movements). Three research projects illustrate the state of the art: **FinDKG** constructs a temporally-resolved KG from 400,000 Wall Street Journal articles spanning 24 years, with 12 entity types and 15 relation types enabling link prediction across time windows — demonstrating how news-derived [[Triple]]s can capture evolving market relationships. **FinKario** (2025) uses a dual-structure design separating a static attribute subgraph (company fundamentals, instrument listings) from a dynamic event subgraph (earnings, M&A, analyst actions) extracted from equity research reports via LLM-assisted extraction, achieving an 18.81% improvement in stock prediction tasks when used for retrieval-augmented generation. **FinReflectKG** demonstrates a reflection-based construction pipeline for self-correcting financial graph extraction.

[[FIBO]] is the dominant ontological backbone for financial KGs: its [[OWL]] class hierarchy provides the schema layer, its [[RDF]] serializations are the data interchange format, and its [[Inference and Reasoning]] axioms enable automated classification of instruments and entities. The choice between [[RDF]] triplestores and property graph databases typically reflects the tension between semantic interoperability (favoring [[RDF]]) and query performance at scale (favoring property graphs).

## Key Properties

- Nodes: [[Financial Instrument]], [[Legal Entity]], [[Stock Exchange]], [[Market Data]], persons, events
- Edges: issues, trades, owns, regulates, underlies, tracks, correlates-with
- Temporal triples: timestamped edges for price history, ownership changes, event sequences
- Ontology alignment: [[FIBO]] for schema, [[GLEIF]] for entity identity, [[ISO 10962 CFI]] for instrument classification
- Query layer: [[SPARQL]] for [[RDF]] graphs; Cypher/GSQL for property graphs

## Relationships

- **Is-a:** [[Knowledge Graph]]
- **Has-part:** Entity graph, instrument graph, transaction graph, event graph, [[Market Data]] graph
- **Related:** [[RDF]], [[SPARQL]], [[FIBO]], [[Triple]], [[Inference and Reasoning]], [[Linked Data]]
- **Used-by:** Investment banks, hedge funds, regulatory bodies, fintech platforms, financial LLM applications

## Examples

- FinDKG: 400,000 WSJ articles → temporally-resolved KG with 12 entity types and 15 relation types
- FinKario: 305,000+ entities, dual attribute/event subgraph, FIBO-aligned, RAG-enabled for stock prediction
- A compliance KG linking transaction [[Triple]]s to [[FIBO]] instrument classes and [[LKIF]] regulatory obligation nodes

## Sources

- `sources/papers/findkg-dynamic-knowledge-graph.md`
- `sources/papers/finkario-dual-structure-financial-kg.md`
- `sources/articles/fibo-financial-industry-business-ontology.md`

## See Also

- [[Knowledge Graph]], [[RDF]], [[SPARQL]], [[FIBO]], [[Triple]]
- [[Inference and Reasoning]], [[Financial Ontology]], [[Linked Data]], [[Wikidata]], [[DBpedia]]
