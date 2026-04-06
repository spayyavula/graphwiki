# URI and IRI

**Definition:** Uniform Resource Identifiers (URIs) and Internationalized Resource Identifiers (IRIs) are globally unique strings used to identify resources — the naming backbone of the [[Semantic Web]] and [[RDF]].

**Also known as:** URI, URL, URN, IRI, web identifier, resource identifier.

## Overview

In the [[Semantic Web]] and [[RDF]] world, every meaningful thing must have a name that is globally unique and persistent. URIs serve this role. A URI like `https://schema.org/Person` unambiguously identifies the class "Person" as defined by Schema.org — any dataset that uses this URI as a type is referring to exactly that concept, not some locally defined homonym. This global naming is what makes [[Linked Data]] work: disparate datasets can be merged meaningfully because they share common identifiers.

A URI (Uniform Resource Identifier) is the general category. URLs (Uniform Resource Locators) are URIs that also specify how to retrieve the resource — typically via HTTP. URNs (Uniform Resource Names) are URIs that name resources persistently without implying retrieval (e.g., `urn:isbn:9780521865715`). In the [[Semantic Web]], HTTP URIs are strongly preferred over URNs because they are dereferenceable: following the link returns useful information about the resource, a principle called the "follow your nose" design of [[Linked Data]].

An IRI (Internationalized Resource Identifier) is the Unicode generalization of the ASCII-only URI. IRIs allow non-ASCII characters directly in the identifier string — for example, Wikidata uses IRIs that include characters from many scripts. In [[RDF]] 1.1, IRIs are the official identifier type; the spec still colloquially uses "URI" in many contexts, and the two terms are often used interchangeably in practice.

## Namespaces and Prefixes

Because [[RDF]] URIs tend to be long, both [[RDF]] serializations and [[SPARQL]] support prefix declarations that abbreviate common base URIs:

```turtle
@prefix rdf:    <http://www.w3.org/1999/02/22-rdf-syntax-ns#> .
@prefix rdfs:   <http://www.w3.org/2000/01/rdf-schema#> .
@prefix owl:    <http://www.w3.org/2002/07/owl#> .
@prefix xsd:    <http://www.w3.org/2001/XMLSchema#> .
@prefix schema: <https://schema.org/> .
@prefix ex:     <http://example.org/> .

ex:Alice a schema:Person ;
    schema:name "Alice" .
```

After declaring `@prefix schema: <https://schema.org/>`, writing `schema:Person` is equivalent to the full IRI `<https://schema.org/Person>`. The angle-bracket form (`<...>`) is always valid for absolute IRIs when no prefix is declared.

## Blank Nodes

Not every node in an [[RDF]] graph needs a global identifier. Blank nodes (bnode, written `_:label` in Turtle) are locally-scoped anonymous resources. They are useful for intermediate structures that have no natural global name:

```turtle
ex:Alice ex:hasAddress _:addr1 .
_:addr1 ex:street "123 Main St" ;
        ex:city   ex:Springfield .
```

Here `_:addr1` is an anonymous address node. Blank nodes cannot be referenced from outside the document and complicate federated querying; best practice is to mint a URI for entities that matter across dataset boundaries.

## URI Design Principles

Good URI design for [[Linked Data]] follows several conventions:

- **Persistent:** The URI should not change when the underlying system changes. Use domain names you control long-term.
- **Opaque:** The URI should not embed implementation details (database row IDs, internal codes) that might change.
- **Dereferenceable:** An HTTP GET on the URI should return a useful description of the resource (HTML for browsers, [[RDF]] for machines — this is called content negotiation).
- **Distinct from document URIs:** Use hash URIs (`#`) or 303-redirect patterns to distinguish the resource (e.g., a person) from the document describing it.

## Relationships

- **Is-a:** Web identifier, string, resource name
- **Has-part:** Scheme, authority, path, query, fragment; namespace prefix (abbreviated form)
- **Related:** [[RDF]], [[Triple]], [[Linked Data]], [[Semantic Web]], blank nodes
- **Used-by:** Every [[RDF]] triple, [[SPARQL]] queries, [[OWL]] ontologies, [[Knowledge Graph]] entity identifiers

## Examples

Common URI patterns in the wild:

```
# Schema.org vocabulary term:
https://schema.org/Person

# Wikidata entity (Marie Curie):
https://www.wikidata.org/entity/Q7186

# DBpedia resource:
http://dbpedia.org/resource/Marie_Curie

# OWL ontology URI:
http://www.w3.org/2002/07/owl#Class

# A hash URI for a named individual in a local ontology:
http://example.org/ontology#Alice
```

In [[SPARQL]]:

```sparql
PREFIX schema: <https://schema.org/>
SELECT ?name WHERE {
    <https://www.wikidata.org/entity/Q7186> schema:name ?name .
}
```

## Sources

- [needs-source]

## See Also

- [[RDF]]
- [[Triple]]
- [[Linked Data]]
- [[Semantic Web]]
- [[SPARQL]]
- [[Ontology]]
