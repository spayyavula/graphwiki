# FIGI

**Type:** Standard / Identifier System

**Definition:** Financial Instrument Global Identifier — a free, open, globally unique 12-character alphanumeric identifier for [[Financial Instrument]]s across all asset classes, maintained by OMG and assigned by Bloomberg as Registration Authority, with formal [[OWL]] and [[RDF]] representations.

## Overview

FIGI addresses the fragmented landscape of proprietary and jurisdiction-specific instrument identifiers — ISIN, CUSIP, SEDOL, RIC — by providing a single, asset-class-agnostic reference point available to any market participant without licensing fees. It is both an OMG specification and an ANSI standard (X9.145-2021), giving it formal standing in US and international bodies. Following the EDM Council's acquisition of OMG in October 2025, FIGI governance falls under the combined organization alongside [[FIBO]], creating a tightly integrated identifier-and-ontology ecosystem. Bloomberg L.P. serves as Registration Authority (RA), operating the OpenFIGI API and reference database on behalf of the standard.

A FIGI is a 12-character alphanumeric code: two uppercase letter prefix, the letter `G`, eight randomly generated characters (uppercase consonants excluding Y, plus digits), and a modulo-36 check digit. The random generation approach is intentional — no metadata is encoded in the identifier itself; all instrument metadata lives in the OpenFIGI database. This design enables stable, persistent identification across market events without identifier re-use problems. A single underlying instrument may have multiple FIGIs at different granularity levels: a composite FIGI for the instrument globally, and exchange-specific FIGIs for each listing venue. Coverage spans equities, fixed income, exchange-traded derivatives, funds, commodities, currencies, cryptocurrencies, and structured products.

FIGI has formal [[OWL]] and [[RDF]] representations via the OMG specification's RDF/XML serialization and an ODM XMI file consistent with other OMG standards. These allow FIGI to be integrated alongside [[FIBO]], [[GLEIF]], and [[ISO 20022]] in ontology-based financial data platforms. The OpenFIGI API provides free public [[URI and IRI]]-style resolution: look up any FIGI, or map from ISIN, CUSIP, SEDOL, ticker, or exchange code to a FIGI. [[FDC3]]'s `fdc3.instrument` context type lists FIGI as a first-class supported identifier scheme, reflecting its importance in desktop interoperability workflows.

## Key Components

- **Composite FIGI:** Global instrument-level identifier, exchange-agnostic
- **Exchange-specific FIGI:** Venue-level identifier referencing ISO 10383 MIC codes
- **OpenFIGI API:** Free REST API for lookup, mapping, search, and bulk conversion (100 identifiers/request)
- **Identifier mapping:** ISIN → FIGI, CUSIP → FIGI, SEDOL → FIGI, ticker → FIGI
- **LEI relationship:** FIGI identifies instruments; [[GLEIF]] LEI identifies issuers — complementary
- **OWL representation:** RDF/XML and ODM XMI from OMG specification
- **Asset classes:** Equities, fixed income, derivatives, funds, commodities, FX, crypto, structured products

## OWL/RDF Availability

- OMG FIGI Specification (includes RDF/XML OWL): https://www.omg.org/figi/
- OpenFIGI Portal: https://www.openfigi.com/
- OpenFIGI API: https://www.openfigi.com/api
- ANSI X9.145-2021: https://webstore.ansi.org/standards/ascx9/ansix91452021

## Relationships

- **Maintained by:** OMG / EDM Council (governance), Bloomberg L.P. (Registration Authority)
- **Aligned with:** [[FIBO]] (instrument annotation), [[GLEIF]] (issuer-to-instrument mapping), [[ISO 20022]] (`OtherIdentification` code scheme), [[XBRL]] (N-PORT portfolio identification)
- **Supported by:** [[FDC3]] `fdc3.instrument` identifier map
- **Complements:** ISIN (ISO 6166), CUSIP, SEDOL — maps from all three
- **Represented in:** [[OWL]] RDF/XML, ODM XMI, [[URI and IRI]]

## Key URLs

- OMG FIGI Specification: https://www.omg.org/figi/
- OpenFIGI Portal: https://www.openfigi.com/
- OpenFIGI API: https://www.openfigi.com/api

## Sources

- `sources/articles/figi-financial-instrument-identifier.md`

## See Also

- [[OWL]], [[RDF]], [[Linked Data]], [[URI and IRI]]
- [[FIBO]], [[GLEIF]], [[Financial Instrument]], [[Financial Identifier]]
- [[FDC3]], [[ISO 20022]], [[XBRL]]
