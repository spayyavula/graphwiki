# Triple

**Definition:** The atomic unit of knowledge in [[RDF]]: a three-part statement composed of a subject, a predicate, and an object, encoding a single fact about the world.

**Also known as:** RDF triple, subject–predicate–object (SPO), statement, proposition.

## Overview

Everything in an [[RDF]] [[Knowledge Graph]] ultimately reduces to triples. A triple makes one claim: the subject has the predicate relationship with the object. For example, the fact "Marie Curie was born in Warsaw" becomes the triple `(ex:MarieCurie, schema:birthPlace, ex:Warsaw)`. Chain thousands or millions of such statements together and you get a rich, traversable knowledge graph.

The elegance of the triple is its simplicity and universality. Any fact that can be stated in natural language as a sentence with a subject, verb, and object can be expressed as a triple. The predicate is always a [[URI and IRI|URI]] drawn from some vocabulary or [[Ontology]] — this is what gives the relationship a precise, machine-readable meaning rather than just a label. The subject is always a [[URI and IRI|URI]] or blank node. The object can be a [[URI and IRI|URI]], a blank node, or a literal (a typed value such as a string, integer, or date).

Because every [[RDF]] triple uses [[URI and IRI|URIs]] for its predicate (and usually for its subject), triples from completely different datasets can be merged without ambiguity. If two datasets both use `schema:birthPlace` as a predicate, a processor knows they mean the same thing — the property defined at `https://schema.org/birthPlace`. This global agreement on identifiers is the key mechanism enabling [[Linked Data]] and the broader [[Semantic Web]].

## Anatomy of a Triple

| Component | What it is | Allowed types |
|---|---|---|
| Subject | The thing being described | [[URI and IRI\|IRI]], blank node |
| Predicate | The property or relationship | [[URI and IRI\|IRI]] only |
| Object | The value or related resource | [[URI and IRI\|IRI]], blank node, literal |

Literals carry optional type annotations using XML Schema datatypes (e.g., `"42"^^xsd:integer`, `"2024-01-01"^^xsd:date`) or language tags (e.g., `"Paris"@fr`).

## Triples in Turtle Syntax

Turtle provides convenient shorthand for writing multiple triples about the same subject:

```turtle
@prefix ex:     <http://example.org/> .
@prefix schema: <https://schema.org/> .
@prefix xsd:    <http://www.w3.org/2001/XMLSchema#> .

# Three separate triples, all sharing the same subject:
ex:MarieCurie schema:name        "Marie Curie"@en ;
              schema:birthPlace  ex:Warsaw ;
              schema:birthDate   "1867-11-07"^^xsd:date .

# A fourth triple linking two URI resources:
ex:Warsaw schema:containedInPlace ex:Poland .
```

The semicolon (`;`) repeats the subject. The comma (`,`) would repeat both subject and predicate. Each terminating period ends a group of triples about one subject.

## Named Graphs and Quads

A plain [[RDF]] dataset is a set of triples with no built-in way to track provenance — where did this triple come from, and when was it asserted? Named graphs solve this by adding a fourth component: a graph name ([[URI and IRI|URI]] or blank node) that scopes a set of triples together. A four-element statement is called a **quad**.

```turtle
# TriG syntax (Turtle extended with named graphs):
<http://example.org/graph/wikidata> {
    ex:MarieCurie schema:birthPlace ex:Warsaw .
    ex:MarieCurie ex:wonAward ex:NobelPrizeChemistry1911 .
}
```

Named graphs are important for [[Knowledge Graph]] provenance tracking, trust management, and versioning. [[SPARQL]] can query across named graphs using the `GRAPH` keyword.

## Reification

Sometimes you need to make a statement about a statement — for example, to record the source, confidence, or time period of a triple. Classical [[RDF]] reification wraps a triple in four additional triples using `rdf:Statement`, `rdf:subject`, `rdf:predicate`, and `rdf:object`. This is verbose. The newer **RDF-star** (RDF 1.2) proposal allows triples as subjects directly: `<<ex:MarieCurie schema:birthPlace ex:Warsaw>> ex:assertedBy ex:Wikidata .`

## Relationships

- **Is-a:** Atomic knowledge statement, RDF data unit
- **Has-part:** Subject, predicate, object; optionally a graph name (quad)
- **Related:** [[RDF]], [[Knowledge Graph]], [[URI and IRI]], [[SPARQL]], [[Ontology]]
- **Used-by:** All [[RDF]] triplestores (Apache Jena, Virtuoso, Blazegraph, GraphDB), [[SPARQL]] engines

## Examples

Real triples from Wikidata (simplified):

```turtle
wd:Q7186 wdt:P31  wd:Q5 .           # Marie Curie  instanceOf  human
wd:Q7186 wdt:P19  wd:Q270 .         # Marie Curie  placeOfBirth  Warsaw
wd:Q7186 wdt:P166 wd:Q37922 .       # Marie Curie  award  Nobel Prize in Physics
wd:Q7186 wdt:P166 wd:Q44585 .       # Marie Curie  award  Nobel Prize in Chemistry
```

Each Wikidata item (`wd:`) and property (`wdt:`) is a [[URI and IRI|URI]] dereferenceable to a real web page.

## Sources

- [needs-source]

## See Also

- [[RDF]]
- [[Knowledge Graph]]
- [[URI and IRI]]
- [[SPARQL]]
- [[Ontology]]
- [[Linked Data]]
