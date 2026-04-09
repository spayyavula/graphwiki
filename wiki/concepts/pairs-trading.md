# Pairs Trading

**Definition:** A relative-value trading approach that takes offsetting positions in two related assets when their price relationship diverges from an expected range.

**Also known as:** Statistical arbitrage pair trade, spread trading, relative-value pair strategy.

## Overview
[coverage: medium]

Pairs trading is a classic sub-branch of [[Strategy Research]] because it translates the abstract idea of mean reversion into a concrete market-neutral workflow. Instead of forecasting the absolute direction of a single asset, the strategy focuses on a relationship between two assets, such as two banks, two energy producers, or a stock and a related ETF. When the spread widens unusually, the trade bets on partial convergence rather than outright market direction.

This approach fits naturally within the QuantInsti and Quantra roadmap because it teaches several important quant ideas at once: signal construction, normalization, risk hedging, and the need for careful [[Backtesting]]. It also helps learners see why data quality matters. A pair can look stable in one sample and break structurally in another, especially when fundamentals or market regimes change.

Pairs trading is often implemented through time-series and statistical tools, but in practice it also depends on portfolio constraints, transaction costs, and execution quality. A spread that looks attractive in theory may not survive fees, shorting frictions, or unstable correlation in live markets.

## Key Properties

- Focuses on relative pricing relationships rather than outright market direction
- Often designed to reduce broad market exposure compared with directional strategies
- Depends on stable or interpretable relationships between assets
- Sensitive to costs, borrow availability, and structural breaks
- Commonly used as a bridge from simple signals to more formal statistical arbitrage

## Relationships

- **Is-a:** Mean-reversion strategy family, relative-value strategy
- **Has-part:** Pair selection, spread construction, divergence detection, convergence exit, hedge sizing
- **Related:** [[Strategy Research]], [[Time Series Analysis in Trading]], [[Backtesting]], [[Portfolio and Risk Management]], [[Performance Evaluation]]
- **Used-by:** Statistical arbitrage desks, market-neutral funds, quant researchers

## Examples

- Going long one regional bank stock and short another after an unusual spread divergence
- Trading an ETF and a liquid constituent basket when the relative price moves outside a historical band
- Closing both legs when the spread normalizes or a stop threshold is breached

## Sources

- https://github.com/QuantInsti/Algo-Trading-Map
- https://github.com/quantra-go-algo/Algo-Trading-Map

## See Also

- [[Strategy Research]]
- [[Time Series Analysis in Trading]]
- [[Backtesting]]
- [[Portfolio and Risk Management]]