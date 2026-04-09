# Market Microstructure

**Definition:** The study of how trading mechanisms, order-matching rules, market participants, and information flow determine price formation and execution outcomes in financial markets.

**Also known as:** Trading microstructure, market design, price-discovery mechanics.

## Overview
[coverage: medium]

Market microstructure explains what happens between the high-level idea of a market and the concrete act of a trade. It asks how prices are formed, how liquidity appears and disappears, how information enters the market, and how the rules of a venue shape who trades with whom and at what cost. In practical terms, it is the layer that determines whether an order is filled immediately, partially, expensively, or not at all.

For [[Algorithmic Trading]], market microstructure is not optional background knowledge. Execution algorithms operate inside specific mechanisms such as continuous limit-order books, auction openings, and fragmented venue networks. Concepts such as bid-ask spread, queue priority, order imbalance, latency, and adverse selection are all microstructure concepts. Without them, it is impossible to reason coherently about execution quality or high-frequency behavior.

Market microstructure is also a natural fit for graph-based modeling. Orders, venues, participants, instruments, and events form a network of typed relationships that can be represented inside a [[Financial Knowledge Graph]]. This matters for surveillance, because many suspicious patterns such as spoofing or layering are defined not by a single trade but by a sequence of strategically placed and canceled orders across time.

## Key Properties

- Focuses on price discovery, liquidity, spreads, order priority, and information asymmetry
- Treats venue rules and market design as first-class explanatory variables
- Closely tied to [[Limit Order Book]] dynamics and execution-cost models
- Provides the conceptual basis for [[High-Frequency Trading]] analysis
- Supports surveillance and compliance monitoring of trading patterns

## Relationships

- **Is-a:** Finance subfield, trading-systems analysis layer
- **Has-part:** Order matching, price discovery, queue dynamics, spread formation, information flow
- **Related:** [[Algorithmic Trading]], [[Limit Order Book]], [[High-Frequency Trading]], [[Market Data]], [[Stock Exchange]]
- **Used-by:** Execution researchers, market makers, exchanges, regulators, surveillance teams

## Examples

- Measuring how order-book depth changes after earnings news arrives
- Comparing price discovery across two venues listing the same instrument
- Studying how cancellation behavior changes queue priority and execution probability

## Sources

- `sources/web-clips/algo-trading-academic-source-pack.md`
- `sources/papers/ontology-stock-market-monitoring-surveillance.md`

## See Also

- [[Algorithmic Trading]]
- [[Limit Order Book]]
- [[High-Frequency Trading]]
- [[Market Data]]
- [[Stock Exchange]]