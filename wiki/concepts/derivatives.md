# Derivatives

**Definition:** [[Financial Instrument]]s whose value derives from an underlying asset, rate, or index, modeled in [[FIBO]]'s DER domain module and formalized through standards such as FpML and ISDA CDM.

**Also known as:** Derivative instruments, derivative contracts, contingent claims.

## Overview

Derivatives are among the most ontologically complex [[Financial Instrument]]s because their value and behavior are defined relationally — a derivative is only meaningful in reference to its underlying (an equity, bond, commodity, rate, or index) and the contractual terms governing payoff. In [[FIBO]], the DER module captures this through a class hierarchy rooted at `Derivative`, with named subclasses for `Option`, `Future`, `Swap`, and `Forward`, each carrying [[OWL]] restrictions that encode the essential definitional properties: an option must have a strike price and expiry; a swap must specify payment legs and a reference rate.

The broader standards landscape for derivatives includes two major complementary systems. **FpML** (Financial products Markup Language) is an XML schema for representing over-the-counter derivative trade terms — interest rate swaps, credit default swaps, equity options — and has been the operational standard for OTC confirmation and reporting since the early 2000s. **ISDA CDM** (Common Domain Model) is a more recent initiative by the International Swaps and Derivatives Association that provides a canonical, machine-executable model of derivative trade events and their lifecycle — novation, termination, reset — expressed in a technology-neutral format. [[FIBO]] serves as the reference data layer beneath CDM, providing the [[Legal Entity]], [[Financial Instrument]], and [[Market Data]] definitions that CDM events reference.

From a [[Knowledge Graph]] perspective, derivatives require careful attention to temporal structure. An OTC derivative is a bilateral contract whose terms evolve through lifecycle events (amendments, partial terminations, resets). [[FinDKG]] and similar temporal knowledge graphs demonstrate how to represent these evolving relationships as timestamped [[Triple]]s, while [[FIBO]]'s BP (Business Process) module provides the event scaffolding for lifecycle modeling. [[SPARQL]] queries can traverse from a derivative instrument to its underlying, issuing parties, and associated market data — enabling holistic risk and compliance analysis.

## Key Properties

- `hasUnderlying` — links to the underlying [[Financial Instrument]], rate, or index
- `hasStrikePrice` — for options: the agreed exercise price
- `hasExpirationDate` — for options and futures: contract termination date
- `hasPaymentLeg` — for swaps: fixed or floating payment stream definition
- `isSubjectToMasterAgreement` — links to ISDA master agreement [[Legal Entity]] references
- `hasCFICode` — [[ISO 10962 CFI]] category O (options), F (futures), S (swaps)

## Relationships

- **Is-a:** [[Financial Instrument]]
- **Has-part:** Options, futures, swaps, forwards, structured notes
- **Related:** [[Securities]], FpML, ISDA CDM, [[FIBO]], [[Class and Property]], [[Market Data]]
- **Used-by:** Risk management systems, trade repositories (DTCC, DTCC), clearinghouses, regulatory reporting (EMIR, Dodd-Frank)

## Examples

- A vanilla interest rate swap modeled in FIBO DER with fixed leg at 3.5% and floating leg referencing SOFR
- An equity call option: `fibo-der-drc-opt:VanillaOption` with `hasUnderlying` pointing to an Apple stock [[Financial Instrument]] node
- A credit default swap referencing a corporate bond as the reference obligation, with ISDA CDM lifecycle events for credit event determination

## Sources

- `sources/articles/fibo-financial-industry-business-ontology.md`
- `sources/articles/iso-10962-cfi-classification.md`
- `sources/papers/findkg-dynamic-knowledge-graph.md`

## See Also

- [[Financial Instrument]], [[FIBO]], [[FpML]], [[ISDA CDM]], [[Securities]]
- [[Ontology]], [[Class and Property]], [[Market Data]], [[Financial Ontology]]
