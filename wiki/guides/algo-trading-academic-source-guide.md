# Algo Trading Academic Source Guide

**Definition:** A starter guide to the academic and domain-reference sources that best support the Algo Trading branch of GraphWiki.

## Overview
[coverage: medium]

Algorithmic trading is not just about trading strategies. It sits at the intersection of market microstructure, execution optimization, limit-order-book dynamics, messaging standards, and market surveillance. For GraphWiki, the most useful starter source base therefore combines quantitative execution papers with infrastructure and semantics material from the trading stack.

This guide highlights a first academic source pack built from university-hosted material spanning NYU, MIT, Stanford, Berkeley, Princeton, Cornell, and Yale. Those sources are then complemented by repository-backed standards and ontology captures, especially [[FIX Protocol]] and the stock-market surveillance ontology. The QuantInsti and Quantra GitHub Algo Trading Map is also useful here as a curriculum scaffold: it makes explicit that the branch should cover data, strategy research, portfolio and risk, backtesting, execution, live trading, and performance evaluation rather than stopping at microstructure alone.

## Recommended Reading Order
[coverage: medium]

1. Start with the NYU practitioner's guide to frame what algorithmic trading systems are trying to optimize.
2. Read the MIT and Princeton execution papers to understand formal execution-cost minimization.
3. Use the Stanford and Cornell order-book sources to understand how orders interact in the market microstructure layer.
4. Read the Berkeley and NYU HFT papers to connect speed-driven trading with price discovery and market quality.
5. Use the QuantInsti or Quantra roadmap to place those papers inside a broader learning sequence that includes research, simulation, execution, and production.
6. Finish with [[FIX Protocol]] and the stock-market surveillance ontology to connect trading mechanics with operational message standards and semantic monitoring.

## Source Clusters
[coverage: medium]

- **Execution optimization:** MIT and Princeton execution papers
- **Order-book mechanics:** Stanford order-book materials and Cornell limit-order-book paper
- **High-frequency trading:** Berkeley, NYU, and Yale sources
- **Roadmap structure:** QuantInsti and Quantra GitHub learning map for staged topic coverage
- **Infrastructure and semantics:** [[FIX Protocol]], surveillance ontology, LLM-based stock-market KG construction

## How To Use This Guide In GraphWiki
[coverage: medium]

- Use it to define the topic boundary between execution algorithms, market microstructure, and surveillance-oriented knowledge modeling.
- Use the GitHub roadmap to decide which new GraphWiki pages belong in the branch even when the university papers are narrower than the overall learning path.
- Use the Stanford and Cornell materials for future explainer pages on order books, limit orders, market orders, and market making.
- Use the repository's existing finance ontology and messaging sources when the academic sources describe trading mechanics but not semantic interoperability.

## Sources

- `sources/web-clips/algo-trading-academic-source-pack.md`
- `sources/articles/fix-protocol-financial-information-exchange.md`
- `sources/papers/ontology-stock-market-monitoring-surveillance.md`
- `sources/papers/knowledge-graph-construction-stock-markets-llm.md`
- https://github.com/QuantInsti/Algo-Trading-Map
- https://github.com/quantra-go-algo/Algo-Trading-Map

## See Also

- [[Financial Knowledge Graph]]
- [[Market Data]]
- [[Stock Exchange]]
- [[FIX Protocol]]
- [[Algo Trading Roadmap]]
- [[Building a Financial Knowledge Graph]]