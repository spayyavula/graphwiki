# Wikidata

**Type:** Knowledge base / Knowledge graph
**Operator:** Wikimedia Foundation
**Launched:** 2012
**License:** Creative Commons CC0 (public domain)

## Overview

Wikidata is a free, collaborative, multilingual [[Knowledge Graph]] maintained by the Wikimedia Foundation. It serves as the central structured data repository for all Wikimedia projects, including Wikipedia, Wikivoyage, and Wikisource. Anyone can edit Wikidata, and its contents are released into the public domain under the CC0 license, making it one of the most freely reusable large-scale knowledge bases in existence.

At its core, Wikidata stores facts as [[Triple|statements]] that follow a subject–predicate–object pattern consistent with the [[RDF]] data model. Each statement can be enriched with qualifiers (contextual details like time periods or locations) and references (citations supporting the claim). The entire database is queryable via [[SPARQL]] through the Wikidata Query Service, and bulk dumps are available in [[RDF]] and JSON formats.

Wikidata plays a central role in the [[Linked Data]] ecosystem because its items are assigned globally unique [[URI and IRI|URIs]], allowing external datasets like [[DBpedia]] and domain-specific knowledge graphs to link directly to Wikidata entities.

## Structure

Wikidata's data model has several key components:

- **Items** — The primary entities, identified by Q-numbers (e.g., Q42 for Douglas Adams). Each item represents a real-world concept, person, place, or thing.
- **Properties** — The predicates linking items to values, identified by P-numbers (e.g., P31 for "instance of", P569 for "date of birth"). Properties define the schema of what can be stated.
- **Statements** — A (item, property, value) [[Triple]] that asserts a fact. Values can be other items, strings, quantities, dates, or coordinates.
- **Qualifiers** — Additional property–value pairs scoped to a single statement, expressing when, where, or under what conditions a fact holds.
- **References** — Citations attached to statements to indicate the source of a claim, supporting verifiability.
- **Sitelinks** — Connections from a Wikidata item to the corresponding article in a Wikimedia project.

## Querying with SPARQL

The Wikidata Query Service exposes the full graph via [[SPARQL]], allowing users to answer complex questions by joining across millions of items and properties. Results can be returned as tables, maps, timelines, or graphs, making Wikidata a powerful resource for data journalism, research, and machine learning.

## See Also

- [[Knowledge Graph]]
- [[RDF]]
- [[SPARQL]]
- [[Linked Data]]
- [[Triple]]
- [[URI and IRI]]
- [[DBpedia]]
- [[Ontology]]
