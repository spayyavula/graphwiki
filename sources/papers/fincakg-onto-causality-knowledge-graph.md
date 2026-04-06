# FinCaKG-Onto: Financial Expertise via Causality Knowledge Graph and Domain Ontology

**Publisher:** Springer Applied Intelligence
**Year:** 2025
**URL:** https://link.springer.com/article/10.1007/s10489-025-06247-1

## Summary

Constructs a causal knowledge graph from financial text by combining BERT-based causality detection with FIBO entity linking. The Financial Industry Business Ontology (FIBO) serves as the domain ontology backbone for grounding extracted entities.

## Approach

- **Causality detection:** Fine-tuned BERT model identifies cause-effect pairs in financial news and reports
- **Entity linking:** Detected entities are linked to FIBO classes and instances
- **KG construction:** Causal triples are stored as a structured knowledge graph
- **Ontology backbone:** FIBO provides the formal class hierarchy and property definitions

## Key Contributions

- Demonstrates FIBO as a practical backbone for financial NLP pipelines
- Causal structure adds explanatory power beyond co-occurrence-based KGs
- Bridges NLP extraction and formal ontology alignment

## Relevance to GraphWiki

- FIBO alignment pattern directly applicable to ontology design decisions
- Causality as a relation type for inter-company and macro-micro event edges
- BERT causality detection pipeline reference for future text ingestion
