# Mean Reversion

**Definition:** A trading approach that bets prices, spreads, or other market variables will move back toward a typical level after unusually large deviations.

**Also known as:** Reversion trading, contrarian reversion strategy, statistical reversion.

## Overview
[coverage: medium]

Mean reversion is a core strategy family in the QuantInsti and Quantra roadmap because it represents a very different market hypothesis from [[Trend Following]]. Instead of assuming direction persists, it assumes certain deviations are temporary and likely to compress. That logic can apply to a single asset, a volatility measure, or a relative-value spread such as those used in [[Pairs Trading]].

Within [[Algorithmic Trading]], mean-reversion systems are often implemented with z-scores, oscillators, spread models, or threshold rules derived from [[Time Series Analysis in Trading]]. They can be appealing because they produce frequent opportunities, but they are also vulnerable to regime breaks and hidden costs. A move that looks extreme can become the start of a new trend rather than a reversion candidate.

For learners, mean reversion is useful because it forces careful thinking about state definition, normalization, and stop logic. It also highlights why research discipline matters: a reversion strategy that looks stable in historical data may fail badly once markets restructure or correlations change.

## Key Properties

- Assumes some market variables fluctuate around interpretable central levels or relationships
- Often uses normalized deviations rather than raw price changes
- Can be applied to single assets, volatility measures, or relative-value spreads
- Highly sensitive to structural breaks and transaction costs
- Requires clear exit, stop, and risk-sizing logic to remain credible

## Relationships

- **Is-a:** Time-series strategy family, contrarian approach
- **Has-part:** Deviation measurement, normalization, reversion entry, stop logic, exit thresholds
- **Related:** [[Time Series Analysis in Trading]], [[Pairs Trading]], [[Technical Indicators]], [[Backtesting]], [[Performance Evaluation]]
- **Used-by:** Statistical arbitrage teams, short-horizon systematic traders, market-neutral funds, quant researchers

## Examples

- Buying an index future after a large short-term oversold move under a reversion rule
- Entering a spread trade when two historically linked assets diverge unusually far
- Closing the position when the deviation returns toward its typical range

## Sources

- https://github.com/QuantInsti/Algo-Trading-Map
- https://github.com/quantra-go-algo/Algo-Trading-Map

## See Also

- [[Technical Indicators]]
- [[Time Series Analysis in Trading]]
- [[Pairs Trading]]
- [[Backtesting]]
- [[Performance Evaluation]]