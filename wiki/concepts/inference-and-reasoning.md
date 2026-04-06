# Inference and Reasoning

**Definition:** The process of deriving new facts, class memberships, or property assertions that are logically entailed by — but not explicitly stated in — an [[RDF]] graph, [[Ontology]], or [[Knowledge Graph]].

**Also known as:** Automated reasoning, ontological inference, entailment, deductive inference, logical inference.

## Overview

Inference is what distinguishes a semantically rich [[Knowledge Graph]] from a plain database. When you assert that `ex:fido rdf:type ex:Dog` and the [[Ontology]] states `ex:Dog rdfs:subClassOf ex:Mammal`, a reasoner can *infer* `ex:fido rdf:type ex:Mammal` without you ever writing that [[Triple]]. This derived fact is *entailed* — it follows necessarily from the axioms in the [[RDFS]] or [[OWL]] schema. Inference automates the propagation of such consequences across potentially millions of [[Triple|triples]] in a [[Knowledge Graph]].

The scope and computational cost of inference depend heavily on the expressive power of the [[Ontology]] language. [[RDFS]] inference is simple and cheap: it follows a small set of rules (subclass propagation, domain/range typing) and runs in polynomial time. [[OWL]] [[Description Logic]] inference is much richer but potentially expensive: it involves checking consistency, satisfiability, and class membership under the full SROIQ(D) logic (see [[Description Logic]]). Practical systems often choose an [[OWL]] profile — OWL EL, OWL QL, or OWL RL — that constrains the logic to a tractable subset while retaining useful expressivity. The ELK reasoner, for instance, handles OWL EL in polynomial time and is used for SNOMED CT, a clinical [[Ontology]] with hundreds of thousands of [[Class and Property|classes]].

A critical design principle in [[OWL]]-based reasoning is the **open-world assumption** (OWA), which contrasts sharply with the **closed-world assumption** (CWA) used in relational databases and most logic programming. This distinction has deep practical consequences for how [[Ontology|ontologies]] are designed and queried, and is one of the first conceptual hurdles for practitioners moving from SQL or Prolog to [[OWL]] and [[SPARQL]].

## Key Properties

- **Entailment regimes:** RDFS, OWL Direct Semantics, OWL RL, RIF; define what a compliant reasoner must derive
- **Classification:** ordering all [[Class and Property|classes]] in the [[Ontology]] by subsumption (`rdfs:subClassOf` hierarchy)
- **Realisation:** assigning each individual to its most specific inferred classes
- **Consistency checking:** detecting logical contradictions in the [[Ontology]] (e.g., an individual that is both `Cat` and `Dog` when those classes are declared `owl:disjointWith`)
- **Conjunctive query answering:** answering [[SPARQL]]-style queries under an entailment regime, including inferred facts
- **Rule-based inference:** using rule languages (SWRL, RIF, Datalog) to express inference patterns beyond what [[OWL]] axioms can capture

## Open-World vs Closed-World Assumption

The **closed-world assumption** (CWA) — used in SQL, Prolog, and SHACL validation — says: *if something is not known to be true, it is false*. A SQL query for employees earning over $100k returns only those with explicit salary records exceeding that value; absence of a record means the salary is not over $100k.

The **open-world assumption** (OWA) — used in [[OWL]] reasoning — says: *if something is not known to be true, it may still be true*. The [[Ontology]] is an incomplete description of the world. A reasoner will never conclude that `ex:alice` does *not* have a child simply because no `ex:hasChild` [[Triple]] for Alice appears in the [[RDF]] graph. This makes [[OWL]] unsuitable for integrity constraint checking (where you *want* closed-world behaviour) — that role belongs to [[SHACL]], which explicitly adopts a closed-world stance over the data graph.

| | Open World (OWL/RDFS) | Closed World (SQL/SHACL) |
|---|---|---|
| Missing fact means | "Unknown" | "False" |
| Use case | Incomplete knowledge bases | Data validation, querying known data |
| Example | Alice *may* have children (no assertion) | Alice has *no* children (no record) |

## Forward and Backward Chaining

**Forward chaining** (also called *data-driven* reasoning) applies all applicable inference rules to the current fact base, generating new facts, until no new facts can be derived. The result is the complete **materialized closure** of the [[RDF]] graph under the entailment regime. This approach is used by triple stores that pre-compute inferred triples and store them alongside asserted [[Triple|triples]]. Queries then run against the enriched graph without invoking the reasoner at query time — fast for reads, expensive on ingestion.

