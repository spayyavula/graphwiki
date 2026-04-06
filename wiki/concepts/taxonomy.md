# Taxonomy

**Definition:** A hierarchical classification system that organises concepts into a tree of parent-child (broader-narrower) relationships, typically using a single inheritance structure.

**Also known as:** Classification scheme, controlled vocabulary, subject hierarchy, thesaurus (partial overlap).

## Overview

A taxonomy is the simplest form of structured knowledge organisation: a tree in which every node (concept) has exactly one parent, except the root. The word comes from the Greek *taxis* (arrangement) and *nomos* (law). Taxonomies have been used for millennia — Aristotle's division of living things into genera and species is an early example — and remain the backbone of library catalogues, biological classification, e-commerce product categories, and enterprise content management systems.

Compared to an [[Ontology]], a taxonomy is deliberately constrained. It captures only one kind of relationship — the hierarchical "is a kind of" or `rdfs:subClassOf` link that [[RDFS]] and [[OWL]] also use — and says nothing about properties, cardinality restrictions, or cross-cutting relationships between branches. This simplicity is both a limitation and a strength: taxonomies are easy for non-specialists to understand, browse, and maintain. Many organisations start with a taxonomy and evolve it toward a richer [[Ontology]] as their modelling needs grow. The relationship between taxonomy and [[Ontology]] is therefore often developmental: a taxonomy is a proto-ontology, or an [[Ontology]] skeleton stripped of everything except the class hierarchy.

From a Semantic Web perspective, a taxonomy expressed in [[RDFS]] using `rdfs:subClassOf` can be queried with [[SPARQL]], navigated using property paths, and integrated into a [[Knowledge Graph]] as the backbone classification layer. Tools like SKOS (Simple Knowledge Organization System) provide an [[RDF]]-based vocabulary specifically designed for taxonomies and thesauri, adding concepts like `skos:broader`, `skos:narrower`, and `skos:related` that are less formal than [[OWL]] class axioms but sufficient for most classification use cases.

## Key Properties

- **Single inheritance:** each concept has at most one parent (contrasted with the multiple inheritance permitted in [[OWL]] and [[RDFS]] class hierarchies)
- **Transitive subsumption:** if B is a kind of A, and C is a kind of B, then C is also a kind of A — the same entailment as `rdfs:subClassOf` in [[Inference and Reasoning]]
- **No property definitions:** a pure taxonomy says nothing about the attributes or relationships of instances, unlike an [[Ontology]]
- **Controlled vocabulary:** every term has an authoritative label and a unique identifier, often a [[URI and IRI]]
- **Faceted taxonomies:** some systems allow multiple independent taxonomic axes (e.g., by material, by function, by audience) that together constitute a faceted classification

## Contrasting Taxonomy with Ontology

| Dimension | Taxonomy | [[Ontology]] |
|---|---|---|
| Relationship types | `is-a` only | `is-a`, `part-of`, `has-property`, arbitrary roles |
| Inheritance | Single | Multiple (in [[OWL]]/[[RDFS]]) |
| Property restrictions | None | Cardinality, domain/range via [[Class and Property]] |
| Reasoning support | Basic subsumption | Full [[Description Logic]] reasoning |
| Formalism | Informal to semi-formal | Formal (e.g., [[OWL]], [[RDFS]]) |
| Typical size | Thousands of terms | Hundreds to millions of axioms |

## Relationships

- **Is-a:** A restricted form of [[Ontology]]; a type of controlled vocabulary
- **Has-part:** Concept nodes, parent-child (broader-narrower) links, root concept, leaf concepts
- **Related:** [[Ontology]], [[Class and Property]], [[RDFS]], [[Knowledge Graph]], [[RDF]], [[Inference and Reasoning]]
- **Used-by:** Library classification (Dewey Decimal, Library of Congress Subject Headings); biological nomenclature (Linnaean taxonomy, NCBI Taxonomy); e-commerce product catalogs; enterprise information architecture; SKOS vocabularies in [[Linked Data]]

## Examples

### Linnaean biological taxonomy (informal)

```
Life
└── Animalia
    └── Chordata
        └── Mammalia
            └── Carnivora
                └── Canidae
                    └── Canis
                        └── Canis lupus familiaris  (domestic dog)
```

Each node is strictly more specific than its parent. A domestic dog *is a* Canis, *is a* Canidae, *is a* Mammalia, and so on up the tree.

### Expressed in [[RDFS]] (Turtle)

```turtle
@prefix rdfs: <http://www.w3.org/2000/01/rdf-schema#> .
@prefix tax:  <http://example.org/taxonomy/> .

tax:Animalia   a rdfs:Class ; rdfs:label "Animalia" .
tax:Mammalia   a rdfs:Class ; rdfs:subClassOf tax:Animalia ; rdfs:label "Mammalia" .
tax:Canidae    a rdfs:Class ; rdfs:subClassOf tax:Mammalia ; rdfs:label "Canidae" .
tax:Dog        a rdfs:Class ; rdfs:subClassOf tax:Canidae  ; rdfs:label "Dog" .
```

An [[Inference and Reasoning]] engine applying [[RDFS]] entailment rules will automatically derive that `tax:Dog rdfs:subClassOf tax:Animalia`, even though that triple was never stated explicitly.

### SKOS taxonomy (Turtle)

```turtle
@prefix skos: <http://www.w3.org/2004/02/skos/core#> .
@prefix lib:  <http://example.org/library/> .

lib:Science      a skos:Concept ; skos:prefLabel "Science"@en .
lib:Biology      a skos:Concept ; skos:prefLabel "Biology"@en ;
                 skos:broader lib:Science .
lib:Zoology      a skos:Concept ; skos:prefLabel "Zoology"@en ;
                 skos:broader lib:Biology .
```

SKOS `skos:broader` is the standard [[RDF]] predicate for expressing taxonomic hierarchy in [[Linked Data]] and [[Knowledge Graph]] publishing contexts.

### Library of Congress Subject Headings (excerpt)

```
Technology
└── Engineering
    └── Civil engineering
        └── Bridge engineering
            └── Suspension bridges
```

Each heading is a unique, curated term assigned to library resources — a classic [[Knowledge Graph]] node with a canonical [[URI and IRI]].

## Sources

- [needs-source]

## See Also

- [[Ontology]]
- [[Class and Property]]
- [[RDFS]]
- [[RDF]]
- [[Knowledge Graph]]
- [[Inference and Reasoning]]
- [[Linked Data]]
- [[OWL]]
