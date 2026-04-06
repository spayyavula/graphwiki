# OWL vs. RDFS

Both [[OWL]] and [[RDFS]] are [[W3C]] standards for defining vocabularies and schemas over [[RDF]] data. They occupy different positions on the expressiveness spectrum, and choosing between them shapes everything from reasoning complexity to tooling requirements.

## Comparison Table

| Dimension | [[RDFS]] | [[OWL]] DL |
|---|---|---|
| Full name | RDF Schema | Web Ontology Language |
| W3C standard year | 2004 (rev. 2014) | 2004 (OWL 2 in 2009) |
| Logical foundation | Subset of first-order logic | [[Description Logic]] (SROIQ) |
| Class hierarchy | `rdfs:subClassOf` | `rdfs:subClassOf` + equivalence, disjointness |
| Property hierarchy | `rdfs:subPropertyOf` | Richer: inverse, transitive, symmetric, functional |
| Restrictions | Domain and range only | Cardinality, existential, universal, hasValue |
| [[Inference and Reasoning\|Reasoning]] complexity | Polynomial (low cost) | Decidable but ExpTime-complete (high cost) |
| Open World Assumption | Yes | Yes |
| Typical reasoners | Any RDFS-aware triple store | HermiT, Pellet, FaCT++, ELK |
| Tooling (e.g. [[Protege]]) | Supported | Fully supported |

## RDFS: Lightweight Schema Layer

[[RDFS]] extends [[RDF]] with a small set of vocabulary terms for describing classes and [[Class and Property|properties]]. The core constructs are `rdfs:subClassOf`, `rdfs:subPropertyOf`, `rdfs:domain`, and `rdfs:range`. An RDFS reasoner can infer that if `Dog rdfs:subClassOf Animal`, then any instance of `Dog` is also an instance of `Animal`.

RDFS reasoning is fast and scales to very large datasets. Most triple stores and graph databases implement RDFS inference natively. Its simplicity makes it a good choice for lightweight data integration tasks where you need a shared vocabulary without the overhead of full [[Description Logic]] reasoning.

## OWL: Full Ontology Language

[[OWL]] builds on [[RDFS]] and [[RDF]] to provide a much richer language grounded in [[Description Logic]]. OWL adds the ability to declare classes as equivalent or disjoint, define properties as inverse or transitive, assert cardinality restrictions (e.g., "every Person has exactly two biological parents"), and construct complex class expressions using set operators (union, intersection, complement).

OWL 2 introduced three tractable profiles — OWL EL, OWL QL, and OWL RL — that trade some expressiveness for dramatically better reasoning performance. This makes [[OWL]] applicable even to very large biomedical ontologies like SNOMED CT and Gene Ontology.

[[Protege]] is the standard tool for authoring OWL ontologies. It integrates directly with reasoners like HermiT and Pellet to provide real-time [[Inference and Reasoning|consistency checking and classification]].

## When to Use Which

**Use [[RDFS]] when:**
- You need a simple shared vocabulary for a dataset
- Reasoning speed and scalability are priorities
- The domain does not require complex constraints or disjointness

**Use [[OWL]] when:**
- You need to express complex domain constraints formally
- [[Inference and Reasoning|Automated reasoning]] is a core requirement (e.g., classifying individuals, detecting inconsistencies)
- You are building a reusable [[Ontology]] for a specific domain

## See Also

- [[OWL]]
- [[RDFS]]
- [[RDF]]
- [[Description Logic]]
- [[Class and Property]]
- [[Inference and Reasoning]]
- [[Protege]]
- [[W3C]]
- [[Triple]]
