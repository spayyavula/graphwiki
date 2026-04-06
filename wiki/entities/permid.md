# LSEG PermID

**Type:** Identifier Service / Linked Data Dataset
**Operator:** LSEG (London Stock Exchange Group, formerly Refinitiv)
**License:** CC-BY 4.0
**Service URL:** https://permid.org/

**Definition:** LSEG PermID is an open financial entity identifier service that assigns stable, dereferenceable [[URI and IRI|URIs]] to organizations, instruments, quotes, funds, persons, and asset classes, publishing weekly [[RDF]] bulk files under CC-BY 4.0 with [[FIBO]] corporate entity alignment.

## Overview

Persistent, globally unique identifiers are a prerequisite for building an interoperable [[Financial Knowledge Graph]]. Without them, "Apple Inc." in one dataset cannot be reliably linked to "Apple" in another. PermID solves this problem for financial entities by issuing permanent, HTTP-dereferenceable [[URI and IRI|URIs]] — identifiers that not only uniquely name an entity but also resolve to a machine-readable description when retrieved.

PermID is operated by LSEG (London Stock Exchange Group), which acquired Refinitiv in 2021. The service covers millions of financial entities across seven entity types and is updated weekly via bulk [[RDF]] file releases. The CC-BY 4.0 license permits unrestricted reuse with attribution, making PermID one of the few large-scale, commercially-backed financial [[Linked Data]] datasets available for open use.

The [[FIBO]] alignment is particularly significant. PermID's corporate entity model reuses FIBO's Business Entities module for its Organization type hierarchy, meaning that PermID organizations can be directly joined with FIBO-aligned data from [[FinKario]], [[FinReflectKG]], and other FIBO-grounded sources without schema translation.

## Entity Types

| Type | Description | Example |
|---|---|---|
| Organization | Companies, banks, government bodies, exchanges | Apple Inc., Goldman Sachs, NYSE |
| Instrument | Securities — equities, bonds, derivatives | Apple common stock (AAPL) |
| Quote | Exchange-specific trading quote for an instrument | AAPL on NASDAQ |
| Fund | Investment funds and ETFs | Vanguard S&P 500 ETF |
| Person | Executives, directors, key personnel | Tim Cook |
| AssetClass | Equity, fixed income, commodity, currency | Equity, Fixed Income |
| Currency | ISO 4217 currencies | USD, EUR, JPY |

## Key Characteristics

### Stable URIs

PermID URIs follow the pattern `https://permid.org/1-<identifier>`. These are:

- **Permanent:** Once issued, a PermID URI is never reassigned or deleted
- **Dereferenceable:** HTTP GET on a PermID URI returns a machine-readable [[RDF]] description (content negotiation supported)
- **Globally unique:** No two entities share the same PermID, regardless of jurisdiction or asset class

Stable URIs enable [[Linked Data]] integration: a [[Financial Knowledge Graph]] that uses PermID URIs as canonical node identifiers can immediately link to any other dataset that references the same PermIDs.

### Cross-Identifier Links

Each Organization record links to:

- **LEI** ([[GLEIF]] Legal Entity Identifier) — the ISO 17442 standard for legal entity identification
- **ISIN** — International Securities Identification Number for instruments
- **Ticker symbol** — exchange-specific trading symbol
- **MIC** — Market Identifier Code for exchange identification

These cross-links make PermID a hub identifier in the [[Financial Identifier]] ecosystem. A single PermID lookup provides a normalized bridge to ISIN, LEI, and ticker — identifiers that appear in different source systems and data vendors.

### Weekly RDF Bulk Files

LSEG publishes full RDF dumps of the PermID dataset on a weekly cadence. The bulk files:

- Cover all entity types in a single download
- Are serialized in [[RDF]]/XML and Turtle formats
- Can be loaded directly into triple stores for [[SPARQL]] querying
- Are suitable for bootstrapping a financial [[Knowledge Graph]] with millions of pre-identified entities

### FIBO Alignment

PermID's Organization type hierarchy reuses [[FIBO]]'s Business Entities module. This means:

- PermID `Organization` individuals conform to FIBO's `LegalEntity` axioms
- [[Inference and Reasoning|OWL reasoners]] applied to a combined PermID + FIBO graph can infer FIBO class memberships for PermID entities
- FIBO-aligned tools (including [[FinKario]]'s entity normalization) can directly accept PermID URIs as entity identifiers

## Integration Patterns

### Using PermID as Graph Node Identifiers

The recommended pattern for a financial [[Knowledge Graph]] is to use PermID URIs as the primary identifiers for Organization and Instrument nodes:

```turtle
<https://permid.org/1-4295905573> a fibo-be-le-lp:PubliclyHeldCompany ;
    rdfs:label "Apple Inc." ;
    fibo-fbc-fct-ra:hasRegistrationIdentifier "US0378331005" ; # ISIN
    gleif-L1:hasLEI "HWUPKR0MPOU8FGXBT394" .
```

This pattern connects PermID to [[XBRL]] filings (via ISIN), [[GLEIF]] LEI data, and [[SemanticXBRL]] facts in a single graph.

### Bootstrapping with Bulk Data

The weekly bulk [[RDF]] files serve as a practical seed for initial graph population. The process:

1. Download the weekly PermID bulk file
2. Load into a triple store (Apache Jena, Stardog, GraphDB)
3. Query via [[SPARQL]] to retrieve all entities of a target type
4. Join against domain-specific data (filings, market data, news)

## Comparison to Other Financial Identifiers

See [[Financial Identifier Comparison]] for a full comparison of ISIN, CUSIP, SEDOL, FIGI, LEI, and MIC. PermID complements these identifiers by serving as a stable, dereferenceable linked data URI rather than a bare code string.

## Key URLs

- Service: https://permid.org/
- Bulk data: Available via PermID service registration
- License: CC-BY 4.0

## Sources

- `sources/web-clips/lseg-permid-linked-data.md`

## See Also

- [[Linked Data]], [[RDF]], [[FIBO]], [[URI and IRI]], [[Financial Identifier]]
- [[Legal Entity]], [[Financial Instrument]], [[SPARQL]]
- [[GLEIF]], [[SemanticXBRL]], [[FinKario]]
- [[Financial Identifier Comparison]]
