# Options Trading

**Definition:** The design and execution of trading strategies using option contracts, where payoff depends on the future price behavior of an underlying asset and the contract's strike, expiry, and volatility conditions.

**Also known as:** Systematic options trading, derivatives strategy design, options strategy research.

## Overview
[coverage: medium]

Options trading appears explicitly in the QuantInsti and Quantra roadmap because derivatives force strategy research beyond simple long-short cash positions. Option payoffs are nonlinear, time-dependent, and strongly shaped by volatility, expiry, and the structure of the option surface. That makes options a useful strategy family for teaching how financial engineering and trading research intersect.

Within [[Algorithmic Trading]], options workflows can target directional views, volatility views, income generation, hedging, or event-driven opportunities. A strategy may trade single options, spreads, straddles, or delta-hedged structures. The key point is that signals and risk cannot be understood using price direction alone; the trader also has to reason about implied volatility, time decay, and sensitivity to the underlying.

In GraphWiki, options trading also connects the Algo Trading branch back to [[Derivatives]]. It provides a useful bridge between market-structure thinking and the more instrument-specific modeling already present in the financial ontology pages.

## Key Properties

- Uses contracts with nonlinear payoff structures rather than only cash positions
- Requires reasoning about strike, expiry, volatility, and payoff shape
- Supports directional, volatility, hedging, and event-driven strategies
- Often demands tighter risk modeling than spot-only strategies
- Connects trading research with the broader [[Derivatives]] landscape

## Relationships

- **Is-a:** Derivatives strategy family, instrument-specific trading workflow
- **Has-part:** Payoff design, volatility view, expiry selection, spread construction, hedge management
- **Related:** [[Strategy Research]], [[Derivatives]], [[Portfolio and Risk Management]], [[Backtesting]], [[Performance Evaluation]]
- **Used-by:** Options desks, volatility traders, systematic derivatives funds, event-driven traders

## Examples

- Buying a call spread to express a bounded bullish view ahead of earnings
- Selling option premium when implied volatility appears rich relative to expectations
- Delta-hedging an option position while trading around volatility changes

## Sources

- https://github.com/QuantInsti/Algo-Trading-Map
- https://github.com/quantra-go-algo/Algo-Trading-Map
- `sources/articles/fpml-financial-products-markup.md`

## See Also

- [[Strategy Research]]
- [[Derivatives]]
- [[Futures Trading]]
- [[Backtesting]]
- [[Portfolio and Risk Management]]