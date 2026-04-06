# Wikidata Financial Data — Quick Reference

**SPARQL endpoint:** https://query.wikidata.org/
**Company properties reference:** https://www.wikidata.org/wiki/Wikidata:WikiProject_Companies/Properties

## Key Q-Items (Entity Types)

| Q-item | Label |
|--------|-------|
| Q11691 | Stock exchange |
| Q4830453 | Business |
| Q891723 | Public company |
| Q11198 | Stock |
| Q182453 | Share |
| Q161726 | Derivative |

## Key Properties

| Property | Label |
|----------|-------|
| P946 | ISIN |
| P249 | Ticker symbol |
| P414 | Stock exchange (where listed) |
| P1278 | LEI (Legal Entity Identifier) |
| P3950 | FIGI |

## Notes

- Wikidata serves as a cross-linking hub: company Q-items link to ISIN (P946), ticker (P249), and exchange (P414) in a single record
- SPARQL endpoint supports federated queries linking Wikidata to DBpedia and other LOD endpoints
- WikiProject Companies maintains a curated property set specifically for corporate entities
- Identifiers (ISIN, LEI, FIGI) enable alignment with FIBO and PermID datasets

## Relevance to GraphWiki

- Q-items are stable URIs usable as external identifiers for company nodes
- Property set defines a minimal financial entity schema already validated at scale
- SPARQL endpoint enables live data enrichment queries
