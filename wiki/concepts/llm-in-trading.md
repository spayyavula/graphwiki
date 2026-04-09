# LLM in Trading

**Definition:** The use of large language models in trading workflows for research assistance, information extraction, summarization, signal construction, or agentic support around market data and decision pipelines.

**Also known as:** LLM-assisted trading, language-model trading workflows, agentic trading research.

## Overview
[coverage: medium]

The QuantInsti fork of the Algo Trading Map explicitly adds LLMs as a modern branch of strategy learning. That addition matters because language models are now being used across the trading workflow, not only for chat-style interfaces. They can summarize filings, extract structured events from news, generate research code, classify market narratives, or support agentic research loops over large financial corpora.

At the same time, LLMs do not remove the core difficulties of trading. Market adaptation, noisy labels, delayed feedback, and execution costs still dominate real outcomes. An LLM-based workflow therefore belongs under [[Strategy Research]] and has to be judged using the same discipline as any other strategy family: clean data, realistic [[Backtesting]], explicit risk control, and skeptical [[Performance Evaluation]].

For GraphWiki, this concept is especially relevant because it links the algo-trading branch back to the repository's broader knowledge-graph and ontology theme. LLM systems often work better when constrained by structured representations such as [[Financial Knowledge Graph]]s, and the repository already contains examples of schema-guided financial extraction and graph construction.

## Key Properties

- Uses language models for research, extraction, summarization, coding, or decision support
- Often complements rather than replaces statistical and market-structure models
- Benefits from structured context such as [[Financial Knowledge Graph]] constraints
- Requires careful evaluation because plausible outputs can still be wrong or unstable
- Connects modern AI workflows to established trading-system discipline

## Relationships

- **Is-a:** Strategy-research sub-branch, AI-assisted workflow
- **Has-part:** News extraction, filing summarization, research copilots, agentic pipelines, graph-constrained reasoning
- **Related:** [[Strategy Research]], [[Machine Learning in Trading]], [[Financial Knowledge Graph]], [[Trading Data and Analysis]], [[Performance Evaluation]]
- **Used-by:** Quant researchers, financial AI teams, systematic funds, research-automation platforms

## Examples

- Extracting earnings guidance changes from filings into structured events
- Using an LLM research copilot to generate and test signal hypotheses from market text
- Combining news summaries with a [[Financial Knowledge Graph]] to improve context retrieval

## Sources

- https://github.com/QuantInsti/Algo-Trading-Map
- https://github.com/quantra-go-algo/Algo-Trading-Map
- `sources/papers/knowledge-graph-construction-stock-markets-llm.md`
- `sources/papers/structure-first-reason-next-financial-kg.md`

## See Also

- [[Strategy Research]]
- [[Machine Learning in Trading]]
- [[Financial Knowledge Graph]]
- [[Trading Data and Analysis]]
- [[Performance Evaluation]]