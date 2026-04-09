# Limit Order Book

**Definition:** The structured queue of buy and sell orders at different price levels through which many electronic markets match trades and discover prices.

**Also known as:** Order book, LOB, central limit order book.

## Overview
[coverage: medium]

The limit order book is one of the most important objects in electronic trading. It records standing buy orders (bids) and sell orders (asks) for a [[Financial Instrument]], ordered by price and then by queue priority. The best bid and best ask define the market's visible spread, while deeper levels reveal available liquidity beyond the top of book.

For [[Algorithmic Trading]], the limit order book is the environment in which execution decisions are made. A trader can cross the spread with a marketable order, wait passively in the queue with a limit order, or split an order across time and venues. Each choice has tradeoffs involving fill probability, information leakage, latency, and market impact. This makes the order book a central modeling object in both execution theory and reinforcement-learning approaches to trading.

The limit order book is also central to [[Market Microstructure]] and surveillance. Patterns such as spoofing, layering, and quote stuffing are visible only when order placement, cancellation, and queue movement are analyzed structurally over time. That makes the order book a strong candidate for graph or event-stream representations inside a [[Financial Knowledge Graph]].

## Key Properties

- Organizes bids and asks by price and time priority
- Exposes top-of-book spread and deeper depth levels
- Changes continuously as orders arrive, execute, or cancel
- Supports passive and aggressive trading behavior
- Encodes liquidity, imbalance, and queue-position information

## Relationships

- **Is-a:** Trading mechanism, market-state representation
- **Has-part:** Bid ladder, ask ladder, queue priority, trades, cancellations
- **Related:** [[Algorithmic Trading]], [[Market Microstructure]], [[High-Frequency Trading]], [[Market Data]]
- **Used-by:** Execution algorithms, market makers, HFT systems, surveillance systems

## Examples

- A buy limit order joins the bid queue at a specific price and waits for a seller to hit it
- A market order consumes available liquidity from the opposite side of the book
- An imbalance between bid depth and ask depth can influence short-term price movement

## Sources

- `sources/web-clips/algo-trading-academic-source-pack.md`
- `sources/articles/fix-protocol-financial-information-exchange.md`

## See Also

- [[Algorithmic Trading]]
- [[Market Microstructure]]
- [[High-Frequency Trading]]
- [[Market Data]]
- [[FIX Protocol]]