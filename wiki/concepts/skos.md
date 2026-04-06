# SKOS

**Definition:** Simple Knowledge Organization System — a W3C [[RDF]] vocabulary for representing taxonomies, thesauri, classification schemes, and controlled vocabularies as [[Linked Data]].

**Also known as:** Simple Knowledge Organization System, SKOS Core.

## Overview

SKOS is the W3C standard vocabulary for publishing knowledge organization systems — taxonomies, thesauri, glossaries, and classification schemes — as [[RDF]] graphs. Where [[OWL]] provides the full expressivity of [[Description Logic]] for formal ontologies, SKOS occupies a pragmatic middle ground: it is rich enough to capture hierarchical and associative relationships between concepts, simple enough to be adopted by information professionals without ontology engineering expertise, and fully compatible with the [[Semantic Web]] stack. SKOS concepts are [[RDF]] resources identified by [[URI and IRI]]s, organized into `skos:ConceptScheme` containers, and related through `skos:broader`, `skos:narrower`, and `skos:related` properties.

In financial standards, SKOS is the primary vehicle for publishing code lists and classification schemes as [[Linked Data]]. [[ISO 10962 CFI]] uses SKOS to represent its six-character instrument classification hierarchy: the top-level category codes (E for equities, D for debt, O for options, etc.) become `skos:Concept` instances in a `skos:ConceptScheme`, with attribute value codes linked via `skos:narrower`. This makes CFI codes directly integrable into [[SPARQL]] queries over [[FIBO]] and [[Financial Knowledge Graph]] environments. Similarly, [[GLEIF]] uses SKOS-style concept schemes for its EntityLegalForm and RegistrationAuthority code lists, ensuring that the thousands of jurisdiction-specific legal form codes are consistently identified and interoperable across systems.

[[FIBO]] itself publishes a SKOS glossary at `https://spec.edmcouncil.org/fibo/glossary` — a human-browsable thesaurus representation of FIBO's [[OWL]] class hierarchy that exposes definitions, synonyms, and related terms using `skos:prefLabel`, `skos:altLabel`, and `skos:definition`. This dual publication (OWL for reasoning, SKOS for browsing) is a common pattern in enterprise ontology deployment where both machine inference and human navigation are required. [[RDFS]] label properties and SKOS annotation properties are often used together: `rdfs:label` for basic RDF tooling, `skos:prefLabel` for terminology management systems.

## Key Properties

- `skos:ConceptScheme` — container for a set of concepts (e.g., a classification system)
- `skos:Concept` — a unit of thought in the scheme, identified by a [[URI and IRI]]
- `skos:prefLabel` — preferred human-readable label (one per language)
- `skos:altLabel` — synonyms and alternative labels
- `skos:broader` / `skos:narrower` — hierarchical relationships
- `skos:related` — associative (non-hierarchical) relationships
- `skos:definition` — formal definition text
- `skos:notation` — code or symbol (e.g., CFI code string)

## Relationships

- **Is-a:** [[RDF]] vocabulary, W3C standard
- **Has-part:** ConceptScheme, Concept, Collection, OrderedCollection
- **Related:** [[RDF]], [[RDFS]], [[OWL]], [[Taxonomy]], [[Linked Data]]
- **Used-by:** [[ISO 10962 CFI]] code lists, [[GLEIF]] code lists, [[FIBO]] glossary, library catalogues, government vocabularies

## Examples

- ISO 10962 CFI category `E` (Equities) published as `skos:Concept` with `skos:narrower` links to share-type attribute codes
- GLEIF EntityLegalForm `skos:ConceptScheme` with 3,000+ jurisdiction-specific legal form concepts
- FIBO glossary: `fibo-be-le-cb:Corporation` as `skos:Concept` with `skos:definition` drawn from the OWL class annotation

## Sources

- `sources/articles/fibo-financial-industry-business-ontology.md`
- `sources/articles/iso-10962-cfi-classification.md`
- `sources/articles/gleif-legal-entity-identifier.md`

## See Also

- [[RDF]], [[RDFS]], [[OWL]], [[Taxonomy]], [[W3C]], [[Linked Data]]
- [[ISO 10962 CFI]], [[GLEIF]], [[Financial Ontology]], [[FIBO]]
