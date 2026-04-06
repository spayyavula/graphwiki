# Market Data

**Definition:** Time-stamped prices, rates, quotes, and indices associated with [[Financial Instrument]]s and markets, modeled in [[FIBO]]'s MD (Market Data) domain module as [[OWL]] classes with temporal and provenance properties.

**Also known as:** Reference data, pricing data, real-time data, financial time series.

## Overview

Market data occupies a distinct position in [[Financial Ontology]] modeling because it combines the static world of reference data (what instrument is this? who issues it?) with the dynamic world of continuously updating values (what is its price right now?). [[FIBO]]'s MD module addresses this by defining classes for `PriceQuote`, `MarketRate`, `InterestRateBenchmark`, and `Index` alongside the temporal and provenance properties needed to situate each value in time and attribute it to a source. The module covers spot prices, bid/ask quotes, settlement prices, index levels, and benchmark rates such as SOFR, EURIBOR, and SONIA — all of which have regulatory significance as reference rates for [[Derivatives]] contracts.

The temporal dimension is the most challenging aspect of market data in [[Knowledge Graph]]s. A price observation is not simply a triple `<instrument> hasPrice <value>` — it must carry a timestamp, a source (exchange feed, data vendor, central bank), a currency, and sometimes a bid/ask spread. [[RDF]] representations use named graphs or reification to attach these metadata properties to individual [[Triple]]s. The FinDKG project demonstrates a temporally-resolved triple pattern where each edge carries a time range, enabling [[SPARQL]] queries that reconstruct the state of the graph at any historical point. [[FIBO]] FND (Foundations) provides the date/time and quantity primitives that MD builds upon.

Market data is also the bridge between [[FIBO]]'s ontological layer and operational data pipelines. A [[Financial Knowledge Graph]] that combines FIBO instrument and entity nodes with live market data feeds becomes a real-time semantic layer: [[SPARQL]] queries can join instrument classification, issuer identity, ownership structure, and current pricing in a single traversal. [[Stock Exchange]] nodes provide venue context for price observations, while [[Securities]] and [[Derivatives]] nodes supply the instrument identity. Index-linked [[Derivatives]] require `tracksIndex` relationships from instruments to benchmark index nodes, which themselves carry historical level data as timestamped [[Triple]]s.

## Key Properties

- `hasPrice` — numeric value with currency and timestamp
- `hasBidPrice` / `hasAskPrice` — two-sided quote
- `hasSource` — data vendor or exchange feed attribution
- `asOfDate` — observation timestamp
- `tracksIndex` — links index-linked instruments to their reference index
- `hasBenchmarkRate` — links floating-rate instruments to reference rates (SOFR, EURIBOR)

## Relationships

- **Is-a:** Reference data, time series observation
- **Has-part:** Spot prices, benchmark rates, index levels, volatility surfaces
- **Related:** [[Financial Instrument]], [[Securities]], [[Derivatives]], [[Stock Exchange]], [[FIBO]]
- **Used-by:** Trading systems, risk engines, [[Financial Knowledge Graph]] platforms, regulatory valuation reports

## Examples

- A FIBO `PriceQuote` individual: Apple stock at USD 185.42 bid / 185.43 ask on 2025-04-04 via XNAS feed
- SOFR rate observation: `fibo-ind-ir-ir:SOFR hasValue "5.31"^^xsd:decimal asOfDate "2025-04-04"`
- S&P 500 index level triple stored as a named graph with provenance pointing to S&P Global as data source

## Sources

- `sources/articles/fibo-financial-industry-business-ontology.md`
- `sources/papers/findkg-dynamic-knowledge-graph.md`

## See Also

- [[FIBO]], [[Financial Instrument]], [[Knowledge Graph]], [[Triple]], [[SPARQL]]
- [[Securities]], [[Derivatives]], [[Stock Exchange]], [[Financial Knowledge Graph]]
