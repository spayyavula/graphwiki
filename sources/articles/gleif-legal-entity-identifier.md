# LEI and GLEIF — Legal Entity Identifier

## Overview

**Full Name:** Legal Entity Identifier
**Acronym:** LEI
**Standard Number:** ISO 17442
**Homepage:** https://www.gleif.org/
**Issuing Body:** Global Legal Entity Identifier Foundation (GLEIF)

The Legal Entity Identifier (LEI) is a 20-character, alphanumeric, ISO 17442-compliant identifier assigned to legal entities participating in financial transactions. It was developed in response to the 2008 financial crisis, when regulators identified the inability to clearly identify counterparties across jurisdictions as a systemic risk amplifier. The G20 endorsed the LEI system in 2012, and GLEIF was established in 2014 to oversee the global LEI system.

## Maintainer

The **Global Legal Entity Identifier Foundation (GLEIF)** is the global operational body for the LEI system, headquartered in Basel, Switzerland. GLEIF accredits and supervises a network of Local Operating Units (LOUs) — organizations authorized to issue and maintain LEIs in their jurisdictions. SWIFT, the London Stock Exchange, and various national central banks operate as LOUs. GLEIF itself does not issue LEIs but maintains the Global LEI Index, the authoritative reference database of all issued LEIs.

## Structure of an LEI Code

An LEI is a 20-character code structured as:

- **Characters 1–4:** LOU prefix identifying the issuing Local Operating Unit
- **Characters 5–18:** Entity-specific identifier assigned by the LOU
- **Characters 19–20:** Two check digits (ISO 7064 MOD 97-10)

Example: `549300MLUDYVRQOOXS22` (a fictional example following the format)

## GLEIF Ontology Suite

GLEIF publishes a formal **ontology suite** consisting of 7 OWL ontologies, available at `https://www.gleif.org/ontology/v1.0/`. This suite provides a machine-readable, linked data representation of the LEI data model:

| Ontology | Description |
|----------|-------------|
| **Base** | Foundational classes and properties shared across all GLEIF ontologies |
| **L1** (Who is Who) | Identity data for legal entities — name, address, registration details, LEI |
| **L2** (Who Owns Whom) | Ownership and control relationships between legal entities |
| **L2Parent** | Definitions for ultimate and direct parent relationships |
| **EntityLegalForm** | Legal form classification codes (LLC, PLC, GmbH, etc.) |
| **RegistrationAuthority** | Business registry identifiers and metadata |
| **ReportingException** | Entities exempt from L2 relationship disclosure |

## OWL File Availability

All GLEIF ontologies are published in four serialization formats:

- **JSON-LD** (`.jsonld`)
- **RDF/XML** (`.xml`)
- **N-Triples** (`.nt`)
- **Turtle** (`.ttl`)

**L1 Ontology (Who is Who):** `https://www.gleif.org/ontology/v1.0/L1/ontology.xml`

The ontology files follow a consistent URL pattern: `https://www.gleif.org/ontology/v1.0/{Module}/ontology.{ext}`

## Alternative Implementations

**GLEIO** — an alternative community OWL representation of the GLEIF data model, available at `https://github.com/LEIdotINFO/GLEIO`. GLEIO provides additional inferred relationships and is designed for use in knowledge graph applications that require richer axiomatization than the official GLEIF ontology provides.

## Key Concepts

- **LegalEntity** — any organization with a legal standing that can enter into contracts
- **LEIRegistration** — the administrative record linking an entity to its LEI, including registration status, renewal dates, and managing LOU
- **RelationshipRecord** — L2 data linking a child entity to its direct or ultimate parent
- **EntityStatus** — active, inactive, or pending transfer
- **ValidationSources** — references to the official business registry used to verify entity data
- **BIC-to-LEI mapping** — SWIFT BIC codes can be mapped to LEIs via the GLEIF mapping files

## Integration in Financial Regulation

LEI is mandated by major regulatory regimes worldwide:

- **MiFID II / MiFIR (EU):** Required for all investment firms and their clients in transaction reporting
- **EMIR:** Required for OTC derivatives counterparty identification
- **Dodd-Frank (US):** Required in swap data repository reporting
- **Basel III / BCBS 239:** Recommended for risk data aggregation
- **SWIFT gpi:** LEI used to identify ordering and beneficiary institutions

## Relationship to Other Standards

- **FIBO:** FIBO's `LegalEntity` class hierarchy directly references GLEIF's L1 ontology for entity identification. FIBO uses LEI as the preferred identifier for legal entities and maps to GLEIF's L2 ontology for ownership structures.
- **ISO 20022:** All major ISO 20022 message families include LEI as a supported party identification scheme alongside BIC and proprietary codes.
- **Schema.org:** The `schema:leiCode` property links schema.org `Organization` instances to their ISO 17442 LEI codes, enabling web-scale entity disambiguation.
- **XBRL:** LEI is used in SEC XBRL filings to identify reporting entities, replacing older CIK-only identification.
- **FIGI:** GLEIF and OMG/Bloomberg have published LEI-to-FIGI mapping guidance to link entity identities to the instruments they issue.

## Key URLs

| Resource | URL |
|----------|-----|
| GLEIF Homepage | https://www.gleif.org/ |
| Global LEI Index (search) | https://search.gleif.org/ |
| LEI data download | https://www.gleif.org/en/lei-data/gleif-golden-copy |
| Ontology suite root | https://www.gleif.org/ontology/v1.0/ |
| L1 OWL (RDF/XML) | https://www.gleif.org/ontology/v1.0/L1/ontology.xml |
| L2 OWL (RDF/XML) | https://www.gleif.org/ontology/v1.0/L2/ontology.xml |
| GLEIO (community) | https://github.com/LEIdotINFO/GLEIO |
| ISO 17442 | https://www.iso.org/standard/78829.html |
