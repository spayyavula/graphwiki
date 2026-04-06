# Financial Identifier Comparison

[[Financial Identifier|Financial identifiers]] are the keys that allow different data sources, systems, and [[Knowledge Graph|knowledge graphs]] to refer to the same financial entity or instrument unambiguously. Six identifiers dominate the industry: ISIN, CUSIP, SEDOL, [[FIGI]], LEI, and MIC. Each has a different scope, format, governance model, and degree of openness — understanding the differences is essential for [[Linked Data]] integration and [[Financial Knowledge Graph]] design.

## Comparison Table

| Dimension | ISIN | CUSIP | SEDOL | [[FIGI]] | LEI | MIC |
|---|---|---|---|---|---|---|
| **Full name** | International Securities Identification Number | Committee on Uniform Securities Identification Procedures | Stock Exchange Daily Official List | Financial Instrument Global Identifier | Legal Entity Identifier | Market Identifier Code |
| **Scope** | Securities instruments (global) | Securities instruments (North America) | Securities instruments (UK/global) | Financial instruments (global) | Legal entities (organizations) | Trading venues / exchanges |
| **Format** | 2-char country code + 9-char NSIN + 1 check digit (12 chars total) | 9 alphanumeric characters | 7 alphanumeric characters | 12 alphanumeric characters (BBG prefix) | 20 alphanumeric characters (ISO 17442) | 4-char alphanumeric (ISO 10383) |
| **Example** | `US0378331005` (Apple) | `037833100` (Apple) | `2046251` (Apple) | `BBG000B9XRY4` (Apple) | `HWUPKR0MPOU8FGXBT394` (Apple) | `XNAS` (NASDAQ) |
| **Openness** | Restricted — issued by national numbering agencies, license required for bulk use | Restricted — CUSIP Global Services, licensed | Restricted — London Stock Exchange, licensed | Open — CC-BY 4.0, free bulk download | Open — [[GLEIF]] publishes full LEI registry under CC-0 | Open — ISO 10383 list free |
| **Governance** | ANNA (Association of National Numbering Agencies) / ISO 6166 | CUSIP Global Services (CGS) / ABA | LSEG (formerly London Stock Exchange) | Object Management Group (OMG) | [[GLEIF]] (Global Legal Entity Identifier Foundation) / ISO 17442 | ISO TC68 / [[SWIFT]] |
| **[[Ontology]] representation** | [[FIBO]] SEC module (`hasISIN` property) | [[FIBO]] SEC module (`hasCUSIP` property) | [[FIBO]] SEC module (`hasSEDOL` property) | [[FIBO]] MD module; OMG FIGI ontology | [[GLEIF]] L1 OWL ontology (`hasLEI`); [[FIBO]] BE module | [[FIBO]] FBC module (`hasMarketIdentifierCode`) |
| **Entity type** | Instrument | Instrument | Instrument | Instrument | Organization / Legal entity | Market / Exchange |
| **Coverage** | Global (212 countries via ANNA) | Primarily North America | Global (UK-origin, global expansion) | Global (all asset classes) | Global (any legal entity) | Global (all trading venues) |
| **[[Linked Data]] use** | Via [[FIBO]] and [[LSEG PermID]] cross-links | Via [[FIBO]] properties | Via [[FIBO]] properties | Open [[URI and IRI\|URI]] pattern: `https://www.openfigi.com/id/<figi>` | [[GLEIF]] publishes LEI data as [[RDF]] | Via [[FIBO]] FBC properties |

## ISIN

The International Securities Identification Number (ISO 6166) is the global standard for identifying a security. An ISIN uniquely identifies the instrument across markets — Apple common stock has ISIN `US0378331005` regardless of whether it trades on NASDAQ, the Frankfurt Stock Exchange, or a dark pool.

Structure: `CC-NNNNNNNNN-D` where CC is the ISO 3166-1 alpha-2 country code of the issuing national numbering agency, NNNNNNNNN is the 9-character national instrument number, and D is a Luhn check digit.

**Limitation:** ISIN identifies the instrument, not the trading venue or quote. Two listings of the same instrument on different exchanges share an ISIN but have different [[FIGI]] values.

**[[Ontology]] use:** [[FIBO]]'s SEC module defines `hasISIN` as a data property on `ListedSecurity`. [[LSEG PermID]] includes ISIN in its Instrument records as a cross-identifier link.

## CUSIP

CUSIP is the North American instrument identifier, used primarily for US and Canadian securities. It predates ISIN and remains deeply embedded in US financial infrastructure. Most US financial systems store CUSIP natively; ISIN is derived by prepending the country code and appending a check digit.

CUSIP is licensed, making bulk use in open [[Knowledge Graph]] projects legally complex. [[FIBO]] represents it as a property on instrument individuals, but open datasets typically omit CUSIP due to licensing constraints.

## SEDOL

