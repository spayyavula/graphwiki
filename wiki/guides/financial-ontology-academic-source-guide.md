# Financial Ontology Academic Source Guide

**Definition:** A starter guide to the academic and domain-reference sources that best support the Financial Ontology branch of GraphWiki.

## Overview
[coverage: medium]

Financial ontology sits in a slightly different position from ontology fundamentals. It depends on the semantic web stack, but it is ultimately driven by concrete domain needs: modeling instruments, identifiers, entities, regulation, market events, messaging standards, and financial knowledge graphs. That means a useful source base has to combine formal ontology references such as [[FIBO]] with applied university material on financial knowledge graphs, market intelligence, document semantics, and data integration.

This guide highlights a first source pack oriented around university-hosted financial KG material, especially from Columbia, and supplements it with the strongest domain-standard captures already stored in this repository. The result is enough to support a stronger topic landing page, better guide material, and future topic-specific graph datasets.

This second curation pass also incorporates production-facing material from data aggregators and investment-firm infrastructure. Those sources are weaker as formal ontology references than [[FIBO]] or [[FinRegOnt]], but they are useful for showing how identity graphs, relationship discovery, and linked financial entities are used in real products.

## Recommended Reading Order
[coverage: medium]

1. Start with [[Financial Ontology]] and [[FIBO]] to establish the formal domain vocabulary.
2. Read the Columbia financial knowledge graph lecture material to understand how structured finance data is represented in KG form.
3. Use the Bloomberg-Columbia material to connect financial knowledge representation with LLM evaluation and question generation.
4. Read the repository's existing standard captures for [[ISO 20022]], [[FinRegOnt]], and [[OntoFiC]] to cover messaging, regulation, and fraud applications.
5. Use the systemic-risk and ESG sources to widen the topic beyond instrument taxonomy into real-world financial modeling.

## Source Clusters
[coverage: medium]

- **Formal ontology layer:** [[FIBO]], [[FinRegOnt]], [[ISO 20022]]
- **Knowledge graph construction:** Columbia financial KG lecture and poster material
- **LLM and finance semantics:** Bloomberg-Columbia financial knowledge gap material
- **Applications:** [[OntoFiC]], ESG/risk sources, contagion/network modeling
- **Production graph infrastructure:** LSEG PermID, Thomson Reuters Intelligent Tagging, Bloomberg-Columbia evaluation material

## How To Use This Guide In GraphWiki
[coverage: medium]

- Use it to strengthen the topic boundary between [[Financial Ontology]] and [[Financial Knowledge Graph]].
- Use the Columbia lecture materials as teaching-oriented sources for future guides on constructing finance KGs.
- Use the domain-standard sources as the source-of-truth layer when academic materials are more exploratory than canonical.
- Use the industry-source pack to illustrate how graph-linked entities and semantic identifiers appear in production data systems.

## Sources

- `sources/web-clips/financial-ontology-academic-source-pack.md`
- `sources/web-clips/financial-ontology-industry-source-pack.md`
- `sources/articles/fibo-financial-industry-business-ontology.md`
- `sources/articles/iso-20022-universal-financial-messaging.md`
- `sources/articles/finregont-financial-regulation-ontology.md`
- `sources/papers/ontofic-financial-fraud-ontology.md`

## See Also

- [[Financial Ontology]]
- [[Financial Knowledge Graph]]
- [[FIBO]]
- [[FinRegOnt]]
- [[Building a Financial Knowledge Graph]]
- [[Exploring FIBO]]
- [[Financial Identifier]]