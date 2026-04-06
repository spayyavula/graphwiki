# FpML

**Type:** Standard / XML Schema

**Definition:** Financial Products Markup Language — the open XML standard for representing OTC [[Derivatives]] and structured financial products, maintained by ISDA since 1999, currently at version 5.13, covering the full trade lifecycle from pre-trade through regulatory reporting.

## Overview

FpML is the canonical machine-readable format for communicating complex derivatives transactions across the global financial industry, enabling straight-through processing (STP) between counterparties, trading platforms, clearinghouses, and regulatory reporting systems. Established in 1999 by ISDA, it predates more recent domain models by two decades and remains deeply embedded in production derivatives infrastructure. The standard covers interest rate products (swaps, swaptions, caps, floors, FRAs, inflation swaps), credit derivatives (CDS, CDS indices, basket products, total return swaps), equity derivatives, FX derivatives, commodity derivatives, securities financing (repos, securities lending), and syndicated loan confirmations.

FpML is defined exclusively as XML Schema (XSD), organized into modular namespaces: `FpML-Main` (core message envelope and trade structure), per-asset-class product schemas (IRD, CD, EQD, FX, COM), a Confirmation view (full economic terms for bilateral confirmation), a Reporting view (DTCC, ESMA, CFTC regulatory reporting), and a Pretrade view (RFQ and indicative pricing). The `Trade` element is the central document unit, wrapping product terms, party roles, and dates. `Party` elements identify counterparties using LEI or internal identifiers. `TradeHeader` carries Unique Trade Identifiers (UTIs), timestamps, and version tracking. Workflow messages support confirmation (`requestConfirmation`, `affirmTrade`), novation, and amendment.

FpML has no native [[OWL]] or [[RDF]] representation — it is purely schema-driven with no linked-data publication. However, cross-standard semantic alignment is underway: ISO TC68 SC9 WG1 is developing an OWL proof-of-concept that cross-maps FpML concepts with [[FIX Protocol]] tags and [[ISO 20022]] message elements, aiming to create a unified financial instrument [[Ontology]] bridging three major standards. [[FIBO]]'s DER module provides ontological definitions that correspond conceptually to FpML product types, and [[ISDA CDM]] is explicitly designed as FpML's successor for lifecycle event processing, providing FpML mappings during the transition period. Regulatory mandates like EMIR Refit often require both FpML and [[ISO 20022]] reporting streams in parallel.

## Key Components

- **Trade:** Central document unit — product terms, party roles, dates
- **Product schemas:** Per-asset-class XSD modules (IRD, CD, EQD, FX, COM)
- **Confirmation view:** Full economic terms for bilateral trade confirmation
- **Reporting view:** Regulatory trade reporting (DTCC GTR, ESMA REGIS-TR, CFTC)
- **Pretrade view:** RFQ messages and indicative pricing
- **Workflow messages:** `requestConfirmation`, `affirmTrade`, novation, amendment
- **Party identification:** LEI or internal identifiers; `TradeHeader` with UTIs
- **Serialization:** XML-only; no official JSON or binary encoding

## OWL/RDF Availability

FpML has no native OWL/RDF representation. Schema documentation is available at:

- FpML Homepage: https://www.fpml.org/
- Schema browser: https://schemas.liquid-technologies.com/FpML/
- ISO TC68 SC9 WG1 OWL cross-mapping: in development (not yet published)

## Relationships

- **Maintained by:** ISDA (royalty-free license)
- **Complementary to:** [[FIX Protocol]] (FIX handles pre-trade/execution; FpML handles OTC post-trade confirmation)
- **Overlapping with:** [[ISO 20022]] (regulatory reporting; EMIR Refit requires both)
- **Succeeded by:** [[ISDA CDM]] (for lifecycle event modeling; FpML mappings provided during transition)
- **Conceptually aligned:** [[FIBO]] DER module (no formal OWL alignment published)
- **Used by:** DTCC GTR, ESMA REGIS-TR, CFTC swap data repositories

## Key URLs

- Homepage: https://www.fpml.org/
- Schema browser: https://schemas.liquid-technologies.com/FpML/
- Current version: FpML 5.13 Recommendation

## Sources

- `sources/articles/fpml-financial-products-markup.md`

## See Also

- [[Ontology]], [[FIBO]], [[ISDA CDM]], [[FIX Protocol]], [[ISO 20022]]
- [[Derivatives]], [[Financial Instrument]], [[Legal Entity]]
