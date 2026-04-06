# OntoFiC

**Type:** Ontology
**Venue:** ACM ASONAM 2023
**URL:** https://dl.acm.org/doi/10.1145/3625007.3631503
**OWL file:** http://industryportal.enit.fr/ontologies/ONTOFIC

**Definition:** OntoFiC is an [[OWL]] ontology for financial fraud detection that models transaction types, fraud scenarios, and customer behavioral patterns in banking and payment systems, using [[SWRL]] rules and [[SPARQL]] queries to enable automated detection over transaction data.

## Overview

Financial fraud detection is increasingly a knowledge representation problem. Rule-based systems capture known fraud patterns, but they struggle to generalize when fraudsters combine patterns in novel ways. OntoFiC formalizes fraud knowledge as an [[OWL]] ontology, enabling [[Inference and Reasoning|OWL DL reasoning]] over transaction instances, [[SWRL]] Horn-clause rules for fraud heuristics, and [[SPARQL]] queries that retrieve suspicious transaction subgraphs matching fraud pattern templates.

The ontology was developed at ACM ASONAM 2023 and is publicly available as an OWL file, making it directly inspectable and extensible. Its class hierarchy covers the full arc from normal transaction behavior through behavioral profiling to named fraud scenario instances. The combination of formal ontology with SWRL rules bridges two traditions in knowledge engineering: the open-world [[OWL]] [[Inference and Reasoning|reasoning]] layer and the closed-world rule layer needed for operational fraud detection.

OntoFiC occupies a different niche from the market surveillance ontology described in the stock market monitoring literature. Where the surveillance ontology focuses on exchange-level market events (wash trading, spoofing), OntoFiC focuses on banking and payment system fraud (money laundering, account takeover) — the two are complementary layers for a comprehensive financial compliance [[Knowledge Graph]].

## Core Classes

| Class | Description |
|---|---|
| `SWIFTTransaction` | International wire transfer event modeled as an ontology individual |
| `FraudScenario` | Named fraud pattern instance (money laundering, account takeover, etc.) |
| `BehavioralPattern` | Statistical behavioral profile for a customer or account |
| `LegitimateTransaction` | Baseline normal transaction — the negative class |
| `FraudulentTransaction` | Transaction classified as fraudulent by rules or reasoning |

## Reasoning Mechanism

OntoFiC's detection logic operates at three layers:

### Layer 1: OWL DL Reasoning
The [[OWL]] class hierarchy defines subsumption relationships. `FraudulentTransaction` is disjoint from `LegitimateTransaction`. OWL DL reasoners (HermiT, Pellet) check class consistency and propagate inferences — for example, that any transaction satisfying the axioms of `MoneyLaundering` is automatically classified as `FraudulentTransaction`.

### Layer 2: SWRL Rules
SWRL (Semantic Web Rule Language) rules encode fraud detection heuristics as Horn clauses. Example pattern:

```
Transaction(?t) ∧ hasAmount(?t, ?a) ∧ greaterThan(?a, 10000) ∧
hasCountry(?t, ?c) ∧ isHighRiskCountry(?c, true) →
FraudScenario(?t)
```

SWRL rules operate over [[OWL]] individuals, allowing detection logic to cross-reference behavioral profiles, transaction amounts, counterparty jurisdictions, and timing patterns in a single inference step.

### Layer 3: SPARQL Queries
[[SPARQL]] queries retrieve suspicious transaction subgraphs matching named fraud pattern templates. This allows investigators to pull all transactions matching a specific `FraudScenario` type, ordered by risk score, for review. [[SHACL]] shapes can additionally validate that transaction data conforms to the expected structure before reasoning is applied.

## Comparison to [[FinDKG]] and Market Surveillance

| Dimension | OntoFiC | Market Surveillance Ontology | [[FinDKG]] |
|---|---|---|---|
| Domain | Banking / payments | Exchange trading | Financial news |
| Fraud patterns | Money laundering, account takeover | Wash trading, spoofing, insider trading | N/A (not fraud-focused) |
| Reasoning | OWL + SWRL | Ontology axioms + rules | Temporal link prediction |
| Data source | Transaction logs | Trade and order records | News text |

## Extensibility

OntoFiC is designed to be extended. New `FraudScenario` subclasses can be added for emerging patterns without restructuring the core hierarchy. New SWRL rules can encode novel detection heuristics. The behavioral pattern classes can be populated from external statistical models and linked back to ontology individuals, bridging machine learning outputs with formal [[Inference and Reasoning|reasoning]].

The [[FIBO]] alignment opportunity exists: `SWIFTTransaction` aligns naturally with FIBO's financial transaction classes, and `FraudulentTransaction` could be linked to FIBO's regulatory and compliance modules.

## Key URLs

- ACM DL: https://dl.acm.org/doi/10.1145/3625007.3631503
- OWL file: http://industryportal.enit.fr/ontologies/ONTOFIC

## Sources

- `sources/papers/ontofic-financial-fraud-ontology.md`

## See Also

- [[OWL]], [[Ontology]], [[SPARQL]], [[Inference and Reasoning]], [[SHACL]]
- [[Financial Knowledge Graph]], [[FIBO]]
- [[FinDKG]], [[FinReflectKG]]
