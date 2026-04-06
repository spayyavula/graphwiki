# Your First RDF Graph

A hands-on guide to creating and querying an [[RDF]] graph from scratch using Turtle syntax and [[SPARQL]].

## What You Will Build

By the end of this guide you will have a small [[RDF]] graph describing a fictional university — three courses, two professors, and one department — serialized in Turtle, and you will run [[SPARQL]] queries against it to retrieve and filter data.

## Prerequisites

Basic familiarity with the [[Triple]] model (subject, predicate, object) and [[URI and IRI|URIs]]. If you need that background first, read [[getting-started-with-ontologies]] Stages 1 and 2.

## Step 1 — Declare Prefixes

Turtle lets you abbreviate long [[URI and IRI|URIs]] with prefix declarations. This keeps the file readable.

```turtle
@prefix rdf:  <http://www.w3.org/1999/02/22-rdf-syntax-ns#> .
@prefix rdfs: <http://www.w3.org/2000/01/rdf-schema#> .
@prefix owl:  <http://www.w3.org/2002/07/owl#> .
@prefix xsd:  <http://www.w3.org/2001/XMLSchema#> .
@prefix uni:  <http://example.org/university#> .
```

The `uni:` prefix is your own namespace — a [[URI and IRI|URI]] you control. Using a unique namespace prevents collisions when your data is merged with other [[RDF]] datasets in the [[Linked Data]] cloud.

## Step 2 — Define Classes with RDFS

Use [[RDFS]] to declare your class hierarchy. This is the schema layer sitting above raw [[RDF]].

```turtle
uni:Person      a rdfs:Class .
uni:Professor   a rdfs:Class ;
                rdfs:subClassOf uni:Person .
uni:Course      a rdfs:Class .
uni:Department  a rdfs:Class .
```

Each `a rdfs:Class` [[Triple]] asserts that the resource is a class. The `rdfs:subClassOf` statement means any [[Inference and Reasoning|reasoner]] will automatically classify `Professor` instances as `Person` instances too.

## Step 3 — Define Properties

```turtle
uni:taughtBy  a rdf:Property ;
              rdfs:domain uni:Course ;
              rdfs:range  uni:Professor ;
              rdfs:label  "taught by"@en .

uni:worksIn   a rdf:Property ;
              rdfs:domain uni:Professor ;
              rdfs:range  uni:Department .

uni:credits   a rdf:Property ;
              rdfs:domain uni:Course ;
              rdfs:range  xsd:integer .
```

Domain and range declarations on [[Class and Property|properties]] allow [[RDFS]]-aware systems to infer types. If something is the object of `uni:taughtBy`, a reasoner can infer it is a `uni:Professor` even without an explicit `rdf:type` statement.

## Step 4 — Add Individuals

Now populate the graph with actual data — concrete individuals described by the schema above.

```turtle
uni:dept_cs  a uni:Department ;
             rdfs:label "Computer Science Department"@en .

uni:prof_alice  a uni:Professor ;
                rdfs:label "Alice Nakamura"@en ;
                uni:worksIn uni:dept_cs .

uni:prof_bob    a uni:Professor ;
                rdfs:label "Bob Osei"@en ;
                uni:worksIn uni:dept_cs .

uni:course_101  a uni:Course ;
                rdfs:label "Introduction to Logic"@en ;
                uni:taughtBy uni:prof_alice ;
                uni:credits  3 .

uni:course_202  a uni:Course ;
                rdfs:label "Knowledge Representation"@en ;
                uni:taughtBy uni:prof_alice ;
                uni:credits  4 .

uni:course_303  a uni:Course ;
                rdfs:label "Graph Databases"@en ;
                uni:taughtBy uni:prof_bob ;
                uni:credits  3 .
```

Each block adds multiple [[Triple|triples]] using Turtle's semicolon shorthand (same subject, different predicate-object pairs).

## Step 5 — Save and Load

Save the file as `university.ttl`. To load it into a local triplestore, options include:

- **Apache Jena Fuseki** — open-source [[SPARQL]] server; load via the web UI and query immediately
- **GraphDB Free** — GUI-based triplestore with RDFS/OWL reasoning
- **Blazegraph** — lightweight embedded option
- **Protege** — load as an [[OWL]] file and explore with the class hierarchy editor ([[Protege]])

## Step 6 — Query with SPARQL

With the graph loaded, run [[SPARQL]] queries against it.

**List all courses and their instructors:**

```sparql
PREFIX uni: <http://example.org/university#>
PREFIX rdfs: <http://www.w3.org/2000/01/rdf-schema#>

SELECT ?courseLabel ?profLabel
WHERE {
  ?course  a           uni:Course ;
           rdfs:label  ?courseLabel ;
           uni:taughtBy ?prof .
  ?prof    rdfs:label  ?profLabel .
}
ORDER BY ?courseLabel
```

**Find courses worth more than 3 credits:**

```sparql
PREFIX uni: <http://example.org/university#>
PREFIX rdfs: <http://www.w3.org/2000/01/rdf-schema#>

SELECT ?label ?credits
WHERE {
  ?course  a           uni:Course ;
           rdfs:label  ?label ;
           uni:credits ?credits .
  FILTER (?credits > 3)
}
```

**Count courses per professor:**

```sparql
PREFIX uni: <http://example.org/university#>
PREFIX rdfs: <http://www.w3.org/2000/01/rdf-schema#>

SELECT ?profLabel (COUNT(?course) AS ?courseCount)
WHERE {
  ?course uni:taughtBy ?prof .
  ?prof   rdfs:label   ?profLabel .
}
GROUP BY ?prof ?profLabel
ORDER BY DESC(?courseCount)
```

## Next Steps

- Add [[OWL]] axioms: declare `uni:taughtBy` as an inverse of `uni:teaches`, or assert that `uni:Professor` and `uni:Student` are disjoint classes
- Validate your graph with [[SHACL]] shapes to enforce that every course must have at least one instructor
- Publish your graph following [[Linked Data]] principles — assign dereferenceable [[URI and IRI|URIs]] and add `owl:sameAs` links to matching entities in [[Wikidata]] or [[DBpedia]]

## See Also

- [[RDF]]
- [[Triple]]
- [[URI and IRI]]
- [[RDFS]]
- [[OWL]]
- [[SPARQL]]
- [[Class and Property]]
- [[Inference and Reasoning]]
- [[Protege]]
- [[Linked Data]]
- [[Wikidata]]
- [[DBpedia]]
- [[getting-started-with-ontologies]]
