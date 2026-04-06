# LKIF — Legal Knowledge Interchange Format

**Origin:** EU Estrella Project
**Project URL:** http://www.estrellaproject.org/
**Format:** OWL ontology

## Summary

LKIF (Legal Knowledge Interchange Format) is an OWL ontology developed under the EU Estrella research project for representing legal knowledge. It provides approximately 200 legal concept classes covering rules, legislation, regulations, and legal reasoning constructs.

## Scope

- ~200 legal concept classes in OWL
- Covers: legal rules, legislation, regulations, legal sources, normative positions, legal acts
- Designed for interoperability between legal knowledge systems across EU jurisdictions

## Usage in Financial Regulation

- Used by **FinRegOnt** (Financial Regulation Ontology) as the legal layer alongside FIBO
- LKIF provides the legal/regulatory upper ontology; FIBO provides the financial domain ontology
- Together they cover: financial instruments + regulatory obligations + compliance rules

## Key Ontology Modules

- **Legal rule module:** Horn-clause style rule representation in OWL
- **Legislation module:** Statutes, directives, regulations as first-class entities
- **Normative position module:** Permissions, obligations, prohibitions

## Relevance to GraphWiki

- Legal layer reference for modeling regulatory relationships (e.g., company subject-to regulation)
- FinRegOnt integration pattern shows how LKIF + FIBO combine for financial compliance graphs
- ~200 classes is a manageable upper ontology to align against for regulatory node types
- EU Estrella provenance gives it regulatory recognition in European financial regulation contexts
