# Stock Exchange

**Definition:** A regulated marketplace where [[Securities]] and other [[Financial Instrument]]s are listed and traded, modeled in ontologies as a [[Legal Entity]] subclass with venue-specific properties including MIC codes and trading rules.

**Also known as:** Securities exchange, trading venue, bourse, equity market.

## Overview

Stock exchanges are a critical node type in any [[Financial Ontology]] because they sit at the intersection of instrument, entity, and regulatory modeling. In [[FIBO]], the `StockExchange` class is a subclass of `FinancialMarket`, which is itself situated in the FBC (Financial Business and Commerce) module. An exchange is simultaneously a [[Legal Entity]] (with a LEI, a jurisdiction, a registered name), an operational venue (with trading hours, listed instruments, clearing relationships), and a regulatory subject (licensed by a national securities regulator). This multi-role nature requires careful [[Class and Property]] design using [[OWL]] to avoid conflating the institution with the trading venue — FIBO distinguishes `Exchange` from `ExchangeOperator` for precisely this reason.

The primary identifier for trading venues is the MIC (Market Identifier Code) under ISO 10383 — a 4-character code maintained by ISO and referenced throughout [[FIBO]], [[Financial Identifier]] standards, and regulatory reporting frameworks. MIC codes appear in [[FIGI]] assignments (every exchange-specific FIGI references its MIC), in MiFID II transaction reports, and in [[SPARQL]] queries over [[Financial Knowledge Graph]] data. A single exchange group (e.g., Euronext) may operate multiple trading venues, each with its own MIC — FIBO's `ExchangeGroup` class captures this hierarchical relationship.

Exchanges are also major nodes in knowledge enrichment via [[Wikidata]] and [[DBpedia]]. Wikidata items for major exchanges carry MIC codes, LEIs, Wikidata entity IDs, and links to listed companies — making them useful federation targets when building a [[Financial Knowledge Graph]]. A [[SPARQL]] federated query can join FIBO's exchange ontology with Wikidata's exchange items using `owl:sameAs` or shared MIC literals, enriching the graph with historical founding dates, regulatory authority links, and index associations that FIBO does not model directly.

## Key Properties

- `hasMIC` — ISO 10383 Market Identifier Code (4 characters)
- `hasLEI` — ISO 17442 identifier as a [[Legal Entity]]
- `hasJurisdiction` — country/region of regulatory oversight
- `operatesUnderRegulator` — links to national securities regulator
- `lists` — links to `ListedSecurity` instances traded on the venue
- `operatesAs` — distinguishes operating entity from market facility

## Relationships

- **Is-a:** [[Legal Entity]], financial market, trading venue
- **Has-part:** Trading segments, listing segments, clearing arrangements
- **Related:** [[Financial Instrument]], [[Securities]], [[Market Data]], [[Financial Identifier]], [[FIBO]]
- **Used-by:** [[Financial Knowledge Graph]] platforms, regulatory reporting, index construction, [[FIGI]] assignment

## Examples

- NYSE: MIC `XNYS`, LEI `549300BNPPIFNRG5MY62`, modeled as `fibo-fbc-fi-fi:NewYorkStockExchange`
- London Stock Exchange: MIC `XLON`, Wikidata Q171240, DBpedia `dbr:London_Stock_Exchange`
- Euronext Paris: MIC `XPAR`, part of Euronext group modeled as `ExchangeGroup` with multiple venue MICs

## Sources

- `sources/articles/fibo-financial-industry-business-ontology.md`
- `sources/web-clips/financial-identifier-standards.md`
- `sources/papers/finkario-dual-structure-financial-kg.md`

## See Also

- [[FIBO]], [[Financial Instrument]], [[Securities]], [[Market Data]], [[Wikidata]]
- [[DBpedia]], [[Financial Identifier]], [[Knowledge Graph]], [[Legal Entity]], [[Financial Knowledge Graph]]
