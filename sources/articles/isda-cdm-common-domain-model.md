# ISDA CDM — Common Domain Model

## Overview

**Full Name:** Common Domain Model
**Acronym:** CDM
**Homepage:** https://cdm.finos.org/docs/cdm-overview/
**GitHub:** https://github.com/finos/common-domain-model
**Current Version:** CDM 6.0.0
**License:** Apache 2.0

The ISDA Common Domain Model (CDM) is a standardized, machine-readable representation of the events and actions that occur during the lifecycle of a financial trade. It provides a single, shared data model for how financial products are traded, managed, and processed — replacing the fragmented, institution-specific implementations that have historically created friction in post-trade processing, regulatory reporting, and collateral management. CDM is designed to be the authoritative model for trade lifecycle events in OTC derivatives, repo, and securities lending markets.

## Maintainer

CDM is maintained under the **FINOS** (Fintech Open Source Foundation) umbrella, with governance and subject matter expertise provided by a consortium of industry associations:

- **ISDA** (International Swaps and Derivatives Association) — OTC derivatives and collateral
- **ICMA** (International Capital Market Association) — repo and bond markets
- **ISLA** (International Securities Lending Association) — securities lending

Major banks, technology vendors, and market infrastructure providers contribute to CDM development through the FINOS working groups. The model was originally developed by ISDA before being donated to FINOS to broaden industry participation and governance.

## Current Version

**CDM 6.0.0** is the current major release. CDM follows semantic versioning, with major versions introducing breaking changes to the data model and minor/patch versions adding features or corrections. Release notes and migration guides are published on the FINOS CDM documentation site. The GitHub repository contains the full version history and tagged releases corresponding to each published version.

## Scope and Coverage

CDM covers the full trade lifecycle across three asset class domains:

### OTC Derivatives
- Interest rate derivatives (IRS, basis swaps, OIS, caps, floors, swaptions)
- Credit derivatives (CDS, index CDS, basket products)
- FX derivatives (FX forwards, FX options, cross-currency swaps)
- Equity derivatives (equity swaps, equity options, variance swaps)
- Commodity derivatives

### Cash Securities
- Bonds, equities, and structured notes in outright purchase/sale
- Corporate actions affecting held positions

### Repo and Securities Lending
- Repurchase agreements (bilateral, triparty, open repo)
- Securities lending transactions
- Collateral management and substitution events

## Model Components

CDM is organized into five interconnected model layers:

| Component | Description |
|-----------|-------------|
| **Product Model** | Defines the economic terms of financial instruments — payoff structures, underliers, schedules, notionals |
| **Event Model** | Represents lifecycle events — new trade, amendment, novation, termination, exercise, reset, payment |
| **Process Model** | Workflows and business process sequences for executing lifecycle events across counterparties |
| **Reference Data** | Counterparty, legal entity, and instrument reference data aligned with LEI and other identifiers |
| **Legal Agreements** | CSA (Credit Support Annex), GMRA, GMSLA — the contractual frameworks governing collateral and margining |

## Source Format and Code Generation

CDM uses the **Rosetta DSL** (Domain-Specific Language) as its primary authoring format. Rosetta is a purpose-built language for financial domain modeling, with tooling provided by REGnosys. Source files use the `.rosetta` extension and are stored in the GitHub repository.

From the Rosetta source, CDM automatically generates implementations in multiple target languages:

- **Java** — primary reference implementation, widely used by banks and vendors
- **Scala** — functional programming implementation
- **TypeScript** — for web and Node.js integrations
- **Python** — community-contributed generation (in progress as of 2025)
- **JSON Schema** — for API contract validation
- **Daml** — for distributed ledger / smart contract implementations

This code generation approach ensures that all language implementations remain synchronized with the canonical Rosetta model, eliminating drift between implementations.

## OWL/RDF and Semantic Web

CDM is **not an OWL/RDF ontology**. It uses the Rosetta DSL and generates strongly-typed class hierarchies in imperative languages rather than description logic representations. There is no native SPARQL endpoint or RDF serialization of CDM.

However, CDM provides **FpML (Financial products Markup Language) mappings** that link CDM product types to their FpML equivalents, enabling translation between CDM-native representations and the existing FpML ecosystem used in legacy trade confirmation workflows.

Community projects have explored mapping CDM concepts to FIBO classes (particularly in the DER module), but no normative CDM-to-OWL mapping has been formally published as of 2025.

## Relationship to FpML

CDM is explicitly designed to **replace and subsume FpML** for trade lifecycle event processing. FpML (Financial products Markup Language) is the existing XML-based standard for OTC derivatives trade representation maintained by ISDA. The transition strategy is:

- CDM provides a richer event model than FpML's transaction-centric approach
- FpML mappings in CDM allow legacy systems to interoperate during transition
- New implementations are encouraged to adopt CDM natively rather than FpML
- FpML remains in use for trade confirmation messaging while CDM adoption grows

## Relationship to Other Standards

- **FIBO:** CDM's Reference Data component references FIBO's legal entity and instrument classes for counterparty and product identification. FIBO's DER module provides ontological definitions for the derivative product types that CDM's Product Model represents operationally.
- **LEI / GLEIF:** CDM uses LEI codes as the primary identifier for legal entities (counterparties, issuers) within the Reference Data component, consistent with MiFID II and EMIR reporting requirements.
- **ISO 20022:** CDM event records (particularly payments and settlement instructions) can be mapped to ISO 20022 pacs and sese messages for transmission over SWIFT or other ISO 20022-enabled networks.
- **ISDA SIMM:** The CDM includes representations of ISDA's Standard Initial Margin Model inputs, enabling structured margin calculation data to flow through the same model as trade economics.
- **FpML:** CDM provides explicit FpML mappings and is positioned as FpML's successor for lifecycle event modeling.

## Key URLs

| Resource | URL |
|----------|-----|
| Homepage | https://cdm.finos.org/docs/cdm-overview/ |
| GitHub | https://github.com/finos/common-domain-model |
| FINOS Project Page | https://www.finos.org/common-domain-model |
| Rosetta DSL | https://docs.rosetta-technology.io/ |
| CDM Releases | https://github.com/finos/common-domain-model/releases |
| ISDA CDM page | https://www.isda.org/2019/10/14/isda-common-domain-model/ |
| FpML (predecessor) | https://www.fpml.org/ |
