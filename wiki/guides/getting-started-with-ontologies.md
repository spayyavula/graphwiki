# Getting Started with Ontologies

A beginner's learning path for ontology engineering, from foundational concepts to hands-on tooling.

## Why Learn Ontologies?

[[Ontology|Ontologies]] are the formal backbone of [[Knowledge Graph|knowledge graphs]], [[Semantic Web]] applications, and increasingly of AI systems that need structured world knowledge. Whether you are building a domain [[Ontology]] for a healthcare system, integrating heterogeneous enterprise data, or contributing to open [[Linked Data]] projects like [[Wikidata]] or [[DBpedia]], ontology skills are the differentiator between ad-hoc data models and principled, reusable knowledge representations.

## Learning Path

Follow these stages in order. Each stage builds on the previous.

### Stage 1 — Core Data Model (Week 1)

Start with [[RDF]]. Understand what a [[Triple]] is: a subject, predicate, and object where each term is either a [[URI and IRI|URI]] or a literal. Practice writing triples by hand in Turtle syntax. Understand why [[URI and IRI|URIs]] matter for global uniqueness and [[Linked Data]] interoperability.

Key concepts to study:
- [[Triple]] — the atomic unit of RDF knowledge
- [[URI and IRI]] — how resources are named
- [[RDF]] — the data model itself
- Turtle, N-Triples, JSON-LD — serialization formats

### Stage 2 — Schema and Vocabulary (Week 2)

Move to [[RDFS]]. Learn how `rdfs:subClassOf` and `rdfs:subPropertyOf` create class hierarchies. Understand how domain and range declarations constrain [[Class and Property|properties]]. Experiment with [[Inference and Reasoning|basic inference]]: what does an RDFS reasoner derive automatically?

Key concepts:
- [[RDFS]] — lightweight schema layer over RDF
- [[Class and Property]] — the building blocks of any ontology
- [[Inference and Reasoning]] — how reasoners derive implicit knowledge

### Stage 3 — Full Ontology Language (Weeks 3–4)

Study [[OWL]]. Understand how it extends [[RDFS]] with [[Description Logic]] constructs: class restrictions, disjointness, cardinality, property characteristics. Read about the difference between OWL Lite, OWL DL, and OWL Full. Compare [[OWL]] and [[RDFS]] side by side — see [[owl-vs-rdfs]] for a structured comparison.

Key concepts:
- [[OWL]] — the full ontology language
- [[Description Logic]] — the formal underpinning of OWL DL
- [[Inference and Reasoning]] — consistency checking, classification
- [[Ontology vs Taxonomy]] — clarify what an ontology adds over a simple hierarchy

### Stage 4 — Tooling (Week 5)

Install [[Protege]] (free, open-source). Open the Protege Pizza Tutorial ontology — it is the canonical beginner exercise. Build your first ontology using the class hierarchy editor. Run the HermiT reasoner inside Protege and observe what it classifies automatically.

Key tools:
- [[Protege]] — the standard ontology editor
- HermiT, Pellet — OWL reasoners integrated into Protege

### Stage 5 — Querying (Week 6)

Learn [[SPARQL]]. Write SELECT queries against public endpoints like the [[Wikidata]] Query Service. Progress to CONSTRUCT queries that produce new RDF graphs from existing data. Run the SPARQL tab inside [[Protege]] against your own ontology.

Key concept:
- [[SPARQL]] — the query language for RDF data

### Stage 6 — Real-World Knowledge Graphs (Week 7+)

Explore [[Wikidata]] and [[DBpedia]] as examples of large-scale [[Knowledge Graph|knowledge graphs]] built on [[RDF]]. Study how they use [[OWL]] and [[RDFS]] for their schemas. Read about [[SHACL]] for data validation.

## First Exercise: Model a University Domain

A classic starter exercise is modeling a university. Try to represent:

- **Classes:** `University`, `Department`, `Course`, `Student`, `Professor`
- **Properties:** `enrolledIn` (Student → Course), `taughtBy` (Course → Professor), `partOf` (Department → University)
- **Restrictions:** Every `Course` must be `taughtBy` at least one `Professor`
- **Individuals:** Add specific instances and run a reasoner in [[Protege]] to classify them

This exercise touches [[Class and Property]], [[Inference and Reasoning]], and the full [[OWL]] authoring workflow in one compact domain.

## Recommended Resources

- W3C RDF Primer (official, free) — [[W3C]]
- Protege Getting Started Guide — [[Protege]]
- Wikidata Query Service (live SPARQL practice) — [[Wikidata]]
- Your First RDF Graph (hands-on guide in this wiki) — [[your-first-rdf-graph]]

## See Also

- [[RDF]]
- [[OWL]]
- [[RDFS]]
- [[SPARQL]]
- [[Triple]]
- [[URI and IRI]]
- [[Class and Property]]
- [[Inference and Reasoning]]
- [[Description Logic]]
- [[Ontology]]
- [[Knowledge Graph]]
- [[Protege]]
- [[Wikidata]]
- [[DBpedia]]
- [[W3C]]
