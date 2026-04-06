# FIBO — Financial Industry Business Ontology

## Overview

**Full Name:** Financial Industry Business Ontology
**Acronym:** FIBO
**Homepage:** https://spec.edmcouncil.org/fibo/
**GitHub:** https://github.com/edmcouncil/fibo
**License:** MIT

FIBO is the definitive formal ontology for the financial services industry. It provides a standards-based, machine-readable framework for defining financial instruments, legal entities, markets, contracts, and processes. FIBO enables semantic interoperability across institutions and regulatory bodies by establishing shared, unambiguous definitions grounded in OWL 2 DL.

## Maintainer

FIBO is maintained by the **EDM Council** (Enterprise Data Management Council) in collaboration with the **Object Management Group (OMG)**. In October 2025, the EDM Council acquired OMG, consolidating governance of both organizations' financial standards portfolios under a single body. Major financial institutions including Bloomberg, Goldman Sachs, and Citigroup have contributed to FIBO's development and ongoing refinement.

## Current Version

**Q4 2025 Production Release** — contains 2,436 classes across 10 domain modules. FIBO uses a quarterly release cadence for production content, with continuous development visible in the GitHub repository. Prior to the production release, content passes through a "provisional" maturity level where it is available but subject to change.

## Domain Modules

FIBO is organized into 10 top-level domain modules:

| Code | Domain |
|------|--------|
| **FND** | Foundations — core ontological primitives, dates, quantities, relations |
| **BE** | Business Entities — corporations, partnerships, trusts, government bodies |
| **BP** | Business Process — workflows, lifecycle events, process modeling |
| **CAE** | Corporate Actions and Events — dividends, splits, mergers, spin-offs |
| **DER** | Derivatives — options, futures, swaps, forwards |
| **FBC** | Financial Business and Commerce — accounts, trading, clearing, settlement |
| **IND** | Indices and Indicators — market indices, economic indicators, benchmarks |
| **LOAN** | Loans — mortgage, commercial, consumer lending |
| **MD** | Market Data — pricing, quotes, reference data |
| **SEC** | Securities — equities, debt instruments, funds, structured products |

## Key Classes and Concepts

- **FinancialInstrument** — root class for all tradeable assets
- **Equity** — ownership interests in legal entities
- **DebtInstrument** — bonds, notes, commercial paper
- **Derivative** — instruments whose value derives from an underlying asset
- **Option**, **Future**, **Swap** — specific derivative subtypes
- **LegalEntity** — any organization with legal standing
- **Contract** — binding legal agreements between parties
- **MarketIdentifierCode (MIC)** — ISO 10383 codes for trading venues
- **ListedSecurity** — a security admitted to trading on an exchange
- **FinancialMarket**, **StockExchange** — venue and exchange representations
- **Index** — computed reference values (e.g., S&P 500, LIBOR successor rates)

## Serialization Formats

FIBO content is published in multiple formats to accommodate different tooling ecosystems:

- **RDF/XML** — primary source format used in development
- **Turtle (.ttl)** — human-readable RDF serialization
- **JSON-LD** — JSON-based linked data format
- **N-Triples** — line-oriented RDF serialization for streaming
- **CSV** — tabular export for spreadsheet workflows
- **Excel (.xlsx)** — business-user-friendly exports
- **SKOS** — Simple Knowledge Organization System representation for thesaurus use

## OWL/RDF Availability

FIBO is natively an OWL 2 DL ontology. All ontology files are available at:

- **Ontology endpoint:** https://spec.edmcouncil.org/fibo/ontology
- **GitHub releases:** https://github.com/edmcouncil/fibo/releases
- **HuggingFace dataset:** https://huggingface.co/datasets/wikipunk/fibo2023Q3

Individual module files follow the pattern `https://spec.edmcouncil.org/fibo/ontology/{MODULE}/{Submodule}/`.

## Relationship to Other Standards

- **ISO 20022:** FIBO's legal entity and instrument classes align with ISO 20022 message semantics, enabling mapping between the two standards for regulatory reporting.
- **LEI / GLEIF:** FIBO's `LegalEntity` hierarchy maps to GLEIF's L1/L2 ontologies. The `MarketIdentifierCode` class links to ISO 17442 identifiers.
- **XBRL:** FIBO's securities and financial statement classes can be cross-referenced with XBRL taxonomy elements for SEC filing contexts.
- **FIGI:** FIBO instrument identifiers can be associated with FIGI codes, providing a bridge between the ontological representation and operational identifier systems.
- **ISDA CDM:** FIBO provides the reference data layer (legal entities, instruments, markets) that CDM's product and event models reference for trade lifecycle modeling.
- **Schema.org:** The `schema:FinancialProduct` type is semantically aligned with FIBO's `FinancialInstrument`, enabling web-scale data integration.

## Key URLs

| Resource | URL |
|----------|-----|
| Homepage | https://spec.edmcouncil.org/fibo/ |
| GitHub | https://github.com/edmcouncil/fibo |
| Ontology root | https://spec.edmcouncil.org/fibo/ontology |
| SKOS glossary | https://spec.edmcouncil.org/fibo/glossary |
| HuggingFace | https://huggingface.co/datasets/wikipunk/fibo2023Q3 |
| OMG specification | https://www.omg.org/spec/EDMC-FIBO |
