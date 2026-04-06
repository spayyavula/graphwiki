# XBRL

**Type:** Standard / Reporting Language

**Definition:** eXtensible Business Reporting Language — an XML-based open standard for structured financial reporting, mandated in over 60 countries, with 15,000+ taxonomy elements and bridge projects linking it to [[OWL]], [[RDF]], and [[SPARQL]] environments.

## Overview

XBRL is the global standard for machine-readable financial disclosure, enabling financial data to be tagged with metadata drawn from standardized taxonomies so regulators, investors, and analysts can consume and compare statements programmatically. Rather than rekeying numbers from PDF filings, XBRL-tagged data flows directly into analytical systems. The standard is mandated in over 60 countries across more than 220 regulatory implementations, with the US SEC, EU ESMA, and EU EBA among the largest mandate authorities. The 2025 US GAAP taxonomy (effective March 17, 2025) contains over 15,000 elements spanning income statements, balance sheets, cash flow statements, notes disclosures, and segment reporting.

XBRL uses its own XML-based taxonomy format — distinct from [[OWL]] — with concepts defined in XSD and relationships expressed in custom XML linkbases (label, reference, calculation, definition, presentation). The core XBRL 2.1 specification is extended by Inline XBRL (iXBRL, which embeds tags in human-readable HTML), XBRL Formula (rule-based validation), and XBRL Taxonomy Packages. The SEC's EDGAR system validates submissions and exposes structured data via EDGAR Data APIs. Despite not being natively RDF, several significant bridge projects exist: [[FinRegOnt]] provides the only known open-source [[OWL]] ontology with complete coverage of all XBRL specifications, and the SemanticXBRL project converted approximately 30,000 SEC filings into [[RDF]], producing over 125 million triples queryable via [[SPARQL]].

[[FIBO]] financial instrument and market classes can be cross-referenced with XBRL taxonomy elements to enrich SEC filing data with [[Ontology]]-level semantics. LEI codes from [[GLEIF]] appear in XBRL filings as entity identifiers, supplementing SEC CIK numbers. [[FIGI]] identifiers can supplement N-PORT portfolio XBRL filings with unambiguous cross-exchange instrument references. SEC EDGAR — the primary XBRL submission portal — holds decades of structured filing data now increasingly accessible via APIs and [[Linked Data]] initiatives.

## Key Components

- **Concept:** Named, typed financial data point defined in a taxonomy (analogous to an [[OWL]] class)
- **Context:** Entity, period, and scenario to which a reported value applies
- **Fact:** Single tagged value associating a concept with a context and unit
- **Linkbase:** XML file defining concept relationships (labels, references, calculations, definitions, presentations)
- **Dimension:** Structured axis for disaggregating facts (segment, geography, product line)
- **Inline XBRL (iXBRL):** XBRL tags embedded in HTML — one document for humans and machines
- **XBRL Formula:** Rule-based validation and calculation expressions
- **Key taxonomies:** US GAAP (FASB, 15,000+ elements), IFRS (IFRS Foundation), COREP/FINREP (EBA), ESEF (ESMA)

## OWL/RDF Availability

XBRL is not natively OWL/RDF, but is bridged via:

- **[[FinRegOnt]] XBRL Ontology:** Complete OWL coverage of all XBRL specifications — https://finregont.com/
- **SemanticXBRL:** 30,000 SEC filings → 125M+ RDF triples — http://semanticxbrl.org/
- **XBRL.org RDF Working Group:** Exploring normative XBRL Dimensions ↔ OWL class hierarchy mappings
- SEC EDGAR: https://www.sec.gov/structureddata/osd_edgar_vfiler.htm

## Relationships

- **Aligned with:** [[FIBO]] (instrument/securities cross-reference), [[GLEIF]] (LEI entity identification), [[FIGI]] (instrument identification in N-PORT)
- **Bridged to OWL/RDF by:** [[FinRegOnt]], SemanticXBRL project
- **Queryable via:** [[SPARQL]] (via SemanticXBRL RDF dataset)
- **Mandate authority:** SEC EDGAR (US), ESMA ESEF (EU), EBA COREP/FINREP (banking)

## Key URLs

- Homepage: https://www.xbrl.org/
- FASB Taxonomies: https://fasb.org/projects/fasb-taxonomies
- IFRS Taxonomy: https://www.ifrs.org/issued-standards/ifrs-taxonomy/
- SemanticXBRL: http://semanticxbrl.org/
- FinRegOnt: https://finregont.com/

## Sources

- `sources/articles/xbrl-business-reporting.md`

## See Also

- [[Ontology]], [[OWL]], [[RDF]], [[SPARQL]], [[Linked Data]]
- [[FIBO]], [[FinRegOnt]], [[GLEIF]], [[FIGI]], [[Financial Instrument]], [[SEC EDGAR]]
