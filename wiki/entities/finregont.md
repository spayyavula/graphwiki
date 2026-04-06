# FinRegOnt

**Type:** Ontology

**Definition:** Financial Regulation Ontology — a comprehensive [[OWL]]/[[RDF]] ontology for financial regulatory compliance, importing approximately 700 [[FIBO]] classes and 200 LKIF legal norm classes, organized into modular sub-ontologies covering banking, hedge funds, insurance, and securities regulation.

## Overview

FinRegOnt provides a machine-readable, logically consistent model of financial regulatory requirements, enabling organizations to reason over compliance obligations, map reporting requirements, and integrate regulatory knowledge into data governance frameworks. Maintained by Jayzed Data Models Inc. under a dual MIT/GPL open-source license, it bridges the financial domain vocabulary of [[FIBO]] with the legal norm vocabulary of LKIF (Legal Knowledge Interchange Format) to express regulatory obligations as formal [[OWL]] axioms rather than prose documents. A representative axiom might assert: "a bank holding company subject to CCAR must submit a capital plan containing stress test results meeting specified criteria" — as description logic that [[Inference and Reasoning|reasoners]] can evaluate against entity data.

The architecture is a two-foundation import stack. [[FIBO]] contributes approximately 700 finance-domain classes covering instruments, parties, markets, contracts, and processes — the core financial vocabulary. [[LKIF]] contributes approximately 200 legal domain classes covering norms, rules, obligations, permissions, and legal roles — the regulatory semantics layer. FinRegOnt extends this combined foundation with modular sub-ontologies: the XBRL Ontology (the only known open-source [[OWL]] ontology providing complete coverage of all [[XBRL]] specifications, including XBRL 2.1, Dimensions, Generic Links, Formula, and Table Linkbase), the Bank Regulation Ontology at `bankontology.com` (US banking regulation — Call Reports, CCAR, DFAST, Basel III), the Hedge Fund Regulation Ontology at `hedgefundontology.com` (Form PF, AIFMD), the Solvency II/Insurance Ontology at `insuranceontology.com` (EU Solvency II QRTs, SCR calculation, EIOPA taxonomies), and MiFID II coverage.

FinRegOnt is authored in [[OWL]]/Turtle and is [[SPARQL]]-queryable via standard triple stores including Apache Jena, Stardog, and GraphDB. It is compatible with [[OWL]] 2 DL reasoners (HermiT, Pellet, FaCT++) for automated compliance checking — meaning institutions can run reasoners over their entity data to infer which regulatory obligations apply. Imports are managed via `owl:imports` declarations, enabling modular loading of only the relevant sub-ontologies. The [[XBRL]] sub-ontology specifically bridges FinRegOnt concepts to [[XBRL]] taxonomy elements, enabling semantic validation of regulatory filings within a [[Linked Data]] environment. [[GLEIF]] LEI codes serve as the primary entity identifier throughout, consistent with major regulatory mandate requirements.

## Key Components

- **XBRL Ontology:** Complete OWL coverage of all XBRL specifications — only known open-source implementation
- **Bank Regulation Ontology (bankontology.com):** Call Reports (FFIEC 031/041/051), CCAR, DFAST, Basel III
- **Hedge Fund Ontology (hedgefundontology.com):** Form PF (SEC/CFTC), AIFMD (EU)
- **Insurance Ontology (insuranceontology.com):** Solvency II QRTs, SCR calculation, EIOPA taxonomies
- **MiFID II coverage:** Transaction reporting fields, best execution, product governance
- **Key classes:** `RegulatoryObligation`, `ReportingEntity`, `ReportTemplate`, `ComplianceRule`
- **[[SHACL]] compatibility:** Shapes-based constraint validation for regulatory data quality

## OWL/RDF Availability

Primary format: OWL/Turtle (.ttl). SPARQL-queryable via standard triple stores.

- Homepage: https://finregont.com/
- Bank Regulation Ontology: https://bankontology.com/
- Hedge Fund Ontology: https://hedgefundontology.com/
- Insurance Ontology: https://insuranceontology.com/

## Relationships

- **Imports:** [[FIBO]] (~700 classes), [[LKIF]] (~200 classes) via `owl:imports`
- **Contains:** [[XBRL]] OWL sub-ontology (complete specification coverage)
- **Queryable via:** [[SPARQL]], OWL 2 DL reasoners (HermiT, Pellet, FaCT++)
- **Uses:** [[GLEIF]] LEI for regulated entity identification
- **Regulatory coverage:** Basel III/BCBS, MiFID II, EMIR, Dodd-Frank, Solvency II

## Key URLs

- Homepage: https://finregont.com/
- License: MIT / GPL (dual)

## Sources

- `sources/articles/finregont-financial-regulation-ontology.md`

## See Also

- [[OWL]], [[RDF]], [[SPARQL]], [[Ontology]], [[SHACL]]
- [[FIBO]], [[XBRL]], [[GLEIF]], [[LKIF]]
- [[Inference and Reasoning]], [[Linked Data]]
