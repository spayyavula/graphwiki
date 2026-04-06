# GoodRelations — Web Ontology for E-Commerce

## Overview

**Full name:** GoodRelations — The Web Ontology for E-Commerce
**Acronym:** GR
**Homepage:** http://www.heppnetz.de/ontologies/goodrelations/v1.html
**OWL file:** http://www.heppnetz.de/ontologies/goodrelations/v1.owl
**Namespace prefix:** `gr:`
**Namespace URI:** `http://purl.org/goodrelations/v1#`
**Maintained by:** Martin Hepp, Universität der Bundeswehr München
**Stable since:** 2008
**Integrated into Schema.org:** 2012
**License:** Creative Commons Attribution 3.0 (CC BY 3.0)

GoodRelations is a lightweight, stable OWL ontology for describing commercial offerings on the web. Designed to make e-commerce data machine-readable and semantically rich, it provides the foundational vocabulary for expressing who sells what, under what conditions, at what price, and via which payment methods. Its core design principle is that a commercial transaction involves a business entity making an offering for a product or service, subject to delivery and payment terms — a model that applies equally to physical goods, services, and financial products.

## Core Classes

**`gr:BusinessEntity`**
Represents any commercial actor — an organization or individual that buys or sells. Maps to `schema:Organization` and `schema:Person` in Schema.org. Can carry identifiers such as DUNS, tax IDs, or (in financial contexts) LEI codes.

**`gr:Offering`**
The central class. An offering is a promise by a business entity to transfer some product or service under certain conditions. Properties of an offering include price, availability, valid date range, eligible region, and warranty. Financial products such as mortgage loans, deposit accounts, and investment products are naturally modeled as offerings with specific rate and fee terms.

**`gr:PriceSpecification`**
Represents a pricing structure. Subclasses include:
- `gr:UnitPriceSpecification` — a per-unit price with currency
- `gr:DeliveryChargeSpecification` — shipping or delivery cost
- `gr:PaymentChargeSpecification` — surcharges by payment method

For financial products, `gr:UnitPriceSpecification` can carry interest rates, annual fees, or origination costs as typed literal values.

**`gr:PaymentMethod`**
An enumeration of accepted payment methods including `gr:VISA`, `gr:MasterCard`, `gr:Cash`, `gr:DirectDebit`, `gr:Invoice`, and others. Extensible for financial product contexts.

**`gr:QuantitativeValue`**
A structured value pairing a numeric amount with a unit of measure. Used for quantities, durations, and rates. In financial applications, this class carries loan terms (e.g., 360 months), interest rates (e.g., 3.75 percent per annum), and credit limits.

**`gr:ProductOrService`**
The superclass for anything that can be offered. Subclasses include `gr:SomeItems` (actual inventory) and `gr:ProductOrServiceModel` (a product type or model definition). Financial product types such as "30-year fixed-rate mortgage" are naturally modeled as `gr:ProductOrServiceModel` instances.

**`gr:BusinessFunction`**
An enumeration covering the function of an offering: `gr:Sell`, `gr:Buy`, `gr:LeaseOut`, `gr:Repair`, `gr:Maintain`, `gr:ProvideService`, `gr:Dispose`. Financial services primarily use `gr:Sell` and `gr:ProvideService`.

## Financial Product Applications

GoodRelations was designed for general commerce but applies directly to financial product descriptions:

- A bank offering a savings account is a `gr:BusinessEntity` making a `gr:Offering` of a `gr:ProductOrServiceModel` (the account type) with a `gr:UnitPriceSpecification` carrying the interest rate
- Loan products can specify term duration via `gr:QuantitativeValue`, minimum/maximum amounts, and eligibility regions
- Payment card offerings can use `gr:PaymentMethod` enumerations and `gr:PaymentChargeSpecification` for annual fees
- Rate comparisons across multiple lenders are naturally expressed as multiple `gr:Offering` instances linked to the same `gr:ProductOrServiceModel`

This pattern was influential in the design of Schema.org's `FinancialProduct` and `LoanOrCredit` types, which absorbed GoodRelations concepts when the ontology was integrated in 2012.

## Integration with Schema.org

In 2012, the Schema.org Steering Group formally integrated GoodRelations vocabulary. Key mappings include:

| GoodRelations | Schema.org |
|---|---|
| `gr:BusinessEntity` | `schema:Organization` |
| `gr:Offering` | `schema:Offer` |
| `gr:PriceSpecification` | `schema:PriceSpecification` |
| `gr:UnitPriceSpecification` | `schema:UnitPriceSpecification` |
| `gr:QuantitativeValue` | `schema:QuantitativeValue` |
| `gr:PaymentMethod` | `schema:PaymentMethod` |

The GoodRelations namespace remains valid and widely used. Both `gr:` and `schema:` terms can be used interchangeably in JSON-LD through context mapping.

## OWL/RDF Availability

GoodRelations is a native OWL ontology, published in multiple RDF serializations:

- **OWL/RDF XML:** http://www.heppnetz.de/ontologies/goodrelations/v1.owl
- **Turtle:** Available via content negotiation at the namespace URI
- **RDFS:** A lightweight RDFS-only version is available for simpler deployments

The ontology uses OWL DL constructs and is compatible with standard OWL reasoners. It is stable — the v1 namespace has not changed since 2008, making it safe for long-term use in production knowledge graphs.

## Relationships to Other Standards

- **Schema.org:** GoodRelations classes were directly absorbed into Schema.org in 2012; `schema:Offer` and `schema:PriceSpecification` are effectively GoodRelations concepts
- **FIBO:** No formal alignment, but GoodRelations `gr:Offering` patterns are conceptually consistent with FIBO financial instrument offering structures
- **GS1 / GTIN:** GoodRelations supports product identification via GTIN, EAN, and other GS1 identifiers for physical goods
- **vCard / FOAF:** BusinessEntity descriptions can be enriched with vCard or FOAF contact and identity properties
- **Dublin Core:** `gr:Offering` and product descriptions commonly use DC terms for provenance and metadata
