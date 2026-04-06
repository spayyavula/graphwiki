# Financial Instrument

**Definition:** Any contract or asset that can be traded, transferred, or used to raise or deploy capital, modeled in ontologies as a class hierarchy with typed properties and formal identifier linkages.

**Also known as:** Tradeable asset, financial asset, instrument.

## Overview

In ontology terms, a financial instrument is a [[Class and Property]] construct that anchors one of the richest class hierarchies in the financial domain. [[FIBO]]'s root class `FinancialInstrument` sits at the top of a deep subsumption tree: beneath it lie [[Securities]] (equities, bonds, funds), [[Derivatives]] (options, futures, swaps, forwards), loans, commodities, and currencies. Each subclass is defined with [[OWL]] restrictions that constrain which properties apply — for example, a bond must have a maturity date and a coupon type, while an equity must reference an issuing [[Legal Entity]].

Modeling instruments in a [[Financial Ontology]] requires balancing several concerns. Classification must be consistent with external taxonomies: [[ISO 10962 CFI]] provides a six-character code that encodes asset class and attributes in a machine-readable form directly aligned to FIBO's hierarchy via [[SKOS]] concept schemes. Identifiers must be represented as typed datatype properties or [[URI and IRI]] references: an instrument node in a [[Knowledge Graph]] may carry an ISIN, a [[FIGI]], a CUSIP, and an exchange-specific ticker simultaneously, each scoped to a different [[Financial Identifier]] standard. The [[Taxonomy]] of instrument types is not merely classificatory — it has legal and regulatory force, since MiFID II, EMIR, and Dodd-Frank apply different obligations depending on instrument type.

[[FIBO]]'s ten modules include SEC (for [[Securities]]) and DER (for [[Derivatives]]) as the primary instrument-focused domains, with FBC (Financial Business and Commerce) handling the lifecycle events — issuance, trading, settlement — and IND (Indices and Indicators) covering computed reference values. FIBO publishes these as [[OWL]] 2 DL ontologies in [[RDF]]/XML and Turtle, making them directly importable into any standards-compliant reasoner.

## Key Properties

- `hasIdentifier` — links to [[Financial Identifier]] instances (ISIN, [[FIGI]], CUSIP)
- `isIssuedBy` — references the issuing [[Legal Entity]]
- `hasClassification` — links to [[ISO 10962 CFI]] code
- `listedOn` — references [[Stock Exchange]] via MIC code
- `hasCurrency` — denomination currency
- Subclass-specific: maturity date (debt), strike price (options), underlying (derivatives)

## Relationships

- **Is-a:** Contract, asset
- **Has-part:** [[Securities]], [[Derivatives]], fund units, loan instruments
- **Related:** [[Financial Identifier]], [[ISO 10962 CFI]], [[FIBO]], [[Taxonomy]]
- **Used-by:** Trading systems, regulatory reporting, risk management, [[Knowledge Graph]] platforms

## Examples

- `fibo-sec-eq-eq:CommonStock` — FIBO class for common equity shares, subclass of `Equity` subclass of `FinancialInstrument`
- A UK government gilt assigned ISIN `GB00B24FF097`, CFI code `DBFTFR`, and [[FIGI]] `BBG000C05BD1`
- An ETF node in a [[Financial Knowledge Graph]] linked to its underlying index via `tracksIndex` property

## Sources

- `sources/articles/fibo-financial-industry-business-ontology.md`
- `sources/articles/iso-10962-cfi-classification.md`
- `sources/articles/figi-financial-instrument-identifier.md`
- `sources/web-clips/financial-identifier-standards.md`

## See Also

- [[Ontology]], [[FIBO]], [[Class and Property]], [[OWL]], [[Financial Identifier]]
- [[ISO 10962 CFI]], [[Securities]], [[Derivatives]], [[Taxonomy]], [[Financial Ontology]]
