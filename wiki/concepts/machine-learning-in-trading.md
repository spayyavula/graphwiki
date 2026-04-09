# Machine Learning in Trading

**Definition:** The use of supervised, unsupervised, or reinforcement-learning methods to discover patterns, generate signals, classify states, or optimize decisions in trading systems.

**Also known as:** ML trading, AI trading models, machine-learning strategy research.

## Overview
[coverage: medium]

Machine learning is included as its own branch in the QuantInsti and Quantra roadmap because many modern trading workflows now go beyond hand-crafted indicators and linear factor models. ML methods can help classify regimes, rank assets, estimate nonlinear relationships, or optimize policy choices under complex state representations. That said, ML in trading is not a magic replacement for market understanding; it is one more strategy family inside [[Strategy Research]].

The main challenge is that financial data is noisy, adaptive, and expensive to overfit. A machine-learning model can appear impressive in sample while failing immediately in live conditions. For that reason, the ML branch depends heavily on disciplined [[Trading Data and Analysis]], careful [[Backtesting]], and conservative [[Performance Evaluation]]. Feature leakage, unstable labels, and shifting market regimes matter as much as model architecture.

In GraphWiki, this page also helps separate general enthusiasm around AI from actual trading-system design. A good ML trading workflow still has to answer the same questions as other strategies: what is the target, how is the signal deployed, what risks does it create, and how does it survive costs and execution constraints? The more execution-specific side of that branch is now surfaced explicitly in [[Reinforcement Learning for Execution]].

## Key Properties

- Uses data-driven models to learn patterns not specified entirely by hand
- Can support prediction, ranking, regime detection, or control problems
- Highly sensitive to leakage, regime instability, and weak validation design
- Depends on strong data engineering and careful testing discipline
- Should be evaluated against simpler baselines rather than assumed superior

## Relationships

- **Is-a:** Strategy family, modeling approach
- **Has-part:** Feature engineering, label design, model training, validation, deployment policy
- **Related:** [[Strategy Research]], [[Trading Data and Analysis]], [[Backtesting]], [[Performance Evaluation]], [[Reinforcement Learning for Execution]], [[LLM in Trading]]
- **Used-by:** Quant researchers, ML engineers in finance, systematic hedge funds, research platforms

## Examples

- Training a classifier to rank short-horizon return opportunity across stocks
- Using clustering to group market regimes before applying different strategy rules
- Applying reinforcement learning to choose among execution actions under changing order-book state

## Sources

- https://github.com/QuantInsti/Algo-Trading-Map
- https://github.com/quantra-go-algo/Algo-Trading-Map
- `sources/papers/knowledge-graph-construction-stock-markets-llm.md`

## See Also

- [[Strategy Research]]
- [[Trading Data and Analysis]]
- [[Backtesting]]
- [[Reinforcement Learning for Execution]]
- [[LLM in Trading]]
- [[Performance Evaluation]]