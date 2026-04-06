# FIGI — Financial Instrument Global Identifier

## Overview

**Full Name:** Financial Instrument Global Identifier
**Acronym:** FIGI
**OMG Standard:** https://www.omg.org/figi/
**OpenFIGI Portal:** https://www.openfigi.com/
**ANSI Standard:** ANSI X9.145-2021
**License:** MIT open source; identifier data is free public domain open data

FIGI is a globally unique, open, and freely available identifier for financial instruments. It was designed to address the fragmented landscape of proprietary and jurisdiction-specific identifiers (ISIN, CUSIP, SEDOL, RIC, etc.) by providing a single, asset-class-agnostic reference point that any market participant can use without licensing fees or data entitlements. FIGI is both an OMG specification and an ANSI standard (X9.145-2021), giving it formal recognition in US and international standards bodies.

## Maintainer and Registration Authority

FIGI is maintained by the **Object Management Group (OMG)**. Following the EDM Council's acquisition of OMG in October 2025, FIGI governance falls under the combined organization. **Bloomberg L.P.** serves as the Registration Authority (RA) for FIGI, responsible for assigning new codes, maintaining the reference database, and operating the OpenFIGI API on behalf of the standard.

## Code Structure

A FIGI is a **12-character alphanumeric code** with the following properties:

- **Characters 1–2:** Two uppercase letters, not `BS`, `BM`, `GG`, `GB`, `GH`, `KY`, `VG` (reserved jurisdictions) — identifies the Registration Authority (Bloomberg-assigned codes begin with `BB`)
- **Character 3:** Always `G`
- **Characters 4–11:** Eight randomly generated alphanumeric characters (uppercase letters excluding vowels and `Y`, plus digits)
- **Character 12:** Check digit (modulo 36)

The random generation approach means FIGIs carry no embedded meaning about asset class, country, or issuer — the instrument metadata is stored in the OpenFIGI database, not encoded in the identifier itself.

## Asset Class Coverage

FIGI covers all tradeable asset classes without restriction:

- **Equities** — common stock, preferred stock, ADRs, GDRs
- **Fixed Income** — government bonds, corporate bonds, municipal bonds, notes
- **Derivatives** — exchange-traded options, futures, warrants
- **Funds** — ETFs, mutual funds, closed-end funds
- **Commodities** — commodity futures and spot instruments
- **Currencies and FX** — currency pairs
- **Cryptocurrencies** — digital assets listed on recognized venues
- **Structured Products** — MBS, ABS, CDOs

A single underlying instrument may have multiple FIGIs assigned at different levels of granularity (composite FIGI vs. exchange-specific FIGI).

## OWL/RDF Representations

FIGI has formal semantic representations:

- **RDF/XML** — the OMG specification includes an OWL ontology serialized in RDF/XML describing the FIGI data model, identifier structure, and relationships to other identifier systems
- **ODM XMI** — the OMG Ontology Definition Metamodel (ODM) XMI format provides a UML-aligned representation of the FIGI specification, consistent with other OMG standards

These OWL representations allow FIGI to be integrated into ontology-based financial data platforms alongside FIBO, GLEIF, and ISO 20022 semantic layers.

## OpenFIGI API

The OpenFIGI API (`https://www.openfigi.com/api`) is a free, publicly accessible REST API that provides:

- **FIGI lookup** — retrieve instrument metadata by FIGI code
- **Mapping** — map from third-party identifiers (ISIN, CUSIP, SEDOL, ticker, exchange) to FIGI
- **Search** — search by security description, exchange, asset class, and market sector
- **Bulk mapping** — batch conversion of up to 100 identifiers per request

Authentication is optional for low-volume use; API keys are available free of charge for higher rate limits.

## Relationship to Other Identifier Systems

FIGI is explicitly designed to consolidate and interoperate with existing identifier systems:

| Identifier | Scope | FIGI Relationship |
|------------|-------|-------------------|
| **ISIN** (ISO 6166) | Global securities, 12-char | FIGI maps to ISIN via OpenFIGI; ISIN is country/exchange-ambiguous, FIGI is venue-specific |
| **CUSIP** | North American securities, 9-char | FIGI subsumes CUSIP for US/CA instruments |
| **SEDOL** | London Stock Exchange origin, 7-char | FIGI provides a global alternative; OpenFIGI maps SEDOL to FIGI |
| **LEI** (ISO 17442) | Legal entities (issuers), 20-char | FIGI identifies instruments; LEI identifies the issuing entity — complementary, not overlapping |
| **MIC** (ISO 10383) | Trading venues | FIGI exchange-specific codes reference MIC codes |
| **Bloomberg ticker** | Proprietary | Bloomberg is the RA; OpenFIGI maps Bloomberg tickers to FIGIs |

## Relationship to Other Standards

- **FIBO:** FIBO's financial instrument classes can be annotated with FIGI codes as external identifiers, bridging FIBO's ontological representation with operational data systems.
- **ISO 20022:** ISO 20022 `FinancialInstrumentIdentification` elements support FIGI as an `OtherIdentification` code scheme, enabling FIGI to appear in payment and settlement messages.
- **GLEIF:** GLEIF and OMG have coordinated on mapping LEI (entity) to FIGI (instrument) to support end-to-end instrument-to-issuer traceability.
- **XBRL:** FIGI identifiers can supplement N-PORT and other SEC XBRL filings that report portfolio holdings, providing unambiguous instrument identification across exchanges.

## Key URLs

| Resource | URL |
|----------|-----|
| OMG FIGI Specification | https://www.omg.org/figi/ |
| OpenFIGI Portal | https://www.openfigi.com/ |
| OpenFIGI API | https://www.openfigi.com/api |
| ANSI X9.145-2021 | https://webstore.ansi.org/standards/ascx9/ansix91452021 |
| FIGI on GitHub (community tools) | https://github.com/topics/figi |
