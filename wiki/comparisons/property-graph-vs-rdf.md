# Property Graph vs. RDF

Two dominant paradigms exist for modeling and storing graph data: the **property graph** model (used by Neo4j, Amazon Neptune, and others) and the **[[RDF]]** model standardized by [[W3C]]. They share the intuition of representing knowledge as a graph, but differ fundamentally in data model, query language, and ecosystem philosophy.

## Comparison Table

| Dimension | Property Graph | [[RDF]] Graph |
|---|---|---|
| Core unit | Nodes and edges with key-value properties | [[Triple]] (subject, predicate, object) |
| Edge properties | Yes — edges are first-class with properties | No — edges are predicates; reification needed for edge metadata |
| Node identity | Internal IDs (not globally unique) | [[URI and IRI\|URIs]] (globally unique, dereferenceable) |
| Schema | Optional labels and constraints | [[RDFS]] / [[OWL]] ontology (optional but standard) |
| Query language | Cypher (Neo4j), Gremlin | [[SPARQL]] |
| [[Inference and Reasoning\|Reasoning]] | None built-in | Yes — via [[RDFS]] / [[OWL]] + reasoners |
| Interoperability | Proprietary formats | Open [[W3C]] standards; links to [[Linked Data]] |
| Standards body | Vendor-driven (openCypher, GQL) | [[W3C]] |
| [[Knowledge Graph]] examples | Neo4j enterprise graphs | [[Wikidata]], [[DBpedia]], schema.org |

## Property Graphs

A property graph represents data as nodes (vertices) and relationships (edges), where both nodes and edges can carry arbitrary key-value properties. For example, an edge representing `KNOWS` between two person nodes can itself carry a `since` property recording when the relationship began. This makes property graphs highly intuitive for developers and easy to map onto application domain objects.

Neo4j's **Cypher** query language is the most widely used property graph query language. A typical Cypher query reads like a pattern match: `MATCH (a:Person)-[:KNOWS]->(b:Person) RETURN a, b`. Cypher is expressive and approachable but proprietary — though the openCypher and GQL standards aim to address this.

Property graphs excel in operational settings: recommendation engines, fraud detection, network analysis, and application-level knowledge graphs where schema flexibility and query performance matter most.

## RDF Graphs

[[RDF]] represents everything as [[Triple|triples]], giving each resource a [[URI and IRI|URI]] that is globally unique and dereferenceable on the web. This design decision makes [[RDF]] graphs inherently interoperable: any two datasets that use the same URIs for the same concepts can be merged without ambiguity. [[SPARQL]] is the standard query language, supporting graph pattern matching, aggregation, federation across remote endpoints, and updates.

The trade-off is that attaching metadata to a relationship (e.g., a confidence score on a triple) requires verbose reification or the use of named graphs, which is less natural than property graph edge properties.

[[RDF]] graphs integrate naturally with [[OWL]] ontologies and [[RDFS]] schemas, enabling [[Inference and Reasoning|automated reasoning]] over the data. This is a capability property graphs do not offer natively.

## When to Use Which

**Use a property graph when:**
- You need fast, low-latency traversals in an operational application
- Edge metadata (properties on relationships) is important
- Your team is more comfortable with object-oriented thinking than formal semantics

**Use [[RDF]] when:**
- Global interoperability and [[Linked Data]] publishing are goals
- You need to integrate data from multiple sources using shared vocabularies
- [[Inference and Reasoning|Reasoning]] and ontology-driven data validation ([[SHACL]]) are required

## See Also

- [[Knowledge Graph]]
- [[RDF]]
- [[Triple]]
- [[SPARQL]]
- [[URI and IRI]]
- [[OWL]]
- [[RDFS]]
- [[Wikidata]]
- [[DBpedia]]
