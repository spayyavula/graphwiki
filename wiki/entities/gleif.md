# GLEIF

**Type:** Organization / Ontology Suite / Standard

**Definition:** The Global Legal Entity Identifier Foundation — the operational body overseeing the ISO 17442 LEI system, publishing a suite of 7 [[OWL]] ontologies for machine-readable [[Legal Entity]] identification, ownership, and registration data.

## Overview

The Legal Entity Identifier (LEI) is a 20-character ISO 17442-compliant alphanumeric code assigned to any organization participating in financial transactions. Developed after the 2008 financial crisis — when regulators identified the inability to identify counterparties across jurisdictions as a systemic amplifier — the LEI system was endorsed by the G20 in 2012 and GLEIF was established in 2014 as the global operational body, headquartered in Basel. GLEIF does not issue LEIs directly; it accredits a network of Local Operating Units (LOUs) and maintains the authoritative Global LEI Index.

GLEIF publishes a formal [[Ontology]] suite of 7 [[OWL]] ontologies at `https://www.gleif.org/ontology/v1.0/`, available in JSON-LD, [[RDF]]/XML, N-Triples, and Turtle. The suite covers the complete LEI data model: Base (shared foundational classes), L1 "Who is Who" (entity identity, name, address, registration), L2 "Who Owns Whom" (direct and ultimate ownership/control relationships), L2Parent (parent relationship definitions), EntityLegalForm (LLC, PLC, GmbH, and other legal form codes), RegistrationAuthority (business registry identifiers), and ReportingException (entities exempt from L2 disclosure). This [[Linked Data]] publication makes GLEIF data directly integrable into RDF triple stores and [[SPARQL]] query environments without transformation.

GLEIF sits at the intersection of entity identification and financial ontology. [[FIBO]]'s `LegalEntity` class hierarchy directly references GLEIF's L1 ontology; FIBO uses LEI as the preferred identifier for legal entities and maps FIBO's L2 for ownership structures. [[Schema.org Financial]]'s `leiCode` property creates a machine-readable web link to GLEIF's registry from any `schema:Organization`. [[FIGI]] and GLEIF have coordinated on LEI-to-FIGI mapping guidance, linking entity identity to the instruments they issue. LEI is mandated by MiFID II/MiFIR, EMIR, Dodd-Frank, and Basel III, making GLEIF data a compliance cornerstone across jurisdictions.

## Key Components

- **L1 Ontology (Who is Who):** `LegalEntity`, `LEIRegistration`, `EntityStatus`, `ValidationSources`
- **L2 Ontology (Who Owns Whom):** `RelationshipRecord`, direct/ultimate parent relationships
- **EntityLegalForm:** Legal form classification codes per jurisdiction
- **RegistrationAuthority:** Business registry identifiers and metadata
- **LEI structure:** Characters 1–4 (LOU prefix), 5–18 (entity ID), 19–20 (ISO 7064 check digits)
- **BIC-to-LEI mapping:** SWIFT BIC codes mapped to LEIs via GLEIF mapping files
- **GLEIO:** Community alternative OWL representation with richer axiomatization

## OWL/RDF Availability

All ontologies published in JSON-LD, RDF/XML, N-Triples, and Turtle:

- Ontology suite root: https://www.gleif.org/ontology/v1.0/
- L1 OWL (RDF/XML): https://www.gleif.org/ontology/v1.0/L1/ontology.xml
- L2 OWL (RDF/XML): https://www.gleif.org/ontology/v1.0/L2/ontology.xml
- GLEIO (community): https://github.com/LEIdotINFO/GLEIO
- Global LEI Index: https://search.gleif.org/

## Relationships

- **Provides:** ISO 17442 LEI codes as [[Linked Data]]
- **Aligned with:** [[FIBO]] `LegalEntity` hierarchy (L1/L2 mapping)
- **Referenced by:** [[Schema.org Financial]] (`leiCode`), [[ISO 20022]] (party identification), [[FIGI]] (issuer-to-instrument mapping)
- **Used in:** MiFID II, EMIR, Dodd-Frank, Basel III regulatory reporting
- **Community tools:** [[GLEIO]] alternative OWL implementation

## Key URLs

- GLEIF Homepage: https://www.gleif.org/
- Golden Copy data download: https://www.gleif.org/en/lei-data/gleif-golden-copy
- ISO 17442: https://www.iso.org/standard/78829.html

## Sources

- `sources/articles/gleif-legal-entity-identifier.md`

## See Also

- [[OWL]], [[RDF]], [[Linked Data]], [[Ontology]]
- [[FIBO]], [[Legal Entity]], [[Schema.org Financial]], [[FIGI]]
