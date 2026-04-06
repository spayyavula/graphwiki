# FDC3 — Financial Desktop Connectivity and Collaboration

## Overview

**Full name:** Financial Desktop Connectivity and Collaboration Consortium
**Acronym:** FDC3
**Homepage:** https://fdc3.finos.org/
**GitHub:** https://github.com/finos/FDC3
**Current version:** FDC3 2.2
**Maintained by:** FINOS (Fintech Open Source Foundation), a Linux Foundation project
**Format:** JSON Schema
**License:** Apache 2.0

FDC3 is an open standard for interoperability between financial desktop applications. It defines a common language and API that allows independent financial software applications — trading terminals, research tools, order management systems, CRM platforms, and analytics dashboards — to communicate with each other within a desktop or web environment without custom point-to-point integrations. FDC3 enables a financial professional's desktop to function as a coherent, integrated workflow rather than a collection of siloed applications.

## Core Concepts

**App Directory:** A registry of FDC3-compliant applications, their supported intents, and the context types they can send and receive. Enables dynamic discovery of available applications on a desktop.

**Intents:** Standardized action requests that one application can raise for another to handle. For example, `ViewChart`, `ViewInstrument`, `CreateOrder`, `ViewOrders`, `ViewQuote`. When an application raises an intent with a context object, the FDC3 platform routes it to a registered handler.

**Channels:** Named broadcast channels for publishing and subscribing to context data. Applications on the same channel receive context updates in real time. System channels (color-coded in UI metaphor) and app-specific channels both supported.

**Context Data:** Structured JSON objects passed between applications. Context types are the semantic core of FDC3 and define the shared vocabulary.

## Context Data Types

FDC3 2.2 defines 22 standardized context data types, each specified as a JSON Schema:

| Context Type | Description |
|---|---|
| `fdc3.instrument` | A financial instrument with identifier set |
| `fdc3.instrumentList` | A collection of instruments |
| `fdc3.position` | A position in an instrument with quantity and value |
| `fdc3.portfolio` | A collection of positions |
| `fdc3.trade` | A trade/order with instrument, side, quantity, price |
| `fdc3.valuation` | A point-in-time valuation of a position or portfolio |
| `fdc3.organization` | A legal entity or organization |
| `fdc3.contact` | An individual contact person |
| `fdc3.contactList` | A list of contacts |
| `fdc3.country` | A country |
| `fdc3.currency` | A currency |
| `fdc3.email` | An email message draft |
| `fdc3.chat.initSettings` | Settings for initiating a chat |
| `fdc3.action` | A deferred action/intent |
| `fdc3.timeRange` | A start/end date range |
| `fdc3.orderList` | A list of orders |
| `fdc3.order` | A single order record |
| `fdc3.executionVenue` | A trading venue |
| `fdc3.productList` | A list of financial products |
| `fdc3.transactionResult` | Result of a transaction operation |

## Instrument Identifier Support

The `fdc3.instrument` context type supports a standardized identifier map (`id` object) covering major financial identifier schemes:

- **FIGI** (Financial Instrument Global Identifier — Bloomberg)
- **ISIN** (ISO 6166)
- **CUSIP** (North American securities)
- **SEDOL** (London Stock Exchange)
- **PERMID** (Refinitiv Permanent Identifier)
- **RIC** (Refinitiv Instrument Code)
- **BBG** (Bloomberg ticker)
- **ticker** (exchange-local symbol with optional `exchangeMIC`)

This multi-identifier approach allows applications using different master data sources to resolve instruments to a common context without requiring a single canonical ID scheme.

## Technical Implementation

FDC3 defines a JavaScript/TypeScript API for browser and Electron-based desktop environments. An **FDC3 Desktop Agent** (provided by platform vendors such as OpenFin, Glue42/Tick42, or browser-native implementations) exposes the API to applications:

```javascript
// Raise an intent with instrument context
await fdc3.raiseIntent('ViewChart', {
  type: 'fdc3.instrument',
  id: { ticker: 'AAPL', ISIN: 'US0378331005' },
  name: 'Apple Inc.'
});
```

FDC3 2.0 introduced a **Web Connection Protocol** enabling browser-tab-based interop without a native desktop agent, extending FDC3 to web-only environments.

## OWL/RDF Status

FDC3 is not an ontology and has no OWL or RDF representation. Context data types are defined as JSON Schema documents. The standard explicitly references existing identifier schemes (ISIN, FIGI, LEI) rather than defining its own taxonomy of financial instruments. This design choice prioritizes pragmatic interoperability over semantic formalism.

## Relationships to Other Standards

- **ISO 6166 (ISIN):** Supported identifier in `fdc3.instrument`; primary global instrument identifier
- **FIGI:** Bloomberg's open identifier scheme; first-class FDC3 instrument identifier
- **LEI/GLEIF:** `fdc3.organization` can carry LEI for entity identification
- **FIX Protocol:** Conceptual overlap in order and execution context types; no formal mapping published
- **ISO 10962 (CFI):** Not explicitly referenced in FDC3 context types, but instrument type classification could be carried in context metadata
- **FINOS CALM:** Another FINOS standard for architecture description; FDC3 app directories could be described using CALM notation
