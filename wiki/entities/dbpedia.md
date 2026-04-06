# DBpedia

**Type:** Knowledge graph extracted from Wikipedia
**Operator:** DBpedia Association (community-driven)
**Launched:** 2007
**License:** Creative Commons Attribution-ShareAlike / GNU Free Documentation License

## Overview

DBpedia is a crowd-sourced community effort to extract structured information from Wikipedia and make it freely available on the web as a [[Knowledge Graph]]. By parsing the infoboxes, categories, and links embedded in Wikipedia articles, DBpedia transforms unstructured encyclopedia content into machine-readable [[RDF]] triples that can be queried, downloaded, and interlinked with other datasets.

DBpedia was one of the earliest and most influential hubs in the [[Linked Data]] cloud. Its decision to assign stable [[URI and IRI|URIs]] to Wikipedia concepts — such as `dbpedia.org/resource/Berlin` — gave external datasets a common reference point, enabling cross-dataset links that form the connective tissue of the broader Semantic Web. This hub role helped establish [[Linked Data]] as a practical publishing paradigm rather than a purely academic vision.

The dataset covers millions of entities across domains including people, places, organizations, music, film, science, and more. Each entity is described using the DBpedia [[Ontology]], a manually curated schema that provides consistent [[Class and Property|classes and properties]] across the extracted data.

## Data Model and Access

DBpedia publishes its data in [[RDF]] using standard serializations including Turtle and RDF/XML. The [[SPARQL]] endpoint at `dbpedia.org/sparql` allows users to query the live dataset using the full expressiveness of [[SPARQL]] 1.1, including federated queries that join DBpedia data with other endpoints such as [[Wikidata]].

The DBpedia [[Ontology]] defines a class hierarchy rooted at `owl:Thing` and branching into domain-specific subtypes. This [[Ontology]] was built using [[OWL]] and aligns with concepts from schema.org and other vocabularies, improving interoperability across the [[Linked Data]] ecosystem.

## Relationship to Wikipedia and Wikidata

DBpedia extracts data from Wikipedia's semi-structured infoboxes using a mapping layer that translates Wikipedia templates to DBpedia [[Ontology]] properties. As Wikipedia evolves, DBpedia releases updated dataset dumps. [[Wikidata]] has increasingly taken on the role of canonical structured data source for Wikimedia projects, and modern DBpedia versions incorporate Wikidata identifiers as cross-references, linking the two [[Knowledge Graph|knowledge graphs]].

## Significance for Ontology Learning

Because DBpedia was constructed by mapping natural-language Wikipedia content to a formal [[Ontology]], it is a frequently used benchmark in ontology learning research. Studies in [[Ontology]] population, [[Class and Property|property]] extraction, and [[Inference and Reasoning|relation inference]] routinely evaluate methods against DBpedia's large, heterogeneous, real-world graph.

## See Also

- [[Knowledge Graph]]
- [[RDF]]
- [[SPARQL]]
- [[Linked Data]]
- [[Ontology]]
- [[Triple]]
- [[URI and IRI]]
- [[Wikidata]]
- [[OWL]]
- [[W3C]]
