# Execution Strategies

**Definition:** The methods used to transform a trading decision into actual market orders while controlling cost, market impact, information leakage, and fill risk.

**Also known as:** Execution algorithms, order execution, trade implementation.

## Overview
[coverage: medium]

Execution strategies form one of the clearest bridges between the broad QuantInsti and Quantra roadmap and the existing GraphWiki focus on microstructure. Once a strategy or portfolio has decided what to trade, execution determines how that intention is carried out in the market. For large or time-sensitive orders, this question can dominate realized performance.

This layer includes schedule-based algorithms such as VWAP and TWAP, liquidity-seeking logic, smart order routing, and more adaptive execution policies that respond to order-book state. It depends directly on [[Market Microstructure]] and the [[Limit Order Book]], because spread costs, queue position, venue fragmentation, and temporary impact all shape implementation quality. In infrastructure terms, execution also touches messaging standards such as [[FIX Protocol]].

In the roadmap, execution strategies appear after research and backtesting because implementation should reflect what the strategy is trying to optimize. A strong learner should be able to explain when poor performance came from a weak signal and when it came from weak execution. That distinction is also why more advanced adaptive methods such as [[Reinforcement Learning for Execution]] belong here rather than being treated as generic machine learning.

## Key Properties

- Converts desired trades into concrete order-placement logic
- Seeks to reduce slippage, impact, and information leakage
- Depends strongly on [[Market Microstructure]] and venue behavior
- Connects strategy design with real routing and message infrastructure
- Often evaluated through implementation shortfall and fill-quality metrics

## Relationships

- **Is-a:** Trade-implementation layer, execution workflow
- **Has-part:** VWAP, TWAP, participation algorithms, liquidity seeking, smart order routing
- **Related:** [[Algorithmic Trading]], [[Market Microstructure]], [[Limit Order Book]], [[FIX Protocol]], [[Reinforcement Learning for Execution]], [[Live Trading]]
- **Used-by:** Brokers, buy-side desks, quantitative execution teams, market makers

## Examples

- Splitting a large parent order into child orders that track market volume
- Routing an order across venues to improve fill probability and fee-adjusted cost
- Slowing or accelerating participation when order-book imbalance changes abruptly

## Sources

- https://github.com/QuantInsti/Algo-Trading-Map
- https://github.com/quantra-go-algo/Algo-Trading-Map
- `sources/web-clips/algo-trading-academic-source-pack.md`
- `sources/articles/fix-protocol-financial-information-exchange.md`

## See Also

- [[Algorithmic Trading]]
- [[Market Microstructure]]
- [[Limit Order Book]]
- [[FIX Protocol]]
- [[Reinforcement Learning for Execution]]
- [[Live Trading]]