# Description Logics

**Definition:** A family of formal knowledge representation languages used to describe and reason about the concepts, roles, and individuals of a domain, forming the logical foundation of [[OWL]].

**Also known as:** DL, Description Logic, Terminological Logics, Concept Languages.

## Overview

Description Logics (DLs) are a family of decidable fragments of first-order predicate logic designed specifically for representing structured knowledge. They were developed in the 1980s and 1990s as a formal, computationally tractable alternative to full first-order logic for [[Ontology]] modelling. Every major [[OWL]] species maps directly to a DL: [[OWL]] 2 DL corresponds to the logic SROIQ(D), while OWL EL, QL, and RL correspond to simpler DL profiles. Understanding DLs explains *why* [[OWL]] has the expressivity it does and *why* certain constructs are prohibited.

A DL knowledge base has two separable components. The **TBox** (Terminological Box) contains general statements about classes and [[Class and Property|properties]] — axioms like "every Dog is a Mammal" or "the owner of a pet is a Person". These are the schema-level facts analogous to what [[RDFS]] and [[OWL]] class axioms express. The **ABox** (Assertional Box) contains ground-level facts about named individuals — "Fido is a Dog" or "Fido is owned by Alice" — corresponding to instance data in an [[RDF]] graph.

[[Inference and Reasoning]] in DLs is performed by a **reasoner** — a software component that checks consistency, computes concept satisfiability, and classifies the [[Ontology]] hierarchy. Reasoners implement algorithms (most notably the **tableau algorithm**) that search for a model satisfying the knowledge base. Because DLs are decidable, reasoners are guaranteed to terminate, which is a key advantage over full first-order logic. The expressivity-tractability trade-off is the central design axis of the DL family: more expressive logics can represent richer knowledge but require more expensive reasoning algorithms.

## Key Properties

- **TBox axioms:** General class inclusions (`C ⊑ D`), equivalences (`C ≡ D`), and disjointness (`C ⊑ ¬D`)
- **ABox assertions:** Individual membership (`a : C`) and role assertions (`(a, b) : R`)
- **Constructors (vary by logic):** conjunction (`⊓`), disjunction (`⊔`), negation (`¬`), existential restriction (`∃R.C`), universal restriction (`∀R.C`), number restrictions (`≥ n R`, `≤ n R`)
- **Reasoning tasks:** concept satisfiability, subsumption (`C ⊑ D?`), consistency, instance checking, realisation
- **Decidability:** all standard DLs have decision procedures, unlike full FOL
- **Open-world assumption:** consistent with [[Inference and Reasoning]] in [[OWL]]; absence of a fact does not imply its negation

## DL Language Hierarchy

DLs are named using letter codes that indicate which constructors are available. The hierarchy from least to most expressive:

| Logic | Key Features | [[OWL]] Mapping |
|---|---|---|
| **AL** | Atomic negation, universal restriction | Base language |
| **ALC** | Full negation, disjunction | Roughly OWL Lite core |
| **SHIQ** | Role hierarchy (S), transitive roles (H), inverse roles (I), qualified number restrictions (Q) | OWL DL predecessor |
| **SHOIN(D)** | + nominals (O), concrete domains (D) | OWL 1 DL |
| **SROIQ(D)** | + role chains (R), reflexivity/irreflexivity, disjoint roles | [[OWL]] 2 DL |

The letters encode specific constructor sets: **S** = ALC with transitive roles, **H** = role hierarchy, **R** = complex role inclusions, **O** = nominals (enumerated classes), **I** = inverse roles, **Q** = qualified cardinality restrictions, **D** = concrete datatypes.

## DL Syntax Notation

DL has its own compact notation distinct from [[OWL]] Manchester syntax or [[RDF]] Turtle:

```
# Concept inclusion (TBox)
Dog ⊑ Animal                      -- every Dog is an Animal
Dog ⊑ ¬Cat                        -- Dogs and Cats are disjoint
Parent ≡ ∃hasChild.Person          -- A Parent is someone who has a child

# Qualified cardinality restriction
∃hasChild.⊤ ⊑ Parent              -- anything with a child is a Parent
Person ⊑ ≤1 hasBiologicalMother.Person  -- at most one biological mother

# ABox assertions
Dog(fido)                          -- fido is a Dog
hasOwner(fido, alice)              -- fido is owned by alice
Person(alice)                      -- alice is a Person
```

These axioms correspond to [[OWL]] class axioms and [[Class and Property|property]] restrictions, but the DL notation makes the logical structure explicit in a way that [[RDFS]] or Manchester syntax can obscure.

## TBox and ABox in Practice

In a running [[Ontology]], the TBox is usually defined once by ontology engineers — it captures the domain's conceptual structure. The ABox grows dynamically as instance data is loaded. A DL reasoner performs **classification** over the TBox (ordering all classes by subsumption) and **realisation** over the ABox (assigning each individual to its most specific classes). This separation also matters for [[Inference and Reasoning]] performance: TBox reasoning can be pre-computed and cached, while ABox queries are answered incrementally.

When combined with [[RDFS]] vocabularies in an [[OWL]] knowledge base, the TBox corresponds to the class/property definitions in the schema graph, and the ABox corresponds to the data graph of [[Triple|triples]] about individuals. [[SPARQL]] queries against such a knowledge base may activate entailment regimes that invoke a DL reasoner before returning results.

## Reasoner Implementations

- **HermiT** — tableau-based OWL 2 DL reasoner; highly expressive, used in Protégé
- **Pellet** — OWL 2 DL reasoner with explanation support; SPARQL-DL query answering
- **FaCT++** — tableau reasoner for SROIQ(D); historically influential
- **ELK** — optimised for OWL EL profile (polynomial-time reasoning); scales to very large [[Ontology|ontologies]] such as SNOMED CT
- **Openllet** — maintained fork of Pellet

## Relationships

- **Is-a:** Fragment of first-order logic; formal foundation for [[Ontology]] languages
- **Has-part:** TBox, ABox, concept constructors, role constructors, reasoning procedures
- **Related:** [[OWL]], [[Ontology]], [[Class and Property]], [[Inference and Reasoning]], [[RDFS]]
- **Used-by:** [[OWL]] specification; automated reasoners; [[Ontology]] design tools (Protégé); biomedical ontologies (SNOMED CT, Gene Ontology)

## Sources

- [needs-source]

## See Also

- [[OWL]]
- [[Ontology]]
- [[Inference and Reasoning]]
- [[Class and Property]]
- [[RDFS]]
- [[RDF]]
- [[Triple]]
- [[SPARQL]]
