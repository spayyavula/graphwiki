# SemanticXBRL — SEC EDGAR Filings as RDF

**Paper:** https://www.semantic-web-journal.net/system/files/swj869.pdf

## Summary

SemanticXBRL converts SEC EDGAR financial filings (in XBRL format) into RDF triples, producing one of the largest publicly available semantic financial datasets. The conversion preserves the structured financial reporting semantics of XBRL within a linked data framework.

## Scale

- ~30,000 SEC EDGAR filings converted
- 125 million+ RDF triples

## Data Characteristics

- **Source format:** XBRL (eXtensible Business Reporting Language) — the structured format mandated by the SEC for financial filings
- **Output format:** RDF triples with XBRL taxonomy concepts mapped to RDF predicates
- **Coverage:** US public companies filing with the SEC (10-K, 10-Q, and related forms)
- **Financial facts:** Income statement, balance sheet, and cash flow figures with period annotations

## Key Contributions

- Demonstrates XBRL-to-RDF conversion at scale as a reproducible methodology
- 125M+ triples make it one of the largest open semantic financial datasets
- Preserves XBRL dimensional structure (company × period × concept) in RDF

## Relevance to GraphWiki

- Largest available open RDF financial dataset — potential seed or benchmark corpus
- XBRL taxonomy alignment provides a concept vocabulary for financial statement facts
- SEC EDGAR as primary source aligns with FinReflectKG's 10-K based approach
- RDF output is directly loadable into triple stores for SPARQL querying
