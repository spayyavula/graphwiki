# FIBO vs. Schema.org Financial

Two major ontology frameworks cover financial concepts: [[FIBO]], the industry-grade formal ontology maintained by the EDM Council, and [[Schema.org Financial]], the lightweight consumer-facing vocabulary published by the Schema.org community. They serve different audiences, operate at different levels of formalism, and are rarely in direct competition — but understanding when to use each is essential for financial knowledge engineering.

## Comparison Table

| Dimension | [[FIBO]] | [[Schema.org Financial]] |
|---|---|---|
| **Class count** | 2,436 classes (Q4 2025 production) | ~30 financial types |
| **Domain scope** | Full financial industry — instruments, entities, markets, contracts, derivatives, regulatory | Consumer-facing — price specs, offers, loans, currencies |
| **Logic layer** | [[OWL]] 2 DL — full description logic with restrictions, disjointness, cardinality | [[RDF]]Schema + [[OWL]] annotations — no DL axioms |
| **Serialization** | RDF/XML, Turtle, JSON-LD, N-Triples, [[SKOS]], CSV | JSON-LD (primary), Microdata, RDFa |
| **Reasoning support** | Full — HermiT, Pellet, FaCT++ | Minimal — no meaningful inference |
| **Governance** | EDM Council + OMG — financial industry experts | Schema.org community — web/search engine focus |
| **Primary adopters** | Banks, regulators, financial data vendors, research KGs | E-commerce sites, price comparison, web search |
| **Identifier integration** | [[FIGI]], [[GLEIF]] LEI, [[ISIN]], [[MIC]] | schema:identifier (generic) |
| **License** | MIT (content) | CC-BY 4.0 |
| **Maturity model** | Provisional → Production levels | Stable / draft labels |
| **Learning curve** | High — requires [[OWL]] and DL background | Low — familiar to web developers |
| **Linked with** | [[LSEG PermID]], [[GLEIF]], [[ISO 20022]], [[ISDA CDM]], [[FinRegOnt]] | [[GoodRelations]], open graph, structured data markup |

## What FIBO Covers

[[FIBO]] is organized into 10 domain modules, each independently importable:

- **FND (Foundations):** Dates, quantities, relations, measurement units
- **BE (Business Entities):** Corporations, partnerships, trusts — aligned with [[GLEIF]] L1/L2 ontologies
- **SEC (Securities):** Equities, debt, funds, structured products — maps to [[XBRL]] taxonomy concepts
- **DER (Derivatives):** Options, futures, swaps — reference layer for [[ISDA CDM]] and [[FpML]]
- **FBC (Financial Business and Commerce):** Accounts, trading, clearing, settlement
- **MD (Market Data):** Pricing, quotes, reference data
- **IND (Indices and Indicators):** Benchmarks (S&P 500, LIBOR successors)
- **LOAN:** Mortgages, consumer credit, loan facilities
- **BP (Business Process):** Workflows, lifecycle events
- **CAE (Corporate Actions and Events):** Dividends, splits, rights issues

Each module is a full [[OWL]] 2 DL ontology. The `FinancialInstrument` hierarchy alone spans dozens of subclasses with formal axioms distinguishing equities from debt by structural properties, not just labels.

## What Schema.org Financial Covers

[[Schema.org Financial]] focuses on the types useful for marking up web content about financial products:

- `LoanOrCredit` — personal and business loans, mortgages
- `InvestmentOrDeposit` — bank deposits, investment accounts
- `MoneyTransfer` — payment and wire transfer services
- `CurrencyConversionService` — FX services
- `PriceSpecification` — structured price data for offers
- `MonetaryAmount` — currency-qualified numeric values

These types are designed for JSON-LD embedding in web pages so that search engines can display rich results for financial product queries. They carry no formal logical constraints — a `LoanOrCredit` individual is not formally disjoint from an `InvestmentOrDeposit`; the vocabulary relies on human judgment for correct usage.

The connection to [[GoodRelations]] is notable: Schema.org absorbed the GoodRelations e-commerce ontology, and its `PriceSpecification` and `Offer` types directly derive from GoodRelations, giving it solid coverage for pricing and product offers even if financial instrument semantics are thin.

## When to Use FIBO

Use [[FIBO]] when:

- You are building a **financial [[Knowledge Graph]]** for industry, regulatory, or research purposes
- You need **[[Inference and Reasoning|automated reasoning]]** to classify instruments, validate data, or infer relationships
- Your graph must **interoperate** with other FIBO-aligned systems (GLEIF, PermID, ISDA CDM)
- You are modeling **[[Financial Instrument|financial instruments]]** with precision — the difference between an American call option and a European put option matters in your domain
- You need **[[SPARQL]] queries** to answer complex financial questions across multiple entity types
- You are consuming or publishing **[[XBRL]]** data and need to map GAAP concepts to formal ontology classes
- Regulatory compliance requires **formally grounded** definitions with governance provenance

FIBO is the right choice for any project where semantic precision, interoperability, and reasoning are requirements. Its high learning curve is the cost of its expressiveness.

## When to Use Schema.org Financial

Use [[Schema.org Financial]] when:

- You are **marking up web pages** about financial products for search engine rich results
- Your primary goal is **SEO** and structured data discoverability, not knowledge graph inference
- Your team is familiar with **JSON-LD and web development** but not OWL ontology engineering
- The financial domain is **peripheral** to your application and you need a quick, widely-supported vocabulary
- You are building a **consumer-facing** product comparison or price aggregation site

Schema.org Financial is the right choice when you need something that works today with minimal setup and your audience is search engines and web crawlers, not OWL reasoners.

## Hybrid Approaches

In practice, the two can coexist. A financial [[Knowledge Graph]] might:

1. Use [[FIBO]] as the backbone ontology for internal knowledge representation and reasoning
2. Generate [[Schema.org Financial]] JSON-LD annotations for public-facing web pages, mapping internal FIBO individuals to Schema.org types for SEO purposes

This mirrors how [[XBRL]] and [[RDF]] coexist: XBRL handles the regulatory reporting layer; RDF enables semantic integration. Similarly, [[Schema.org Financial]] handles the web discoverability layer; [[FIBO]] handles the knowledge engineering layer.

## See Also

- [[FIBO]], [[Schema.org Financial]], [[OWL]], [[RDF]], [[Linked Data]]
- [[Financial Ontology]], [[GoodRelations]], [[Financial Instrument]]
- [[XBRL]], [[GLEIF]], [[ISDA CDM]], [[FpML]]
- [[Inference and Reasoning]], [[SPARQL]], [[Financial Knowledge Graph]]
