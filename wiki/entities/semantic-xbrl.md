# SemanticXBRL

**Type:** Dataset / Methodology
**Paper:** https://www.semantic-web-journal.net/system/files/swj869.pdf

**Definition:** SemanticXBRL is a large-scale conversion of ~30,000 SEC EDGAR financial filings from [[XBRL]] format into [[RDF]] triples, producing 125 million+ triples and one of the largest publicly available open semantic financial datasets.

## Overview

[[XBRL]] (eXtensible Business Reporting Language) is the structured reporting standard mandated by the SEC for US public company financial filings. Every income statement, balance sheet, and cash flow statement filed with the SEC since 2009 carries XBRL tags that map each reported figure to a concept in the US GAAP taxonomy. SemanticXBRL converts this existing machine-readable structure into the [[RDF]] data model, making it directly queryable via [[SPARQL]] and linkable to other [[Linked Data]] sources.

The significance of SemanticXBRL lies in its scale and its reuse of existing regulatory infrastructure. Rather than building a new extraction pipeline from unstructured text — as [[FinReflectKG]] does for narrative 10-K sections — SemanticXBRL works with the already-structured XBRL layer that companies are legally required to file. The result is high-precision financial data: revenue, net income, total assets, debt, and hundreds of other concepts, all with explicit period annotations (annual, quarterly) and company identifiers.

At 125 million+ [[Triple|triples]] across ~30,000 filings, SemanticXBRL represents one of the largest open [[RDF]] datasets in the financial domain — larger than most academic [[Knowledge Graph|knowledge graphs]] by an order of magnitude.

## Scale

| Dimension | Value |
|---|---|
| Filings converted | ~30,000 SEC EDGAR filings |
| Output triples | 125 million+ |
| Source format | [[XBRL]] (US GAAP taxonomy) |
| Output format | [[RDF]] triples |
| Coverage | US public companies (10-K, 10-Q, and related forms) |
| Access | Open (Semantic Web Journal paper) |

## Data Characteristics

### Source: XBRL Filings

[[XBRL]] uses an XML-based tagging system where each financial fact is associated with:

- A **concept** from the GAAP taxonomy (e.g., `us-gaap:Revenues`, `us-gaap:Assets`)
- A **context** specifying the reporting entity and period (e.g., Apple Inc., fiscal year 2023)
- A **unit** (currency, shares, etc.)
- A **value** (the reported number)

This dimensional structure — (company × period × concept) — is the organizing axis of XBRL. SemanticXBRL preserves this structure in [[RDF]], mapping each dimension to an appropriate predicate.

### Output: RDF Triples

The conversion maps XBRL structure to [[RDF]] as follows:

- Each filing becomes a named graph or set of triples identified by the filer's CIK (SEC company identifier)
- XBRL concepts become [[RDF]] predicates or objects
- Period annotations become literal values or linked time individuals
- Company identifiers link to [[Legal Entity]] and [[Financial Identifier]] resources

### Financial Concepts Covered

SemanticXBRL captures all concepts reported under the US GAAP XBRL taxonomy, including:

- **Income statement:** Revenue, gross profit, operating income, net income, EPS
- **Balance sheet:** Total assets, total liabilities, stockholders' equity, cash and equivalents
- **Cash flow:** Operating, investing, and financing cash flows
- **Segment data:** Revenue and profit by reportable segment

## Relationship to XBRL and Linked Data

SemanticXBRL demonstrates that [[XBRL]] is not merely a compliance format — it is a latent [[Linked Data]] layer waiting to be activated. The US GAAP XBRL taxonomy is itself a structured vocabulary, analogous to an [[OWL]] ontology, with concept hierarchies and definitions. By converting XBRL facts to [[RDF]], SemanticXBRL makes this vocabulary machine-traversable and joinable with [[FIBO]] class definitions and [[LSEG PermID]] entity identifiers.

The [[SPARQL]] queryability of the resulting dataset enables cross-company, cross-period financial analysis that would require complex database joins in a traditional relational model. For example, a [[SPARQL]] query can retrieve the revenue trend for all S&P 500 companies over ten years in a single graph traversal.

## Relationship to FinReflectKG

[[FinReflectKG]] and SemanticXBRL are complementary approaches to the same source documents (SEC filings):

- **SemanticXBRL** converts the structured XBRL layer — quantitative financial facts with precise taxonomy tags
- **[[FinReflectKG]]** extracts the narrative text layer — qualitative facts about subsidiaries, risk factors, and business operations

A complete financial [[Knowledge Graph]] built from SEC filings would integrate both layers: SemanticXBRL provides the numerical backbone; [[FinReflectKG]] provides the relational context.

## Use Cases

- **Fundamental analysis at scale:** Query revenue, earnings, and balance sheet trends across thousands of companies via [[SPARQL]]
- **Anomaly detection:** Identify outlier financial ratios that may indicate reporting irregularities
- **Ontology alignment:** Map US GAAP XBRL taxonomy concepts to [[FIBO]] [[Securities]] and financial instrument classes
- **Benchmark dataset:** 125M+ triples provide a large-scale test bed for financial [[Knowledge Graph]] tools and reasoners

## Key URLs

- Paper: https://www.semantic-web-journal.net/system/files/swj869.pdf

## Sources

- `sources/web-clips/semantic-xbrl-dataset.md`

## See Also

- [[RDF]], [[Triple]], [[XBRL]], [[SPARQL]], [[Linked Data]]
- [[Financial Knowledge Graph]], [[FIBO]], [[Legal Entity]]
- [[FinReflectKG]], [[LSEG PermID]], [[Financial Identifier]]
