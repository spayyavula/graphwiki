# Knowledge Graph Construction for Stock Markets with LLM-Based Explainable Reasoning

**Authors:** Lee et al.
**Year:** 2025
**Venue:** CIKM 2025 Workshop
**ArXiv:** https://arxiv.org/abs/2601.11528

## Summary

Proposes a knowledge graph construction pipeline for stock markets that uses large language models to provide explainable reasoning over the resulting graph. The system is validated on Korean listed companies.

## Schema

- **Entities:** Companies, Sectors, Stock indicators, Financial statements
- **Relationships:** Inter-company relationships (supply chain, competition, investment)
- **Temporal dimension:** Indicators and statements are time-stamped

## Key Contributions

- End-to-end KG construction pipeline tailored to equity markets
- LLM-based reasoning layer generates natural-language explanations for graph-derived inferences
- Evaluated on Korean Stock Exchange (KRX) listed companies
- Demonstrates how structured KG triples can feed into LLM prompts for explainable stock analysis

## Relevance to GraphWiki

- Direct schema reference for company, sector, and indicator node types
- Explainability layer pattern applicable to graph query results
- Korean market validation shows cross-market portability considerations
