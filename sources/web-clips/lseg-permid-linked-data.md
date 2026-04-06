# LSEG/Refinitiv PermID — Linked Data Quick Reference

**Service URL:** https://permid.org/
**License:** CC-BY 4.0
**Bulk data:** RDF linked data files, updated weekly

## Overview

PermID (Permanent Identifier) is LSEG's (formerly Refinitiv) open identifier service for financial entities. It assigns stable, dereferenceable URIs to financial entities and publishes linked data bulk files under a Creative Commons license.

## Entity Types

| Type | Description |
|------|-------------|
| Organization | Companies, financial institutions, government bodies |
| Instrument | Securities (equities, bonds, derivatives) |
| Quote | Exchange-specific trading quote for an instrument |
| Fund | Investment funds and ETFs |
| Person | Executives, directors, key personnel |
| AssetClass | Equity, fixed income, commodity, etc. |
| Currency | ISO 4217 currencies |

## Key Characteristics

- **Stable URIs:** PermID URIs are permanent and dereferenceable via HTTP
- **Weekly bulk files:** Full RDF dumps updated weekly, suitable for local graph loading
- **FIBO alignment:** Corporate entity model reuses FIBO's corporate entities ontology module
- **Cross-links:** Organization records link to LEI, ISIN, ticker, and MIC identifiers

## Relevance to GraphWiki

- PermID URIs are usable as canonical external identifiers for Organization and Instrument nodes
- CC-BY 4.0 license permits reuse with attribution — no commercial restriction
- FIBO alignment means PermID data integrates cleanly with FIBO-based ontology design
- Weekly bulk RDF files are a practical seed dataset for initial graph population
