# FinKario

**Type:** Dataset / Knowledge Graph
**Year:** 2025
**ArXiv:** https://arxiv.org/pdf/2508.00961

**Definition:** FinKario is a large-scale [[Financial Knowledge Graph]] with 305,000+ entities and 19 relation types, built from equity research reports using a dual-structure design that separates static attribute facts from dynamic event facts, with [[FIBO]] alignment and a [[Inference and Reasoning|RAG]]-based variant that achieves 18.81% improvement on stock prediction tasks.

## Overview

FinKario's central innovation is the dual-structure design: rather than storing all facts in a single homogeneous graph, FinKario partitions its triples into two semantically distinct subgraphs. The **attribute subgraph** holds time-stable properties — a company's sector, listing exchange, founding date, parent organization. The **event subgraph** holds time-varying events — earnings releases, analyst rating changes, merger announcements — each timestamped to its occurrence.

This separation matters for downstream reasoning. Queries over stable attributes (e.g., "what sector is this company in?") hit the attribute subgraph without touching the much larger event log. Queries over recent market signals hit the event subgraph without loading irrelevant static facts. The design mirrors the distinction [[FIBO]] draws between reference data and market data in its ontology modules.

[[FIBO]] alignment is a key differentiator. FinKario's entity types and relation semantics are normalized against FIBO's class hierarchy, meaning that entity types like `ListedSecurity`, `Equity`, and `LegalEntity` carry the same formal meaning as in the FIBO ontology. This makes FinKario directly interoperable with any FIBO-aligned tool or pipeline, including [[GLEIF]] LEI data and [[LSEG PermID]] linked data.

## Scale

| Dimension | Value |
|---|---|
| Entities | 305,000+ |
| Relation types | 19 |
| Source | Equity research reports |
| Ontology alignment | [[FIBO]] |
| RAG improvement | 18.81% over baseline on stock prediction |

## Dual-Structure Design

### Attribute Subgraph

The attribute subgraph stores static or slowly-changing properties:

- Company fundamentals (sector, industry, market cap tier)
- Instrument properties (listing exchange, currency, asset class)
- Organizational structure (subsidiaries, parent companies)
- Analyst coverage (which firms cover which companies)

These facts change rarely and are suited to cache-friendly, read-optimized access patterns.

### Event Subgraph

The event subgraph stores timestamped financial events extracted from research reports:

- Earnings releases and guidance updates
- Analyst rating upgrades and downgrades
- Merger, acquisition, and restructuring announcements
- Macroeconomic event impacts on specific instruments

Each event triple carries a timestamp and can be linked to relevant [[Securities]] and [[Financial Instrument|financial instruments]].

## Construction Pipeline

1. **Source ingestion:** Equity research reports (PDF and structured text) are ingested
2. **LLM-assisted extraction:** A large language model extracts entity mentions and relation instances, guided by the [[FIBO]]-aligned schema
3. **Ontology normalization:** Extracted entity types are mapped to [[FIBO]] classes; ambiguous mentions are resolved against the attribute subgraph
4. **Subgraph routing:** Each extracted triple is classified as an attribute fact or an event fact and routed to the appropriate subgraph
5. **Deduplication:** Cross-report entity coreference resolution merges duplicate mentions

## FinKario-RAG

FinKario-RAG is a retrieval-augmented generation variant that treats the [[Knowledge Graph]] as a retrieval corpus for financial language model prompting:

1. A stock prediction query arrives (e.g., "What is the expected price movement for Company X?")
2. Relevant subgraphs are retrieved from both the attribute and event subgraphs
3. Retrieved triples are serialized into natural language context
4. A financial LLM generates predictions conditioned on the structured context

The RAG variant achieves **18.81% improvement** over financial LLM baselines on stock prediction tasks, demonstrating that structured [[Knowledge Graph]] retrieval adds substantial signal beyond raw text retrieval. This result is consistent with the finding from [[Structure First Reason Next]] that graph-structured intermediate representations improve LLM numerical reasoning on financial data.

## FIBO Alignment

The [[FIBO]] alignment enables several practical benefits:

- Entity types carry formally defined semantics, reducing ambiguity at schema boundaries
- FinKario instances can be joined with [[LSEG PermID]] linked data, which also reuses FIBO's corporate entity model
- [[SPARQL]] queries written for FIBO-aligned graphs can be reused against FinKario with minimal adaptation
- The alignment reduces the gap between FinKario's knowledge and [[Inference and Reasoning|OWL reasoner]] inference, since FIBO axioms apply to aligned instances

## Key URLs

- ArXiv: https://arxiv.org/pdf/2508.00961

## Sources

- `sources/papers/finkario-dual-structure-financial-kg.md`

## See Also

- [[Financial Knowledge Graph]], [[Knowledge Graph]], [[FIBO]], [[Financial Instrument]]
- [[Inference and Reasoning]], [[SPARQL]], [[Securities]]
- [[FinDKG]], [[FinReflectKG]], [[LSEG PermID]]
- [[Structure First Reason Next]]
