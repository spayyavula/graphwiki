# FpML — Financial Products Markup Language

## Overview

**Full name:** Financial Products Markup Language
**Acronym:** FpML
**Homepage:** https://www.fpml.org/
**Current version:** FpML 5.13 Recommendation
**Maintained by:** International Swaps and Derivatives Association (ISDA)
**License:** Open-source (royalty-free use permitted under ISDA license)

FpML is the open-source XML standard for representing over-the-counter (OTC) derivatives and structured financial products. Established in 1999 by ISDA, it has become the canonical machine-readable format for communicating complex derivatives transactions across the global financial industry. The standard enables straight-through processing (STP) between counterparties, trading platforms, clearinghouses, and regulatory reporting systems.

## Scope and Coverage

FpML covers a broad range of financial instrument types:

- **Interest rate products:** Swaps, swaptions, caps, floors, FRAs, inflation swaps
- **Credit derivatives:** Credit default swaps (CDS), CDS indices, basket products, total return swaps
- **Equity derivatives:** Equity swaps, equity options, variance swaps, dividend swaps
- **Foreign exchange:** FX forwards, FX options, FX swaps, non-deliverable forwards (NDFs)
- **Commodity derivatives:** Commodity swaps and options across energy, metals, agricultural
- **Securities financing:** Repos, securities lending, collateral management
- **Loans:** Syndicated loan confirmations

The standard supports the full trade lifecycle: pre-trade, trade confirmation, novation, amendment, termination, and regulatory reporting.

## Technical Architecture

FpML is defined exclusively as **XML Schema (XSD)**. The schema is modular, organized into namespaces covering product definitions, party information, confirmation workflows, and reporting views. Key schema components include:

- `FpML-Main`: Core message envelope and trade structure
- Product schemas: Separate XSD files per asset class (IRD, CD, EQD, FX, COM)
- Confirmation view: Full economic terms for bilateral confirmation
- Reporting view: Regulatory trade reporting (DTCC, ESMA, CFTC)
- Pretrade view: RFQ and indicative pricing messages

Schema documentation and browsable references are available at: https://schemas.liquid-technologies.com/FpML/

## Key Concepts

**Trade:** The central FpML document unit, wrapping product terms, party roles, and dates.
**Product:** A typed element (e.g., `<swap>`, `<creditDefaultSwap>`) with full economic terms.
**Party:** Counterparties, brokers, and agents identified by LEI or internal identifiers.
**TradeHeader:** Unique trade identifiers (UTIs), timestamps, and version tracking.
**Workflow:** Message types for confirmation (`requestConfirmation`, `affirmTrade`), novation, and amendment.

## Serialization Formats

FpML is **XML-only**. There is no official JSON or binary encoding defined by ISDA. Implementations requiring JSON typically convert FpML XML structures informally. The XML Schema enforces strict validation of product economics, dates, and party references.

## OWL/RDF Availability

FpML does not have a native OWL or RDF representation. The standard is purely schema-driven with no linked-data publication.

However, cross-standard semantic alignment work is underway: **ISO TC68 SC9 WG1** is developing an OWL proof-of-concept that cross-maps FpML concepts with FIX Protocol tags and ISO 20022 message elements. This initiative aims to create a unified financial instrument ontology bridging three major standards, though it remains in development and is not part of the official FpML specification.

## Relationships to Other Standards

- **ISO 20022:** Overlapping coverage for trade reporting; regulatory mandates (e.g., EMIR Refit) often require both
- **FIX Protocol:** Complementary — FIX handles pre-trade and execution messaging; FpML handles post-trade confirmation
- **FIBO:** FpML product concepts map to FIBO instrument classes; no formal alignment published
- **ISO 10962 (CFI):** FpML product types correspond informally to CFI categories
- **DTCC GTR / REGIS-TR:** Accept FpML as the primary format for trade repository reporting
- **ISO 20022 CAMT/PACS:** Used alongside FpML in post-trade settlement workflows

## Governance

FpML is governed by ISDA through a working group structure with participation from major dealer banks, buy-side firms, and infrastructure providers. New versions undergo public comment periods before being published as Recommendations. The specification is freely available at fpml.org.
