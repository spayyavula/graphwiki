# Financial Identifier

**Definition:** A standardized code assigned to a [[Financial Instrument]], [[Legal Entity]], or trading venue to enable unambiguous identification across systems, jurisdictions, and time — serving as the [[URI and IRI]] anchor in financial [[Knowledge Graph]]s.

**Also known as:** Security identifier, instrument code, reference identifier.

## Overview

Financial identifiers are the glue between operational data systems and ontological representations. Every node in a [[Financial Knowledge Graph]] that represents a real-world financial object — a bond, a company, an exchange — must be linked to one or more authoritative identifier systems to enable federation with external datasets, regulatory reporting, and cross-system data integration. The major identifier families cover three target entity types: instruments, entities, and venues.

For instruments, the primary identifiers are ISIN (ISO 6166 — 12-character global security identifier), CUSIP (ANSI X9.6 — 9-character North American code), SEDOL (7-character London Stock Exchange code), and [[FIGI]] (ANSI X9.145 — 12-character open identifier covering all asset classes). These systems are partially overlapping but not redundant: ISIN identifies a security globally but is exchange-agnostic, while [[FIGI]] assigns separate codes to each listing venue for the same instrument, providing granularity that ISIN cannot. For [[Legal Entity]] identification, the LEI (ISO 17442, maintained by [[GLEIF]]) is the global standard — a 20-character code that uniquely identifies any organization participating in financial transactions. For trading venues, the MIC (ISO 10383) is a 4-character code used throughout [[FIBO]] and regulatory reporting to identify exchanges, MTFs, and dark pools.

In ontology and [[Linked Data]] contexts, financial identifiers are represented as datatype properties on instrument or entity nodes, or as typed [[URI and IRI]] identifiers that enable `owl:sameAs` federation with Wikidata (P946 for ISIN, P1278 for LEI, P3950 for [[FIGI]]), DBpedia (`dbo:isin`), and PermID. The [[Triple]] pattern `<instrument_uri> hasISIN "US0378331005"^^xsd:string` grounds an ontological individual in the operational identifier space, making it resolvable across systems via [[SPARQL]] federation. [[SKOS]] is used by bodies such as ANNA to publish identifier code lists as linked-data concept schemes.

## Key Properties

- ISIN (ISO 6166): 2-char country + 9-char national ID + 1 check digit
- CUSIP (ANSI X9.6): 9 characters, US/Canadian scope
- SEDOL: 7 characters, UK/Irish scope, London Stock Exchange
- MIC (ISO 10383): 4 characters, trading venues
- LEI (ISO 17442): 20 characters, [[Legal Entity]] identification
- [[FIGI]] (ANSI X9.145): 12 characters, all asset classes, open data

## Relationships

- **Is-a:** Reference data, controlled vocabulary term
- **Has-part:** Instrument identifiers (ISIN, CUSIP, SEDOL, [[FIGI]]), entity identifiers (LEI), venue identifiers (MIC)
- **Related:** [[URI and IRI]], [[Linked Data]], [[FIGI]], [[GLEIF]], [[FIBO]], [[Triple]]
- **Used-by:** Trading systems, regulatory reporting, [[Knowledge Graph]] node identification, Wikidata federation

## Examples

- Apple Inc. common stock: ISIN `US0378331005`, CUSIP `037833100`, FIGI `BBG000B9XRY4`, MIC `XNAS`
- Goldman Sachs: LEI `784F5XWPLTWKTBV3E584`, Wikidata Q193326, linked via `owl:sameAs`
- NYSE exchange: MIC `XNYS`, referenced in FIBO as `fibo-fbc-fi-fi:NewYorkStockExchange`

## Sources

- `sources/web-clips/financial-identifier-standards.md`
- `sources/articles/figi-financial-instrument-identifier.md`
- `sources/articles/gleif-legal-entity-identifier.md`
- `sources/articles/iso-10962-cfi-classification.md`

## See Also

- [[URI and IRI]], [[FIGI]], [[GLEIF]], [[FIBO]], [[Linked Data]]
- [[Financial Instrument]], [[Legal Entity]], [[ISO 10962 CFI]], [[Triple]], [[SKOS]]
