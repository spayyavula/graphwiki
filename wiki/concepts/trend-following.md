# Trend Following

**Definition:** A trading approach that attempts to profit from the persistence of directional price movement across one or more time horizons.

**Also known as:** Momentum trading, trend strategy, time-series momentum.

## Overview
[coverage: medium]

Trend following is one of the most important families in the QuantInsti and Quantra roadmap because it demonstrates a complete systematic workflow without requiring complex microstructure assumptions. The core idea is simple: when prices exhibit persistent direction over a chosen horizon, the strategy holds positions aligned with that direction until the trend weakens or reverses. In practice, this can be implemented with moving averages, breakout rules, channel systems, or more formal [[Time Series Analysis in Trading]] models.

Within [[Algorithmic Trading]], trend following is valuable because it scales naturally from educational examples to diversified multi-asset portfolios. It appears frequently in futures and managed-futures settings, where contract standardization and cross-asset breadth make rule-based trend systems relatively natural to deploy. It also gives learners a clear way to separate signal logic from [[Execution Strategies]] and [[Portfolio and Risk Management]].

Trend following is not universally effective. It can struggle in noisy, range-bound markets and can be degraded by overfitting to historical breakpoints. That is why the strategy needs robust [[Backtesting]], risk control, and realistic performance interpretation rather than faith in momentum alone.

## Key Properties

- Attempts to capture persistent directional movement rather than short-horizon reversals
- Often implemented with breakouts, moving averages, channels, or momentum filters
- Works naturally across futures, FX, commodities, and diversified portfolios
- Can experience long drawdowns in sideways or whipsawing markets
- Benefits from disciplined sizing and diversification across instruments and horizons

## Relationships

- **Is-a:** Time-series strategy family, momentum-oriented approach
- **Has-part:** Breakout rules, moving-average rules, channel systems, trend filters, horizon selection
- **Related:** [[Time Series Analysis in Trading]], [[Technical Indicators]], [[Futures Trading]], [[Backtesting]], [[Portfolio and Risk Management]]
- **Used-by:** CTA-style funds, systematic macro traders, diversified futures programs, quantitative trend researchers

## Examples

- Going long a futures contract after a breakout above a trailing channel
- Holding a basket of assets whose moving-average trend signals remain positive
- Scaling exposure down when volatility rises while the trend signal remains intact

## Sources

- https://github.com/QuantInsti/Algo-Trading-Map
- https://github.com/quantra-go-algo/Algo-Trading-Map

## See Also

- [[Technical Indicators]]
- [[Time Series Analysis in Trading]]
- [[Futures Trading]]
- [[Backtesting]]
- [[Portfolio and Risk Management]]