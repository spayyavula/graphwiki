# FinRegOnt — Financial Regulation Ontology

## Overview

**Full name:** Financial Regulation Ontology
**Acronym:** FinRegOnt
**Homepage:** https://finregont.com/
**Maintained by:** Jayzed Data Models Inc.
**Primary format:** OWL/Turtle
**License:** MIT / GPL (dual-licensed open source)

FinRegOnt is a comprehensive OWL/RDF ontology designed to support financial regulatory compliance through formal semantic representation. It provides a machine-readable, logically consistent model of financial regulatory requirements, enabling organizations to reason over compliance obligations, map reporting requirements, and integrate regulatory knowledge into data governance frameworks.

## Architecture and Imports

FinRegOnt is built on a foundation of two major imported ontologies:

- **FIBO (Financial Industry Business Ontology):** Approximately 700 finance-domain classes covering instruments, parties, markets, contracts, and processes. FIBO provides the core financial vocabulary that FinRegOnt extends with regulatory semantics.
- **LKIF (Legal Knowledge Interchange Format):** Approximately 200 legal domain classes covering norms, rules, obligations, permissions, and legal roles. LKIF enables formal representation of regulatory requirements as logical obligations over financial entities.

This dual foundation allows FinRegOnt to express statements such as "a bank holding company subject to CCAR must submit a capital plan containing stress test results meeting the following criteria," as formal OWL axioms rather than prose documents.

## Sub-Ontologies

FinRegOnt is organized as a family of modular sub-ontologies, each addressing a specific regulatory domain:

**XBRL Ontology**
The only known open-source OWL ontology providing complete coverage of all XBRL specifications (XBRL 2.1, Dimensions, Generic Links, Formula, Table Linkbase). Enables semantic processing of XBRL instance documents and taxonomies within a linked-data environment.

**Bank Regulation Ontology**
Available at bankontology.com. Covers US banking regulation including Call Reports (FFIEC 031/041/051), Comprehensive Capital Analysis and Review (CCAR), stress testing requirements (DFAST), and Basel III capital and liquidity standards.

**Hedge Fund Regulation Ontology**
Available at hedgefundontology.com. Addresses Form PF (SEC/CFTC reporting for private funds), AIFMD reporting under EU regulation, and related alternative investment fund disclosure requirements.

**Solvency II / Insurance Ontology**
Available at insuranceontology.com. Models the EU Solvency II prudential framework for insurance undertakings, including Quantitative Reporting Templates (QRTs), the Solvency Capital Requirement (SCR) calculation structure, and EIOPA reporting taxonomies.

**MiFID II Coverage**
FinRegOnt includes classes and axioms covering Markets in Financial Instruments Directive II requirements, including transaction reporting fields, best execution obligations, and product governance requirements.

## Key Concepts

**Regulatory Obligation:** A formal OWL class representing a legal duty imposed on a regulated entity, with properties linking to the source regulation, the obligated party type, and the required action or report.
**Reporting Entity:** Classes representing bank holding companies, investment firms, insurance undertakings, and other regulated entity types with their jurisdictional attributes.
**Report Template:** OWL individuals representing specific regulatory filings (e.g., FR Y-9C, Form PF, QRT S.01.01) with properties mapping to XBRL taxonomy elements.
**Compliance Rule:** OWL axioms encoding specific regulatory thresholds, deadlines, and conditions as description logic expressions.

## Serialization and Query

- **Primary format:** OWL/Turtle (.ttl)
- **Query:** SPARQL-queryable via standard triple stores (Apache Jena, Stardog, GraphDB)
- **Reasoning:** Compatible with OWL 2 DL reasoners (HermiT, Pellet, FaCT++) for automated compliance checking
- **Alignment:** Imports are managed via OWL `owl:imports` declarations, enabling modular loading

## Relationships to Other Standards

- **FIBO:** Core import; FinRegOnt extends FIBO instrument and party classes with regulatory obligations
- **LKIF:** Core import; provides the legal norm vocabulary underlying regulatory rules
- **XBRL:** The XBRL sub-ontology bridges FinRegOnt concepts to XBRL taxonomy elements, enabling semantic validation of regulatory filings
- **ISO 20022:** Banking and payment regulation concepts align with ISO 20022 financial message semantics
- **LEI/GLEIF:** Regulated entity identification uses LEI as the primary identifier, consistent with GLEIF linked data publication
- **Basel III / BCBS:** Bank regulation ontology models Basel capital and liquidity framework requirements as OWL axioms
