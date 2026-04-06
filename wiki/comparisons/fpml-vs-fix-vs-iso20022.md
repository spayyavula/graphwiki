# FpML vs. FIX Protocol vs. ISO 20022

Financial messaging standards define how market participants communicate trade details, orders, payments, and reference data. Three standards dominate different segments of the financial industry: [[FpML]] for OTC derivatives, [[FIX Protocol]] for electronic trading, and [[ISO 20022]] for payments and securities settlement. All three have relevance to financial [[Ontology]] and [[Knowledge Graph]] construction.

## Comparison Table

| Dimension | [[FpML]] | [[FIX Protocol]] | [[ISO 20022]] |
|---|---|---|---|
| **Full name** | Financial products Markup Language | Financial Information eXchange | ISO 20022 Universal Financial Industry Message Scheme |
| **Domain** | OTC derivatives — swaps, options, forwards, structured products | Electronic order routing and trade execution — equities, futures, FX | Payments, securities, FX, trade services — all asset classes |
| **Format** | XML (primary), JSON (FpML 6.x) | Tag-value pairs (FIX native), FIXML (XML variant) | XML (canonical), JSON (ISO 20022 JSON) |
| **Governance** | ISDA / ISDA FpML Working Group | FIX Trading Community (industry consortium) | ISO TC68 / SWIFT / national standards bodies |
| **OWL availability** | Partial — [[ISDA CDM]] formalizes FpML semantics in OWL | None official — community efforts only | Active — [[FIBO]] maps ISO 20022 `reda` messages |
| **[[Ontology]] alignment** | [[ISDA CDM]], [[FIBO]] DER/FBC modules | [[FIBO]] FBC (partial) | [[FIBO]] BE, FBC, IND, SEC modules |
| **Scope** | Trade confirmation, lifecycle events, reference data | Order management, execution reports, market data | Payment instructions, settlement, corporate actions, regulatory reporting |
| **Adoption** | Global derivatives dealers, CCPs, trade repositories | Equities, futures, FX brokers, electronic trading venues | Central banks, CSDs, payments networks (SWIFT, TARGET2, Fedwire) |
| **Latency profile** | Low-latency not a goal — complex structured messages | Ultra-low-latency capable — binary FIX (FAST/SBE) | Batch and near-real-time — not optimized for sub-millisecond |
| **Message complexity** | Very high — full trade economics in a single message | Low to medium — optimized for speed over richness | Medium to high — rich structured data with extensibility |
| **Versioning** | FpML 5.x (stable), FpML 6.x (JSON) | FIX 4.x (legacy), FIX 5.x, FIXT 1.1 | ISO 20022 (rolling updates via SWIFT catalogue) |

## FpML in Detail

[[FpML]] is the dominant standard for representing OTC (over-the-counter) derivative contracts. A single FpML document can encode the complete economic terms of an interest rate swap, credit default swap, equity option, or commodity forward — including notional, fixing schedules, payment dates, and counterparty details.

FpML's semantic richness makes it a natural target for [[Ontology]] formalization. The [[ISDA CDM]] (Common Domain Model) is essentially a formal ontology — written in the Rosetta DSL and available in Java, Python, and [[OWL]] — that captures the semantics of FpML trade structures. [[FIBO]]'s DER (Derivatives) and FBC (Financial Business and Commerce) modules overlap with FpML's scope and provide the formal OWL 2 DL axioms that FpML's XML schema lacks.

For [[Financial Knowledge Graph]] construction, FpML is relevant as a source schema: the relation types and [[Financial Instrument]] classes in an OTC derivatives graph should align with FpML's product taxonomy.

## FIX Protocol in Detail

[[FIX Protocol]] was designed for speed: it emerged in 1992 as a bilateral message format between Fidelity and Salomon Brothers for equity order routing, and it now handles trillions of dollars of electronic order flow daily. FIX's native tag-value format (e.g., `55=AAPL|54=1|38=100`) is compact and fast to parse, critical for high-frequency trading infrastructure.

FIX is less semantically rich than FpML or ISO 20022. Its primary concern is the lifecycle of an order (new, partially filled, cancelled, rejected) rather than the full economics of a financial product. FIXML is the XML variant that adds structure but trades some of the performance advantage.

From an [[Ontology]] perspective, FIX is the hardest of the three to formalize because its semantics live primarily in community conventions and usage guides rather than formally defined schemas. [[FIBO]]'s FBC module covers some of the same concepts (orders, executions, clearing) but from a reference data rather than messaging perspective.

FIX is directly relevant to [[Financial Knowledge Graph]] construction for market microstructure graphs: order flow, execution quality, and trading venue analysis all require FIX-level event data.

## ISO 20022 in Detail

[[ISO 20022]] is the most ambitious of the three — it aims to cover all financial industry messages under a single meta-model. Its scope extends far beyond trading to include:

- **Payment initiation and settlement** (pacs, pain message families)
- **Securities post-trade** (sese, semt, setr)
- **Corporate actions** (seev)
- **Reference data** (reda — instrument and party reference data)
- **Regulatory reporting** (auth)
- **FX** (fxtr)

The `reda` (Reference Data) message family is the most relevant for [[Knowledge Graph]] construction. ISO 20022 `reda` messages describe [[Financial Instrument|financial instruments]], parties, and markets in structured XML that overlaps substantially with [[FIBO]] SEC and BE module content. [[FIBO]] actively maps `reda` message elements to FIBO classes, making ISO 20022 one of the few messaging standards with a formal [[OWL]] bridge.

The migration of global payment systems (SWIFT, TARGET2, Fedwire) to ISO 20022 by 2025 makes this standard increasingly important as the lingua franca of financial messaging. [[XBRL]] taxonomies and ISO 20022 `reda` share some vocabulary with US GAAP concepts, creating cross-standard alignment opportunities.

## Ontology and Knowledge Graph Implications

| Standard | KG Relevance | [[Ontology]] Bridge |
|---|---|---|
| [[FpML]] | OTC derivative trade graph — product taxonomy, lifecycle events | [[ISDA CDM]] (OWL), [[FIBO]] DER |
| [[FIX Protocol]] | Market microstructure graph — orders, executions, venues | [[FIBO]] FBC (partial) |
| [[ISO 20022]] | Payment and settlement graph — parties, accounts, instruments | [[FIBO]] BE/FBC/SEC, active `reda` mapping |

All three standards benefit from [[FIBO]] alignment because FIBO provides the shared semantic layer that bridges message-level concepts to formal ontology definitions. A production financial [[Knowledge Graph]] that ingests from multiple sources — FpML trade confirmations, FIX execution reports, ISO 20022 payment messages — can use [[FIBO]] as the normalization target, mapping each message format's fields to the corresponding FIBO class or property.

## See Also

- [[FpML]], [[FIX Protocol]], [[ISO 20022]], [[FIBO]], [[ISDA CDM]]
- [[Financial Instrument]], [[Ontology]], [[OWL]]
- [[Financial Knowledge Graph]], [[SPARQL]], [[RDF]]
- [[Securities]], [[Derivatives]]
