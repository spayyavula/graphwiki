# Knowledge Graph

**Definition:** A graph-structured knowledge base that represents real-world entities and the relationships between them, enabling both human understanding and machine reasoning.

**Also known as:** KG, semantic network, entity graph.

## Overview

A knowledge graph encodes facts as a network of nodes (entities) and edges (relationships). Each node represents a thing — a person, place, concept, or event — and each edge represents a named relationship between two things. This structure makes it possible to traverse, query, and reason over large bodies of interlinked information in ways that flat tables or documents cannot easily support. The core atomic unit is the [[Triple]]: a subject–predicate–object statement such as `(Marie Curie, bornIn, Warsaw)`.

The term "knowledge graph" entered mainstream technology vocabulary in 2012 when Google announced its Knowledge Graph feature, which powers the information panels on the right side of search results. But the ideas behind knowledge graphs are much older, rooted in the [[Semantic Web]] vision articulated by Tim Berners-Lee, and before that in semantic networks and frame-based knowledge representation from 1960s AI research. Today, major knowledge graphs include Wikidata (open, community-maintained), DBpedia (extracted from Wikipedia), Freebase (now folded into Wikidata), Google's proprietary graph, and the Microsoft Satori graph behind Bing.

The power of a knowledge graph goes beyond simple storage. When a graph is paired with an [[Ontology]] that defines classes, properties, and logical constraints, a reasoner can derive new facts that were never explicitly stated — a process called [[Inference and Reasoning]]. A graph might not explicitly say that Marie Curie is a scientist, but if it knows she was a professor of physics and the ontology says all physics professors are scientists, the reasoner can conclude it automatically.

## Key Properties

- **Entity-centric:** Information is organized around entities, each given a stable [[URI and IRI|URI]] identifier.
- **Schema-optional:** Many KGs operate with a loose or implicit schema, while others enforce a strict [[Ontology]].
- **Queryable:** [[SPARQL]] is the standard query language for RDF-based KGs; Cypher is common for property graphs.
- **Open-world assumption:** The absence of a fact does not mean it is false — there may simply be missing data.
- **Linkable:** KGs designed under [[Linked Data]] principles connect to other graphs via shared [[URI and IRI|URIs]].

## RDF Graphs vs Property Graphs

Knowledge graphs come in two main technical flavors:

- **RDF graphs:** Built from [[Triple|triples]], using [[RDF]] as the data model and [[URI and IRI|URIs]] as identifiers. Queryable with [[SPARQL]]. Can be annotated with [[OWL]] or [[RDFS]] schemas. Native format for the [[Semantic Web]]. Wikidata exports RDF; DBpedia is natively RDF.
- **Property graphs:** Nodes and edges can each carry arbitrary key-value properties directly on the edge or node, without reification. Used by databases such as Neo4j (Cypher query language) and Amazon Neptune. More ergonomic for certain traversal patterns; less interoperable by default.

The two models are converging: W3C's RDF-star extension allows attaching metadata to [[Triple|triples]] similarly to property graph edges.

## Relationships

- **Is-a:** Graph database, knowledge base, semantic network
- **Has-part:** [[Triple]], entities, relationships, [[Ontology]] (schema layer)
- **Related:** [[RDF]], [[SPARQL]], [[Linked Data]], [[URI and IRI]], [[Inference and Reasoning]], [[Ontology]]
- **Used-by:** Search engines (Google, Bing), question answering systems, recommendation engines, biomedical research

## Examples

A small RDF knowledge graph in Turtle syntax:

```turtle
@prefix ex:   <http://example.org/> .
@prefix schema: <https://schema.org/> .

ex:MarieCurie a schema:Person ;
    schema:name "Marie Curie" ;
    schema:birthPlace ex:Warsaw ;
    ex:wonAward ex:NobelPrizePhysics1903 ,
                ex:NobelPrizeChemistry1911 .

ex:Warsaw a schema:City ;
    schema:name "Warsaw" ;
    schema:containedInPlace ex:Poland .
```

This small fragment already forms a traversable graph: from Marie Curie you can reach Warsaw, which leads to Poland, and from there to any other entity linked to Poland.

## Sources

- [needs-source]

## See Also

- [[Ontology]]
- [[Triple]]
- [[RDF]]
- [[SPARQL]]
- [[Linked Data]]
- [[URI and IRI]]
- [[Inference and Reasoning]]
- [[Semantic Web]]
