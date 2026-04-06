# Ontology vs. Taxonomy

A common source of confusion in knowledge representation is the distinction between an [[Ontology]] and a [[Taxonomy]]. Both organize concepts into hierarchies, but they differ substantially in expressiveness, formality, and intended use.

## Comparison Table

| Dimension | [[Taxonomy]] | [[Ontology]] |
|---|---|---|
| Primary structure | Strict tree (single parent) | Graph (multiple parents, complex relations) |
| Relation types | `is-a` only | `is-a`, `part-of`, custom [[Class and Property\|properties]], restrictions |
| Formal logic | None or minimal | [[Description Logic]] (in [[OWL]]) |
| [[Inference and Reasoning\|Reasoning]] support | No | Yes — reasoners can infer new facts |
| Standards | Often proprietary or SKOS | [[OWL]], [[RDFS]], [[RDF]] via [[W3C]] |
| Expressiveness | Low | High |
| Typical size | Hundreds to thousands of terms | Hundreds to millions of axioms |
| Learning curve | Low | Medium to high |

## What is a Taxonomy?

A [[Taxonomy]] is a hierarchical classification scheme where every concept has exactly one parent (except the root). Biological classification (Kingdom → Phylum → Class → Order → Family → Genus → Species) is the canonical example. Taxonomies are easy to build, easy to navigate, and sufficient when all you need is a browsable category structure.

In semantic technologies, taxonomies are often expressed using SKOS (Simple Knowledge Organization System), a [[W3C]] standard that sits between a flat controlled vocabulary and a full [[Ontology]]. SKOS uses [[RDFS]] and [[RDF]] but does not require [[OWL]] expressiveness.

## What is an Ontology?

An [[Ontology]] goes further by defining not just a class hierarchy but also the [[Class and Property|properties]] that relate classes to one another, the constraints those properties must satisfy, and the logical axioms that govern membership in a class. An [[OWL]] ontology can express that a `Vegetarian` is a `Person` who eats only food that is not `MeatProduct`, and a reasoner applying [[Description Logic]] can automatically classify individuals accordingly.

[[OWL]] and [[RDFS]] provide the standard languages for ontologies endorsed by [[W3C]]. [[RDFS]] offers a lightweight ontology layer (subclass, domain, range), while [[OWL]] adds disjointness, cardinality restrictions, property characteristics, and more.

## When to Use Which

**Use a taxonomy when:**
- You need a simple browsable hierarchy for navigation or faceted search
- Your team lacks ontology engineering expertise
- The domain changes rapidly and formal axioms would be brittle
- Integration with other knowledge bases is not required

**Use an ontology when:**
- You need [[Inference and Reasoning|automated reasoning]] to derive implicit facts
- Multiple inheritance and complex relationships are necessary
- You want to publish data as part of the [[Linked Data]] ecosystem
- Data from multiple sources must be formally aligned

## See Also

- [[Ontology]]
- [[Taxonomy]]
- [[OWL]]
- [[RDFS]]
- [[Class and Property]]
- [[Inference and Reasoning]]
- [[Description Logic]]
- [[W3C]]
