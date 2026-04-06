# OntoFiC — An Ontology for Financial Fraud Detection and Customer Behavior Modeling

**Venue:** ACM ASONAM 2023
**URL:** https://dl.acm.org/doi/10.1145/3625007.3631503
**OWL file:** http://industryportal.enit.fr/ontologies/ONTOFIC

## Summary

OntoFiC is an OWL ontology for modeling financial fraud scenarios and customer behavioral patterns in banking and payment systems. It combines SWRL rules with SPARQL queries for automated fraud detection over transaction data.

## Core Classes

- `SWIFTTransaction` — international wire transfer events
- `FraudScenario` — named fraud pattern instances (e.g., money laundering, account takeover)
- `BehavioralPattern` — statistical behavioral profiles for customers
- `LegitimateTransaction` — baseline normal transaction class
- `FraudulentTransaction` — transactions classified as fraudulent

## Reasoning Mechanism

- **SWRL rules:** Encode fraud detection heuristics as Horn-clause rules over ontology instances
- **SPARQL queries:** Retrieve suspicious transaction subgraphs matching fraud pattern templates
- OWL DL reasoning for class consistency and inference

## Key Contributions

- Publicly available OWL file enables direct reuse and extension
- SWRL + SPARQL combination demonstrates rule-based reasoning over financial KGs
- Customer behavioral modeling integrates statistical patterns with formal ontology

## Relevance to GraphWiki

- OWL file available for direct inspection and potential alignment
- Fraud scenario classes reusable for compliance and risk graph layers
- SWRL rule patterns applicable to graph-based anomaly detection queries
- SPARQL pattern library is a concrete implementation reference
