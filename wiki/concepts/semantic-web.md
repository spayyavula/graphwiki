# Semantic Web

**Definition:** An extension of the World Wide Web in which data is given well-defined meaning through standard formats and [[Ontology|ontologies]], enabling machines to interpret and reason over web content automatically.

**Also known as:** Web of Data, Web 3.0 (loosely), Giant Global Graph.

## Overview

Tim Berners-Lee, the inventor of the World Wide Web, introduced the Semantic Web vision in a 2001 Scientific American article co-authored with James Hendler and Ora Lassila. The core idea is simple but ambitious: the web as it existed was a web of documents for humans to read; the Semantic Web would be a web of data for machines to process. Instead of web pages containing text marked up with presentational HTML, resources would be described with structured, linked data using [[RDF]], typed by [[Ontology|ontologies]] expressed in [[RDFS]] and [[OWL]], and queryable via [[SPARQL]].

The practical realization of the Semantic Web proceeded in layers, famously depicted as the "Semantic Web Stack" or "Layer Cake" — a diagram showing each technology building on those below it. At the base sit Unicode and [[URI and IRI|URIs]] (the universal naming and character infrastructure), then [[RDF]] (the data model), then [[RDFS]] and [[OWL]] (the schema and ontology languages), then [[SPARQL]] (query), then logic and proof layers, and finally trust and digital signatures at the top. The full stack has never been uniformly deployed across the open web, but its lower layers — [[RDF]], [[OWL]], and [[SPARQL]] — are now mature, widely implemented standards used daily in enterprise data integration, library systems, biomedical research, and [[Knowledge Graph]] construction.

The Semantic Web's most concrete practical achievement is [[Linked Data]]: the publication of structured [[RDF]] data on the web using dereferenceable [[URI and IRI|URIs]], linked across datasets. The Linked Open Data (LOD) Cloud grew from a handful of datasets in 2007 to thousands today. Projects like DBpedia (structured data from Wikipedia), Wikidata (a freely editable knowledge base), and GeoNames demonstrate what interconnected open data looks like at scale. Meanwhile, Schema.org — a vocabulary for embedding structured data in HTML pages, supported by Google, Microsoft, Yahoo, and Yandex — brought Semantic Web ideas into mainstream web publishing without requiring publishers to adopt full [[RDF]] tooling.

## The Semantic Web Stack

The layer cake organizes the technologies from infrastructure to application:

| Layer | Technologies |
|---|---|
| Trust | Digital signatures, provenance |
| Proof | Formal proofs, verification |
| Logic | Rule languages (SWRL), [[Inference and Reasoning]] |
| Ontology | [[OWL]], [[RDFS]] |
| Query | [[SPARQL]] |
| Data | [[RDF]], [[Triple|triples]] |
| Syntax | [[RDF]]/XML, Turtle, JSON-LD |
| Identifiers | [[URI and IRI|URI/IRI]] |
| Characters | Unicode |

In practice, the logic, proof, and trust layers remain research areas rather than deployed infrastructure. The real-world Semantic Web operates primarily at the data, query, and ontology layers.

## Key Properties

- **Machine-readable:** Data carries explicit semantics interpretable by software without human mediation.
- **Decentralized:** No single authority controls the web of data; anyone can publish and link.
- **Open standards:** All core technologies are W3C recommendations, royalty-free.
- **Linked:** Datasets reference each other via shared [[URI and IRI|URIs]], forming a global graph.
- **Inferential:** [[OWL]] ontologies and rule languages allow [[Inference and Reasoning|deriving new facts]] from existing ones.

## Relationships

- **Is-a:** Vision for the future web, data ecosystem, W3C standards family
- **Has-part:** [[RDF]], [[OWL]], [[RDFS]], [[SPARQL]], [[Linked Data]], [[URI and IRI]], [[Ontology]]
- **Related:** [[Knowledge Graph]], [[Linked Data]], [[Inference and Reasoning]]
- **Used-by:** DBpedia, Wikidata, Schema.org, library catalog systems, pharmaceutical data integration, government open data portals

## Examples

A web page author embedding Semantic Web data using JSON-LD (Schema.org vocabulary):

```html
<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "Person",
  "name": "Marie Curie",
  "birthDate": "1867-11-07",
  "birthPlace": {
    "@type": "City",
    "name": "Warsaw"
  },
  "award": "Nobel Prize in Physics"
}
</script>
```

This snippet, embedded in an HTML page, is valid [[RDF]] data that search engines and other automated processors can extract and use — the Semantic Web operating inside ordinary web publishing.

## Sources

- [needs-source]

## See Also

- [[RDF]]
- [[OWL]]
- [[RDFS]]
- [[SPARQL]]
- [[Linked Data]]
- [[URI and IRI]]
- [[Ontology]]
- [[Knowledge Graph]]
- [[Inference and Reasoning]]
