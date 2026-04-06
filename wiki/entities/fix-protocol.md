# FIX Protocol

**Type:** Standard / Messaging Protocol

**Definition:** Financial Information eXchange — the global messaging standard for real-time electronic communication of securities transactions, covering pre-trade through post-trade across virtually every asset class, currently at FIX 5.0 SP2 with ongoing Extension Packs.

## Overview

FIX Protocol originated in 1992 as a bilateral agreement between Fidelity Investments and Salomon Brothers for equity order communication. It has since become the dominant pre-trade and trade-execution protocol across equity, listed derivatives, FX spot and forwards, fixed income, commodities, and structured products — with the majority of the world's equity and listed derivatives order flow transmitted via FIX messages. The FIX Trading Community, an industry-led non-profit, maintains the standard through working groups covering algorithmic trading, FX, fixed income, post-trade, and other functional areas. Version updates and Extension Packs (EPs) are published after community review, enabling incremental feature additions to FIX 5.0 SP2 without a full version increment.

FIX supports four encodings: the classic tag-value format (`tag=value` pipe-delimited, compact, low-latency, used in most production connections), FIXML (XML representation for batch processing and back-office integration), FIX JSON (for REST-style integrations), and Simple Binary Encoding (SBE, high-performance binary format co-developed with the FIX community and widely adopted by exchanges and ECNs). Messages are identified by `MsgType` tag (tag 35): `D` (NewOrderSingle), `8` (ExecutionReport), `V/W/X` (MarketData requests and responses), `AE` (TradeCaptureReport). The session layer — logon, heartbeat, sequence number management, resend requests — is transport-independent, separating session concerns from application-layer message semantics.

FIX Protocol does not have a native [[OWL]] or [[RDF]] ontology — the tag-value model is not natively [[Linked Data]]-compatible. Cross-standard semantic mapping is in progress via ISO TC68 SC9 WG1, which is developing an OWL cross-mapping aligning FIX tag semantics with [[FpML]] product definitions and [[ISO 20022]] message elements. FIX tag 461 carries the [[ISO 10962 CFI]] code as a standard field in security definition messages, creating a formal link to the CFI taxonomy in every instrument message. [[FIBO]]'s market and instrument classes correspond conceptually to FIX security definitions and execution reports. FIX Orchestra provides machine-readable rules-of-engagement specifications enabling automated generation of FIX session configurations.

## Key Components

- **Tag-value encoding:** Classic `tag=value` pipe-delimited format for low-latency production
- **FIXML:** XML representation for batch and back-office integration (XML Schema defined)
- **SBE (Simple Binary Encoding):** High-performance binary format for market data and order entry
- **FIX JSON:** REST-style encoding for web integrations
- **Key message types:** `D` (NewOrderSingle), `8` (ExecutionReport), `F` (OrderCancelRequest), `V/W/X` (MarketData), `AE` (TradeCaptureReport)
- **Tag 461:** Carries [[ISO 10962 CFI]] code for instrument classification
- **FIXimate:** Official online tag and field reference — fiximate.org
- **Orchestra:** Machine-readable rules-of-engagement specification format
- **Market Data:** `fdc3.instrument` context maps to FIX security definitions

## OWL/RDF Availability

No native OWL/RDF. ISO TC68 SC9 WG1 OWL cross-mapping with FpML and ISO 20022 is in development.

- Homepage: https://www.fixtrading.org/
- FIXimate tag reference: https://fiximate.org/
- Current version: FIX 5.0 SP2 with Extension Packs

## Relationships

- **Maintained by:** FIX Trading Community (non-profit, royalty-free)
- **Complementary to:** [[FpML]] (FIX handles pre-trade/execution; FpML handles OTC confirmation)
- **Complementary to:** [[ISO 20022]] (regulatory/settlement; FIX handles execution; translation mappings exist)
- **Complementary to:** [[ISDA CDM]] (FIX execution reports → CDM trade events)
- **Uses:** [[ISO 10962 CFI]] codes (tag 461) for instrument classification
- **Conceptually aligned:** [[FIBO]] market and instrument classes
- **Regulatory:** MiFID II, Reg NMS reporting fields map to FIX tags

## Key URLs

- Homepage: https://www.fixtrading.org/
- FIXimate: https://fiximate.org/
- FIX Orchestra: https://www.fixtrading.org/standards/fix-orchestra/

## Sources

- `sources/articles/fix-protocol-financial-information-exchange.md`

## See Also

- [[Ontology]], [[FIBO]], [[FpML]], [[ISO 20022]], [[ISDA CDM]]
- [[Securities]], [[Derivatives]], [[Market Data]], [[ISO 10962 CFI]]
