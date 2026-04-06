# RDF Schema (RDFS)

**Definition:** A semantic extension of [[RDF]] that provides a vocabulary for describing classes, properties, and their relationships in an [[Ontology]].

**Also known as:** RDFS, RDF Schema, RDF Vocabulary Description Language.

## Overview

RDF Schema builds directly on top of [[RDF]] by adding a layer of vocabulary that lets you describe the structure and meaning of your data, not just the data itself. While [[RDF]] gives you [[Triple|triples]] to make statements about resources, RDFS gives you the vocabulary to say what *kinds* of things those resources are and what *kinds* of relationships connect them.

Think of RDFS as a lightweight schema language. If [[RDF]] is the raw assertion layer, RDFS is the first rung of semantic structure — it introduces concepts like classes and subclass hierarchies, property domains and ranges, and human-readable labels. It sits below [[OWL]] in expressive power but is far simpler and more universally supported. Many [[Knowledge Graph]] deployments use RDFS as their primary schema layer when full [[OWL]] reasoning is unnecessary.

RDFS is defined in the `rdfs:` namespace (`http://www.w3.org/2000/01/rdf-schema#`) and is itself expressed as [[RDF]] triples, which means any [[RDF]] parser can read it without special tooling. This bootstrapping property — using [[RDF]] to describe [[RDF]] vocabularies — is one of the elegant design choices that makes the Semantic Web stack coherent. [[Inference and Reasoning]] engines can use RDFS axioms to derive implicit facts, such as inferring that an individual belongs to a superclass because it belongs to a declared subclass.

## Key Properties

- **`rdfs:Class`** — Declares a resource as a class; analogous to a type or category. Every [[OWL]] class is also an `rdfs:Class`.
- **`rdfs:subClassOf`** — States that one class is a specialisation of another, enabling hierarchical [[Taxonomy|taxonomies]] of classes.
- **`rdfs:subPropertyOf`** — States that one [[Class and Property|property]] is a specialisation of another, inheriting its semantics.
- **`rdfs:domain`** — Declares that subjects of a [[Class and Property|property]] must belong to a given class.
- **`rdfs:range`** — Declares that objects of a [[Class and Property|property]] must belong to a given class or datatype.
- **`rdfs:label`** — Attaches a human-readable name to any resource; supports multiple languages via `@lang` tags.
- **`rdfs:comment`** — Attaches a free-text description to a resource.
- **`rdfs:seeAlso`** — Points to related resources with no formal semantic implication.
- **`rdfs:isDefinedBy`** — Links a resource to the [[Ontology]] that defines it.

## Relationships

- **Is-a:** Vocabulary layer built on [[RDF]]; a subset of the features provided by [[OWL]]
- **Has-part:** `rdfs:Class`, `rdfs:subClassOf`, `rdfs:domain`, `rdfs:range`, `rdfs:label`, `rdfs:comment`
- **Related:** [[OWL]], [[Ontology]], [[Taxonomy]], [[Description Logic]], [[Triple]]
- **Used-by:** [[SPARQL]] queries that pattern-match on class hierarchies; [[Inference and Reasoning]] engines that apply RDFS entailment rules; [[Linked Data]] vocabularies such as FOAF, Dublin Core, and Schema.org

## Examples

The following examples use Turtle syntax, a concise serialisation of [[RDF]] triples.

**Declaring a class hierarchy:**

```turtle
@prefix rdfs: <http://www.w3.org/2000/01/rdf-schema#> .
@prefix ex:   <http://example.org/> .

ex:Animal  a rdfs:Class ;
           rdfs:label "Animal"@en ;
           rdfs:comment "Any living organism that is not a plant."@en .

ex:Mammal  a rdfs:Class ;
           rdfs:subClassOf ex:Animal ;
           rdfs:label "Mammal"@en .

ex:Dog     a rdfs:Class ;
           rdfs:subClassOf ex:Mammal ;
           rdfs:label "Dog"@en .
```

**Declaring a property with domain and range:**

```turtle
ex:hasPet  a rdf:Property ;
           rdfs:domain ex:Person ;
           rdfs:range  ex:Animal ;
           rdfs:label  "has pet"@en .
```

Here, any [[Triple]] using `ex:hasPet` as its predicate implies that its subject is an `ex:Person` and its object is an `ex:Animal`. An [[Inference and Reasoning]] engine applying RDFS entailment rules will derive these type assertions automatically — even if they were never stated explicitly in the [[RDF]] graph.

**`rdfs:subPropertyOf` example:**

```turtle
ex:hasDog  a rdf:Property ;
           rdfs:subPropertyOf ex:hasPet ;
           rdfs:range ex:Dog .
```

Any fact stated with `ex:hasDog` is now also implicitly asserted with `ex:hasPet`, which is how [[Inference and Reasoning]] propagates through property hierarchies.

RDFS vocabulary is frequently combined with [[OWL]] when richer axioms — such as cardinality restrictions or disjointness — are needed. For validation of the resulting [[RDF]] graph, see [[SHACL]], which operates independently of entailment.

## Sources

- [needs-source]

## See Also

- [[RDF]]
- [[OWL]]
- [[Class and Property]]
- [[Triple]]
- [[Ontology]]
- [[Taxonomy]]
- [[SPARQL]]
- [[Inference and Reasoning]]
- [[SHACL]]
