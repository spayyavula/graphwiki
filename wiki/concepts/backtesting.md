# Backtesting

**Definition:** The simulation of a trading strategy on historical data in order to estimate behavior, costs, risks, and implementation weaknesses before live deployment.

**Also known as:** Historical simulation, strategy simulation, research backtest.

## Overview
[coverage: medium]

Backtesting is one of the clearest stages in the QuantInsti and Quantra roadmap because it separates idea generation from evidence. A trading rule may sound plausible, but until it is applied to historical data with realistic costs, position constraints, and execution assumptions, it remains an unverified hypothesis. The purpose of backtesting is therefore not to prove a strategy works, but to expose how sensitive it is to assumptions, market regimes, and data quality.

Good backtests depend on the upstream stages of [[Trading Data and Analysis]] and [[Strategy Research]]. They also depend on realistic market assumptions. A strategy that ignores spread costs, slippage, borrow constraints, or queue effects may look attractive on paper but collapse in production. This is especially important when the strategy interacts with [[Market Microstructure]] or the [[Limit Order Book]], where execution quality depends on detailed market mechanics.

Within a learning roadmap, backtesting is the point where novice algo traders usually become more serious. It forces careful thinking about causality, timing, leakage, and the difference between signal quality and implementation quality.

## Key Properties

- Tests strategy rules on historical data under explicit assumptions
- Sensitive to data quality, timestamp alignment, and hidden leakage
- Must incorporate costs, slippage, and position constraints to be credible
- Produces inputs for [[Performance Evaluation]] rather than definitive proof of future edge
- Sits between research and [[Live Trading]] in the roadmap

## Relationships

- **Is-a:** Validation stage, simulation workflow
- **Has-part:** Signal replay, transaction-cost modeling, walk-forward testing, robustness checks, regime analysis
- **Related:** [[Algorithmic Trading]], [[Trading Data and Analysis]], [[Strategy Research]], [[Performance Evaluation]], [[Live Trading]]
- **Used-by:** Quant researchers, systematic traders, portfolio managers, execution analysts

## Examples

- Simulating a mean-reversion strategy with realistic bid-ask spreads and commissions
- Replaying intraday order-book data to estimate fill quality for an execution algorithm
- Running walk-forward tests to see whether a signal survives across market regimes

## Sources

- https://github.com/QuantInsti/Algo-Trading-Map
- https://github.com/quantra-go-algo/Algo-Trading-Map
- `sources/web-clips/algo-trading-academic-source-pack.md`

## See Also

- [[Trading Data and Analysis]]
- [[Strategy Research]]
- [[Performance Evaluation]]
- [[Execution Strategies]]
- [[Live Trading]]