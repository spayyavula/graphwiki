# ISO 10962 — CFI Code: Classification of Financial Instruments

## Overview

**Full name:** Classification of Financial Instruments
**Acronym:** CFI
**Standard:** ISO 10962:2021 (fourth edition)
**Maintained by:** ISO Technical Committee 68 (Financial Services), Subcommittee 4 (Securities and related financial instruments) — ISO TC68 SC4
**Registration authority:** Association of National Numbering Agencies (ANNA)
**Code browser:** https://www.iotafinance.com/en/Classification-of-Financial-Instrument-codes-CFI-ISO-10962-2021.html

The CFI code is an internationally standardized six-character alphabetical code that classifies financial instruments by their type and key attributes. It provides a universal, machine-readable taxonomy for instruments across all asset classes, enabling consistent identification in trading, reporting, and data management contexts. The fourth edition (2021) expanded coverage and refined attribute definitions relative to prior editions.

## Code Structure

The CFI code is exactly six uppercase alphabetical characters. Each position has a defined meaning:

**Character 1 — Category (asset class):**
| Code | Category |
|------|----------|
| E | Equities |
| D | Debt instruments |
| R | Entitlements (Rights) |
| O | Options |
| F | Futures |
| S | Swaps |
| H | Non-listed and complex listed options |
| I | Referential instruments |
| J | Transferable loans |
| K | Others / miscellaneous |

**Characters 2–6 — Attribute dimensions:** Each subsequent character encodes a specific attribute for that category. For example:
- Equities (E): Character 2 = share type (common, preferred, etc.); Character 3 = voting rights; Character 4 = ownership/transfer restrictions; Character 5 = payment status; Character 6 = form
- Debt (D): Character 2 = debt type (bond, note, etc.); Character 3 = guarantee; Character 4 = interest/coupon type; Character 5 = principal repayment; Character 6 = form
- When an attribute is not applicable or not specified, the character value is `X`

## Linked Data Availability

ISO 10962 is one of the few ISO financial standards with native linked-data publication. The CFI code list is published in multiple formats:

- **JSON-LD:** Primary linked-data serialization, enabling direct embedding in web documents and APIs
- **Turtle (TTL):** RDF graph format for SPARQL query environments
- **CSV:** Flat tabular format for bulk processing and database import

**SKOS (Simple Knowledge Organization System)** is the primary RDF vocabulary used to represent the CFI hierarchy. The category/attribute structure maps naturally to `skos:ConceptScheme`, `skos:Concept`, and `skos:broader`/`skos:narrower` relationships, making CFI codes directly integrable into knowledge graph and ontology environments.

## Key Use Cases and Integrations

- **FIX Protocol tag 461:** The CFI code is carried as a standard field in FIX security definition and instrument identification messages, making it universal in electronic trading infrastructure
- **MiFID II transaction reporting:** The European Securities and Markets Authority (ESMA) requires CFI codes in transaction reports submitted under MiFID II
- **ANNA / ISIN:** CFI codes are maintained alongside ISIN codes in the ANNA Database (ANNA DB), providing instrument type context for every ISIN
- **FIBO:** The Financial Industry Business Ontology references CFI categories as part of its securities classification hierarchy
- **Bloomberg / Refinitiv:** Major data vendors expose CFI codes as standard instrument attributes

## Relationships to Other Standards

- **ISO 6166 (ISIN):** CFI codes are assigned alongside ISINs; every ISIN record in ANNA DB includes a corresponding CFI code
- **ISO 10383 (MIC):** Market Identifier Codes identify trading venues; CFI codes classify what is traded there
- **FIX Protocol:** Tag 461 is the primary transport mechanism for CFI codes in execution messages
- **FIBO:** CFI categories map to FIBO instrument class hierarchy; the linked-data publication supports direct alignment
- **ISO 20022:** Security master data messages (e.g., `seev`, `semt` namespaces) include CFI as a standard classification element
- **LEI / GLEIF:** Legal Entity Identifiers identify issuers; CFI codes classify the instruments they issue

## Governance

ISO TC68 SC4 maintains the standard with input from ANNA member numbering agencies worldwide. The fourth edition (2021) is the current authoritative version. Updates follow the ISO standards revision cycle, with the registration authority managing the live code list between formal revisions.
