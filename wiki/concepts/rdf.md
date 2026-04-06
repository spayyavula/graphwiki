# RDF

**Definition:** The Resource Description Framework — a W3C standard data model for representing information on the web as a graph of subject–predicate–object [[Triple|triples]].

**Also known as:** Resource Description Framework, RDF 1.1.

## Overview

RDF is the foundational data model of the [[Semantic Web]]. Developed by the W3C and first standardized in 1999 (with major revisions in 2004 and 2014), RDF provides a universal, graph-based way to express any statement about any resource. Every statement in RDF takes the form of a [[Triple]]: a subject (the thing being described), a predicate (the property or relationship), and an object (the value or related thing). For example: `(ex:Marie_Curie, schema:birthPlace, ex:Warsaw)`.

What makes RDF powerful for the web is its use of [[URI and IRI|URIs]] as identifiers for subjects, predicates, and object resources. Because URIs are global and dereferenceable, any two datasets that use the same URI for a concept are automatically talking about the same thing. This is what makes [[Linked Data]] possible: data published by different organizations can be merged and queried together without prior coordination, as long as they share vocabulary terms (predicates) defined by common [[Ontology|ontologies]] such as [[RDFS]], [[OWL]], or Schema.org.

RDF graphs are naturally combinable. You can merge two RDF graphs by taking the union of their [[Triple|triples]] — something not possible with relational tables without knowing the schema in advance. This composability, combined with the expressivity of [[OWL]] axioms layered on top of RDF, makes RDF the backbone of large-scale [[Knowledge Graph]] initiatives such as Wikidata and DBpedia. The standard query language for RDF is [[SPARQL]], which allows selecting, filtering, and aggregating over triple patterns.

## Key Properties

- **Graph-based:** An RDF dataset is a directed, labeled multigraph.
- **URI-identified:** Subjects and predicates must be [[URI and IRI|IRIs]]; objects can be IRIs, literals, or blank nodes.
- **Interoperable:** Shared vocabularies allow merging datasets from different sources.
- **Extensible:** RDF is the substrate on which [[RDFS]], [[OWL]], and [[SPARQL]] are built.
- **Open-world:** No [[Triple]] is assumed false just because it is absent from the dataset.

## Serialization Formats

RDF is a data model, not a file format. The same graph can be serialized in several syntaxes:

- **Turtle (.ttl):** Human-friendly, compact prefix notation. The preferred format for hand-authoring.
- **N-Triples (.nt):** One triple per line, no prefixes. Easy to stream and diff.
- **JSON-LD (.jsonld):** RDF expressed as JSON with a `@context` block. Friendly for web developers and APIs.
- **RDF/XML (.rdf):** The original serialization, verbose but widely supported.
- **TriG / N-Quads:** Extensions of Turtle and N-Triples that support named graphs (adding a fourth element — the graph name — to each statement).

## Turtle Syntax Examples

Declaring a resource with multiple properties using `;` shorthand:

```turtle
@prefix ex:     <http://example.org/> .
@prefix schema: <https://schema.org/> .
@prefix xsd:    <http://www.w3.org/2001/XMLSchema#> .

ex:Marie_Curie
    a schema:Person ;
    schema:name "Marie Curie"@en ;
    schema:birthDate "1867-11-07"^^xsd:date ;
    schema:birthPlace ex:Warsaw ;
    ex:fieldOfStudy ex:Physics , ex:Chemistry .
```

The `a` keyword is shorthand for `rdf:type`. The `^^xsd:date` suffix is a datatype annotation. The `@en` tag marks the string as English.

## Blank Nodes

Not every node in an RDF graph needs a global [[URI and IRI|URI]]. Blank nodes (written `_:label` in Turtle) are locally-scoped anonymous resources, useful when an intermediate entity has no natural identifier. However, blank nodes complicate merging and querying, so they should be used sparingly.

## Relationships

- **Is-a:** Data model, W3C standard, graph model
- **Has-part:** [[Triple]], [[URI and IRI]], literals, blank nodes
- **Related:** [[RDFS]], [[OWL]], [[SPARQL]], [[Linked Data]], [[Semantic Web]], [[Knowledge Graph]]
- **Used-by:** Wikidata, DBpedia, Schema.org, biomedical ontologies, library cataloging (BIBFRAME)

## Examples

The same fact in three serialization formats:

```turtle
# Turtle
ex:Paris a ex:City ; ex:locatedIn ex:France .
```

```json
// JSON-LD
{
  "@context": {"ex": "http://example.org/"},
  "@id": "ex:Paris",
  "@type": "ex:City",
  "ex:locatedIn": {"@id": "ex:France"}
}
```

```ntriples
# N-Triples
<http://example.org/Paris> <http://www.w3.org/1999/02/22-rdf-syntax-ns#type> <http://example.org/City> .
<http://example.org/Paris> <http://example.org/locatedIn> <http://example.org/France> .
```

## Sources

- [needs-source]

## See Also

- [[Triple]]
- [[URI and IRI]]
- [[RDFS]]
- [[OWL]]
- [[SPARQL]]
- [[Linked Data]]
- [[Semantic Web]]
- [[Knowledge Graph]]
