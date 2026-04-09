# Technical Indicators

**Definition:** Computed signals derived from price, volume, volatility, or market breadth data that are used to summarize market behavior and support trading decisions.

**Also known as:** Indicator-based signals, chart indicators, technical signal features.

## Overview
[coverage: medium]

Technical indicators appear explicitly in the QuantInsti and Quantra roadmap because they provide one of the most common entry points into systematic trading. Instead of relying on visual chart reading alone, an indicator turns market observations into explicit rules or features that can be tested, compared, and combined with other signals. Common examples include moving averages, RSI-style oscillators, MACD variants, breakout measures, and volatility bands.

Within [[Algorithmic Trading]], indicators are not a separate universe from statistical modeling. They are one way of encoding market structure and recent behavior into computable features. Some strategies use indicators directly as decision rules. Others use them as inputs to broader models inside [[Time Series Analysis in Trading]] or [[Machine Learning in Trading]]. The main benefit is that they give learners a tractable bridge from market intuition into formal [[Strategy Research]].

The main limitation is that indicators can create a false sense of robustness when they are overfit, stacked carelessly, or detached from cost and regime analysis. That is why indicator-based ideas still need disciplined [[Backtesting]] and skeptical [[Performance Evaluation]].

## Key Properties

- Converts raw market observations into explicit and reusable signal features
- Often serves as a first step from discretionary chart reading into systematic rules
- Can be used directly or as inputs to broader models
- Sensitive to parameter choices, regime shifts, and data frequency
- Requires testing rather than visual plausibility alone

## Relationships

- **Is-a:** Strategy-research subtopic, signal-construction approach
- **Has-part:** Trend indicators, momentum oscillators, volatility bands, breakout measures, volume indicators
- **Related:** [[Strategy Research]], [[Time Series Analysis in Trading]], [[Trend Following]], [[Mean Reversion]], [[Backtesting]]
- **Used-by:** Retail systematic traders, quant researchers, CTA-style workflows, technical analysts moving into automation

## Examples

- Using a moving-average crossover to define a trend entry rule
- Measuring RSI-style overextension before a short-horizon mean-reversion trade
- Combining volatility bands with breakout logic to filter false signals

## Sources

- https://github.com/QuantInsti/Algo-Trading-Map
- https://github.com/quantra-go-algo/Algo-Trading-Map

## See Also

- [[Strategy Research]]
- [[Time Series Analysis in Trading]]
- [[Trend Following]]
- [[Mean Reversion]]
- [[Backtesting]]