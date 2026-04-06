# Protege

**Type:** Ontology editor tool
**Developer:** Stanford Center for Biomedical Informatics Research
**License:** Open-source (BSD)
**Platform:** Java (desktop), Web (WebProtege)

## Overview

Protege is the most widely used open-source ontology editor in the world, developed and maintained by Stanford University. It provides a graphical environment for building, editing, and managing [[Ontology|ontologies]] expressed in [[OWL]] and [[RDFS]]. Researchers, engineers, and knowledge architects across biomedical informatics, enterprise knowledge management, and academic [[Semantic Web]] projects rely on Protege as their primary authoring tool.

Protege operates on a plugin architecture, allowing the community to extend it with reasoners, visualization tools, query interfaces, and custom views. It natively understands the layered structure of [[OWL]] ontologies — [[Class and Property|classes, properties]], individuals, and axioms — and exposes them through dedicated editing panels.

## Key Features

- **Class hierarchy editor** — Visual tree view for navigating and editing the [[Class and Property|class]] hierarchy, supporting multiple inheritance as defined in [[OWL]] and [[RDFS]]
- **Property editor** — Panels for defining object properties, data properties, and annotation properties, along with their domains, ranges, and characteristics (transitivity, symmetry, etc.)
- **Reasoner integration** — Plugins for reasoners such as HermiT, Pellet, and FaCT++ enable [[Inference and Reasoning|automated classification and consistency checking]] grounded in [[Description Logic]]
- **SPARQL tab** — Built-in query interface for running [[SPARQL]] queries directly against the loaded ontology
- **OntoGraf / visualization** — Graph-based visualization of class relationships and [[Triple|property assertions]]
- **Manchester Syntax editor** — Human-readable syntax for authoring complex [[OWL]] class expressions and restrictions
- **OWL axiom view** — Low-level inspection of every axiom in the ontology, useful for debugging logical definitions

## Working with OWL

Protege exposes all three OWL profiles (OWL Lite, OWL DL, OWL Full) and enforces the constraints of [[Description Logic]] when operating in OWL DL mode. This tight coupling with [[Inference and Reasoning|reasoning]] makes it possible to detect unsatisfiable classes, infer implicit subclass relationships, and validate whether an [[Ontology]] is consistent before deployment. The reasoner feedback loop is one of Protege's most valuable features for ontology authors learning [[Description Logic]] constraints.

## See Also

- [[OWL]]
- [[Ontology]]
- [[Class and Property]]
- [[RDFS]]
- [[Description Logic]]
- [[Inference and Reasoning]]
- [[SPARQL]]
- [[W3C]]
