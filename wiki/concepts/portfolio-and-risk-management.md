# Portfolio and Risk Management

**Definition:** The part of [[Algorithmic Trading]] that controls position sizing, diversification, exposure limits, drawdown behavior, and capital allocation across one or more strategies.

**Also known as:** Portfolio construction, trading risk management, systematic risk control.

## Overview
[coverage: medium]

The QuantInsti and Quantra map places portfolio and risk management before later infrastructure stages, which is the right emphasis. Many trading systems fail not because the entry rule is obviously bad, but because the strategy is oversized, poorly diversified, or exposed to risks that were never modeled clearly. A roadmap for algo trading therefore has to teach how signals become positions and how positions become a controlled portfolio.

This layer covers position sizing, leverage constraints, stop logic, portfolio aggregation, factor exposures, and stress testing. It also changes the way learners interpret strategy performance. A strategy with an attractive raw return may still be unusable if the drawdowns, turnover, or concentration risk are too high. That is why risk management belongs alongside research, not as an afterthought.

For GraphWiki, this concept broadens the Algo Trading branch beyond order-book mechanics. It makes room for slower systematic workflows where portfolio construction and risk budgeting matter more than latency.

## Key Properties

- Converts strategy signals into capital allocations and risk budgets
- Controls leverage, exposure concentration, and drawdown behavior
- Connects single-strategy research to multi-strategy deployment
- Influences how [[Performance Evaluation]] is interpreted
- Remains important even when execution is fully automated

## Relationships

- **Is-a:** Portfolio-construction layer, risk-control stage
- **Has-part:** Position sizing, exposure limits, diversification, drawdown control, stress testing
- **Related:** [[Algorithmic Trading]], [[Strategy Research]], [[Backtesting]], [[Performance Evaluation]], [[Live Trading]]
- **Used-by:** Systematic portfolio managers, quant researchers, risk teams, prop desks

## Examples

- Volatility-scaling positions so risk contribution stays stable across assets
- Imposing sector and factor caps on a cross-sectional equity strategy
- Combining several trading signals while limiting aggregate drawdown and turnover

## Sources

- https://github.com/QuantInsti/Algo-Trading-Map
- https://github.com/quantra-go-algo/Algo-Trading-Map

## See Also

- [[Strategy Research]]
- [[Backtesting]]
- [[Performance Evaluation]]
- [[Live Trading]]