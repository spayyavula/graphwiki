# Building a Financial Knowledge Graph

This guide walks through a structured, six-step process for constructing a stock-market-oriented [[Financial Knowledge Graph]] from scratch. Each step builds on the previous one, and each links to the ontologies, identifiers, datasets, and tools covered elsewhere in this wiki.

## Prerequisites

You should be comfortable with the basics of [[RDF]] and [[Triple|triples]] before starting. Familiarity with [[OWL]] will help when working with [[FIBO]] in Step 1. If you are new to these concepts, start with [[Getting Started with Ontologies]] and [[Your First RDF Graph]].

---

## Step 1: Choose Your Ontology

The ontology defines what kinds of things your graph knows about and what relationships are valid between them. For a financial [[Knowledge Graph]], [[FIBO]] is the recommended backbone.

**Why FIBO?** [[FIBO]] provides 2,436 formally-defined classes covering every major area of finance — instruments, entities, markets, contracts, indices, and regulatory concepts. Its [[OWL]] 2 DL formalization means you can apply automated [[Inference and Reasoning|reasoning]] to classify instruments and validate data integrity. Its alignment with [[GLEIF]], [[ISO 20022]], [[XBRL]], and [[LSEG PermID]] means your graph will interoperate with external data sources out of the box.

Start by selecting the [[FIBO]] modules relevant to your scope:

- **BE (Business Entities):** Companies, legal entities — always needed
- **SEC (Securities):** Equities, bonds, funds — needed for instrument nodes
- **MD (Market Data):** Prices, quotes, exchange listings — needed for market data edges
- **IND (Indices and Indicators):** Benchmarks, sector indices

Load only the modules you need. [[FIBO]]'s modular design lets you import SEC without pulling in LOAN or DER unless your scope requires them.

If your graph also needs fraud detection or compliance layers, [[OntoFiC]] and the market surveillance ontology provide complementary class hierarchies for suspicious patterns and regulatory events.

---

## Step 2: Select Your Identifiers

Before ingesting a single data point, decide which [[Financial Identifier|financial identifiers]] will serve as canonical node keys. Identifier choice determines whether your graph can be joined with external datasets.

The recommended combination for a stock market graph:

| Node type | Identifier | Why |
|---|---|---|
| Company / legal entity | LEI ([[GLEIF]]) | Open, globally unique, [[RDF]]-native, [[FIBO]]-aligned |
| Instrument | [[FIGI]] | Open (CC-BY 4.0), venue-specific precision, OMG OWL ontology |
| Exchange / venue | MIC (ISO 10383) | Free, standard, [[FIBO]] FBC property |

Use [[LSEG PermID]] URIs as dereferenceable [[URI and IRI|URIs]] for Organization and Instrument nodes where possible — PermID provides stable HTTP URIs that resolve to [[RDF]] descriptions, fulfilling the [[Linked Data]] four-star requirement.

Store ISIN, CUSIP, and SEDOL as additional properties on instrument nodes — they are needed for joins with licensed data sources — but avoid using them as primary node identifiers due to licensing constraints. See [[Financial Identifier Comparison]] for a full breakdown.

---

## Step 3: Model Your Entities

With an ontology and identifier scheme in place, define the concrete node and edge types for your graph. Map each to a [[FIBO]] class:

**Core node types:**
- `fibo-be-le-lp:PubliclyHeldCompany` — public companies (identified by LEI)
- `fibo-sec-eq-eq:CommonShare` — common equity instruments (identified by FIGI + ISIN)
- `fibo-fbc-fi-fi:ListedSecurity` — exchange listing (identified by FIGI, MIC pair)
- `fibo-ind-mkt-bas:MarketIndex` — indices like S&P 500, KOSPI
- `fibo-fbc-fct-mkt:Exchange` — trading venues (identified by MIC)

**Core edge types:**
- `fibo-be-oac-cctl:isIssuedBy` — instrument to issuing company
- `fibo-fbc-fi-fi:isListedOn` — listing to exchange
- `fibo-be-le-lp:hasSubsidiary` — parent to subsidiary company
- `fibo-ind-mkt-bas:isMemberOf` — company to index

Reference real-world financial [[Knowledge Graph]] schemas for guidance. [[FinKario]]'s 19 relation types and dual attribute/event subgraph design are a strong structural reference. [[FinDKG]]'s 12 entity types and 15 relation types offer a news-derived schema. [[FinReflectKG]]'s S&P 100 extraction provides a validated schema for SEC filing entities.

---

## Step 4: Ingest Your Data

With the schema defined, populate the graph from multiple source types:

