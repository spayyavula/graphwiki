# GraphWiki - A Visual Knowledge Map for Learning Ontologies

## What is this?

GraphWiki is an interactive knowledge map that helps you learn about ontologies — the systems we use to organize and connect information. Think of it as a Wikipedia where every article is connected to every related article, and you can see all those connections as a visual web.

When you open GraphWiki, you see a network of dots and lines. Each dot is a topic. Each line means those two topics are related. You can click on any dot to learn more, search for a topic, or just explore by dragging things around.

## What problem does it solve?

Ontologies are hard to learn. There are dozens of standards, tools, and academic papers scattered across the internet. The terminology is dense. It is difficult to know where to start or how everything fits together.

GraphWiki puts all of that in one place and shows you the connections. Instead of reading isolated articles, you can see that RDF is connected to SPARQL, which is connected to Knowledge Graphs, which is connected to FIBO (the big financial ontology), and so on. The visual layout makes the relationships obvious in a way that a list of links never could.

## What is in it?

Right now, GraphWiki has 59 topics and over 500 connections between them. The content covers two main areas:

**Ontology fundamentals** — What an ontology is, how knowledge is represented using RDF and OWL, how to query it with SPARQL, how reasoning works, and how to validate data with SHACL. These are the building blocks.

**Stock market and financial ontologies** — How the financial industry uses ontologies to organize data about companies, stocks, bonds, derivatives, and trading. This includes major standards like FIBO (the Financial Industry Business Ontology with over 2,400 defined concepts), XBRL (used for financial reporting), and several research projects that build knowledge graphs from news articles and SEC filings.

## How does it work?

The project has three layers:

**Sources** — Raw reference material. Articles about standards, academic papers, quick notes. These are the ingredients. A human decides what goes in here.

**Wiki** — Organized pages generated from those sources. Each page covers one topic with a definition, explanation, examples, and links to related topics. An AI assistant reads the sources and creates these pages.

**Graph viewer** — A single web page that reads all the wiki pages, finds every link between them, and draws an interactive map. Built with D3.js, a popular charting library. No server needed. Just open the file in a browser.

When new sources are added, the AI assistant creates or updates wiki pages. Then a simple script regenerates the graph. The whole thing stays in sync.

## How was it built?

The project follows a pattern called LLM-wiki, where an AI handles all the writing, organizing, and cross-referencing. The human's job is to point the AI at good source material and ask questions.

The stack is intentionally simple:
- Markdown files for all content
- A Node.js script to turn those files into graph data
- One HTML file with D3.js for the visualization
- Git for version control
- Netlify for hosting

No database. No framework. No build system. Just files and a browser.

## How to use it

**Browse the graph** — Open the site and explore. Hover over dots to see connections. Click to read about a topic. Use the search box to find something specific.

**Add your own sources** — Drop markdown files into the sources folder. Ask the AI to read them and update the wiki. Run the graph script. Your new topics appear on the map.

**Ask questions** — The wiki is designed to be queried. Ask about any ontology topic and get an answer that pulls from multiple wiki pages with links to dig deeper.

## What is next?

The wiki currently covers the foundation and core layers of ontology knowledge, plus a deep dive into financial ontologies. Future areas to explore:

- Ontology design patterns
- Upper ontologies like BFO and DOLCE
- Hands-on tutorials with Protege
- More domain-specific ontologies beyond finance
- Temporal and fuzzy ontologies

The graph grows every time new sources are added. The more you feed it, the more connected and useful it becomes.
