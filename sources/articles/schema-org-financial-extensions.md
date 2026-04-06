# Schema.org Financial Extensions

## Overview

**Full name:** Schema.org Financial Product Types
**Homepage:** https://schema.org/docs/financial.html
**Maintained by:** Schema.org Steering Group (Google, Microsoft, Yahoo, Yandex)
**FIBO alignment:** W3C FIBO Community Group — https://www.w3.org/community/fibo/
**Initial financial types:** Schema.org v3.0 (2016)
**Financial extension v3.2:** 2017
**Primary serialization:** JSON-LD

Schema.org is the dominant structured data vocabulary for the web, used to embed machine-readable metadata into web pages for search engine indexing and rich result display. Its financial extensions define a set of types and properties for describing financial products and services in a way that is both human-readable in web content and machine-interpretable by search engines and data consumers.

## Type Hierarchy

The Schema.org financial type system is organized under `FinancialProduct`, which itself extends `Service`. The primary subtype hierarchy is:

```
Thing
  └── Intangible
        └── Service
              └── FinancialProduct
                    ├── BankAccount
                    │     └── DepositAccount
                    ├── PaymentCard
                    │     ├── CreditCard
                    │     └── DebitCard (via PaymentCard + BankAccount)
                    ├── LoanOrCredit
                    │     ├── MortgageLoan
                    │     ├── StudentLoan
                    │     └── CreditCard (overlapping)
                    ├── InvestmentOrDeposit
                    │     ├── BrokerageAccount
                    │     └── DepositAccount
                    ├── PaymentService
                    └── CurrencyConversionService
```

`FinancialService` (distinct from `FinancialProduct`) covers organizations providing financial services, such as banks, insurance agencies, and accounting firms.

## Key Properties

Properties defined specifically for or commonly used with financial types:

- **`leiCode`** (Text): Legal Entity Identifier of the organization, linking to GLEIF's LEI registry. Enables machine-readable identification of financial institutions.
- **`interestRate`** (QuantitativeValue or Number): The interest rate applicable to a loan, deposit, or credit product.
- **`annualPercentageRate`** (QuantitativeValue or Number): APR including fees, as required in consumer lending disclosures.
- **`feesAndCommissionsSpecification`** (Text or URL): Human-readable or linked description of applicable fees.
- **`currency`** (Text): ISO 4217 currency code for the product.
- **`amount`** (MonetaryAmount or Number): Principal, credit limit, or deposit amount.
- **`provider`** (Organization or Person): The financial institution offering the product.
- **`offers`** (Offer): Links a `FinancialProduct` to specific pricing and availability terms via GoodRelations-derived Offer vocabulary.
- **`broker`** (Person or Organization): Intermediary arranging the financial product.

## Serialization Formats

Schema.org types can be expressed in three formats:

- **JSON-LD** (primary): Embeds structured data in HTML `<script type="application/ld+json">` blocks. Preferred by Google and most modern implementations due to separation from document markup.
- **Microdata:** Inline HTML attribute-based annotation (`itemscope`, `itemtype`, `itemprop`). Older approach, still supported.
- **RDFa:** Attribute-based RDF annotation compatible with standard RDF tooling. Used in contexts requiring full RDF graph integration.

## Alignment with FIBO

Schema.org's financial types were explicitly influenced by FIBO concepts during development. The W3C FIBO Community Group coordinates ongoing alignment:

- `BankAccount` aligns with FIBO's deposit account classes
- `LoanOrCredit` maps to FIBO loan and credit facility concepts
- `PaymentCard` corresponds to FIBO payment card instrument types
- `leiCode` property directly references the GLEIF LEI standard, which is also central to FIBO party identification

The alignment is semantic rather than formal — Schema.org does not import FIBO via `owl:imports`. However, JSON-LD contexts can be constructed to map Schema.org properties to FIBO IRIs for integration purposes.

## Relationships to Other Standards

- **FIBO:** Conceptual alignment; no formal OWL import relationship. W3C Community Group manages voluntary harmonization.
- **GoodRelations:** Schema.org's `Offer` and pricing vocabulary was directly integrated from GoodRelations in 2012. `FinancialProduct` as a service offering inherits this lineage.
- **LEI/GLEIF:** The `leiCode` property creates a direct machine-readable link to the GLEIF LEI dataset, enabling entity resolution.
- **ISO 4217:** Currency properties use ISO 4217 codes as values.
- **ISO 3166:** Country properties use ISO 3166 country codes for geographic scoping of financial products.
- **Open Banking / PSD2:** Some implementations use Schema.org types to describe open banking product APIs, though dedicated Open Banking API specifications (e.g., UK Open Banking Standard) define their own schemas.
