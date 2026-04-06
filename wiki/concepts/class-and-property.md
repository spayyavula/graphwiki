# Classes and Properties

**Definition:** The fundamental building blocks of [[Ontology|ontologies]] — classes define sets of individuals sharing common characteristics, and properties define relationships between those individuals or between individuals and data values.

**Also known as:** Concepts and roles (in [[Description Logic]] terminology); types and predicates; RDFS classes and properties.

## Overview

Every [[Ontology]] is ultimately built from two kinds of things: **classes** and **properties**. Classes (also called *concepts* in [[Description Logic]]) define the categories of the domain — `Person`, `Organisation`, `Document`, `Disease`. Properties (called *roles* in DL) define how instances of those classes relate to each other or to literal values — `worksFor`, `hasTitle`, `diagnosedWith`. Together, classes and properties constitute the TBox of a [[Description Logic]] knowledge base: the schema layer that gives meaning to the [[Triple|triples]] in an [[RDF]] graph.

In [[RDFS]], classes are instances of `rdfs:Class` and properties are instances of `rdf:Property`. [[OWL]] refines this with `owl:Class` and adds two specialised property types: `owl:ObjectProperty` (relating individuals to individuals) and `owl:DatatypeProperty` (relating individuals to data values such as strings, integers, or dates). A third type, `owl:AnnotationProperty`, carries metadata (labels, comments, provenance) without formal semantic consequences. Understanding this distinction is essential when writing [[SPARQL]] queries, because object properties and datatype properties pattern-match differently in [[Triple]] structure.

Class hierarchies, property hierarchies, and the restrictions that connect them are what give an [[Ontology]] its expressive power. A class can be defined *intensionally* — by necessary and sufficient conditions — or *extensionally* — by enumeration of its members. [[OWL]] supports both via equivalence axioms and `owl:oneOf`. Property restrictions (`owl:someValuesFrom`, `owl:allValuesFrom`, `owl:hasValue`, `owl:cardinality`) further constrain what it means to be a member of a class, enabling an [[Inference and Reasoning|inference engine]] to classify individuals automatically based on their asserted facts rather than requiring explicit type declarations.

## Key Properties

- **`owl:Class`** — A set of individuals; defined by axioms in the [[Ontology]] TBox
- **`owl:ObjectProperty`** — A binary relation between two individuals (nodes in the [[RDF]] graph)
- **`owl:DatatypeProperty`** — A relation from an individual to a literal value (string, integer, date, etc.)
- **`owl:AnnotationProperty`** — Metadata carrier; no [[Inference and Reasoning]] consequences
- **`rdfs:subClassOf`** — Declares a class as a specialisation of another; the basis of [[Taxonomy|taxonomic]] hierarchies
- **`rdfs:subPropertyOf`** — Declares a property as a specialisation of another
- **`rdfs:domain`** and **`rdfs:range`** — Constrain the subject and object types of a property
- **`owl:equivalentClass`** — States two class expressions denote exactly the same set of individuals
- **`owl:disjointWith`** — States two classes share no instances — a fact no [[Triple]] can assert but a reasoner can exploit
- **`owl:inverseOf`** — Links two properties as inverses (if `a worksFor b` then `b employs a`)
- **Class restrictions:** `owl:someValuesFrom`, `owl:allValuesFrom`, `owl:hasValue`, `owl:minCardinality`, `owl:maxCardinality`, `owl:exactCardinality`

## Object Properties vs Datatype Properties

| Aspect | Object Property | Datatype Property |
|---|---|---|
| Range | An [[OWL]] class (individuals) | An XML Schema datatype or `rdfs:Literal` |
| [[Triple]] object | A [[URI and IRI\|URI]] or blank node | A literal (e.g. `"Alice"`, `42`, `2024-01-01`) |
| Can have inverse | Yes (`owl:inverseOf`) | No |
| Reasoning | Full role reasoning in [[Description Logic]] | Limited; often treated as annotation |
| Example | `ex:worksFor ex:Organisation` | `ex:age xsd:integer` |

