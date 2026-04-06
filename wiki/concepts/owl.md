# OWL

**Definition:** The Web Ontology Language — a W3C standard for authoring rich, formal [[Ontology|ontologies]] on the [[Semantic Web]], built on top of [[RDF]] and grounded in [[Description Logic]].

**Also known as:** OWL 2, Web Ontology Language, DAML+OIL (predecessor).

## Overview

OWL is the language of choice when you need to express not just what things exist, but what must be true about them and what can be inferred from those truths. Where [[RDF]] lets you assert facts and [[RDFS]] lets you declare basic class hierarchies, OWL gives you a full logical vocabulary: disjoint classes, cardinality constraints, inverse properties, transitive relationships, and more. All of this expressivity is grounded in [[Description Logic]], which guarantees that automated reasoning is both sound (everything inferred is true) and, for appropriate OWL profiles, decidable (the reasoner always terminates).

OWL 1 was standardized by the W3C in 2004. OWL 2, which introduced new profiles and extended the property axiom vocabulary, was published in 2009. OWL 2 is the current standard. Every OWL ontology is also a valid [[RDF]] graph — OWL constructs are expressed using specific RDF predicates in the `owl:` namespace, making OWL ontologies storable in any [[RDF]] triplestore and queryable with [[SPARQL]].

The practical use of OWL spans biomedical ontologies (SNOMED CT, the Gene Ontology in OWL form, the Human Phenotype Ontology), enterprise data integration, and ontology-driven [[Knowledge Graph]] construction. OWL works closely with [[SHACL]] — while OWL defines what can be inferred (open-world reasoning), SHACL defines what data shapes must be conformed to (closed-world validation). The two are complementary.

## Key Properties

- **Expressive:** Supports class definitions, property restrictions, cardinality, disjointness, inverse and transitive properties.
- **Grounded in [[Description Logic]]:** Ensures formal semantics and tractable reasoning for appropriate profiles.
- **RDF-compatible:** An OWL ontology serializes as [[RDF]] [[Triple|triples]].
- **Open-world assumption:** Absence of information is not treated as falsehood — unlike databases.
- **Supports [[Inference and Reasoning]]:** OWL reasoners (HermiT, Pellet, ELK) can classify ontologies and check consistency.

## OWL Profiles

OWL 2 defines several profiles trading off expressivity against computational complexity:

| Profile | Logic fragment | Reasoning complexity | Best for |
|---|---|---|---|
| OWL 2 Full | Full OWL | Undecidable | Maximum expressivity, no guarantees |
| OWL 2 DL | SROIQ(D) | ExpTime-complete | Standard use; decidable |
| OWL 2 EL | EL++ | PTime | Large biomedical ontologies (SNOMED CT) |
| OWL 2 QL | DL-Lite | NLogSpace | Query rewriting over relational databases |
| OWL 2 RL | Description Logic Programs | PTime | Rule-based reasoning over [[RDF]] data |

Earlier OWL 1 had three species: OWL Lite (simple hierarchies and constraints), OWL DL (full [[Description Logic]], decidable), and OWL Full (no computational guarantees).

## Key OWL Constructs

- `owl:Class` — declares a class (analogous to a type in an [[Ontology]])
- `owl:ObjectProperty` — a property whose range is an individual (a [[URI and IRI|URI]])
- `owl:DatatypeProperty` — a property whose range is a literal (string, integer, date, etc.)
- `owl:subClassOf` — class subsumption (inherits from [[RDFS]])
- `owl:equivalentClass` — two class expressions define exactly the same set of individuals
- `owl:disjointWith` — no individual can belong to both classes
- `owl:inverseOf` — relates two properties as inverses
- `owl:TransitiveProperty` — if A→B and B→C then A→C
- `owl:Restriction` — constrains a class by a property (e.g., `worksFor exactly 1 Organization`)

## Manchester Syntax Examples

Manchester Syntax is a human-friendly surface notation for OWL, commonly used in tools like Protégé:

```manchester
Class: Researcher
  SubClassOf: Person
  SubClassOf: affiliatedWith some Organization

Class: Professor
  SubClassOf: Researcher
  SubClassOf: teaches min 1 Course

Class: EmeritusProfessor
  EquivalentTo: Professor and (retiredFrom some University)

ObjectProperty: teaches
  Domain: Instructor
  Range: Course

ObjectProperty: supervisedBy
  InverseOf: supervises
  Domain: PhDStudent
  Range: Professor
```

These axioms allow an OWL reasoner to automatically classify any individual declared as a `Professor` as also being a `Researcher` and a `Person`, and to flag inconsistencies if someone is declared to belong to two disjoint classes.

## Relationships

- **Is-a:** Knowledge representation language, W3C standard
- **Has-part:** Class axioms, property axioms, individual assertions, [[Description Logic]] constructors
- **Related:** [[RDF]], [[RDFS]], [[Description Logic]], [[Ontology]], [[Class and Property]], [[SHACL]], [[Inference and Reasoning]]
- **Used-by:** Protégé (ontology editor), HermiT/Pellet/ELK (reasoners), SNOMED CT, Gene Ontology, FIBO (financial ontology)

## Sources

- [needs-source]

## See Also

- [[RDF]]
- [[RDFS]]
- [[Description Logic]]
- [[Ontology]]
- [[Class and Property]]
- [[Inference and Reasoning]]
- [[SHACL]]
- [[SPARQL]]
