# FDC3

**Type:** Standard / Interoperability Protocol

**Definition:** Financial Desktop Connectivity and Collaboration Consortium — an open standard maintained by FINOS for interoperability between financial desktop applications, defining a common API, Intent system, Channel model, and 22 JSON Schema context data types including `fdc3.instrument` with [[FIGI]], ISIN, CUSIP, and other [[Financial Identifier]] support.

## Overview

FDC3 solves the desktop integration problem in financial services: trading terminals, research tools, order management systems, CRM platforms, and analytics dashboards have historically operated as siloed applications requiring custom point-to-point integrations for each pair. FDC3 defines a common language and JavaScript/TypeScript API — exposed by an FDC3 Desktop Agent from platform vendors such as OpenFin or Glue42 — so that any FDC3-compliant application can broadcast context, raise intents, and receive data from any other compliant application without bespoke wiring. FDC3 2.2, the current version, is maintained by FINOS (Fintech Open Source Foundation, a Linux Foundation project) under Apache 2.0.

The architecture has four core concepts. The **App Directory** is a registry of FDC3-compliant applications and their supported intents and context types, enabling dynamic discovery. **Intents** are standardized action requests — `ViewChart`, `ViewInstrument`, `CreateOrder`, `ViewOrders`, `ViewQuote` — that one application raises for a registered handler to fulfill. **Channels** are named broadcast streams (system color-coded channels and app-specific channels) for real-time context sharing. **Context Data** is the semantic core: 22 standardized JSON Schema types including `fdc3.instrument`, `fdc3.portfolio`, `fdc3.position`, `fdc3.trade`, `fdc3.organization`, `fdc3.order`, and `fdc3.executionVenue`. The `fdc3.instrument` type carries a multi-identifier map supporting [[FIGI]], ISIN (ISO 6166), CUSIP, SEDOL, PERMID, RIC, Bloomberg BBG ticker, and exchange-local ticker with MIC code — allowing applications using different master data sources to resolve instruments without mandating a single canonical [[Financial Identifier]].

FDC3 is not an [[Ontology]] and has no [[OWL]] or [[RDF]] representation; context data types are JSON Schema documents. The standard explicitly references existing identifier schemes rather than defining its own instrument taxonomy, prioritizing pragmatic interoperability over semantic formalism. This makes FDC3 complementary rather than competitive with [[FIBO]], [[FIGI]], and [[GLEIF]]: FDC3 acts as the runtime data transport layer for [[Financial Instrument]] context that those ontologies formally define. FDC3 2.0 introduced a Web Connection Protocol enabling browser-tab-based interop without a native desktop agent, extending the standard to web-only environments.

## Key Components

- **App Directory:** Registry of compliant apps, supported intents, and context types
- **Intents:** `ViewChart`, `ViewInstrument`, `CreateOrder`, `ViewOrders`, `ViewQuote`
- **Channels:** System channels (color-coded), app-specific channels for context broadcast
- **22 context types:** `fdc3.instrument`, `fdc3.portfolio`, `fdc3.position`, `fdc3.trade`, `fdc3.organization`, `fdc3.order`, `fdc3.executionVenue`, `fdc3.valuation`, and more
- **`fdc3.instrument` identifier map:** [[FIGI]], ISIN, CUSIP, SEDOL, PERMID, RIC, BBG ticker, exchange ticker + MIC
- **Web Connection Protocol:** Browser-native interop without desktop agent (FDC3 2.0+)
- **Format:** JSON Schema (Apache 2.0)

## OWL/RDF Availability

FDC3 has no OWL or RDF representation. Context types are defined as JSON Schema documents.

- Homepage: https://fdc3.finos.org/
- GitHub: https://github.com/finos/FDC3
- Context type specifications: https://fdc3.finos.org/docs/context/ref/Instrument

## Relationships

- **Maintained by:** FINOS / Linux Foundation
- **Supports identifiers:** [[FIGI]], ISIN, CUSIP, SEDOL — multi-scheme resolution in `fdc3.instrument`
- **Entity identification:** `fdc3.organization` carries [[GLEIF]] LEI
- **Conceptual overlap:** [[FIX Protocol]] (order/execution context types — no formal mapping)
- **Complements:** [[FIBO]] (FDC3 transports runtime context; FIBO formally defines the semantics)
- **Instrument classification:** [[ISO 10962 CFI]] not explicitly referenced but classifiable in context metadata

## Key URLs

- Homepage: https://fdc3.finos.org/
- GitHub: https://github.com/finos/FDC3
- Current version: FDC3 2.2

## Sources

- `sources/articles/fdc3-financial-desktop-connectivity.md`

## See Also

- [[FIBO]], [[FIGI]], [[GLEIF]]
- [[Financial Identifier]], [[Financial Instrument]]
- [[FIX Protocol]], [[ISO 10962 CFI]]
