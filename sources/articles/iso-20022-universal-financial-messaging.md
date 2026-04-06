# ISO 20022 — Universal Financial Industry Message Scheme

## Overview

**Full Name:** ISO 20022 Universal Financial Industry Message Scheme
**Acronym:** ISO 20022
**Homepage:** https://www.iso20022.org/
**Standard Number:** ISO 20022

ISO 20022 is the international standard for financial industry messaging. It provides a common platform for developing financial message standards using a standardized methodology and XML-based syntax. Unlike earlier messaging standards (such as ISO 15022 or SWIFT MT formats), ISO 20022 uses a rich, structured data model with formal semantic definitions, enabling richer data exchange and reduced ambiguity in cross-border financial communications.

## Maintainer

ISO 20022 is maintained by **ISO Technical Committee 68, Subcommittee 9 (ISO TC68 SC9)**, which is responsible for financial services standards. **SWIFT** acts as the Registration Authority (RA) for ISO 20022, managing the registration of message definitions, code sets, and data dictionary elements on behalf of the ISO community.

## Current Status

The **full SWIFT cross-border payments migration to ISO 20022 was completed in November 2025**, marking the end of a multi-year global transition from the legacy MT (Message Type) format. All major correspondent banking message flows — including cover payments, credit transfers, and financial institution transfers — now operate exclusively in ISO 20022 MX format. SWIFT's TARGET2 and other central bank RTGS systems completed migration on the same timeline.

## Scope and Coverage

ISO 20022 spans five major financial domains:

- **Payments** — retail and wholesale payment initiation, clearing, and settlement
- **Securities** — trade confirmation, settlement, corporate actions, safekeeping
- **Foreign Exchange (FX)** — trade confirmation, settlement notification
- **Trade Finance** — letters of credit, guarantees, documentary collections
- **Cards and Related Retail Financial Services** — card transactions, terminal management

## Message Families

ISO 20022 messages are grouped into business domains identified by four-character codes:

| Code | Domain |
|------|--------|
| **pain** | Payment Initiation — customer-to-bank payment orders |
| **pacs** | Payments Clearing and Settlement — interbank transfers |
| **camt** | Cash Management — account statements, notifications, queries |
| **sese** | Securities Settlement — settlement instructions and status |
| **seev** | Securities Events — corporate actions notifications |
| **semt** | Securities Management — safekeeping, holdings |
| **fxtr** | Foreign Exchange Trade — FX confirmations and settlements |
| **reda** | Reference Data — party, security, and account reference data |
| **acmt** | Account Management — account opening and maintenance |
| **admi** | Administration — system messages, file administration |

Each message is identified by a code like `pacs.008.001.10` (FI Credit Transfer, version 10).

## OWL/RDF Availability

ISO 20022 has formal semantic representations at multiple levels:

- **ISO/TR 22126-2:2025** — the official ISO technical report providing an OWL DL ontology derived from the ISO 20022 data dictionary. This is the normative semantic layer for the standard.
- **Community OWL:** An independently developed OWL representation is available at `https://github.com/taurenshaman/semantic-web/blob/master/data/fadyart.com-finance/iso20022.owl`
- **RDF API:** `https://iso20022.plus/api/rdf-2/` provides a REST endpoint for querying ISO 20022 concepts as RDF triples, supporting integration with linked data pipelines.

The ISO 20022 data model is expressed using UML in the official specification, with XML Schema (XSD) as the primary serialization format for messages. The OWL ontology is derived from the UML model through a formal mapping process.

## Key Concepts and Data Dictionary

The ISO 20022 Business Application Header (BAH) and message components share a common data dictionary including:

- **BranchAndFinancialInstitutionIdentification** — identifies banks via BIC, LEI, or proprietary codes
- **CashAccount** — account identification (IBAN, BBAN, account number)
- **ActiveCurrencyAndAmount** — monetary amounts with ISO 4217 currency codes
- **FinancialInstrumentIdentification** — ISIN, CUSIP, SEDOL, and other security identifiers
- **PartyIdentification** — natural persons and legal entities with LEI support
- **RemittanceInformation** — structured and unstructured payment purpose data

## Relationship to Other Standards

- **FIBO:** ISO 20022's semantic data model for legal entities, financial instruments, and market identifiers overlaps substantially with FIBO. Mapping work between the two standards exists to enable regulatory reporting that references both.
- **LEI / GLEIF:** ISO 20022 natively supports LEI as a party identifier in all major message families. The `LEI` element appears in `pacs`, `camt`, and `sese` messages for identifying financial institutions and corporates.
- **XBRL:** ISO 20022 reference data (reda messages) can be cross-referenced with XBRL taxonomies for regulatory disclosures that require both transactional and reporting data.
- **FIGI:** ISO 20022 securities messages support FIGI as one of the `OtherIdentification` code sets for `FinancialInstrumentIdentification`.
- **SWIFT gpi:** The SWIFT global payments innovation overlay uses ISO 20022 pacs messages as its transport layer.
- **TARGET2/T2S:** The Eurosystem's real-time gross settlement and securities settlement systems use ISO 20022 as their sole messaging standard.

## Key URLs

| Resource | URL |
|----------|-----|
| Homepage | https://www.iso20022.org/ |
| Message catalogue | https://www.iso20022.org/iso-20022-message-definitions |
| Data dictionary | https://www.iso20022.org/data-dictionary |
| Registration Authority (SWIFT) | https://www.swift.com/standards/iso-20022 |
| OWL ontology (community) | https://github.com/taurenshaman/semantic-web/blob/master/data/fadyart.com-finance/iso20022.owl |
| RDF API | https://iso20022.plus/api/rdf-2/ |
| ISO/TR 22126-2:2025 | https://www.iso.org/standard/72483.html |
