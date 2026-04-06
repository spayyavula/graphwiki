# Financial Identifier Standards — Quick Reference

## Identifier Summary Table

| Identifier | Standard | Length | Scope | Notes |
|------------|----------|--------|-------|-------|
| ISIN | ISO 6166 | 12 chars | Global securities | Country code + base + check digit; Wikidata P946 |
| CUSIP | ANSI X9.6 | 9 chars | US/Canadian instruments | https://www.cusip.com/ |
| SEDOL | — | 7 chars | UK/Irish instruments | London Stock Exchange |
| MIC | ISO 10383 | 4 chars | Market/exchange venues | Used in FIBO for exchange identification |
| LEI | ISO 17442 | 20 chars | Legal entities (globally) | Wikidata P1278; mandatory for OTC derivatives |
| FIGI | ANSI X9.145 | 12 chars | Universal instruments | Open data; Wikidata P3950 |

## Identifier Details

### ISIN (ISO 6166)
- Structure: 2-char country code + 9-char national security number + 1 check digit
- Used by: Wikidata (P946), FIBO, DBpedia (`dbo:isin`), PermID
- Scope: Identifies securities globally but does not specify exchange or currency

### CUSIP (ANSI X9.6)
- Administered by CUSIP Global Services
- Primarily US and Canadian equities, bonds, and funds
- Reference: https://www.cusip.com/

### SEDOL
- Stock Exchange Daily Official List
- Administered by London Stock Exchange
- Covers UK and Irish instruments; also used for some international instruments

### MIC (ISO 10383)
- 4-character code identifying trading venues (exchanges, MTFs, dark pools)
- Used in FIBO's `fibo-fbc-fi-fi:Exchange` class for venue identification
- Maintained by ISO; full list downloadable from ISO website

### LEI (ISO 17442)
- 20-character alphanumeric code for legal entities
- Mandatory for counterparties in OTC derivatives reporting (MiFID II, Dodd-Frank)
- Wikidata P1278; GLEIF (Global LEI Foundation) maintains the registry

### FIGI (ANSI X9.145)
- Bloomberg-originated but now open standard
- 12-character code covering equities, bonds, derivatives, currencies
- Open data with no licensing fee; Wikidata P3950

## Relevance to GraphWiki

- ISIN and LEI are the primary cross-linking identifiers for Instrument and Organization nodes
- MIC enables precise exchange venue identification aligned with FIBO
- FIGI's open data status makes it preferable for instrument identification where licensing matters
- Multiple identifier properties on each node enable federation with Wikidata, PermID, and DBpedia
