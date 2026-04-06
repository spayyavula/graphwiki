# Linked Data

**Definition:** A set of best practices for publishing and connecting structured data on the web using [[URI and IRI|URIs]] and [[RDF]], so that data from different sources can be discovered, accessed, and merged automatically.

**Also known as:** LOD (Linked Open Data), Web of Data, 5-star data.

## Overview

Linked Data is the practical implementation arm of the [[Semantic Web]] vision. While the Semantic Web is a grand architectural vision, Linked Data is a specific, actionable methodology: a set of four principles, first articulated by Tim Berners-Lee in a 2006 design note, for publishing data on the web in a way that makes it inherently linkable to other data. The idea is that if everyone follows the same rules for naming and publishing data, the result is a self-organizing global graph of interlinked facts — much like the hypertext web connects documents, but at the level of individual data items.

The Linked Open Data (LOD) Cloud is the most visible result of the Linked Data movement. Starting with a small cluster of datasets in 2007, it has grown to include thousands of datasets spanning government statistics, scientific data, cultural heritage, geographic information, bibliographic data, and encyclopedic knowledge. Central hubs in this cloud include DBpedia (which extracts structured data from Wikipedia and publishes it as [[RDF]]), Wikidata (a freely editable multilingual knowledge base maintained by the Wikimedia Foundation), GeoNames (geographic entities), and the Library of Congress Subject Headings. These datasets cross-link to each other using shared [[URI and IRI|URIs]], allowing a query that starts at one dataset to traverse to another seamlessly via [[SPARQL]] federation.

What distinguishes Linked Data from simply publishing data files is the insistence on [[URI and IRI|URIs]] as global identifiers and [[RDF]] as the data model. A CSV file can describe entities with local IDs that mean nothing outside that file. A Linked Data resource uses an HTTP [[URI and IRI|URI]] that anyone on the web can dereference — look up — to get a description of that entity in [[RDF]], which in turn contains links to related entities, possibly in entirely different datasets. The "follow your nose" discovery pattern this enables is qualitatively different from downloading data dumps and manually integrating them.

## The Four Principles

Tim Berners-Lee's four rules for Linked Data, as stated in his 2006 design note:

1. **Use [[URI and IRI|URIs]] as names for things** — not just documents, but real-world entities and abstract concepts.
2. **Use HTTP [[URI and IRI|URIs]]** — so that people and machines can look up those names on the web.
3. **When someone looks up a URI, provide useful information** — using [[RDF]] and [[SPARQL]] standards.
4. **Include links to other [[URI and IRI|URIs]]** — so that machines can discover more related things.

These four principles are deliberately minimal. They do not mandate [[OWL]] ontologies, specific serialization formats, or any particular vocabulary. They establish only the baseline needed for data to be "linked."

## The 5-Star Deployment Scheme

Berners-Lee later extended the principles into a five-star rating scheme for open data quality:

| Stars | Requirement | Example |
|---|---|---|
| ★ | Published on the web (any format) with an open license | A PDF report |
| ★★ | Available as machine-readable structured data | An Excel spreadsheet |
| ★★★ | Non-proprietary format | A CSV file |
| ★★★★ | Uses [[URI and IRI|URIs]] to identify things (W3C open standards like [[RDF]]) | [[RDF]] published on the web |
| ★★★★★ | Links to other data sources | [[RDF]] with `owl:sameAs` links to Wikidata |

Most government open data portals sit at 3 stars. True Linked Data starts at 4 stars. The LOD Cloud datasets are predominantly 4–5 star.

## Key Properties

- **Decentralized:** No central authority; anyone can publish and link.
- **Self-describing:** [[RDF]] vocabularies are dereferenceable, so processors can learn what predicates mean on the fly.
- **Interoperable:** Shared [[URI and IRI|URIs]] and [[RDF]] make datasets mergeable without prior coordination.
- **Discoverable:** Following links from one resource leads to related resources across the web.
- **Open-world:** New data can be added at any time without breaking existing consumers.

## Relationships

- **Is-a:** Data publishing methodology, web architecture pattern
- **Has-part:** [[URI and IRI|URI]] naming, [[RDF]] encoding, HTTP content negotiation, cross-dataset links
- **Related:** [[Semantic Web]], [[RDF]], [[SPARQL]], [[Knowledge Graph]], [[URI and IRI]], [[OWL]]
- **Used-by:** DBpedia, Wikidata, GeoNames, Europeana, data.gov, BBC programmes, British Museum collection

## Examples

Linking a local dataset to Wikidata using `owl:sameAs`:

```turtle
@prefix ex:  <http://example.org/people/> .
@prefix owl: <http://www.w3.org/2002/07/owl#> .
@prefix wd:  <https://www.wikidata.org/entity/> .

ex:MarieCurie owl:sameAs wd:Q7186 .
```

This single [[Triple]] connects a local entity to the global Wikidata [[Knowledge Graph]], enabling any consumer of this data to follow the link and retrieve all Wikidata knows about Marie Curie — birthdate, awards, publications, family relationships — without any manual data import.

A [[SPARQL]] federated query that reaches across two Linked Data endpoints:

```sparql
SELECT ?name ?cityLabel WHERE {
  SERVICE <https://query.wikidata.org/sparql> {
    ?person wdt:P19 ?city .
    ?city rdfs:label ?cityLabel .
    FILTER(LANG(?cityLabel) = "en")
  }
  ?person schema:name ?name .
}
```

## Sources

- [needs-source]

## See Also

- [[URI and IRI]]
- [[RDF]]
- [[SPARQL]]
- [[Semantic Web]]
- [[Knowledge Graph]]
- [[OWL]]
- [[Ontology]]
