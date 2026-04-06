# W3C (World Wide Web Consortium)

**Type:** Standards organization
**Founded:** 1994
**Director:** Tim Berners-Lee (founder)

## Overview

The World Wide Web Consortium is the principal international standards body responsible for developing and maintaining the open standards that underpin the modern web. Founded by Tim Berners-Lee, W3C operates through a member-driven process where industry, academia, and government stakeholders collaborate to produce technical specifications. In the context of [[Semantic Web]] and [[Knowledge Graph]] technologies, W3C's role is foundational — virtually every key standard in the space originates from a W3C working group.

W3C standards are published as Recommendations, progressing through Working Draft, Candidate Recommendation, and Proposed Recommendation stages before reaching finality. This deliberate process ensures broad consensus and interoperability across implementations.

## Key Standards

W3C has produced the core stack of semantic technologies:

- **[[RDF]]** (Resource Description Framework) — the data model for expressing facts as [[Triple|triples]], forming the bedrock of the [[Semantic Web]]
- **[[RDFS]]** (RDF Schema) — extends RDF with vocabulary for class hierarchies and property definitions
- **[[OWL]]** (Web Ontology Language) — a rich language for authoring [[Ontology|ontologies]] grounded in [[Description Logic]]
- **[[SPARQL]]** — the query language for RDF data, analogous to SQL for relational databases
- **[[SHACL]]** (Shapes Constraint Language) — a language for validating RDF graphs against declared constraints
- **[[Linked Data]]** principles — best practices for publishing interconnected data on the web using [[URI and IRI|URIs]]

These standards form a layered architecture sometimes called the "Semantic Web stack," where each layer builds on the one below.

## Role in Ontologies

W3C's standardization work transformed ontology engineering from an academic discipline into an interoperable engineering practice. Before OWL and RDF, ontologies existed in proprietary formats with no guaranteed exchange mechanism. W3C's standards gave the community a common syntax ([[Turtle]], RDF/XML, JSON-LD), shared semantics grounded in formal logic, and queryable access via [[SPARQL]]. Tools like [[Protege]] were built explicitly around W3C's OWL standard, and public knowledge bases like [[Wikidata]] and [[DBpedia]] publish their data in W3C-compliant RDF.

## See Also

- [[Semantic Web]]
- [[Linked Data]]
- [[OWL]]
- [[RDF]]
- [[SPARQL]]
- [[SHACL]]
- [[Ontology]]
