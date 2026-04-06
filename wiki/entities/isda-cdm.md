# ISDA CDM

**Type:** Standard / Domain Model

**Definition:** The ISDA Common Domain Model — a standardized, machine-readable representation of trade lifecycle events for OTC derivatives, repo, and securities lending, maintained by FINOS with governance from ISDA, ICMA, and ISLA, currently at version 6.0.0.

## Overview

The ISDA Common Domain Model (CDM) provides a single shared data model for how [[Derivatives|financial products are traded]], managed, and processed — replacing the fragmented, institution-specific implementations that create friction in post-trade processing, regulatory reporting, and collateral management. Where legacy systems implement trade lifecycle events in dozens of incompatible formats, CDM defines a canonical representation that any participant can implement using generated code in Java, Scala, TypeScript, Python, JSON Schema, or Daml. The model was originally developed by ISDA before being donated to FINOS (Fintech Open Source Foundation, a Linux Foundation project) to broaden governance; ISDA, ICMA, and ISLA provide subject matter expertise.

CDM is authored in the Rosetta DSL (Domain-Specific Language), a purpose-built language for financial domain modeling developed by REGnosys. Rosetta source files (`.rosetta` extension) are the single source of truth; all language implementations are generated automatically, ensuring no drift between target languages. CDM 6.0.0 covers three asset class domains: OTC Derivatives (interest rate, credit, FX, equity, and commodity derivatives), Cash Securities (bonds, equities, and structured notes), and Repo and Securities Lending (repurchase agreements, securities lending, collateral management). The five model layers are: Product Model (economic terms and payoff structures), Event Model (lifecycle events — new trade, amendment, novation, termination, exercise), Process Model (workflow sequences), Reference Data (counterparty and instrument data aligned with LEI), and Legal Agreements (CSA, GMRA, GMSLA frameworks).

CDM is not an [[OWL]]/[[RDF]] ontology — it uses Rosetta DSL and generates strongly-typed class hierarchies in imperative languages rather than description logic. However, it explicitly positions itself as the successor to [[FpML]] for lifecycle event processing, providing FpML mappings during the transition period. [[FIBO]]'s DER module provides ontological definitions for the derivative product types that CDM's Product Model represents operationally. [[ISO 20022]] `pacs` and `sese` messages can carry CDM payment and settlement event data. Community projects have explored mapping CDM concepts to [[FIBO]] classes, though no normative CDM-to-OWL mapping has been published.

## Key Components

- **Product Model:** Economic terms, payoff structures, underliers, schedules, notionals for all covered instrument types
- **Event Model:** `NewTrade`, `Amendment`, `Novation`, `Termination`, `Exercise`, `Reset`, `Payment`
- **Process Model:** Workflow sequences and business process orchestration
- **Reference Data:** [[GLEIF]] LEI-aligned counterparty and instrument identification
- **Legal Agreements:** CSA, GMRA, GMSLA contractual frameworks for collateral and margining
- **Rosetta DSL:** Source authoring format; generates Java, Scala, TypeScript, Python, JSON Schema, Daml
- **FpML mappings:** Explicit links from CDM product types to [[FpML]] equivalents for legacy interop

## OWL/RDF Availability

CDM has no native OWL or RDF serialization. The canonical format is Rosetta DSL with generated implementations.

- GitHub: https://github.com/finos/common-domain-model
- Documentation: https://cdm.finos.org/docs/cdm-overview/
- Rosetta DSL docs: https://docs.rosetta-technology.io/
- CDM Releases: https://github.com/finos/common-domain-model/releases

## Relationships

- **Built on:** Rosetta DSL (REGnosys), Apache 2.0 license
- **Governed by:** FINOS, ISDA, ICMA, ISLA
- **Aligns with:** [[FIBO]] DER module (ontological definitions), [[GLEIF]] LEI (counterparty IDs), [[ISO 20022]] (payment/settlement messaging)
- **Successor to:** [[FpML]] (for lifecycle event processing, with explicit FpML mappings)
- **Complements:** [[FIX Protocol]] (execution layer), [[ISO 20022]] (settlement messaging)

## Key URLs

- Homepage: https://cdm.finos.org/docs/cdm-overview/
- GitHub: https://github.com/finos/common-domain-model
- FINOS Project: https://www.finos.org/common-domain-model
- ISDA CDM page: https://www.isda.org/2019/10/14/isda-common-domain-model/

## Sources

- `sources/articles/isda-cdm-common-domain-model.md`

## See Also

- [[Ontology]], [[FIBO]], [[FpML]], [[FIX Protocol]], [[ISO 20022]]
- [[Derivatives]], [[Financial Instrument]], [[GLEIF]], [[Legal Entity]]
