# SHACL (Shapes Constraint Language)

**Definition:** A W3C standard language for validating [[RDF]] graphs against a set of conditions (shapes), used to enforce data quality and structural integrity in [[Knowledge Graph|knowledge graphs]].

**Also known as:** SHACL, Shapes Constraint Language, SHACL Core, SHACL-SPARQL.

## Overview

SHACL (pronounced "shackle") is the W3C standard for expressing constraints over [[RDF]] data. Where [[OWL]] and [[Description Logic]] are concerned with what can be *inferred* from a graph, SHACL is concerned with what the graph *must look like* to be valid. This distinction is fundamental: [[OWL]] uses an open-world assumption and cannot flag a missing triple as an error, whereas SHACL explicitly adopts a closed-world stance and reports constraint violations when expected data is absent or malformed.

A SHACL **shapes graph** is itself an [[RDF]] graph written in [[Triple|triples]] — typically serialised in Turtle — and is validated against a separate **data graph**. The SHACL processor applies each shape to the nodes it targets, evaluates all declared constraints, and produces a **validation report** (also an [[RDF]] graph) listing any violations. This design makes SHACL natively interoperable with the rest of the Semantic Web stack: shapes are [[RDF]], reports are [[RDF]], and [[SPARQL]] can query both.

SHACL comes in two flavours. **SHACL Core** provides a declarative constraint vocabulary — property shapes, node shapes, cardinality, value types, string patterns — sufficient for most data validation tasks without any SPARQL knowledge. **SHACL-SPARQL** extends Core by letting constraint authors embed [[SPARQL]] SELECT or ASK queries directly in shapes, enabling arbitrary graph-pattern constraints. This layered design means simple teams can use Core while advanced users exploit the full power of [[SPARQL]] for complex cross-graph constraints.

SHACL's main competitor is **ShEx** (Shape Expressions), developed by a separate community. Both languages describe the expected structure of [[RDF]] graphs, but they differ in syntax philosophy, validation semantics (particularly around recursion), and ecosystem adoption. SHACL is the W3C Recommendation and has broader triple-store support; ShEx is preferred in some biomedical data communities.

## Key Properties

- **Shapes graph:** an [[RDF]] graph containing `sh:NodeShape` and `sh:PropertyShape` declarations
- **Data graph:** the [[RDF]] graph (or [[Knowledge Graph]]) being validated
- **Targets:** mechanisms for selecting which nodes a shape applies to — `sh:targetClass`, `sh:targetNode`, `sh:targetSubjectsOf`, `sh:targetObjectsOf`
- **Constraints:** conditions a target node must satisfy — type, cardinality, value range, pattern, `sh:in`, `sh:hasValue`, `sh:equals`, `sh:lessThan`
- **Severity levels:** `sh:Violation`, `sh:Warning`, `sh:Info`
- **Validation report:** an [[RDF]] graph with `sh:ValidationReport` and `sh:ValidationResult` nodes
- **SHACL-SPARQL:** `sh:sparql` constraint attaches a [[SPARQL]] query that must return no results for the data to be valid
- **SHACL Advanced Features:** `sh:rule` for inference-like derivation (not validation); `sh:target` for custom target declarations

## Shapes, Targets, and Constraints

A **node shape** (`sh:NodeShape`) declares constraints that apply to an entire node. A **property shape** (`sh:PropertyShape`) declares constraints that apply to the values of a specific property. Property shapes are nested inside node shapes via `sh:property`.

**Targets** determine which nodes in the data graph are checked by a shape:

| Target Declaration | Selects |
|---|---|
| `sh:targetClass ex:Person` | All `rdf:type ex:Person` instances |
| `sh:targetNode ex:alice` | Exactly the node `ex:alice` |
| `sh:targetSubjectsOf ex:worksFor` | All nodes that appear as subject of `ex:worksFor` |
| `sh:targetObjectsOf ex:hasChild` | All nodes that appear as object of `ex:hasChild` |

This targeting mechanism means SHACL shapes work independently of [[OWL]] class definitions — you can validate a plain [[RDF]] graph without any [[Ontology]], or combine SHACL with an [[OWL]] [[Ontology]] and target shapes at [[OWL]] classes simultaneously.

## SHACL vs OWL / RDFS

| Aspect | SHACL | [[OWL]] / [[RDFS]] |
|---|---|---|
| World assumption | Closed-world | Open-world |
| Missing triple is | A violation (if required) | Simply unknown |
| Primary purpose | Data validation | [[Inference and Reasoning]] and knowledge modelling |
| Output | Validation report ([[RDF]]) | Inferred triples |
| [[SPARQL]] integration | SHACL-SPARQL constraints | Entailment regimes |
| Reasoning required | No | Yes (for full [[OWL]]) |

SHACL and [[OWL]] are **complementary**: [[OWL]] defines what things *mean* and enables [[Inference and Reasoning|inference]], SHACL defines what data *must look like* and enables validation. Many production [[Knowledge Graph]] pipelines use both — [[OWL]] for semantic enrichment and SHACL for data quality gates.

## SHACL vs ShEx

