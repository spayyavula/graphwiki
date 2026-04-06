# SPARQL Query Language

**Definition:** A declarative query language and protocol for retrieving and manipulating data stored in [[RDF]] graphs and [[Knowledge Graph|knowledge graphs]].

**Also known as:** SPARQL (recursive acronym: SPARQL Protocol and RDF Query Language), SPARQL 1.0, SPARQL 1.1.

## Overview

SPARQL is to [[RDF]] what SQL is to relational databases: the standard way to ask questions of a graph-structured dataset. A SPARQL query describes a pattern of [[Triple|triples]] — some slots filled with known [[URI and IRI|URIs]] or literals, others left as variables — and the query engine finds every combination of values for those variables that makes the pattern hold true in the target graph.

Because [[RDF]] data is stored as [[Triple|subject-predicate-object triples]], SPARQL queries are themselves composed of triple patterns that mirror that structure. Variables are prefixed with `?` (or `$`). The engine performs a graph-pattern match: it finds subgraphs in the [[RDF]] dataset that are isomorphic to the query pattern, then binds variables to the matched nodes and edges. This graph-centric model makes SPARQL naturally suited to traversing [[Linked Data]] endpoints, federated [[Knowledge Graph|knowledge graphs]], and [[RDFS]]/[[OWL]]-described vocabularies.

SPARQL 1.1 (W3C Recommendation, 2013) added aggregates, subqueries, property paths, federated queries via `SERVICE`, and an update language (SPARQL Update). It has four query forms — SELECT, CONSTRUCT, ASK, and DESCRIBE — each returning results in a different shape. Understanding when to use each form is central to working with any [[Knowledge Graph]] or [[Linked Data]] system built on [[RDF]].

## Key Properties

- **Query forms:** SELECT, CONSTRUCT, ASK, DESCRIBE
- **Graph patterns:** basic triple patterns, optional patterns (`OPTIONAL`), alternatives (`UNION`), negation (`FILTER NOT EXISTS`, `MINUS`)
- **Filters:** `FILTER` with expressions — string functions, numeric comparisons, regex, `LANG()`, `DATATYPE()`
- **Aggregates:** `COUNT`, `SUM`, `AVG`, `MIN`, `MAX` with `GROUP BY` and `HAVING`
- **Property paths:** regex-like traversal syntax for navigating multi-hop paths without specifying each [[Triple]] step
- **Federation:** `SERVICE` keyword queries remote SPARQL endpoints, enabling [[Linked Data]] federation
- **SPARQL Update:** `INSERT DATA`, `DELETE DATA`, `INSERT/DELETE WHERE` for modifying [[RDF]] graphs
- **Entailment regimes:** query engines may apply [[RDFS]] or [[OWL]] [[Inference and Reasoning]] before answering

## Relationships

- **Is-a:** Query language; W3C standard
- **Has-part:** SELECT, CONSTRUCT, ASK, DESCRIBE query forms; FILTER, OPTIONAL, UNION, MINUS clauses; SPARQL Update; SPARQL Protocol (HTTP interface)
- **Related:** [[RDF]], [[Triple]], [[URI and IRI]], [[Linked Data]], [[Knowledge Graph]], [[RDFS]], [[OWL]], [[SHACL]]
- **Used-by:** [[Knowledge Graph]] query interfaces (Wikidata Query Service, DBpedia, bio2RDF); triple stores (Apache Jena, Virtuoso, GraphDB, Stardog, Amazon Neptune); [[Ontology]] browsers

## Examples

### Sample data (Turtle)

```turtle
@prefix ex:  <http://example.org/> .
@prefix foaf: <http://xmlns.com/foaf/0.1/> .

ex:alice  a foaf:Person ;
          foaf:name "Alice" ;
          foaf:knows ex:bob ;
          ex:age 30 .

ex:bob    a foaf:Person ;
          foaf:name "Bob" ;
          ex:age 25 .
```

### SELECT — retrieve variable bindings

```sparql
PREFIX foaf: <http://xmlns.com/foaf/0.1/>
PREFIX ex:   <http://example.org/>

SELECT ?name ?age
WHERE {
  ?person a foaf:Person ;
          foaf:name ?name ;
          ex:age    ?age .
  FILTER (?age > 20)
}
ORDER BY ?name
```

Returns a table of `?name` and `?age` for all persons older than 20 — analogous to a SQL SELECT with a WHERE clause.

### CONSTRUCT — return a new [[RDF]] graph

```sparql
PREFIX foaf: <http://xmlns.com/foaf/0.1/>
PREFIX ex:   <http://example.org/>

CONSTRUCT {
  ?a ex:friendOf ?b .
}
WHERE {
  ?a foaf:knows ?b .
}
```

Transforms `foaf:knows` [[Triple|triples]] into `ex:friendOf` triples, constructing a new [[RDF]] graph as the result.

### ASK — boolean existence check

```sparql
PREFIX foaf: <http://xmlns.com/foaf/0.1/>

ASK {
  ?person foaf:name "Alice" .
}
```

Returns `true` if any [[Triple]] in the graph matches this pattern.

### DESCRIBE — return a graph description

```sparql
DESCRIBE <http://example.org/alice>
```

Returns an [[RDF]] graph describing `ex:alice` — the exact content is implementation-defined but typically includes all [[Triple|triples]] where the resource appears as subject or object.

### OPTIONAL and UNION

```sparql
SELECT ?name ?email
WHERE {
  ?p foaf:name ?name .
  OPTIONAL { ?p foaf:mbox ?email . }
}
```

`OPTIONAL` is a left outer join: persons without a `foaf:mbox` [[Triple]] still appear in results, with `?email` unbound.

```sparql
SELECT ?contact
WHERE {
  { ?p foaf:mbox ?contact . }
  UNION
  { ?p foaf:phone ?contact . }
}
```

`UNION` merges solutions from two alternative graph patterns.

### Property path (multi-hop)

```sparql
PREFIX foaf: <http://xmlns.com/foaf/0.1/>

SELECT ?indirect
WHERE {
  ex:alice foaf:knows+ ?indirect .
}
```

The `+` path operator matches one or more `foaf:knows` hops, traversing a social network without stating every [[Triple]] step. This is particularly powerful in [[Knowledge Graph]] exploration and is related to how [[Inference and Reasoning]] walks class hierarchies defined in [[RDFS]].

## Sources

- [needs-source]

## See Also

- [[RDF]]
- [[Triple]]
- [[URI and IRI]]
- [[Knowledge Graph]]
- [[Linked Data]]
- [[RDFS]]
- [[OWL]]
- [[SHACL]]
- [[Inference and Reasoning]]
