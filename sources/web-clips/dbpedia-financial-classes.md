# DBpedia Financial Classes — Quick Reference

**SPARQL endpoint:** https://dbpedia.org/sparql
**OWL download:** http://archivo.dbpedia.org/download?o=http%3A//dbpedia.org/ontology/&f=owl

## Key Classes

| Class | Description |
|-------|-------------|
| `dbo:Company` | Corporate entity |
| `dbo:Bank` | Banking institution |
| `dbo:StockExchange` | Securities exchange venue |
| `dbo:InvestmentFund` | Collective investment vehicle |
| `dbo:Bond` | Debt instrument |
| `dbo:Currency` | Currency entity |

## Key Properties

| Property | Description |
|----------|-------------|
| `dbo:stockExchange` | Links company to its listing exchange |
| `dbo:isin` | ISIN identifier string |
| `dbo:revenue` | Annual revenue figure |
| `dbo:netIncome` | Net income figure |
| `dbo:assets` | Total assets figure |

## Schema.org Alignment

- DBpedia has been aligned to schema.org since DBpedia version 3.7
- `dbo:Company` aligns to `schema:Organization`
- Alignment enables interoperability with structured web data and Google Knowledge Graph

## Notes

- OWL file downloadable from Archivo for offline ontology inspection
- DBpedia is extracted from Wikipedia infoboxes — coverage follows Wikipedia completeness
- Financial figures (revenue, net income) are point-in-time snapshots, not time series

## Relevance to GraphWiki

- `dbo:Company` and `dbo:StockExchange` are standard reference classes for ontology alignment
- ISIN property (`dbo:isin`) enables cross-linking with Wikidata P946 and FIBO instruments
- OWL file provides a concrete class hierarchy to compare against FIBO and custom ontology
