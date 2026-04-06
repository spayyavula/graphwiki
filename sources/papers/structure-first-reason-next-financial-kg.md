# Structure First, Reason Next — KG Extraction from Financial Documents

**Year:** 2026
**ArXiv:** (preprint)

## Summary

Proposes a two-stage pipeline for financial question answering: first extract a structured knowledge graph from financial documents using Llama 3.1, then apply structured reasoning over the KG rather than reasoning directly over raw text. Achieves a 12% improvement on the FinQA benchmark.

## Pipeline Stages

1. **KG Extraction (Structure First)**
   - Model: Llama 3.1
   - Input: Financial documents (earnings reports, filings, tables)
   - Output: Structured triples capturing numerical facts, entities, and relations

2. **Structured Reasoning (Reason Next)**
   - Reasoning operates over the extracted KG rather than raw document text
   - Reduces hallucination by grounding reasoning steps in discrete graph facts
   - Supports multi-hop numerical reasoning required by FinQA

## Results

- **12% improvement** over direct document reasoning on the FinQA benchmark
- Demonstrates that graph-structured intermediate representation improves LLM arithmetic reasoning on financial data

## Key Contributions

- Validates the "structure as intermediate representation" paradigm for financial QA
- Llama 3.1 shown effective for structured extraction from financial text
- Pipeline is modular: extraction and reasoning stages can be swapped independently

## Relevance to GraphWiki

- Direct justification for KG-as-intermediate-representation design choice
- Llama 3.1 extraction pipeline is a practical implementation reference
- FinQA benchmark provides evaluation framework for graph-based financial reasoning
- Modular pipeline pattern applicable to GraphWiki's ingestion-to-query architecture
