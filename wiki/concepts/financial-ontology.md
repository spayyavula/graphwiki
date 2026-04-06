# Financial Ontology

**Definition:** A formal, machine-readable [[Ontology]] that models the concepts, relationships, and rules of the financial services domain using standards such as [[OWL]] and [[RDF]].

**Also known as:** Finance ontology, financial domain ontology.

## Overview

Financial ontologies occupy a uniquely demanding corner of knowledge engineering. The financial domain combines extreme terminological precision (legal and regulatory definitions must be unambiguous), global scope (instruments, entities, and transactions cross jurisdictions), and rapid evolution (new products, regulations, and market structures emerge continuously). These pressures mean financial ontologies must satisfy both human-readable clarity for domain experts and machine-readable rigor for automated reasoning via [[Inference and Reasoning]] engines grounded in [[Description Logic]].

The anchor of the modern financial ontology landscape is [[FIBO]] — the Financial Industry Business Ontology — maintained by the EDM Council and published as an [[OWL]] 2 DL ontology across 10 domain modules covering everything from foundational primitives to [[Derivatives]], [[Securities]], and [[Market Data]]. FIBO defines over 2,400 [[Class and Property]] axioms and serves as the shared semantic backbone for interoperability between institutions, regulators, and data vendors. Alongside FIBO, [[GLEIF]] publishes a 7-ontology suite for [[Legal Entity]] identification under ISO 17442, while XBRL provides a taxonomy layer for financial reporting. [[FinRegOnt]] combines [[FIBO]] with [[LKIF]] to cover regulatory compliance obligations.

What makes financial ontologies particularly complex is the interplay between operational identifier systems and semantic representations. Every [[Financial Instrument]] may carry multiple identifiers — ISIN, CUSIP, SEDOL, [[FIGI]] — each scoped to different contexts, yet an ontology must relate these as co-referential [[URI and IRI]] patterns within a unified [[Knowledge Graph]]. Standards such as [[ISO 20022]] and [[ISO 10962 CFI]] provide structural scaffolding that financial ontologies align against, enabling mapping between message-level data and ontological representations without loss of semantics.

## Key Properties

- Grounded in [[OWL]] 2 DL for decidable [[Inference and Reasoning]]
- Published in [[RDF]]-based serializations (Turtle, RDF/XML, JSON-LD)
- Aligns to regulatory standards: [[ISO 20022]], MiFID II, Dodd-Frank, EMIR
- Covers instruments ([[Financial Instrument]], [[Securities]], [[Derivatives]]), entities ([[Legal Entity]]), markets ([[Stock Exchange]]), and processes
- Uses [[SKOS]] for thesaurus and glossary representations alongside formal axioms
- Maintained under governance bodies (EDM Council, GLEIF, ISO TC68)

## Relationships

- **Is-a:** [[Ontology]], domain ontology
- **Has-part:** [[FIBO]], [[GLEIF]], XBRL taxonomy, [[FinRegOnt]], [[LKIF]]
- **Related:** [[Knowledge Graph]], [[Description Logic]], [[Class and Property]], [[Inference and Reasoning]], [[Linked Data]]
- **Used-by:** Financial regulators, investment banks, data vendors, compliance platforms

## Examples

- [[FIBO]] SEC module defines `Equity` as a subclass of `FinancialInstrument` with OWL restrictions on issuing [[Legal Entity]]
- [[GLEIF]] L2 ontology represents parent-subsidiary ownership chains as [[RDF]] triples queryable via [[SPARQL]]
- [[FinRegOnt]] combines [[LKIF]] obligation classes with [[FIBO]] instrument classes to encode MiFID II reporting rules

## Sources

- `sources/articles/fibo-financial-industry-business-ontology.md`
- `sources/articles/gleif-legal-entity-identifier.md`
- `sources/web-clips/lkif-legal-knowledge-interchange.md`

## See Also

- [[FIBO]], [[GLEIF]], [[OWL]], [[RDF]], [[Knowledge Graph]], [[Description Logic]]
- [[Class and Property]], [[Inference and Reasoning]], [[Financial Instrument]]
- [[Securities]], [[Derivatives]], [[Legal Entity]], [[ISO 20022]], [[XBRL]], [[FinRegOnt]]
