# Exploring FIBO

[[FIBO]] (Financial Industry Business Ontology) is large — 2,436 classes across 10 domain modules — which makes knowing where to start essential. This guide walks through four practical entry points: downloading and browsing FIBO, loading it in [[Protege]], exploring key modules, and running [[SPARQL]] queries against the ontology.

## Before You Start

FIBO is a [[OWL]] 2 DL ontology serialized in [[RDF]]. If you are new to these technologies, read [[Getting Started with Ontologies]] and the [[OWL]] concept page before continuing. You will also want a passing familiarity with [[Class and Property|classes and properties]] to navigate FIBO's hierarchy meaningfully.

---

## Step 1: Download FIBO from GitHub

The canonical source for FIBO is the EDM Council GitHub repository.

**Repository:** https://github.com/edmcouncil/fibo

The repository is organized by domain module. Each module lives in its own directory (e.g., `/FBC/`, `/SEC/`, `/BE/`) and contains individual [[OWL]] files (`.rdf` extension, serialized as RDF/XML) covering specific sub-topics.

**For a first exploration, download the production release bundle:**

1. Go to https://github.com/edmcouncil/fibo/releases
2. Download the latest production release ZIP (not the "Dev" or "Provisional" tag)
3. Unzip to a local directory

The release bundle includes all production-maturity modules in multiple serialization formats: RDF/XML, Turtle (`.ttl`), JSON-LD, N-Triples, and CSV. The Turtle files are the most readable in a text editor.

**Online browsing without downloading:** The EDM Council provides an online viewer at https://spec.edmcouncil.org/fibo/ontology. You can browse the class hierarchy, read definitions, and explore property ranges without installing anything. This is the fastest way to look up a specific class.

---

## Step 2: Load FIBO in Protege

[[Protege]] is the standard desktop tool for [[OWL]] ontology exploration. Loading FIBO in Protege gives you a navigable class tree, property listings, and access to built-in reasoners.

**Loading a single module (recommended for beginners):**

