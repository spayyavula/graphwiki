# Performance Evaluation

**Definition:** The analysis of how a trading strategy or portfolio actually behaved, using return, risk, cost, and robustness metrics rather than raw profit alone.

**Also known as:** Strategy evaluation, trading performance analysis, risk-adjusted assessment.

## Overview
[coverage: medium]

Performance evaluation appears late in the QuantInsti and Quantra roadmap because it depends on the earlier stages being explicit. Once a strategy has been researched, backtested, and possibly traded live, the next question is how to judge it correctly. Raw return is not enough. A strategy with high turnover, unstable drawdowns, or weak behavior after costs may be far less attractive than a simpler approach with steadier risk-adjusted results.

This stage examines return distributions, drawdowns, Sharpe-style risk-adjusted metrics, turnover, exposure drift, implementation shortfall, and robustness across regimes. It also forces separation of signal quality from execution quality. A backtest may fail because the alpha is weak, because the execution model was unrealistic, or because the portfolio construction amplified hidden risks.

Within GraphWiki, this concept closes the roadmap loop. It turns trading into a disciplined learning cycle: data, research, simulation, execution, risk control, live deployment, and then careful evaluation.

## Key Properties

- Uses risk-adjusted and implementation-aware metrics rather than profit alone
- Interprets results from both [[Backtesting]] and [[Live Trading]]
- Separates alpha quality from execution and portfolio effects
- Supports iteration rather than one-shot judgment
- Essential for comparing multiple strategies or deployment choices

## Relationships

- **Is-a:** Assessment layer, review stage
- **Has-part:** Return analysis, drawdown analysis, cost analysis, benchmark comparison, robustness review
- **Related:** [[Backtesting]], [[Portfolio and Risk Management]], [[Execution Strategies]], [[Live Trading]], [[Algorithmic Trading]]
- **Used-by:** Quant researchers, portfolio managers, risk teams, allocators

## Examples

- Comparing two strategies with similar returns but very different drawdown profiles
- Measuring implementation shortfall to see whether execution degraded expected edge
- Reviewing live-vs-backtest divergence after a strategy enters production

## Sources

- https://github.com/QuantInsti/Algo-Trading-Map
- https://github.com/quantra-go-algo/Algo-Trading-Map
- `sources/web-clips/algo-trading-academic-source-pack.md`

## See Also

- [[Backtesting]]
- [[Portfolio and Risk Management]]
- [[Execution Strategies]]
- [[Live Trading]]
- [[Algorithmic Trading]]