# FinReflectKG — Agentic Construction and Evaluation of Financial Knowledge Graphs

**Venue:** ACM ICAIF 2024/2025
**URL:** https://dl.acm.org/doi/10.1145/3768292.3770363

## Summary

FinReflectKG uses LLM agents with a schema-guided extraction loop to construct a financial knowledge graph from SEC 10-K filings. The dataset covers S&P 100 companies using 2024 filings and is released as an open dataset.

## Data Source

- **Filings:** SEC 10-K annual reports
- **Coverage:** S&P 100 companies
- **Filing year:** 2024

## Construction Method

- **Schema-guided extraction:** Predefined ontology schema constrains what agents extract
- **Agentic loop:** LLM agents iteratively extract, reflect, and refine triples
- **Evaluation:** Automated and human evaluation of KG quality metrics (precision, recall, consistency)

## Key Contributions

- Demonstrates agentic (multi-step, self-correcting) extraction from long regulatory documents
- Schema-first approach reduces hallucination by constraining extraction to known relation types
- Open dataset enables reproducible benchmarking

## Relevance to GraphWiki

- Schema-guided extraction pattern directly applicable to ontology-driven ingestion pipelines
- SEC 10-K as a primary data source reference
- Reflection/self-correction loop pattern for LLM extraction quality improvement
- Open dataset potentially usable as a benchmark or seed graph
