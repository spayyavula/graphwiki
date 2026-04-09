# Algorithmic Trading vs High-Frequency Trading

[[Algorithmic Trading]] and [[High-Frequency Trading]] are closely related, but they are not interchangeable. High-frequency trading is best understood as a latency-dominated subset of algorithmic trading rather than a synonym for all computer-driven trading.

## Comparison Table

| Dimension | [[Algorithmic Trading]] | [[High-Frequency Trading]] |
|---|---|---|
| **Scope** | Broad category covering automated execution and strategy workflows | Narrower subtype focused on extremely low-latency decision and execution loops |
| **Primary goal** | Can include execution quality, alpha generation, routing, or surveillance | Usually emphasizes speed-sensitive market making, arbitrage, or quote response |
| **Time horizon** | Seconds to days, depending on strategy | Milliseconds to microseconds |
| **Key dependency** | Models, execution logic, venue access, and market data | Ultra-low latency infrastructure, queue position, co-location, and feed speed |
| **Microstructure sensitivity** | Important but not always dominant | Central to the strategy itself |
| **Typical metrics** | Slippage, implementation shortfall, fill rate, execution quality | Latency, quote-fill behavior, adverse selection, inventory turnover |
| **Regulatory concern** | Broad best-execution and control questions | Stronger focus on fairness, market quality, fragility, and abusive patterns |
| **Graph/KG implication** | Strategy, order, venue, and instrument workflows | Dense event streams and surveillance-oriented event graphs |

## Algorithmic Trading in the Broader Sense

[[Algorithmic Trading]] includes any workflow where software determines how orders are generated, routed, sliced, or executed. That includes execution algorithms such as VWAP and TWAP, smart order routing, statistical arbitrage, and various model-driven trading systems. Many of these systems care about market structure, but they are not all built around winning a speed race.

This broader framing is important because much of the field is about optimization under practical constraints rather than raw latency. A large buy-side execution algorithm may care more about minimizing market impact over a trading session than about reacting in microseconds. The category therefore includes systems that are automated and market-aware without being high-frequency in the strict sense.

## What Makes High-Frequency Trading Distinct

[[High-Frequency Trading]] becomes distinct when latency itself becomes a first-class competitive variable. These strategies live close to the [[Limit Order Book]] and depend heavily on [[Market Microstructure]]. Queue priority, cancellation timing, exchange matching rules, and feed handling all matter directly to outcomes.

That is why HFT is usually treated as a special case rather than the definition of algorithmic trading as a whole. A strategy can be algorithmic without being high-frequency, but a high-frequency strategy is almost always algorithmic.

## Knowledge-Graph Implications

For GraphWiki, the distinction matters because the two topics generate different graph structures. A broad [[Algorithmic Trading]] graph may emphasize entities such as orders, venues, routing logic, instruments, and execution objectives. An HFT-focused graph instead pushes toward dense event modeling, cancellation sequences, queue states, and surveillance signals. That makes HFT especially relevant to ontology and graph work on suspicious-pattern detection and market monitoring.

## See Also

- [[Algorithmic Trading]]
- [[High-Frequency Trading]]
- [[Market Microstructure]]
- [[Limit Order Book]]
- [[FIX Protocol]]
- [[Financial Knowledge Graph]]