# Ontology

**Definition:** A formal, explicit specification of a shared conceptualization — a structured vocabulary of terms, their definitions, and the relationships between them within a domain.

**Also known as:** Formal ontology, domain ontology, conceptual model.

## Overview

The word "ontology" originates in philosophy, where it names the branch of metaphysics concerned with the nature of being and existence. In computer science and knowledge engineering, the term was deliberately borrowed to describe something more practical: a machine-readable model of what exists in a domain, and how those things relate to each other. When researchers talk about "an ontology" (with the indefinite article), they almost always mean the computational artifact, not the philosophical discipline.

A well-constructed ontology does several things at once. It defines the classes of things in a domain (e.g., `Person`, `Organization`, `Publication`), the properties that describe them (e.g., `hasName`, `foundedIn`), the relationships that connect them (e.g., `worksFor`, `authorOf`), and the axioms or rules that constrain how those pieces fit together. This formal structure is what distinguishes an ontology from a loose glossary or a simple [[Taxonomy]]: an ontology is designed to be processed by machines and to support [[Inference and Reasoning]].

Ontologies are foundational to the [[Semantic Web]] and to [[Knowledge Graph]] construction. Without a shared ontology, two systems cannot reliably exchange meaning — they can exchange strings, but not semantics. In practice, ontologies range from lightweight schemas (a handful of classes and properties) to sprawling formal systems like SNOMED CT in medicine or the Gene Ontology in biology.

## Key Properties

- **Explicit:** Every concept and relationship is named and defined unambiguously.
- **Formal:** Definitions use a logic-based language (often [[Description Logic]]) that admits automated reasoning.
- **Shared:** An ontology is intended to capture consensus understanding within a community, not an individual's private model.
- **Domain-scoped:** Most ontologies cover a specific subject area, though upper ontologies like DOLCE attempt broader coverage.
- **Reusable:** A well-designed ontology can be imported and extended by other ontologies.

## TBox and ABox

One of the most important structural distinctions in ontology engineering comes from [[Description Logic]]:

- **TBox (Terminological Box):** The schema layer — definitions of classes, properties, and axioms. Statements like "every `Professor` is a `Person`" live here. This is the ontology itself.
- **ABox (Assertional Box):** The data layer — assertions about specific individuals. Statements like "`ex:Alice` is a `Professor`" live here. In an [[RDF]] [[Knowledge Graph]], the ABox is usually the instance data.

The TBox and ABox together constitute a [[Knowledge Graph]]'s full knowledge base.

## Formal vs Informal Ontologies

Ontologies exist on a spectrum of expressivity:

- **Informal / lightweight:** Controlled vocabularies, thesauri, [[Taxonomy|taxonomies]] — useful for humans, limited machine reasoning.
- **Semi-formal:** [[RDFS]] schemas — support basic subclass/subproperty hierarchies and type inference.
- **Fully formal:** [[OWL]] ontologies — support rich axioms, disjointness, cardinality restrictions, inverse properties, and full automated reasoning via [[Description Logic]] reasoners.

## Relationships

- **Is-a:** Conceptual model, knowledge representation artifact
- **Has-part:** [[Class and Property]], [[Taxonomy]], axioms, individuals (instances)
- **Related:** [[Knowledge Graph]], [[Description Logic]], [[Inference and Reasoning]], [[RDFS]]
- **Used-by:** [[OWL]], [[RDF]], [[Semantic Web]] standards, biomedical informatics, enterprise data integration

## Examples

A minimal ontology fragment in [[OWL]] Manchester syntax:

```manchester
Class: Person
Class: Employee
  SubClassOf: Person
  SubClassOf: worksFor some Organization

ObjectProperty: worksFor
  Domain: Employee
  Range: Organization
```

The same fragment expressed as [[RDF]] [[Triple|triples]] in Turtle:

```turtle
@prefix owl: <http://www.w3.org/2002/07/owl#> .
@prefix ex:  <http://example.org/> .

ex:Employee rdfs:subClassOf ex:Person .
ex:worksFor rdfs:domain ex:Employee ;
            rdfs:range  ex:Organization .
```

Well-known public ontologies include: FOAF (Friend of a Friend), Dublin Core, Schema.org, Gene Ontology, and the OBO Foundry suite.

## Sources

- [needs-source]

## See Also

- [[Knowledge Graph]]
- [[Taxonomy]]
- [[OWL]]
- [[RDF]]
- [[RDFS]]
- [[Description Logic]]
- [[Class and Property]]
- [[Semantic Web]]
- [[Inference and Reasoning]]
