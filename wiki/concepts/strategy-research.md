# Strategy Research

**Definition:** The stage of [[Algorithmic Trading]] where hypotheses, signals, and trading rules are designed, formalized, and stress-tested before they are trusted in simulation or production.

**Also known as:** Alpha research, signal design, quant strategy development.

## Overview
[coverage: medium]

The QuantInsti and Quantra roadmap treats strategy learning as a broad family rather than a single technique. That is important because algorithmic trading spans execution algorithms, trend following, mean reversion, pairs trading, machine-learning systems, options workflows, futures strategies, and high-frequency methods. A useful roadmap therefore organizes research by problem type and asset class instead of pretending there is one canonical strategy template.

In GraphWiki, that family now branches into concrete subtopics such as [[Time Series Analysis in Trading]], [[Pairs Trading]], [[Options Trading]], [[Futures Trading]], [[Machine Learning in Trading]], and [[LLM in Trading]]. Those pages are not meant to exhaust the field, but they give the Algo Trading branch the same internal structure that the QuantInsti and Quantra map gives at the curriculum level.

Strategy research converts market intuition into explicit rules. Those rules may involve entry and exit conditions, risk constraints, rebalancing logic, or execution schedules. Some strategies rely on cross-sectional comparisons, some on time-series structure, and others on event-driven or options-specific reasoning. The point of this stage is not just to find profitable ideas, but to express them clearly enough that they can be simulated, challenged, and ultimately deployed.

Within GraphWiki, this concept helps separate the signal-design problem from the infrastructure problems handled by [[Execution Strategies]] and [[Live Trading]]. That distinction mirrors the GitHub map: research comes before deployment, even though the two eventually interact.

## Key Properties

- Converts hypotheses into explicit, testable rules
- Encompasses multiple asset classes and strategy families
- Depends on good [[Trading Data and Analysis]] rather than intuition alone
- Feeds directly into [[Backtesting]] and later production design
- Must be separated from execution details to avoid conflating alpha with implementation

## Relationships

- **Is-a:** Quant research stage, strategy-design layer
- **Has-part:** Signal definition, feature selection, rule formalization, parameter testing, stress scenarios, strategy families
- **Related:** [[Algorithmic Trading]], [[Trading Data and Analysis]], [[Backtesting]], [[Execution Strategies]], [[Time Series Analysis in Trading]], [[Pairs Trading]], [[Machine Learning in Trading]], [[High-Frequency Trading]]
- **Used-by:** Quant researchers, portfolio managers, discretionary traders moving into systematic workflows

## Examples

- Designing a pairs-trading rule that enters when a spread diverges from its historical range
- Building a trend-following strategy on futures with volatility-scaled position sizing
- Comparing a machine-learning classifier against a simpler factor-based signal on the same dataset

## Sources

- https://github.com/QuantInsti/Algo-Trading-Map
- https://github.com/quantra-go-algo/Algo-Trading-Map
- `sources/web-clips/algo-trading-academic-source-pack.md`

## See Also

- [[Algorithmic Trading]]
- [[Trading Data and Analysis]]
- [[Backtesting]]
- [[Execution Strategies]]
- [[Time Series Analysis in Trading]]
- [[Pairs Trading]]
- [[Options Trading]]
- [[Futures Trading]]
- [[Machine Learning in Trading]]
- [[LLM in Trading]]
- [[High-Frequency Trading]]