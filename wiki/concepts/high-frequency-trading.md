# High-Frequency Trading

**Definition:** A form of [[Algorithmic Trading]] that relies on extremely fast order submission, cancellation, and response to market signals, typically operating over milliseconds or microseconds.

**Also known as:** HFT, ultra-low-latency trading.

## Overview
[coverage: medium]

High-frequency trading is the speed-focused edge of electronic markets. Its distinguishing feature is not merely that computers are used, but that latency becomes a primary competitive variable. HFT systems process [[Market Data]], update quotes, and submit or cancel orders at extremely high speed in order to capture small, short-lived opportunities in the [[Limit Order Book]] or to provide liquidity as a market maker.

Because high-frequency strategies operate so close to the mechanics of the market, they are inseparable from [[Market Microstructure]]. Queue priority, exchange matching rules, message rates, co-location, and feed latency all shape whether an HFT strategy succeeds. Academic work on price discovery shows that HFT can contribute to market efficiency in some settings, but it also raises concerns about fairness, fragility, and new forms of market abuse.

For GraphWiki, HFT matters for more than trading strategy. It is also a useful domain for ontology and graph modeling because HFT behavior is event-heavy, time-sensitive, and relational. That makes it a strong candidate for event graphs, surveillance ontologies, and graph-based analyses of market behavior.

## Key Properties

- Operates on very short time horizons with tight latency constraints
- Heavily dependent on market-data speed, venue access, and order-book state
- Common roles include market making, arbitrage, and liquidity detection
- Raises issues around market quality, fairness, and surveillance
- Produces dense event streams of orders, fills, and cancellations

## Relationships

- **Is-a:** [[Algorithmic Trading]] subtype
- **Has-part:** Low-latency execution, quote updating, market making, statistical arbitrage
- **Related:** [[Market Microstructure]], [[Limit Order Book]], [[Market Data]], [[FIX Protocol]]
- **Used-by:** Proprietary trading firms, quantitative market makers, exchange participants, regulators studying market quality

## Examples

- A market-maker algorithm that continuously updates quotes as the book changes
- An arbitrage system that reacts to price differences across venues within milliseconds
- A surveillance model that detects excessive cancellation bursts consistent with quote stuffing

## Sources

- `sources/web-clips/algo-trading-academic-source-pack.md`
- `sources/papers/ontology-stock-market-monitoring-surveillance.md`

## See Also

- [[Algorithmic Trading]]
- [[Market Microstructure]]
- [[Limit Order Book]]
- [[Market Data]]
- [[FIX Protocol]]