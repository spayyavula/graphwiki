# FinDKG

**Type:** Dataset / Knowledge Graph
**Year:** 2024
**License:** GPL-3.0
**Status:** Open source

**Definition:** FinDKG is a temporally-resolved [[Financial Knowledge Graph]] constructed from ~400,000 Wall Street Journal articles spanning 1999–2023, capturing how financial entity relationships evolve over time through 12 entity types and 15 relation types encoded as timestamped [[Triple|triples]].

## Overview

FinDKG addresses a core limitation of static [[Knowledge Graph|knowledge graphs]]: the inability to represent how relationships change over time. In financial markets, relationships such as supply-chain partnerships, competitive dynamics, and regulatory exposures shift continuously. By attaching a time dimension to each [[Triple]], FinDKG enables temporal link prediction — forecasting which relationships are likely to form or dissolve in a future time window.

The dataset is built from Wall Street Journal full-text archives, making it one of the longest-spanning open financial news [[Knowledge Graph|knowledge graphs]] available. Its 24-year coverage (1999–2023) spans multiple market cycles including the dot-com collapse, the 2008 financial crisis, and the COVID-19 shock, giving it substantial longitudinal depth for financial [[Inference and Reasoning|reasoning]] tasks.

Because each triple carries a timestamp or time range, FinDKG can be loaded into temporal [[Knowledge Graph]] stores and queried with time-scoped [[SPARQL]] patterns. The [[RDF]] serialization makes it compatible with standard triple stores, and the GPL-3.0 license permits academic reuse with appropriate attribution.

## Scale

| Dimension | Value |
|---|---|
| Source articles | ~400,000 Wall Street Journal articles |
| Coverage period | 1999–2023 (24 years) |
| Entity types | 12 |
| Relation types | 15 |
| Triple structure | Temporally-resolved (timestamped) |
| License | GPL-3.0 |

## Entity Types

FinDKG's 12 entity types span the core actors and instruments of financial markets:

- **Companies** — public and private corporations
- **Persons** — executives, analysts, regulators
- **Countries** — geopolitical actors in macroeconomic events
- **Organizations** — non-corporate institutions (central banks, trade bodies)
- **Financial instruments** — [[Securities]], bonds, derivatives
- **Economic indicators** — GDP, inflation, interest rate references
- Plus six additional categories covering commodities, sectors, and market events

## Relation Types

The 15 relation types capture the primary ways financial entities interact:

- **Corporate actions:** acquisition, merger, spin-off
- **Market relations:** competition, partnership, supply chain
- **Capital flows:** investment, financing, underwriting
- **Regulatory:** regulatory action, enforcement, sanction
- **Macro linkages:** macroeconomic impact, currency exposure

## Construction Pipeline

FinDKG's pipeline processes Wall Street Journal full-text articles through an NLP extraction stack:

1. Named entity recognition identifies entities across the 12 types
2. Relation extraction classifies interactions into the 15 relation types
3. Temporal tagging attaches publication date or inferred time range to each extracted triple
4. Deduplication and canonicalization merge co-referring entity mentions

The result is a set of timestamped [[Triple|triples]] of the form `(subject, relation, object, time)` that can be loaded directly into a temporal [[Knowledge Graph]] store or flattened into standard [[RDF]] for [[SPARQL]] querying.

## Use Cases

- **Temporal link prediction:** Given the graph state at time *t*, predict which edges will appear at *t+1*
- **Event-driven analysis:** Retrieve all [[Securities]]-related triples around a specific [[Market Data]] event date
- **Longitudinal entity tracking:** Trace how a company's relationships evolve across market cycles
- **Training data:** Temporal triples serve as supervision signal for graph neural network models

## Relationship to Other Work

FinDKG's temporal triple design complements the dual-structure approach of [[FinKario]], which separates static attribute subgraphs from dynamic event subgraphs. Where FinKario draws on equity research reports, FinDKG draws on news text — the two are complementary sources for a production financial [[Knowledge Graph]]. [[FinReflectKG]] takes a different angle, focusing on structured regulatory filings rather than news.

## Key URLs

- Paper: (2024, open access)
- License: GPL-3.0 (reuse requires license compliance review)

## Sources

- `sources/papers/findkg-dynamic-knowledge-graph.md`

## See Also

- [[Financial Knowledge Graph]], [[Knowledge Graph]], [[Triple]], [[RDF]], [[SPARQL]]
- [[Securities]], [[Market Data]], [[Inference and Reasoning]]
- [[FinKario]], [[FinReflectKG]]
