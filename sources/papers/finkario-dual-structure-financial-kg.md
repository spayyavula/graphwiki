# FinKario — Dual-Structure Financial Knowledge Graph

**Year:** 2025
**ArXiv:** https://arxiv.org/pdf/2508.00961

## Summary

FinKario is a large-scale financial knowledge graph built from equity research reports, featuring a dual-structure design that separates static attributes from dynamic events. It aligns to FIBO and includes a retrieval-augmented generation (RAG) variant for stock prediction.

## Scale

- 305,000+ entities
- 19 relation types

## Dual Structure

- **Attribute subgraph:** Static company and instrument properties (sector, listing, fundamentals)
- **Event subgraph:** Dynamic events extracted from research reports (earnings releases, analyst upgrades, M&A announcements)

## Construction Pipeline

- Source: Equity research reports
- Extraction: LLM-assisted entity and relation extraction
- Alignment: FIBO ontology used to normalize entity types and relation semantics

## FinKario-RAG

- Retrieves relevant KG subgraphs as context for financial LLMs
- Achieves **18.81% improvement** over financial LLMs baseline on stock prediction tasks

## Relevance to GraphWiki

- Dual subgraph pattern (attribute vs. event) is a strong structural reference
- 19 relation types catalog is a direct schema input
- RAG integration pattern shows how KG retrieval feeds LLM reasoning
- FIBO alignment approach reusable for ontology normalization
