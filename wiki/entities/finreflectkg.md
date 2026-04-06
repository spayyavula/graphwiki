# FinReflectKG

**Type:** Dataset / Knowledge Graph / Methodology
**Venue:** ACM ICAIF 2024/2025
**URL:** https://dl.acm.org/doi/10.1145/3768292.3770363

**Definition:** FinReflectKG is an agentic [[Financial Knowledge Graph]] constructed from SEC 10-K filings for S&P 100 companies using a schema-guided LLM extraction loop with iterative self-correction, demonstrating how agentic pipelines reduce hallucination in regulatory document ingestion.

## Overview

FinReflectKG addresses a fundamental challenge in financial [[Knowledge Graph]] construction: SEC 10-K annual reports are long, dense regulatory documents where relevant facts are scattered across hundreds of pages of legal and financial prose. Naive LLM extraction over such documents produces high rates of hallucination and schema violation. FinReflectKG's contribution is a schema-guided agentic loop that constrains extraction to a predefined ontology schema and iteratively refines output through reflection steps.

The schema-first approach means that the LLM agent is not asked to invent relation types — it is given a fixed vocabulary of permitted entity types and relation predicates derived from the ontology schema, and tasked only with identifying instances of those types in the source text. This dramatically reduces the space of possible outputs and makes evaluation tractable.

The dataset covers [[Securities|S&P 100]] companies using their 2024 [[XBRL]]-structured 10-K filings from SEC EDGAR. Because 10-K filings are mandatory annual disclosures, FinReflectKG provides a consistent, annually-refreshable snapshot of the largest US public companies, linked to [[Legal Entity|legal entity]] identifiers and organized around the [[XBRL]] taxonomy that governs financial statement reporting.

## Data Source

| Dimension | Value |
|---|---|
| Filing type | SEC 10-K (annual report) |
| Coverage | S&P 100 companies |
| Filing year | 2024 |
| Source format | [[XBRL]]-structured SEC EDGAR filings |
| Release | Open dataset |

## Construction Method

### Schema-Guided Extraction

Before any document is processed, FinReflectKG defines its target ontology schema:

- **Entity types:** Companies, executives, subsidiaries, products, markets, risk factors, regulatory bodies
- **Relation types:** Subsidiary-of, employs, operates-in, subject-to-regulation, filed-with, reports-segment

The LLM agent receives this schema as a constraint. It may only extract triples whose predicate appears in the permitted relation set. This mirrors the principle behind [[XBRL]] itself — structured financial reporting works precisely because reporters must use a predefined taxonomy of concepts rather than inventing their own labels.

### Agentic Extraction Loop

The pipeline runs multiple passes over each 10-K document:

1. **Extract:** The agent reads a document section and proposes a set of triples
2. **Reflect:** A reflection step evaluates each proposed triple against the schema and against previously extracted facts for consistency
3. **Refine:** Inconsistent or low-confidence triples are revised or discarded
4. **Consolidate:** Final triples from all document sections are merged and deduplicated

The reflection step is the key innovation — it operationalizes the "chain of thought" reasoning pattern at the extraction level, rather than only at query time. The result is measurably higher precision and consistency compared to single-pass LLM extraction.

### Evaluation

FinReflectKG applies both automated and human evaluation:

- **Automated:** Precision, recall, and F1 against a held-out annotation set
- **Human:** Expert annotators assess whether extracted triples correctly represent the source filing

This dual evaluation methodology supports reproducible benchmarking, allowing future work to compare alternative extraction approaches against a fixed reference.

## Relationship to XBRL and Semantic XBRL

10-K filings use [[XBRL]] to tag financial data with machine-readable concept labels. FinReflectKG works at the narrative text level (the qualitative sections of the 10-K) rather than purely at the XBRL tag level. This complements [[SemanticXBRL]], which converts the structured XBRL facts (income statement, balance sheet figures) into [[RDF]] triples. Together, FinReflectKG (narrative knowledge) and [[SemanticXBRL]] (structured financial facts) cover complementary layers of the 10-K document.

## Use Cases

- **Corporate [[Knowledge Graph]] bootstrapping:** S&P 100 triples provide a high-quality seed graph for larger ingestion pipelines
- **Risk factor analysis:** Extracted risk factor entities and relations support automated surveillance queries
- **Regulatory compliance mapping:** Subsidiary and regulatory-body triples support [[Legal Entity]] hierarchy analysis
- **Benchmarking:** Open dataset enables comparison of future extraction methods

## Key URLs

- ACM DL: https://dl.acm.org/doi/10.1145/3768292.3770363

## Sources

- `sources/papers/finreflectkg-sec-10k-knowledge-graph.md`

## See Also

- [[Financial Knowledge Graph]], [[Knowledge Graph]], [[XBRL]], [[Legal Entity]]
- [[Securities]], [[SPARQL]], [[RDF]]
- [[SemanticXBRL]], [[FinDKG]], [[FinKario]]
