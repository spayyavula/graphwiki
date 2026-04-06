# FIBO

**Type:** Ontology / Standard

**Definition:** The Financial Industry Business Ontology — a formal [[OWL]] 2 DL ontology providing 2,436 classes across 10 domain modules for the financial services industry, maintained by the EDM Council and [[W3C]]-aligned.

## Overview

FIBO is the definitive machine-readable framework for defining [[Financial Instrument]]s, [[Legal Entity|legal entities]], markets, contracts, and processes across the financial industry. Built natively in [[OWL]] 2 DL and serialized in [[RDF]], FIBO establishes shared, unambiguous definitions that enable semantic interoperability across institutions, regulators, and data vendors. Every class and property is grounded in formal [[Ontology]] axioms, making FIBO queryable via [[SPARQL]] and compatible with automated [[Inference and Reasoning]] using standard OWL reasoners.

The Q4 2025 Production Release contains 2,436 [[Class and Property|classes and properties]] organized into 10 domain modules: Foundations (FND), Business Entities (BE), Business Process (BP), Corporate Actions and Events (CAE), Derivatives (DER), Financial Business and Commerce (FBC), Indices and Indicators (IND), Loans (LOAN), Market Data (MD), and Securities (SEC). Each module is independently importable, allowing downstream consumers to load only the relevant subset. FIBO content passes through a "provisional" maturity level before being promoted to production, giving the ecosystem confidence in stability of production-level classes.

FIBO sits at the center of the financial [[Knowledge Graph]] ecosystem. [[GLEIF]] publishes 7 OWL ontologies aligned with FIBO's `LegalEntity` hierarchy. [[ISO 20022]] message semantics overlap with FIBO's instrument and party classes, with active mapping work for regulatory reporting. [[XBRL]] taxonomy elements can be cross-referenced with FIBO [[Securities]] classes for SEC filing contexts. [[FIGI]] instrument identifiers annotate FIBO instrument individuals, and [[ISDA CDM]]'s Reference Data component explicitly references FIBO for counterparty and product identification. [[FinRegOnt]] imports approximately 700 FIBO classes as its core financial vocabulary, extending them with regulatory obligations modeled using the LKIF legal norm ontology.

## Key Components

- **FND (Foundations):** Core ontological primitives — dates, quantities, relations, utilities
- **BE (Business Entities):** Corporations, partnerships, trusts, government bodies; aligns with [[GLEIF]] L1/L2 ontologies
- **SEC (Securities):** Equities, debt instruments, funds, structured products; cross-reference with [[XBRL]] taxonomies
- **DER (Derivatives):** Options, futures, swaps, forwards; reference data layer for [[ISDA CDM]] and [[FpML]]
- **FBC (Financial Business and Commerce):** Accounts, trading, clearing, settlement
- **MD (Market Data):** Pricing, quotes, reference data; links to [[FIGI]] and [[ISO 20022]] `reda` messages
- **IND (Indices and Indicators):** Market indices, benchmarks (S&P 500, LIBOR successors)
- **Key classes:** `FinancialInstrument`, `Equity`, `DebtInstrument`, `Derivative`, `LegalEntity`, `Contract`, `MarketIdentifierCode`, `ListedSecurity`, `FinancialMarket`

## OWL/RDF Availability

FIBO is natively OWL 2 DL. All content is available in RDF/XML, Turtle, JSON-LD, N-Triples, CSV, Excel, and [[SKOS]] formats.

- Ontology endpoint: https://spec.edmcouncil.org/fibo/ontology
- GitHub releases: https://github.com/edmcouncil/fibo/releases
- HuggingFace dataset: https://huggingface.co/datasets/wikipunk/fibo2023Q3
- OMG specification: https://www.omg.org/spec/EDMC-FIBO

## Relationships

- **Built on:** [[OWL]], [[RDF]], [[W3C]] standards
- **Imports:** [[Class and Property]], [[Inference and Reasoning]] via OWL 2 DL
- **Aligned with:** [[GLEIF]] L1/L2, [[ISO 20022]], [[XBRL]], [[FIGI]], [[Schema.org Financial]]
- **Used by:** [[FinRegOnt]], [[ISDA CDM]], [[FpML]] (reference data layer)
- **Queryable via:** [[SPARQL]], OWL reasoners (HermiT, Pellet, FaCT++)

## Key URLs

- Homepage: https://spec.edmcouncil.org/fibo/
- GitHub: https://github.com/edmcouncil/fibo
- SKOS glossary: https://spec.edmcouncil.org/fibo/glossary
- HuggingFace: https://huggingface.co/datasets/wikipunk/fibo2023Q3

## Sources

- `sources/articles/fibo-financial-industry-business-ontology.md`

## See Also

- [[OWL]], [[RDF]], [[Ontology]], [[Knowledge Graph]], [[SPARQL]]
- [[GLEIF]], [[ISO 20022]], [[XBRL]], [[FIGI]], [[FinRegOnt]]
- [[ISDA CDM]], [[Schema.org Financial]], [[Financial Instrument]], [[Securities]], [[Derivatives]], [[Legal Entity]]
