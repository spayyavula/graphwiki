# FinDKG — Dynamic Knowledge Graph for Financial Markets

**Year:** 2024
**License:** GPL-3.0
**Status:** Open source

## Summary

FinDKG is a temporally-resolved financial knowledge graph constructed from nearly 400,000 Wall Street Journal articles spanning 24 years. It captures how entity relationships evolve over time, making it suitable for temporal reasoning and forecasting tasks.

## Scale

- ~400,000 Wall Street Journal articles (1999–2023)
- 12 entity types
- 15 relation types
- Temporally-resolved triples (each triple carries a time stamp or time range)

## Entity Types (12)

Covers companies, persons, countries, organizations, financial instruments, economic indicators, and related categories extracted from news text.

## Relation Types (15)

Includes relations such as investment, acquisition, partnership, competition, regulatory action, and macroeconomic impact.

## Construction Pipeline

- Source: Wall Street Journal full-text archive
- NLP extraction pipeline produces timestamped triples
- Temporal resolution enables link prediction across time windows

## Relevance to GraphWiki

- Temporal triple pattern is a key reference for time-stamped edge design
- 24-year span demonstrates longitudinal KG construction feasibility
- 12 entity / 15 relation type catalog is a direct schema reference
- Open source (GPL-3.0) — reusable with license compliance consideration
