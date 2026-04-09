# Algo Trading Academic Source Guide

**Definition:** A starter guide to the academic and domain-reference sources that best support the Algo Trading branch of GraphWiki.

## Overview
[coverage: medium]

Algorithmic trading is not just about trading strategies. It sits at the intersection of market microstructure, execution optimization, limit-order-book dynamics, messaging standards, and market surveillance. For GraphWiki, the most useful starter source base therefore combines quantitative execution papers with infrastructure and semantics material from the trading stack.

This guide highlights a first academic source pack built from university-hosted material spanning NYU, MIT, Stanford, Berkeley, Princeton, Cornell, and Yale. Those sources are then complemented by repository-backed standards and ontology captures, especially [[FIX Protocol]] and the stock-market surveillance ontology.

## Recommended Reading Order
[coverage: medium]

1. Start with the NYU practitioner's guide to frame what algorithmic trading systems are trying to optimize.
2. Read the MIT and Princeton execution papers to understand formal execution-cost minimization.
3. Use the Stanford and Cornell order-book sources to understand how orders interact in the market microstructure layer.
4. Read the Berkeley and NYU HFT papers to connect speed-driven trading with price discovery and market quality.
5. Finish with [[FIX Protocol]] and the stock-market surveillance ontology to connect trading mechanics with operational message standards and semantic monitoring.

## Source Clusters
[coverage: medium]

- **Execution optimization:** MIT and Princeton execution papers
- **Order-book mechanics:** Stanford order-book materials and Cornell limit-order-book paper
- **High-frequency trading:** Berkeley, NYU, and Yale sources
- **Infrastructure and semantics:** [[FIX Protocol]], surveillance ontology, LLM-based stock-market KG construction

## How To Use This Guide In GraphWiki
[coverage: medium]

- Use it to define the topic boundary between execution algorithms, market microstructure, and surveillance-oriented knowledge modeling.
- Use the Stanford and Cornell materials for future explainer pages on order books, limit orders, market orders, and market making.
- Use the repository's existing finance ontology and messaging sources when the academic sources describe trading mechanics but not semantic interoperability.

## Sources

- `sources/web-clips/algo-trading-academic-source-pack.md`
- `sources/articles/fix-protocol-financial-information-exchange.md`
- `sources/papers/ontology-stock-market-monitoring-surveillance.md`
- `sources/papers/knowledge-graph-construction-stock-markets-llm.md`

## See Also

- [[Financial Knowledge Graph]]
- [[Market Data]]
- [[Stock Exchange]]
- [[FIX Protocol]]
- [[Building a Financial Knowledge Graph]]