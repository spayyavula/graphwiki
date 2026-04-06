# Schema.org Financial

**Type:** Ontology Extension / Vocabulary

**Definition:** The financial product and service extensions to Schema.org — the dominant structured data vocabulary for the web — defining types such as `FinancialProduct`, `LoanOrCredit`, `BankAccount`, and `PaymentCard` with properties including `leiCode` linking to [[GLEIF]], serializable as [[RDF]]a, Microdata, and JSON-LD.

## Overview

Schema.org is the dominant structured data vocabulary for the web, maintained by a steering group including Google, Microsoft, Yahoo, and Yandex. Its financial extensions, introduced in Schema.org v3.0 (2016) and refined in v3.2 (2017), define machine-readable types for financial products and services used to embed metadata in web pages for search engine indexing, rich result display, and data integration. The W3C FIBO Community Group coordinates ongoing alignment between Schema.org financial types and [[FIBO]], making Schema.org a web-scale bridge from consumer-facing financial product descriptions into the formal ontology ecosystem.

The type hierarchy is rooted at `FinancialProduct`, extending `Service` under `Intangible`. Key subtypes include `BankAccount` (with `DepositAccount`), `PaymentCard` (with `CreditCard`), `LoanOrCredit` (with `MortgageLoan` and `StudentLoan`), `InvestmentOrDeposit` (with `BrokerageAccount`), `PaymentService`, and `CurrencyConversionService`. The distinct `FinancialService` type covers organizations — banks, insurance agencies, accounting firms — rather than products. Key properties include `leiCode` (Text, linking an `Organization` to its [[GLEIF]] ISO 17442 LEI for machine-readable entity disambiguation), `interestRate` and `annualPercentageRate` (`QuantitativeValue` or Number), `feesAndCommissionsSpecification`, `currency` (ISO 4217 codes), `amount` (`MonetaryAmount`), `provider`, and `offers` — the last inheriting the [[GoodRelations]] `Offer` pattern integrated into Schema.org in 2012.

The alignment with [[FIBO]] is semantic rather than formal: Schema.org does not import [[FIBO]] via `owl:imports`, but the W3C FIBO Community Group manages voluntary harmonization. `BankAccount` aligns with FIBO's deposit account classes; `LoanOrCredit` maps to FIBO loan and credit facility concepts; `PaymentCard` corresponds to FIBO payment card instrument types; and `leiCode` directly references the [[GLEIF]] LEI standard central to FIBO party identification. JSON-LD contexts can be constructed to map Schema.org property IRIs to [[FIBO]] [[URI and IRI|IRIs]] for integration purposes. Schema.org supports three serializations: JSON-LD (preferred for separation from markup), Microdata (inline HTML), and [[RDF]]a (for full RDF graph integration with [[OWL]] tooling).

## Key Components

- **`FinancialProduct`:** Root type extending `Service`; subtypes: `BankAccount`, `PaymentCard`, `LoanOrCredit`, `InvestmentOrDeposit`, `PaymentService`
- **`FinancialService`:** Organization type (banks, insurance agencies, accounting firms)
- **`leiCode`:** Links `Organization` to [[GLEIF]] ISO 17442 LEI — primary entity resolution property
- **`interestRate` / `annualPercentageRate`:** Rate properties for loan and deposit products
- **`offers` / `Offer`:** [[GoodRelations]]-derived offering pattern for pricing and availability
- **`currency`:** ISO 4217 currency codes for product denomination
- **Serializations:** JSON-LD (primary), Microdata, [[RDF]]a

## OWL/RDF Availability

Schema.org vocabulary is available as RDF/OWL:

- Full schema RDF/OWL: https://schema.org/version/latest/schemaorg-current-https.jsonld
- Financial types: https://schema.org/docs/financial.html
- W3C FIBO Community Group: https://www.w3.org/community/fibo/

## Relationships

- **Maintained by:** Schema.org Steering Group (Google, Microsoft, Yahoo, Yandex)
- **Aligned with:** [[FIBO]] (W3C Community Group; semantic, not formal import)
- **Integrates:** [[GoodRelations]] (Offer/pricing vocabulary absorbed 2012)
- **References:** [[GLEIF]] (via `leiCode` property), ISO 4217 (currency), ISO 3166 (country)
- **Serializable as:** JSON-LD, [[RDF]]a, Microdata

## Key URLs

- Financial types: https://schema.org/docs/financial.html
- Full schema RDF: https://schema.org/version/latest/schemaorg-current-https.jsonld
- W3C FIBO Community Group: https://www.w3.org/community/fibo/

## Sources

- `sources/articles/schema-org-financial-extensions.md`

## See Also

- [[RDF]], [[OWL]], [[Linked Data]], [[Ontology]]
- [[FIBO]], [[GoodRelations]], [[GLEIF]], [[W3C]]
