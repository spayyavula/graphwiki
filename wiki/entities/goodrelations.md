# GoodRelations

**Type:** Ontology

**Definition:** GoodRelations — The Web Ontology for E-Commerce — a lightweight, stable [[OWL]] DL ontology for describing commercial offerings on the web, providing the foundational vocabulary for business entities, offerings, price specifications, and payment methods, integrated into [[Schema.org Financial]] in 2012.

## Overview

GoodRelations is a lightweight [[OWL]] ontology designed to make commercial offering data machine-readable and semantically rich. Developed by Martin Hepp at Universität der Bundeswehr München and stable since 2008 under a Creative Commons Attribution 3.0 license, it provides a precise model of commercial transactions: a `gr:BusinessEntity` makes a `gr:Offering` for a `gr:ProductOrService` under conditions specified by `gr:PriceSpecification` and accepted `gr:PaymentMethod` values. This pattern applies equally to physical goods, services, and financial products, making GoodRelations a surprisingly powerful vocabulary for describing bank accounts, loans, payment cards, and investment products in [[Linked Data]] and knowledge graph contexts.

The ontology uses [[OWL]] DL constructs and is compatible with standard [[OWL]] reasoners. The v1 namespace (`http://purl.org/goodrelations/v1#`) has been stable since 2008, making it safe for long-term production use in [[Knowledge Graph]] applications. In 2012, the Schema.org Steering Group formally integrated GoodRelations vocabulary: `gr:BusinessEntity` became `schema:Organization`, `gr:Offering` became `schema:Offer`, `gr:PriceSpecification` became `schema:PriceSpecification`, and `gr:QuantitativeValue` became `schema:QuantitativeValue`. Both the `gr:` namespace and the absorbed `schema:` terms remain valid and usable interchangeably through JSON-LD context mapping, preserving backward compatibility for existing GoodRelations deployments.

For financial product applications, GoodRelations maps naturally: a bank offering a savings account is a `gr:BusinessEntity` making a `gr:Offering` of a `gr:ProductOrServiceModel` with a `gr:UnitPriceSpecification` carrying the interest rate as a typed literal. Loan terms are expressed via `gr:QuantitativeValue` (duration in months), `gr:UnitPriceSpecification` (APR), and eligible region constraints. Payment card offerings use `gr:PaymentMethod` enumerations and `gr:PaymentChargeSpecification` for annual fees. Rate comparisons across lenders are modeled as multiple `gr:Offering` instances linked to the same `gr:ProductOrServiceModel` — a pattern that influenced [[Schema.org Financial]]'s `FinancialProduct` and `LoanOrCredit` types. [[FIBO]] financial instrument offering structures are conceptually consistent with GoodRelations `gr:Offering` patterns, though no formal OWL alignment has been published.

## Key Components

- **`gr:BusinessEntity`:** Commercial actor (organization or individual); maps to `schema:Organization`
- **`gr:Offering`:** Central class — a promise to transfer a product/service under conditions; maps to `schema:Offer`
- **`gr:PriceSpecification`:** Pricing structure; subclasses: `gr:UnitPriceSpecification`, `gr:DeliveryChargeSpecification`, `gr:PaymentChargeSpecification`
- **`gr:QuantitativeValue`:** Structured numeric value with unit; carries loan terms, interest rates, credit limits
- **`gr:ProductOrService`:** Anything offerable; `gr:ProductOrServiceModel` for product type definitions
- **`gr:PaymentMethod`:** Enumeration — `gr:VISA`, `gr:MasterCard`, `gr:Cash`, `gr:DirectDebit`, `gr:Invoice`
- **`gr:BusinessFunction`:** `gr:Sell`, `gr:Buy`, `gr:LeaseOut`, `gr:ProvideService`, and others

## OWL/RDF Availability

Native [[OWL]] ontology, stable since 2008:

- OWL/RDF XML: http://www.heppnetz.de/ontologies/goodrelations/v1.owl
- Namespace URI: http://purl.org/goodrelations/v1#
- Turtle: available via content negotiation at namespace URI
- RDFS-only version: available for simpler deployments

## Relationships

- **Integrated into:** [[Schema.org Financial]] (2012; `gr:Offering` → `schema:Offer`, etc.)
- **Conceptually consistent:** [[FIBO]] financial instrument offering structures (no formal OWL alignment)
- **Supports identifiers:** DUNS, tax IDs, LEI (from [[GLEIF]]) for `gr:BusinessEntity`
- **Compatible with:** vCard, FOAF (contact enrichment), Dublin Core (provenance)
- **GS1 / GTIN:** Product identification for physical goods via GoodRelations

## Key URLs

- Homepage: http://www.heppnetz.de/ontologies/goodrelations/v1.html
- OWL file: http://www.heppnetz.de/ontologies/goodrelations/v1.owl
- Namespace: http://purl.org/goodrelations/v1#

## Sources

- `sources/articles/goodrelations-ecommerce-ontology.md`

## See Also

- [[OWL]], [[RDF]], [[Ontology]], [[Linked Data]], [[W3C]]
- [[Schema.org Financial]], [[FIBO]]