## Class Hierarchy and Instances

A class hierarchy is a directed acyclic graph of `rdfs:subClassOf` links forming a [[Taxonomy]]-like structure. At the bottom of every hierarchy is `owl:Nothing` (the empty class) and at the top is `owl:Thing` (the class of all individuals). [[Inference and Reasoning]] engines classify newly defined classes into the correct position in this hierarchy automatically via subsumption reasoning — this is called *classification* and is one of the core reasoning services of any [[Description Logic]] reasoner.

Instances (also called *individuals* or *members*) belong to classes via `rdf:type` assertions, expressed in [[RDF]] as `ex:alice rdf:type ex:Person`. A single individual can belong to multiple classes simultaneously — [[OWL]] uses the open-world assumption, so being a `Person` does not prevent also being a `Researcher`. Reasoners can infer additional class memberships from defined class axioms, which is why [[OWL]] ontologies distinguish between *asserted* and *inferred* class memberships.

## Restrictions in OWL Manchester Syntax

Manchester syntax is a readable notation for [[OWL]] axioms used in tools like Protégé. It expresses class definitions and [[Description Logic]] concept constructors in a natural-language style.

```manchester
# Necessary condition (subclass only)
Dog SubClassOf: Animal

# Necessary and sufficient (defined class)
Parent EquivalentTo: Person and (hasChild some Person)

# Universal restriction
VeganDiet EquivalentTo: Diet and (contains only PlantBasedFood)

# Cardinality restriction
MonogamousRelationship SubClassOf: hasPartner exactly 1 Person

# Enumeration (nominal)
PrimaryColour EquivalentTo: {Red, Blue, Yellow}

# Disjointness
Cat DisjointWith: Dog

# Inverse property
isOwnedBy InverseOf: owns
```

These axioms live in the TBox. When an [[Inference and Reasoning]] engine encounters an individual asserted as `hasChild some ex:bob`, it will classify that individual as a `Parent` without requiring an explicit `rdf:type Parent` [[Triple]].

## Relationships in an RDF Triple

Every [[Triple]] `(subject, predicate, object)` in an [[RDF]] graph uses a property as its predicate. Object properties produce triples where object is a [[URI and IRI|URI]], creating graph edges between nodes. Datatype properties produce triples where object is a literal, creating attribute values on nodes. [[SPARQL]] queries exploit both forms using the same triple pattern syntax.

```turtle
# Object property triple
ex:alice ex:worksFor ex:AcmeCorp .

# Datatype property triple
ex:alice ex:name "Alice Smith"^^xsd:string ;
         ex:birthYear 1990^^xsd:integer .
```

[[SHACL]] shapes can constrain both types of property — requiring that an object property points to an instance of a specific class, or that a datatype property has a value in a given range — independently of any [[OWL]] [[Inference and Reasoning]].

## Relationships

- **Is-a:** Core modelling primitives of [[Ontology|ontologies]] and [[Knowledge Graph|knowledge graphs]]
- **Has-part:** `owl:Class`, `owl:ObjectProperty`, `owl:DatatypeProperty`, class restrictions, property characteristics
- **Related:** [[Ontology]], [[OWL]], [[RDFS]], [[RDF]], [[Triple]], [[Description Logic]], [[Taxonomy]], [[Inference and Reasoning]], [[SHACL]]
- **Used-by:** [[SPARQL]] (queries traverse properties and filter by class); [[SHACL]] (validates property values); [[Inference and Reasoning]] engines (classify individuals and compute entailments); ontology editors (Protégé, TopBraid)

## Sources

- [needs-source]

## See Also

- [[Ontology]]
- [[OWL]]
- [[RDFS]]
- [[RDF]]
- [[Triple]]
- [[Description Logic]]
- [[Taxonomy]]
- [[Inference and Reasoning]]
- [[SHACL]]
- [[SPARQL]]
