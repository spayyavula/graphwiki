# FIX Protocol — Financial Information eXchange

## Overview

**Full name:** Financial Information eXchange
**Acronym:** FIX
**Homepage:** https://www.fixtrading.org/
**Current version:** FIX 5.0 SP2 (with ongoing Extension Packs)
**Maintained by:** FIX Trading Community (industry-led non-profit)
**License:** Royalty-free; specification freely available

FIX Protocol is the global messaging standard for real-time electronic communication of securities transactions. Originally developed in 1992 as a bilateral agreement between Fidelity Investments and Salomon Brothers for equity trading, FIX has evolved into the dominant pre-trade and trade-execution protocol across virtually every asset class and market. It is estimated that the majority of the world's equity and listed derivatives order flow is communicated via FIX messages.

## Scope and Coverage

FIX covers the complete trade lifecycle across multiple asset classes:

- **Pre-trade:** Indications of interest (IOIs), quotes, market data, security definitions
- **Trade:** Order routing, execution, order management, allocations
- **Post-trade:** Confirmations, settlement instructions, position reporting

Asset classes supported include equities, listed derivatives, FX spot and forwards, fixed income, commodities, and structured products. FIX is the de facto standard for algorithmic trading infrastructure, direct market access (DMA), and inter-broker order routing.

## Serialization Formats

FIX supports four distinct encodings:

- **Tag-value encoding (classic FIX):** The original pipe-delimited `tag=value|tag=value` format. Compact, low-latency, human-unfriendly. Used in the majority of production connections.
- **FIXML:** XML representation of FIX messages. Used for batch processing, back-office integration, and regulatory reporting. Defined by an XML Schema.
- **FIX JSON:** A JSON encoding introduced to support REST-style and web-based integrations. Less prevalent in latency-sensitive contexts.
- **Simple Binary Encoding (SBE):** A high-performance binary encoding optimized for low-latency market data and order entry. Co-developed with the FIX community and widely adopted by exchanges and ECNs.

## Key Message Types

FIX messages are identified by a `MsgType` tag (tag 35). Core message types include:

- `D` — NewOrderSingle: Submit a new order
- `8` — ExecutionReport: Order status, fills, and cancellation confirmations
- `F` — OrderCancelRequest: Request to cancel an open order
- `G` — OrderCancelReplaceRequest: Amend an open order
- `V` — MarketDataRequest: Subscribe to market data
- `W` — MarketDataSnapshotFullRefresh: Full order book snapshot
- `X` — MarketDataIncrementalRefresh: Incremental market data updates
- `AE` — TradeCaptureReport: Report an executed trade

## Key Concepts

**Session layer:** FIX defines a transport-independent session protocol (logon, heartbeat, sequence number management, resend requests) separate from the application layer.
**Tags:** All fields are identified by integer tags. Tag 461 carries the CFI code for instrument classification.
**FIXimate:** The official online tag and field reference, available at fiximate.org. Covers all tags, enumerations, and message definitions across FIX versions.
**Orchestra:** A machine-readable rules-of-engagement specification format, enabling automated generation of FIX session configurations.
**Extension Packs (EPs):** Incremental additions to FIX 5.0 SP2 that add new tags, message types, and workflows without a full version increment.

## OWL/RDF Availability

FIX Protocol does not have a native OWL or RDF ontology. The tag-value model is not natively linked-data compatible.

Cross-standard semantic mapping is in progress: **ISO TC68 SC9 WG1** is developing an OWL cross-mapping that aligns FIX tag semantics with FpML product definitions and ISO 20022 message elements. This work aims to enable semantic interoperability between the three dominant financial messaging standards but remains a working group initiative rather than a published standard.

## Relationships to Other Standards

- **FpML:** Complementary — FIX handles pre-trade and execution; FpML handles OTC derivatives confirmation and post-trade. Both are used together in derivatives workflows.
- **ISO 20022:** Regulatory and settlement messaging increasingly uses ISO 20022; FIX remains dominant for execution. Some venues publish FIX-to-ISO 20022 translation mappings.
- **ISO 10962 (CFI):** FIX tag 461 carries the CFI code, making CFI a required component of security definition messages.
- **SBE / OpenMAMA:** FIX SBE is used with market data distribution frameworks such as OpenMAMA.
- **SWIFT:** Post-trade settlement instructions often bridge from FIX execution reports to SWIFT MT or MX messages.
- **MiFID II / Reg NMS:** FIX message fields map directly to regulatory reporting obligations, with specific tags designated for MiFID II transaction reporting.

## Governance

The FIX Trading Community operates through working groups covering specific asset classes and functional areas (e.g., Algorithmic Trading, FX, Fixed Income, Post-Trade). The specification is developed collaboratively with buy-side, sell-side, exchange, and vendor members. Version updates and Extension Packs are published after community review at fixtrading.org.
