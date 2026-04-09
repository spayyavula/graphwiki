# Futures Trading

**Definition:** The design and execution of trading strategies using standardized futures contracts, typically for directional, spread, hedging, or systematic macro exposures.

**Also known as:** Systematic futures trading, futures strategy research, managed-futures style trading.

## Overview
[coverage: medium]

Futures trading is a central branch in the QuantInsti and Quantra map because futures markets are deeply tied to systematic trading practice. Contracts are standardized, exchange-traded, liquid in major benchmarks, and cover a wide range of asset classes including equities, rates, commodities, and foreign exchange. That makes futures a natural environment for trend following, carry, spread trading, and cross-asset research.

Within [[Algorithmic Trading]], futures strategies often emphasize disciplined rules, contract rolls, margin-aware sizing, and cross-market comparability. A strategy might trade outright direction, intra-market spreads, or inter-market relationships. Compared with options, the payoff structure is simpler, but execution, contract specification, and roll management still require careful design.

Futures trading also complements the existing GraphWiki focus on market infrastructure. Exchange rules, liquidity conditions, and execution costs matter, but the strategy horizon is often slower and more portfolio-driven than the ultra-short-horizon workflows highlighted by [[High-Frequency Trading]].

## Key Properties

- Uses standardized exchange-traded contracts across multiple asset classes
- Commonly supports trend, carry, spread, and macro-style systematic strategies
- Requires contract-roll handling, margin awareness, and sizing discipline
- Often fits portfolio-level research and diversification better than single-name trading
- Connects market structure with broader systematic macro workflows

## Relationships

- **Is-a:** Derivatives strategy family, exchange-traded systematic workflow
- **Has-part:** Contract selection, roll logic, spread design, macro signal design, margin-aware sizing
- **Related:** [[Strategy Research]], [[Derivatives]], [[Portfolio and Risk Management]], [[Execution Strategies]], [[Backtesting]]
- **Used-by:** CTA-style funds, macro desks, commodity traders, systematic portfolio managers

## Examples

- Running a trend-following system across equity-index, bond, and commodity futures
- Trading calendar spreads in crude oil futures around inventory expectations
- Rolling expiring futures exposure into the next contract month under explicit rules

## Sources

- https://github.com/QuantInsti/Algo-Trading-Map
- https://github.com/quantra-go-algo/Algo-Trading-Map

## See Also

- [[Strategy Research]]
- [[Derivatives]]
- [[Options Trading]]
- [[Backtesting]]
- [[Portfolio and Risk Management]]