**Backward chaining** (also called *goal-driven* reasoning) starts from a query goal and works backwards, seeking facts that would satisfy it. This is the approach used by Prolog and some [[SPARQL]] entailment engines. It avoids materialising all inferences upfront but may re-derive the same facts repeatedly.

**Tableau algorithms** are the dominant approach for [[Description Logic]] reasoning. They systematically attempt to construct a *model* of the [[Ontology]] — a concrete world satisfying all axioms — by expanding a tree of constraints. If no consistent model can be found, the [[Ontology]] is inconsistent. HermiT, Pellet, and FaCT++ all implement tableau-based procedures for OWL 2 DL (SROIQ(D)).

## Entailment in RDFS

[[RDFS]] defines thirteen entailment rules. A subset of the most important:

```
# If C rdfs:subClassOf D, and x rdf:type C, then x rdf:type D
?x rdf:type ?C .
?C rdfs:subClassOf ?D .
=> ?x rdf:type ?D .

# If P rdfs:domain C, and x P y, then x rdf:type C
?x ?P ?y .
?P rdfs:domain ?C .
=> ?x rdf:type ?C .

# If P rdfs:range C, and x P y, then y rdf:type C
?x ?P ?y .
?P rdfs:range ?C .
=> ?y rdf:type ?C .

# Transitivity of rdfs:subClassOf
?A rdfs:subClassOf ?B .
?B rdfs:subClassOf ?C .
=> ?A rdfs:subClassOf ?C .
```

These rules are the basis of [[RDFS]] inference support in triple stores. [[SPARQL]] queries against an [[RDFS]]-entailment-aware endpoint will see the derived [[Triple|triples]] as if they were asserted.

## OWL Reasoning Example

Given the [[OWL]] [[Ontology]]:

```manchester
# Class axioms (TBox)
Parent EquivalentTo: Person and (hasChild some Person)
GrandParent EquivalentTo: Person and (hasChild some Parent)
Dog DisjointWith: Cat
```

And the instance data (ABox):

```turtle
ex:alice  ex:hasChild ex:bob .
ex:bob    ex:hasChild ex:carol .
ex:alice  a ex:Person .
ex:bob    a ex:Person .
ex:carol  a ex:Person .
```

A [[Description Logic]] reasoner will infer:
- `ex:bob rdf:type ex:Parent` (because bob has a child who is a Person)
- `ex:alice rdf:type ex:Parent` (because alice has a child who is a Person — bob)
- `ex:alice rdf:type ex:GrandParent` (because alice has a child who is a Parent — bob)

No explicit `rdf:type` assertions for `Parent` or `GrandParent` were needed. A [[SPARQL]] query under OWL Direct Semantics entailment would return these individuals in a `?x rdf:type ex:GrandParent` pattern.

## Reasoner Implementations

- **HermiT** — tableau OWL 2 DL reasoner; integrated in Protégé; supports full SROIQ(D)
- **Pellet / Openllet** — OWL 2 DL with SPARQL-DL, incremental reasoning, and explanation
- **FaCT++** — tableau reasoner for SROIQ; widely used in benchmarks
- **ELK** — concurrent, polynomial-time OWL EL reasoner; handles very large [[Ontology|ontologies]]
- **Apache Jena Rules** — forward-chaining rule engine for [[RDFS]] and custom rules over [[RDF]] graphs

## Relationships

- **Is-a:** Core function of [[Ontology]]-based [[Knowledge Graph]] systems
- **Has-part:** Forward chaining, backward chaining, tableau algorithms, entailment rules, materialisation
- **Related:** [[OWL]], [[Description Logic]], [[RDFS]], [[Ontology]], [[Knowledge Graph]], [[Triple]], [[SPARQL]], [[SHACL]]
- **Used-by:** Semantic reasoners (HermiT, Pellet, ELK); triple stores with entailment regimes (GraphDB, Stardog); biomedical [[Knowledge Graph|knowledge graphs]]; enterprise [[Ontology]] management

## Sources

- [needs-source]

## See Also

- [[OWL]]
- [[Description Logic]]
- [[RDFS]]
- [[Ontology]]
- [[Knowledge Graph]]
- [[Triple]]
- [[SPARQL]]
- [[SHACL]]
- [[Class and Property]]