1. Open [[Protege]] (download from https://protege.stanford.edu/ if needed)
2. Choose File → Open → navigate to the FIBO release directory
3. Open a single module file, e.g., `SEC/Securities/Securities.rdf`
4. Protege will prompt to load imported ontologies — click "Yes" to load the full import chain

FIBO uses `owl:imports` extensively, so opening the SEC module will automatically pull in FND (Foundations) and BE (Business Entities) dependencies. This is correct behavior.

**Navigating the class tree:**

- The **Classes** tab shows the full [[OWL]] class hierarchy in a tree view
- Click any class to see its definition, axioms, superclasses, and subclasses in the right panel
- The `FinancialInstrument` class under the SEC module is a good starting point — expand it to see the full instrument taxonomy: `Equity`, `DebtInstrument`, `Derivative`, `Fund`, and their subclasses

**Running a built-in reasoner:**

1. In [[Protege]], go to Reasoner → HermiT (or Pellet)
2. Click Start Reasoner
3. The class hierarchy updates to show inferred subclass relationships in yellow
4. The reasoner also flags inconsistencies — any red classes indicate axiom violations

[[Inference and Reasoning|Reasoning]] over the full FIBO ontology can be slow (several minutes) due to its size. For interactive exploration, load a single module rather than the full release bundle.

---

## Step 3: Explore Key Modules

Rather than trying to absorb all of FIBO at once, navigate by use case. Here are the modules most relevant to a stock market [[Financial Knowledge Graph]] and what to look for in each.

### BE — Business Entities
**Path:** `/BE/LegalEntities/`
**Key classes:** `LegalEntity`, `PubliclyHeldCompany`, `Corporation`, `Partnership`

BE is where companies live. The `LegalEntity` class is FIBO's anchor for [[GLEIF]] LEI alignment — the GLEIF OWL ontologies extend this class with LEI-specific properties. Look at the axioms on `PubliclyHeldCompany` to see how FIBO formally distinguishes a public company from a private one.

### SEC — Securities
**Path:** `/SEC/Securities/`, `/SEC/Equities/`, `/SEC/Debt/`
**Key classes:** `Security`, `ListedSecurity`, `CommonShare`, `CorporateBond`, `Fund`

SEC is the instrument taxonomy. Explore the `ListedSecurity` class to see how FIBO links an instrument to an exchange listing. The `CommonShare` class carries properties for dividend rights and voting rights that distinguish it from `PreferredShare`. The [[XBRL]] taxonomy's `us-gaap:CommonStockSharesOutstanding` concept aligns with properties in this module.

### MD — Market Data
**Path:** `/MD/`
**Key classes:** `SecurityPrice`, `MarketIdentifierCode`, `PriceQuote`

MD is where pricing lives. Look at `PriceQuote` and its properties — `hasAskPrice`, `hasBidPrice`, `hasMidPrice` — to understand how FIBO models market data as structured [[RDF]] rather than raw numbers. The `MarketIdentifierCode` class is where MIC codes are formally defined.

### FBC — Financial Business and Commerce
**Path:** `/FBC/FinancialInstruments/`, `/FBC/FunctionalEntities/`
**Key classes:** `FinancialInstrumentIdentifier`, `FIGI`, `ISIN`

FBC is where [[Financial Identifier|financial identifiers]] are formally defined. Look at the `FIGI` class to see how [[FIBO]] represents open identifier types as OWL classes with properties specifying format and governance.

---

## Step 4: Run SPARQL Queries Against FIBO

You can query [[FIBO]] content via [[SPARQL]] by loading the ontology into a local triple store. Apache Jena's command-line tools provide the simplest path:

**Load FIBO into Jena's TDB store:**
```bash
tdbloader2 --loc /path/to/fibo-tdb /path/to/fibo-release/*.ttl
```

**Start a local SPARQL endpoint with Fuseki:**
```bash
fuseki-server --loc=/path/to/fibo-tdb --update /fibo
```

**Example query — list all subclasses of FinancialInstrument:**
```sparql
PREFIX fibo-fbc: <https://spec.edmcouncil.org/fibo/ontology/FBC/FinancialInstruments/FinancialInstruments/>
PREFIX rdfs: <http://www.w3.org/2000/01/rdf-schema#>
PREFIX owl: <http://www.w3.org/2002/07/owl#>

SELECT ?class ?label WHERE {
  ?class rdfs:subClassOf* fibo-fbc:FinancialInstrument ;
         rdfs:label ?label .
}
ORDER BY ?label
```

**Example query — find all properties with domain on LegalEntity:**
```sparql
PREFIX fibo-be: <https://spec.edmcouncil.org/fibo/ontology/BE/LegalEntities/LegalPersons/>
PREFIX rdfs: <http://www.w3.org/2000/01/rdf-schema#>

SELECT ?property ?label WHERE {
  ?property rdfs:domain fibo-be:LegalEntity ;
            rdfs:label ?label .
}
```

These queries run against FIBO's [[OWL]] axioms rather than instance data. To query instance data, load your [[Financial Knowledge Graph]] into the same triple store alongside the FIBO ontology modules — then the reasoner's inferences over your data become queryable via [[SPARQL]] as well. This is the pattern used by [[FinKario]] for entity normalization and by [[SemanticXBRL]] for XBRL-to-FIBO concept alignment.

---

## Going Further

Once you are comfortable navigating [[FIBO]] in [[Protege]] and querying it via [[SPARQL]], the natural next step is building your own [[Financial Knowledge Graph]] on top of it. The guide [[Building a Financial Knowledge Graph]] covers the full pipeline: identifier selection, entity modeling, data ingestion from [[XBRL]] and [[LSEG PermID]] sources, and automated reasoning.

The [[FIBO vs. Schema.org Financial]] comparison page clarifies when FIBO's expressiveness is warranted versus when a lighter vocabulary suffices.

## See Also

- [[FIBO]], [[Protege]], [[OWL]], [[SPARQL]], [[RDF]]
- [[Financial Ontology]], [[Class and Property]], [[Inference and Reasoning]]
- [[Financial Instrument]], [[Legal Entity]], [[Securities]]
- [[Financial Knowledge Graph]], [[Building a Financial Knowledge Graph]]
- [[FIBO vs. Schema.org Financial]], [[Financial Identifier Comparison]]
- [[GLEIF]], [[XBRL]], [[LSEG PermID]]
