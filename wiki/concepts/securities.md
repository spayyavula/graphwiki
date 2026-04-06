# Securities

**Definition:** Fungible, tradeable [[Financial Instrument]]s representing ownership (equities), debt obligations (bonds), or pooled investment interests (funds), formally modeled in [[FIBO]]'s SEC domain module.

**Also known as:** Listed securities, transferable securities, investment securities.

## Overview

Securities form the core of most [[Financial Ontology]] work because they are the most heavily regulated, most data-rich, and most widely traded category of [[Financial Instrument]]. In [[FIBO]], the SEC module is one of the largest and most mature domain areas, covering equities (common stock, preferred stock, depositary receipts), debt instruments (government bonds, corporate bonds, notes, commercial paper), funds (ETFs, mutual funds, money market funds), and structured products (mortgage-backed securities, CDOs). Each of these maps to a named [[OWL]] class with formal restrictions encoding the definitional properties that distinguish them.

From an ontology modeling perspective, securities present a layered identification challenge. A single equity may exist as a legal concept (the share class, identified by ISIN under ISO 6166), as a listing on a specific [[Stock Exchange]] (identified by a venue-scoped [[FIGI]] and a MIC code from [[Financial Identifier]] standards), and as a position in a portfolio (identified by internal account references). [[FIBO]] handles this by distinguishing `ListedSecurity` from the underlying instrument class: a `CommonStock` is an [[OWL]] individual of the instrument class, while its listing on the NYSE is a separate `ListedSecurity` instance related via `isListedAs`. This layering is critical for [[Inference and Reasoning]] — a reasoner can infer that any `ListedSecurity` traded on a venue with a particular MIC is subject to that venue's regulatory regime.

[[SPARQL]] queries over [[RDF]] representations of securities data enable cross-referencing between [[FIBO]] class assertions and external datasets such as Wikidata (which uses property P946 for ISIN) and DBpedia. The [[Class and Property]] hierarchy in FIBO SEC is published as [[OWL]] 2 DL, meaning any OWL-DL reasoner can compute inferred class memberships — for example, inferring that a convertible bond satisfies both debt and equity instrument restrictions under certain conditions.

## Key Properties

- `hasISIN` — ISO 6166 identifier (12 characters)
- `isListedAs` — links instrument to `ListedSecurity` instance on a [[Stock Exchange]]
- `hasMIC` — Market Identifier Code (ISO 10383) for trading venue
- `hasCFICode` — [[ISO 10962 CFI]] classification code
- `isIssuedBy` — reference to issuing [[Legal Entity]]
- `hasFIGI` — open [[Financial Identifier]] for cross-system lookup

## Relationships

- **Is-a:** [[Financial Instrument]]
- **Has-part:** Equities (common stock, preferred stock), debt instruments (bonds, notes), ETFs, structured products
- **Related:** [[Financial Identifier]], [[Stock Exchange]], [[Derivatives]], [[FIBO]], [[ISO 10962 CFI]]
- **Used-by:** Trading platforms, regulatory reporting (MiFID II, SEC filings), portfolio management systems, [[Financial Knowledge Graph]]

## Examples

- Apple Inc. common stock: ISIN `US0378331005`, CFI `ESVUFR`, listed on NASDAQ (MIC: `XNAS`)
- A 10-year US Treasury Note modeled as `fibo-sec-dbt:GovernmentBond` in FIBO with maturity date and coupon rate restrictions
- An S&P 500 ETF node in a [[Knowledge Graph]] linked to its index via `tracksIndex` and to constituent equities via `hasConstituent`

## Sources

- `sources/articles/fibo-financial-industry-business-ontology.md`
- `sources/web-clips/financial-identifier-standards.md`
- `sources/articles/iso-10962-cfi-classification.md`

## See Also

- [[Financial Instrument]], [[FIBO]], [[Ontology]], [[Class and Property]], [[Financial Identifier]]
- [[Stock Exchange]], [[Derivatives]], [[OWL]], [[Financial Ontology]], [[ISO 10962 CFI]]