The Stock Exchange Daily Official List identifier originated with the London Stock Exchange and is now administered by LSEG. It covers UK and international securities and is commonly used in European financial systems alongside ISIN. Like CUSIP, SEDOL is licensed.

## FIGI

The Financial Instrument Global Identifier is the newest and most open of the instrument identifiers. Developed by Bloomberg and donated to the OMG (Object Management Group), [[FIGI]] is issued under CC-BY 4.0, making it freely usable in open [[Knowledge Graph]] projects.

**Key distinction from ISIN:** [[FIGI]] is venue-specific. The same Apple common stock has a different [[FIGI]] on NASDAQ (`BBG000B9XRY4`) than on the Frankfurt Stock Exchange. This granularity makes [[FIGI]] the preferred identifier for market data and execution-level [[Knowledge Graph]] nodes, while ISIN is preferred for instrument-level nodes.

**[[Linked Data]] pattern:**
```turtle
<https://www.openfigi.com/id/BBG000B9XRY4> a fibo-sec-lst-ls:ListedSecurity ;
    fibo-fbc-fi-fi:hasFIGI "BBG000B9XRY4" ;
    fibo-fbc-fi-fi:hasISIN "US0378331005" .
```

[[FIBO]]'s MD (Market Data) module defines [[FIGI]]-aligned properties. The OMG also publishes a dedicated [[FIGI]] OWL ontology.

## LEI

The Legal Entity Identifier (ISO 17442) identifies legal entities — organizations, not instruments. [[GLEIF]] (Global Legal Entity Identifier Foundation) issues and maintains the LEI registry, which is published as open data under CC-0.

**LEI structure:** 20 characters. The first 4 identify the LOU (Local Operating Unit) that issued the LEI; the next 14 are entity-specific; the last 2 are check digits.

**[[Linked Data]] significance:** [[GLEIF]] publishes the full LEI registry as [[RDF]] via 7 OWL ontologies aligned with [[FIBO]]'s LegalEntity hierarchy. This makes LEI the most semantically rich open financial identifier — each LEI entry resolves to a machine-readable description of the legal entity including its jurisdiction, registration status, and L2 (ultimate parent) relationships.

**[[FIBO]] relationship:** [[FIBO]]'s BE module defines `hasLEI` as a property. The [[GLEIF]] ontologies extend FIBO's `LegalEntity` with LEI-specific axioms.

[[LSEG PermID]] includes LEI as a cross-reference in its Organization records, bridging the PermID and GLEIF identity systems.

## MIC

The Market Identifier Code (ISO 10383) identifies trading venues — stock exchanges, multilateral trading facilities (MTFs), and systematic internalisers. The ISO 10383 code list is freely available, making MIC the most open of the instrument-adjacent identifiers.

MIC is a 4-character code: `XNAS` for NASDAQ, `XLON` for the London Stock Exchange, `XETR` for Deutsche Börse XETRA. [[FIBO]]'s FBC module defines `hasMarketIdentifierCode` as a property on `TradingVenue`.

MICs are essential for resolving the ambiguity that ISINs create: when the same ISIN trades on multiple venues, the MIC distinguishes which venue's price and liquidity data is referenced.

## Choosing Identifiers for a Financial Knowledge Graph

A production financial [[Knowledge Graph]] typically uses multiple identifiers in combination:

| Node type | Recommended identifier(s) |
|---|---|
| Legal entity (company, bank) | LEI (open) + [[LSEG PermID]] URI |
| Instrument (equity, bond) | ISIN + [[FIGI]] (open) |
| Listing / quote | [[FIGI]] (venue-specific) |
| Trading venue | MIC |

The guide [[Building a Financial Knowledge Graph]] covers this selection process in the context of a full construction workflow.

For [[Linked Data]] publication, [[URI and IRI|URI]] selection is equally important: use dereferenceable URIs (PermID URIs for organizations, OpenFIGI URIs for instruments) as canonical node identifiers rather than bare code strings, which are not [[Linked Data]]-compatible.

## Ontology Representation Summary

All six identifiers are represented in [[FIBO]] as data properties on the appropriate entity class:

- ISIN, CUSIP, SEDOL, [[FIGI]] → properties on `FinancialInstrument` / `ListedSecurity`
- LEI → property on `LegalEntity` (also in [[GLEIF]] OWL ontologies)
- MIC → property on `TradingVenue` / `FinancialMarket`

[[SPARQL]] queries against a FIBO-aligned graph can retrieve any of these identifier values as literals, enabling joins across datasets that use different primary identifiers.

## See Also

- [[Financial Identifier]], [[FIGI]], [[GLEIF]], [[URI and IRI]]
- [[FIBO]], [[Linked Data]], [[RDF]], [[SPARQL]]
- [[Financial Instrument]], [[Legal Entity]], [[Securities]]
- [[LSEG PermID]], [[SemanticXBRL]]
- [[Building a Financial Knowledge Graph]]
