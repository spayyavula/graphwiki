# Algo Trading Roadmap

This guide adapts the QuantInsti and Quantra GitHub Algo Trading Map into GraphWiki's wiki-and-graph structure. The original map is broad: it moves from foundations through data, strategies, portfolio and risk, backtesting, execution, live trading, performance evaluation, and even career preparation. GraphWiki does not need to mirror every course or link in that repository, but it should mirror the learning logic.

## Stage 1: Build the Foundations

Start with [[Algorithmic Trading]], [[Market Microstructure]], [[Limit Order Book]], and [[High-Frequency Trading]]. These pages explain how electronic markets actually work and why execution quality depends on venue rules, liquidity, and latency rather than on signal ideas alone.

## Stage 2: Learn the Data Layer

Move to [[Trading Data and Analysis]]. The roadmap is right to make this explicit. Market data, identifier normalization, timestamp alignment, and feature construction determine whether later research and backtests are meaningful.

## Stage 3: Study Strategy Families

Read [[Strategy Research]] next. This is where the roadmap's branches into equities, futures, options, technical indicators, time series, pairs trading, machine learning, quantitative finance, and LLM-oriented workflows fit conceptually. In GraphWiki, that layer now opens into [[Time Series Analysis in Trading]], [[Pairs Trading]], [[Options Trading]], [[Futures Trading]], [[Machine Learning in Trading]], and [[LLM in Trading]]. The goal is to understand the space of systematic strategy design before overfitting to one coding pattern.

## Stage 4: Add Portfolio and Risk Thinking

Read [[Portfolio and Risk Management]] before treating backtest returns as real. This stage forces the shift from isolated trade ideas to capital allocation, diversification, and drawdown control.

## Stage 5: Validate Through Simulation

Then read [[Backtesting]] and [[Performance Evaluation]]. The roadmap correctly separates simulation from assessment: one stage generates evidence, the other interprets whether the evidence is actually strong enough to trust.

## Stage 6: Learn Execution and Production

Finish with [[Execution Strategies]], [[FIX Protocol]], and [[Live Trading]]. This is where GraphWiki's earlier microstructure work reconnects to the broader roadmap. Research only becomes trading when orders are routed, monitored, risk-checked, and reconciled in real systems.

## Stage 7: Connect Back to GraphWiki

Return to [[Financial Knowledge Graph]] once the workflow is clear. Trading systems generate instruments, venues, orders, fills, cancellations, and risk events that can be modeled as structured entities and relationships. That is the ontology-facing view of the roadmap.

## Sources

- https://github.com/QuantInsti/Algo-Trading-Map
- https://github.com/quantra-go-algo/Algo-Trading-Map
- `sources/web-clips/algo-trading-academic-source-pack.md`
- `sources/articles/fix-protocol-financial-information-exchange.md`
- `sources/papers/ontology-stock-market-monitoring-surveillance.md`

## See Also

- [[Getting Started with Algo Trading]]
- [[Algorithmic Trading]]
- [[Trading Data and Analysis]]
- [[Strategy Research]]
- [[Backtesting]]
- [[Execution Strategies]]
- [[Live Trading]]
- [[Financial Knowledge Graph]]