| Aspect | SHACL | ShEx |
|---|---|---|
| Specification body | W3C Recommendation | W3C Community Group |
| Syntax | [[RDF]]/Turtle (plus SHACL-SPARQL) | ShExC (compact) or ShExJ (JSON) |
| Semantics | Partition-based | Shape maps |
| Recursive shapes | Limited | Full support |
| Triple store support | Broad (GraphDB, Stardog, Apache Jena) | Narrower |
| Adoption | Enterprise, government data | Biomedical (e.g., Wikidata ShEx schemas) |

## Examples in Turtle

### Basic node and property shapes

```turtle
@prefix sh:   <http://www.w3.org/ns/shacl#> .
@prefix ex:   <http://example.org/> .
@prefix xsd:  <http://www.w3.org/2001/XMLSchema#> .
@prefix foaf: <http://xmlns.com/foaf/0.1/> .

# Node shape: validates all ex:Person instances
ex:PersonShape
    a sh:NodeShape ;
    sh:targetClass ex:Person ;

    # Must have exactly one foaf:name, which must be a string
    sh:property [
        sh:path     foaf:name ;
        sh:minCount 1 ;
        sh:maxCount 1 ;
        sh:datatype xsd:string ;
        sh:message  "A Person must have exactly one foaf:name string."@en ;
    ] ;

    # Must have at least one ex:email matching a pattern
    sh:property [
        sh:path    ex:email ;
        sh:minCount 1 ;
        sh:pattern "^[\\w.]+@[\\w.]+\\.[a-z]{2,}$" ;
        sh:flags   "i" ;
        sh:message "A Person must have a valid email address."@en ;
    ] ;

    # Age, if present, must be a non-negative integer
    sh:property [
        sh:path    ex:age ;
        sh:maxCount 1 ;
        sh:datatype xsd:integer ;
        sh:minInclusive 0 ;
        sh:maxInclusive 150 ;
    ] .
```

### Value type constraint — object property must point to an [[OWL]] class instance

```turtle
ex:EmploymentShape
    a sh:NodeShape ;
    sh:targetClass ex:Employment ;

    sh:property [
        sh:path  ex:employee ;
        sh:class ex:Person ;        # object must be rdf:type ex:Person
        sh:minCount 1 ;
        sh:maxCount 1 ;
    ] ;

    sh:property [
        sh:path  ex:employer ;
        sh:class ex:Organisation ;
        sh:minCount 1 ;
    ] .
```

### `sh:or` — disjunctive constraint

```turtle
ex:ContactShape
    a sh:NodeShape ;
    sh:targetClass ex:Contact ;
    sh:or (
        [ sh:property [ sh:path ex:email   ; sh:minCount 1 ] ]
        [ sh:property [ sh:path ex:phone   ; sh:minCount 1 ] ]
    ) ;
    sh:message "A Contact must have at least an email or a phone number."@en .
```

### SHACL-SPARQL constraint — cross-node validation using [[SPARQL]]

```turtle
ex:UniqueNameShape
    a sh:NodeShape ;
    sh:targetClass ex:Person ;
    sh:sparql [
        a sh:SPARQLConstraint ;
        sh:message "Two persons share the same foaf:name value." ;
        sh:prefixes ex: ;
        sh:select """
            PREFIX foaf: <http://xmlns.com/foaf/0.1/>
            SELECT $this ?other
            WHERE {
                $this foaf:name ?name .
                ?other foaf:name ?name .
                FILTER ($this != ?other)
            }
        """ ;
    ] .
```

This constraint embeds a [[SPARQL]] SELECT query; any non-empty result set triggers a violation. This is impossible to express in SHACL Core alone, demonstrating how SHACL-SPARQL extends the base language using the full power of [[Triple]] pattern matching.

### Validation report structure

When a SHACL processor finds violations, it produces an [[RDF]] report:

```turtle
[] a sh:ValidationReport ;
   sh:conforms false ;
   sh:result [
       a sh:ValidationResult ;
       sh:focusNode ex:bob ;
       sh:resultPath foaf:name ;
       sh:resultSeverity sh:Violation ;
       sh:sourceConstraintComponent sh:MinCountConstraintComponent ;
       sh:resultMessage "A Person must have exactly one foaf:name string."@en ;
   ] .
```

The report is itself queryable with [[SPARQL]], enabling automated data quality dashboards and pipeline gating.

## Relationships

- **Is-a:** [[RDF]] graph validation language; W3C Recommendation (2017)
- **Has-part:** Shapes graph, node shapes, property shapes, targets, constraints, validation report, SHACL-SPARQL
- **Related:** [[RDF]], [[OWL]], [[Knowledge Graph]], [[Triple]], [[SPARQL]], [[RDFS]], [[Inference and Reasoning]]
- **Used-by:** Data quality pipelines (Apache Jena, TopBraid SHACL, pySHACL, RDF4J, GraphDB, Stardog); government open data publishing; biomedical [[Knowledge Graph|knowledge graphs]]; enterprise data governance

## Sources

- [needs-source]

## See Also

- [[RDF]]
- [[OWL]]
- [[RDFS]]
- [[Triple]]
- [[Knowledge Graph]]
- [[SPARQL]]
- [[Inference and Reasoning]]
- [[Class and Property]]
- [[Ontology]]
