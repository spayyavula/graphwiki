# XBRL — eXtensible Business Reporting Language

## Overview

**Full Name:** eXtensible Business Reporting Language
**Acronym:** XBRL
**Homepage:** https://www.xbrl.org/
**License:** Open standard; taxonomy licenses vary by issuer

XBRL is an XML-based open standard for the exchange and analysis of business information, with a primary focus on financial reporting. It enables financial data to be tagged with machine-readable metadata drawn from standardized taxonomies, allowing regulators, investors, and analysts to consume and compare financial statements programmatically — without manual rekeying or format conversion. XBRL has become the global standard for structured regulatory financial reporting, mandated in over 60 countries across more than 220 regulatory implementations.

## Maintainer

**XBRL International** is the global standards body responsible for the XBRL specification and its ecosystem. It operates as a not-for-profit consortium of regulators, accounting standards bodies, financial institutions, and technology vendors. Jurisdiction-specific taxonomies are maintained by their respective authorities:

- **FASB (Financial Accounting Standards Board)** — US GAAP taxonomy
- **IASB / IFRS Foundation** — IFRS taxonomy
- **SEC (Securities and Exchange Commission)** — US public company reporting requirements and XBRL mandates
- **ESMA (European Securities and Markets Authority)** — ESEF taxonomy for EU listed companies
- **EBA (European Banking Authority)** — COREP/FINREP taxonomies for bank prudential reporting

## Current Version and Effective Taxonomies

**2025 Taxonomies** became effective **March 17, 2025** for SEC filers. The US GAAP taxonomy for this cycle contains over **15,000 elements** spanning income statements, balance sheets, cash flow statements, notes disclosures, and segment reporting. FASB taxonomy files are available at `https://fasb.org/projects/fasb-taxonomies`.

XBRL International maintains the core XBRL 2.1 specification and newer components including:

- **XBRL 2.1** — the foundational instance document and taxonomy specification
- **Inline XBRL (iXBRL)** — embeds XBRL tags within human-readable HTML documents
- **XBRL Formula** — rule-based validation and calculation expressions
- **XBRL Taxonomy Packages** — standardized distribution format for taxonomy sets

## Key Taxonomies

| Taxonomy | Maintainer | Scope |
|----------|------------|-------|
| **US GAAP** | FASB | All US public company financial statements (15,000+ elements) |
| **IFRS** | IFRS Foundation | International financial statements, 100+ countries |
| **SEC Reporting** | SEC / FASB | SEC-specific disclosure elements and filing metadata |
| **SPAC** | FASB | Special Purpose Acquisition Company disclosures |
| **Open-End Fund** | SEC | Mutual fund and ETF reporting (N-PORT, N-CEN) |
| **COREP/FINREP** | EBA | EU bank capital adequacy and financial reporting |
| **ESEF** | ESMA | European Single Electronic Format for annual reports |

## SEC XBRL Mandate

The SEC requires XBRL tagging for all public company filings, including:

- **10-K** (annual reports) and **10-Q** (quarterly reports) — financial statements in Inline XBRL
- **20-F** — foreign private issuer annual reports
- **N-PORT** — monthly portfolio holdings for registered investment companies
- **N-CEN** — annual reports for investment companies

The SEC's EDGAR system validates XBRL submissions against the applicable taxonomy and makes structured data available for download via the EDGAR Data APIs.

## OWL/RDF Availability

XBRL is not natively an OWL or RDF standard — it uses its own XML-based taxonomy format with a distinct concept of classes, elements, labels, and relationships expressed in XSD and custom XML linkbases. However, several projects bridge XBRL into the semantic web:

- **FinRegOnt** — provides a complete OWL/RDF representation of all XBRL specifications, enabling XBRL concepts to participate in ontology-based reasoning alongside FIBO, LEI, and other financial ontologies.
- **SemanticXBRL** — a project that converted approximately **30,000 SEC XBRL filings** into RDF, producing over **125 million RDF triples**. This dataset enables SPARQL querying across years of SEC financial disclosure data.
- **XBRL.org RDF Working Group** — has explored normative mappings between XBRL Dimensions and OWL class hierarchies, though no formal W3C submission has been completed.

## Key Concepts

- **Concept** — a named, typed financial data point defined in a taxonomy (analogous to an OWL class)
- **Context** — the entity, period, and scenario to which a reported value applies
- **Fact** — a single tagged value associating a concept with a context and a unit
- **Linkbase** — an XML file defining relationships between concepts (labels, references, calculations, definitions, presentations)
- **Dimension** — a structured axis for disaggregating facts (e.g., by segment, geography, or product line)
- **Inline XBRL (iXBRL)** — XBRL tags embedded directly in HTML, allowing a single document to serve both human readers and automated processors

## Relationship to Other Standards

- **FIBO:** FIBO's financial instrument and market classes can be cross-referenced with XBRL taxonomy elements to enrich SEC filing data with ontological semantics.
- **LEI:** LEI codes appear in XBRL filings as entity identifiers, replacing or supplementing SEC CIK numbers for cross-jurisdictional entity identification.
- **ISO 20022:** ISO 20022 reference data (reda messages) can be used to populate the entity and instrument metadata referenced in XBRL filings.
- **FIGI:** FIGI identifiers for securities held can supplement XBRL portfolio reporting (e.g., N-PORT filings) with globally unique instrument references.

## Key URLs

| Resource | URL |
|----------|-----|
| Homepage | https://www.xbrl.org/ |
| Specification | https://www.xbrl.org/specifications/ |
| FASB Taxonomies | https://fasb.org/projects/fasb-taxonomies |
| IFRS Taxonomy | https://www.ifrs.org/issued-standards/ifrs-taxonomy/ |
| SEC EDGAR XBRL | https://www.sec.gov/structureddata/osd_edgar_vfiler.htm |
| SEC XBRL Viewer | https://efts.sec.gov/LATEST/search-index?q=%22xbrl%22 |
| SemanticXBRL | http://semanticxbrl.org/ |
| FinRegOnt | https://finregont.com/ |