### XBRL Filings (Structured Financial Data)
[[XBRL]] filings from SEC EDGAR provide machine-readable income statements, balance sheets, and cash flows for all US public companies. [[SemanticXBRL]] demonstrates how to convert these to [[RDF]] at scale — 30,000 filings yield 125M+ triples. Use the US GAAP taxonomy concepts as additional properties on Company nodes, mapped to [[FIBO]] SEC classes where equivalences are defined.

### Market Reference Data (Identifiers and Listings)
Load [[LSEG PermID]] weekly bulk [[RDF]] files as the initial population of Organization and Instrument nodes. These files are CC-BY 4.0 and cover millions of entities pre-aligned with [[FIBO]]. Augment with [[GLEIF]] LEI data for legal entity hierarchy (L1/L2 parent relationships).

### News and Research Text (Event Data)
For dynamic event edges, NLP extraction pipelines over financial news (as in [[FinDKG]]) or equity research reports (as in [[FinKario]]) produce timestamped triples. Use schema-guided LLM extraction — as demonstrated by [[FinReflectKG]] — to constrain the extraction to your defined relation vocabulary and reduce hallucination. The [[Structure First Reason Next]] approach shows that extracting graph structure before reasoning over it improves downstream accuracy by 12% on financial QA tasks.

### Market Data Feeds
Price, volume, and quote data can be modeled as time-series edges on ListedSecurity nodes, using [[FIBO]] MD module properties. Attach timestamps to each price triple to enable temporal queries.

---

## Step 5: Query with SPARQL

Once the graph is loaded into a triple store (Apache Jena/Fuseki, Stardog, GraphDB, or Oxigraph), query it with [[SPARQL]].

Example: retrieve all equities listed on NASDAQ with their ISINs:

```sparql
PREFIX fibo-be: <https://spec.edmcouncil.org/fibo/ontology/BE/>
PREFIX fibo-fbc: <https://spec.edmcouncil.org/fibo/ontology/FBC/>

SELECT ?company ?instrument ?isin WHERE {
  ?instrument a fibo-fbc:ListedSecurity ;
              fibo-fbc:isListedOn <https://permid.org/1-exchange-XNAS> ;
              fibo-fbc:hasISIN ?isin ;
              fibo-fbc:isIssuedBy ?company .
}
```

[[SPARQL]] 1.1 supports federation (`SERVICE` clause), allowing you to query your local graph and [[LSEG PermID]] or [[GLEIF]]'s public [[SPARQL]] endpoints in a single query, joining across datasets without local data duplication.

---

## Step 6: Reason and Infer

The full value of an [[OWL]]-backed [[Financial Knowledge Graph]] is unlocked through [[Inference and Reasoning|automated reasoning]]. Load your graph plus the relevant [[FIBO]] modules into an OWL reasoner (HermiT, Pellet, or FaCT++):

- **Classification:** The reasoner automatically classifies instrument individuals into the correct [[FIBO]] subclass based on their properties — a node with `hasCouponRate` and `hasMaturityDate` is inferred to be a `DebtInstrument`
- **Consistency checking:** Violations of FIBO axioms (e.g., an instrument with two incompatible asset class designations) are surfaced as logical inconsistencies
- **Inheritance:** Properties defined on parent classes propagate to subclass instances without explicit assertion
- **Rule-based detection:** Add [[SWRL]] rules (as [[OntoFiC]] demonstrates) for domain-specific inference such as fraud pattern detection or risk classification

For compliance and surveillance use cases, [[SPARQL]] queries over the inferred graph retrieve all entities matching complex multi-hop patterns — a capability that relational databases cannot match without complex joins.

---

## Summary

A financial [[Knowledge Graph]] is built in layers: ontology → identifiers → schema → ingestion → query → reasoning. Each layer depends on the one below it. [[FIBO]] provides the semantic foundation; [[FIGI]] and LEI provide the identifier backbone; [[SemanticXBRL]], [[LSEG PermID]], and LLM extraction pipelines populate the graph; [[SPARQL]] and OWL reasoning unlock the analytical value.

The academic projects documented in this wiki — [[FinDKG]], [[FinKario]], [[FinReflectKG]], and [[SemanticXBRL]] — each demonstrate a different combination of these layers. A production graph will draw on all of them.

## See Also

- [[Financial Knowledge Graph]], [[FIBO]], [[OWL]], [[RDF]], [[Triple]]
- [[SPARQL]], [[Inference and Reasoning]], [[Linked Data]]
- [[Financial Identifier]], [[FIGI]], [[GLEIF]], [[LSEG PermID]]
- [[XBRL]], [[SemanticXBRL]], [[Legal Entity]], [[Financial Instrument]]
- [[FinDKG]], [[FinKario]], [[FinReflectKG]], [[OntoFiC]]
- [[Financial Identifier Comparison]], [[Exploring FIBO]]
- [[Structure First Reason Next]]
