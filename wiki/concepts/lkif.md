# LKIF

**Definition:** Legal Knowledge Interchange Format — an [[OWL]] ontology of approximately 200 legal concept classes developed under the EU Estrella project, providing a formal upper ontology for legal rules, legislation, and normative positions.

**Also known as:** Legal Knowledge Interchange Format, LKIF Core.

## Overview

LKIF is one of the most influential legal ontologies in the European knowledge engineering tradition. Developed under the EU Estrella research project (2006–2008), its goal was to establish a common interchange format enabling different legal knowledge systems across EU member states to share and reason over legal content without losing semantic precision. The result is an [[OWL]] ontology of roughly 200 classes organized into modules covering legal rules, legislation, normative positions (permissions, obligations, prohibitions), legal acts, and the sources from which legal authority derives — statutes, directives, case law, and regulations.

LKIF's relevance to financial ontologies stems from [[FinRegOnt]] — the Financial Regulation Ontology — which combines LKIF as its legal upper layer with [[FIBO]] as its financial domain layer. This pairing captures something neither ontology can model alone: the specific regulatory obligations that apply to specific instrument types traded by specific entity types. In [[FinRegOnt]], an LKIF `Obligation` individual can be linked via [[OWL]] property chains to a FIBO `FinancialInstrument` subclass and a FIBO `LegalEntity` subclass, enabling automated inference of which reporting requirements apply to which transactions. This is the foundation of semantic compliance checking — a [[Financial Knowledge Graph]] that can answer "which EMIR obligations apply to this OTC derivative trade?" by traversing [[FIBO]] instrument classifications and LKIF obligation rules.

The LKIF rule representation uses a Horn-clause style encoding in [[OWL]], making it compatible with rule-based [[Inference and Reasoning]] engines. The legislation module treats statutes and directives as first-class [[OWL]] individuals with properties for jurisdiction, effective date, and hierarchical structure — enabling a knowledge graph to represent "MiFID II Article 26 requires transaction reporting for instruments in class X." LKIF's normative position module (permissions, obligations, prohibitions) provides the deontic logic vocabulary that pure [[Description Logic]] ontologies like [[FIBO]] deliberately omit. The EU Estrella project's institutional backing gives LKIF recognized standing in European regulatory contexts.

## Key Properties

- ~200 legal concept classes in [[OWL]]
- `lkif:Rule` — legal rule as a first-class entity
- `lkif:Legislation` — statute or directive individual with jurisdiction and effectivity
- `lkif:Obligation` / `lkif:Permission` / `lkif:Prohibition` — deontic positions
- `lkif:LegalAct` — performative act with legal consequence
- `lkif:Source` — legal authority from which a rule derives

## Relationships

- **Is-a:** [[OWL]] ontology, legal upper ontology
- **Has-part:** Rule module, legislation module, normative position module, legal act module
- **Related:** [[FinRegOnt]], [[FIBO]], [[Legal Entity]], [[Class and Property]], [[Ontology]]
- **Used-by:** [[FinRegOnt]] (financial regulation compliance), EU legal informatics research, regulatory knowledge systems

## Examples

- MiFID II transaction reporting obligation modeled as `lkif:Obligation` linked to FIBO `ListedSecurity` via [[OWL]] property chain in [[FinRegOnt]]
- An EU Directive individual in the legislation module with `effectiveDate`, `jurisdictionCoverage`, and `implements` properties
- EMIR clearing obligation: `lkif:Obligation` with `appliesTo` pointing to FIBO `OTCDerivative` class, queryable via [[SPARQL]] over a [[Financial Knowledge Graph]]

## Sources

- `sources/web-clips/lkif-legal-knowledge-interchange.md`
- `sources/articles/fibo-financial-industry-business-ontology.md`

## See Also

- [[OWL]], [[Ontology]], [[FinRegOnt]], [[FIBO]], [[Legal Entity]], [[Class and Property]]
- [[Inference and Reasoning]], [[Financial Ontology]], [[Financial Knowledge Graph]]
