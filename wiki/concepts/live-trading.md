# Live Trading

**Definition:** The production operation of an [[Algorithmic Trading]] system where real orders are routed to markets under live data, infrastructure, and risk constraints.

**Also known as:** Production trading, deployment, live execution.

## Overview
[coverage: medium]

The QuantInsti and Quantra roadmap separates live trading from research and backtesting because production changes the problem. In live trading, data can fail, venues can reject orders, clocks can drift, latency can spike, and risk limits can be breached at the worst possible time. A strategy that looked clean in simulation becomes an operational system with monitoring, controls, deployment procedures, and failure modes.

This stage brings together [[Execution Strategies]], [[Portfolio and Risk Management]], messaging infrastructure, and production monitoring. It includes order management, kill switches, logging, reconciliation, and alerting. Even relatively slow systematic strategies need these controls once they trade real capital.

For GraphWiki, live trading is also where the branch reconnects to ontology and graph modeling. Production systems generate streams of entities and events that can be organized for surveillance, diagnostics, and post-trade analysis inside a [[Financial Knowledge Graph]].

## Key Properties

- Moves from simulation into real order routing and capital exposure
- Requires monitoring, logging, alerts, and operational controls
- Depends on messaging and venue connectivity such as [[FIX Protocol]]
- Makes risk management and failure handling first-class concerns
- Produces event histories useful for graph-based surveillance and diagnostics

## Relationships

- **Is-a:** Production stage, deployment workflow
- **Has-part:** Order management, monitoring, alerting, kill switches, reconciliation, incident response
- **Related:** [[Algorithmic Trading]], [[Execution Strategies]], [[Portfolio and Risk Management]], [[Performance Evaluation]], [[Financial Knowledge Graph]]
- **Used-by:** Hedge funds, prop desks, broker systems, execution teams, operations teams

## Examples

- Running a systematic futures strategy with real-time risk checks and broker connectivity
- Monitoring order rejects and fill anomalies during a live equity execution program
- Sending production trading events into a graph-backed surveillance pipeline

## Sources

- https://github.com/QuantInsti/Algo-Trading-Map
- https://github.com/quantra-go-algo/Algo-Trading-Map
- `sources/articles/fix-protocol-financial-information-exchange.md`
- `sources/papers/ontology-stock-market-monitoring-surveillance.md`

## See Also

- [[Execution Strategies]]
- [[Portfolio and Risk Management]]
- [[Performance Evaluation]]
- [[FIX Protocol]]
- [[Financial Knowledge Graph]]