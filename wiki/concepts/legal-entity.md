# Legal Entity

**Definition:** Any organization — corporation, partnership, trust, government body, or fund — that has legal standing to enter into contracts, modeled in ontologies via [[FIBO]]'s BE module and identified globally through the [[GLEIF]] LEI system.

**Also known as:** Juridical person, legal person, organization, counterparty.

## Overview

Legal entities are fundamental nodes in every [[Financial Ontology]]: they are the issuers of [[Financial Instrument]]s, the parties to contracts, the operators of [[Stock Exchange]]s, and the subjects of regulatory obligations. In [[FIBO]], the BE (Business Entities) module provides a rich [[OWL]] class hierarchy distinguishing corporations, partnerships, trusts, government bodies, sole proprietorships, and special-purpose vehicles — each with formal [[Class and Property]] restrictions encoding jurisdiction of incorporation, legal form, and registration status.

The global identification layer for legal entities is the LEI (Legal Entity Identifier) system maintained by [[GLEIF]]. A LEI is a 20-character ISO 17442 code assigned by accredited Local Operating Units (LOUs) and recorded in the Global LEI Index. [[GLEIF]] publishes this data as a 7-ontology [[OWL]] suite: the L1 ontology (Who is Who) captures identity attributes — name, address, legal form, registration authority — while the L2 ontology (Who Owns Whom) captures ownership and control relationships between entities. These [[RDF]] graphs are directly queryable via [[SPARQL]] and link naturally to [[FIBO]]'s `LegalEntity` class hierarchy through shared [[URI and IRI]] patterns.

The power of modeling legal entities as [[Linked Data]] becomes clear in regulatory contexts: ownership chains that span dozens of jurisdictions can be traversed in a single [[SPARQL]] query over the GLEIF L2 [[RDF]] graph, enabling beneficial ownership analysis, sanctions screening, and systemic risk mapping. [[FIBO]]'s `LegalEntity` individuals can carry `owl:sameAs` links to [[GLEIF]] ontology instances, [[Wikidata]] items, and DBpedia resources, making entity resolution across heterogeneous data sources tractable. The `schema:leiCode` property from Schema.org further bridges ontological representations to web-scale entity data.

## Key Properties

- `hasLEI` — ISO 17442 Legal Entity Identifier (20 characters)
- `hasLegalName` — official registered name
- `hasLegalForm` — LLC, PLC, GmbH, SA, etc. (from [[GLEIF]] EntityLegalForm ontology)
- `isIncorporatedIn` — jurisdiction of incorporation
- `hasRegistrationAuthority` — business registry reference
- `isUltimateParentOf` / `isDirectParentOf` — ownership chain relations (GLEIF L2)

## Relationships

- **Is-a:** [[Ontology]] individual, named entity
- **Has-part:** Corporate subsidiaries, branches, special-purpose vehicles
- **Related:** [[GLEIF]], [[FIBO]], [[Financial Identifier]], [[Financial Instrument]], [[Linked Data]]
- **Used-by:** Regulatory reporting (MiFID II, EMIR, Dodd-Frank), KYC/AML systems, trade repositories, [[Financial Knowledge Graph]]

## Examples

- Goldman Sachs Group Inc.: LEI `784F5XWPLTWKTBV3E584`, modeled as `fibo-be-le-cb:PubliclyHeldCompany` in FIBO
- A German GmbH with LEI linking to its ultimate parent via GLEIF L2 `RelationshipRecord`, traversable as an [[RDF]] path
- A central counterparty clearing house (CCP) modeled as a `LegalEntity` with `hasRole` pointing to a `ClearingRole` individual in FIBO FBC

## Sources

- `sources/articles/gleif-legal-entity-identifier.md`
- `sources/articles/fibo-financial-industry-business-ontology.md`
- `sources/web-clips/financial-identifier-standards.md`

## See Also

- [[Ontology]], [[FIBO]], [[GLEIF]], [[OWL]], [[Class and Property]]
- [[Linked Data]], [[URI and IRI]], [[Financial Identifier]], [[Financial Ontology]]
