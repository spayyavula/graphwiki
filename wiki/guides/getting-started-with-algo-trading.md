# Getting Started with Algo Trading

This guide provides a practical first path through the Algo Trading branch of GraphWiki. The goal is not to jump straight into strategy code, but to understand the market structure, execution logic, and infrastructure that make algorithmic trading possible.

## Prerequisites

You should already be familiar with the basic finance and graph concepts covered in [[Market Data]], [[Stock Exchange]], and [[Financial Knowledge Graph]]. If not, start there first.

---

## Step 1: Learn the Trading Environment

Start with [[Market Microstructure]] and [[Limit Order Book]]. These explain how orders are matched, why spreads exist, how liquidity is represented, and why queue position matters. Without these concepts, most discussions of execution strategy are too abstract to be useful.

---

## Step 2: Understand What Algorithms Optimize

Read [[Algorithmic Trading]] next. Focus on the difference between alpha-seeking strategies and execution algorithms. Many systems are not trying to predict the market perfectly; they are trying to reduce costs, limit impact, and trade efficiently under uncertainty.

---

## Step 3: Study Speed-Sensitive Trading

Move to [[High-Frequency Trading]] to understand what changes when latency becomes a competitive variable. This will also clarify why HFT debates often focus on fairness, market quality, and infrastructure.

---

## Step 4: Learn the Message and Venue Layer

Read [[FIX Protocol]] alongside the academic sources. Algorithmic trading does not operate in a vacuum. Orders, fills, quotes, and venue interactions have to be represented in concrete message formats and routed through real market infrastructure.

---

## Step 5: Connect Trading to Graph Modeling

Return to [[Financial Knowledge Graph]] and think about trading as a structured event network. Instruments, venues, order events, and suspicious patterns can all be modeled as linked entities. This is the bridge from raw market mechanics into GraphWiki's broader LLM-wiki and ontology direction.

## Sources

- `sources/web-clips/algo-trading-academic-source-pack.md`
- `sources/articles/fix-protocol-financial-information-exchange.md`
- `sources/papers/ontology-stock-market-monitoring-surveillance.md`

## See Also

- [[Algorithmic Trading]]
- [[Market Microstructure]]
- [[Limit Order Book]]
- [[High-Frequency Trading]]
- [[FIX Protocol]]
- [[Financial Knowledge Graph]]