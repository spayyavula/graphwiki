# ISO 10962 CFI

**Type:** Standard / Classification System

**Definition:** ISO 10962 Classification of Financial Instruments — a six-character alphabetical code providing a universal, machine-readable [[Taxonomy]] for classifying [[Financial Instrument]]s by asset class and key attributes, published with native [[Linked Data]] representations in JSON-LD, Turtle, and CSV using [[SKOS]].

## Overview

The CFI code (ISO 10962:2021, fourth edition) is a six-character alphabetical code that classifies any financial instrument by its type and key structural attributes, maintained by ISO Technical Committee 68 Subcommittee 4 (Financial Services, Securities) with the Association of National Numbering Agencies (ANNA) as Registration Authority. Where an ISIN (ISO 6166) identifies a specific instrument, and a [[FIGI]] identifies a specific instrument listing, the CFI code answers the structural question: what kind of instrument is this? The first character encodes the asset class category: E (Equities), D (Debt instruments), R (Entitlements/Rights), O (Options), F (Futures), S (Swaps), H (Non-listed and complex listed options), I (Referential instruments), J (Transferable loans), K (Others). Characters 2–6 encode category-specific attribute dimensions — for equities, these are share type, voting rights, ownership restrictions, payment status, and form; for debt, debt type, guarantee type, coupon type, principal repayment structure, and form. An `X` in any attribute position indicates not applicable or not specified.

ISO 10962 is one of the few ISO financial standards with native [[Linked Data]] publication. The CFI code list is available in JSON-LD, Turtle (TTL), and CSV. [[SKOS]] (Simple Knowledge Organization System) is the primary [[RDF]] vocabulary: the category/attribute structure maps cleanly to `skos:ConceptScheme`, `skos:Concept`, and `skos:broader`/`skos:narrower` relationships, making CFI codes directly integrable into [[Knowledge Graph]] and [[Ontology]] environments without transformation. This [[SKOS]] representation allows CFI codes to be queried alongside [[FIBO]] instrument classes and [[GLEIF]] entity data in a unified [[SPARQL]] environment.

CFI codes are deeply embedded in trading and regulatory infrastructure. [[FIX Protocol]] tag 461 carries the CFI code as a standard field in all security definition and instrument identification messages — making CFI universal in electronic trading. MiFID II transaction reporting requires CFI codes in ESMA submissions. ANNA maintains CFI codes alongside ISIN codes in the ANNA Database, providing instrument type context for every ISIN. [[FIBO]]'s securities classification hierarchy references CFI categories. [[ISO 20022]] `seev` and `semt` messages include CFI as a standard classification element. Major data vendors including Bloomberg and Refinitiv expose CFI codes as standard instrument attributes.

## Key Components

- **Character 1 (Category):** E (Equities), D (Debt), R (Rights), O (Options), F (Futures), S (Swaps), H (Complex options), I (Referential), J (Transferable loans), K (Others)
- **Characters 2–6 (Attribute dimensions):** Category-specific encoding; `X` = not applicable
- **[[SKOS]] representation:** `skos:ConceptScheme`, `skos:Concept`, `skos:broader`/`skos:narrower` hierarchy
- **[[FIX Protocol]] tag 461:** Primary transport mechanism for CFI codes in execution messages
- **ANNA DB:** Authoritative registry linking ISIN and CFI for all instruments
- **MiFID II:** Required in ESMA transaction reports
- **Fourth edition (2021):** Current authoritative version with expanded coverage

## OWL/RDF Availability

Native [[Linked Data]] publication via [[SKOS]]:

- JSON-LD: available from ANNA / ISO TC68 SC4
- Turtle (TTL): available from ANNA / ISO TC68 SC4
- CSV: flat tabular format for bulk processing
- CFI code browser: https://www.iotafinance.com/en/Classification-of-Financial-Instrument-codes-CFI-ISO-10962-2021.html

## Relationships

- **Maintained by:** ISO TC68 SC4; Registration Authority: ANNA
- **Aligned with:** [[FIBO]] (securities classification hierarchy references CFI categories)
- **Carried by:** [[FIX Protocol]] (tag 461), [[ISO 20022]] (`seev`/`semt` messages)
- **Paired with:** ISIN (ISO 6166) — every ANNA DB ISIN record includes a CFI code
- **Complements:** [[GLEIF]] LEI (LEI identifies issuers; CFI classifies what they issue), [[FIGI]] (FIGI identifies listings; CFI classifies the instrument type)
- **Published as:** [[SKOS]] [[Taxonomy]] in [[Linked Data]] formats

## Key URLs

- CFI code browser: https://www.iotafinance.com/en/Classification-of-Financial-Instrument-codes-CFI-ISO-10962-2021.html
- ANNA (Registration Authority): https://www.anna-web.org/
- ISO TC68: https://www.iso.org/committee/49650.html

## Sources

- `sources/articles/iso-10962-cfi-classification.md`

## See Also

- [[FIBO]], [[SKOS]], [[Linked Data]], [[Taxonomy]]
- [[Financial Instrument]], [[Financial Identifier]]
- [[FIX Protocol]], [[ISO 20022]], [[GLEIF]], [[FIGI]]
