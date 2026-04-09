# Algo Trading Academic Source Pack

This source pack collects verified academic and university-hosted material for building out the Algo Trading topic in GraphWiki. The emphasis is on algorithmic execution, order-book dynamics, high-frequency trading, and the market-microstructure foundations that underlie modern electronic trading systems.

## NYU

- **Algorithmic Trading: A Practitioner's Guide**
  - Institution: New York University
  - URL: https://clame.nyu.edu/fetch.php/E0AF1G/312772/Algorithmic%20Trading%20A%20Practitioner%20S%20Guide.pdf
  - Type: Guide / course-adjacent PDF
  - Why it is useful: A strong starter source for execution logic, strategy framing, and the practical objectives of algorithmic trading systems.

- **High-Frequency Trading**
  - Institution: NYU Stern
  - URL: https://pages.stern.nyu.edu/~bdonefer/presscites/HFTMMI.pdf
  - Type: Academic paper
  - Why it is useful: Gives a concise overview of high-frequency trading, its data requirements, and its market impact.

## MIT

- **Optimal Control of Execution Costs**
  - Institution: Massachusetts Institute of Technology
  - URL: https://www.mit.edu/~dbertsim/papers/Finance/Optimal%20control%20of%20execution%20costs.pdf
  - Type: Academic paper
  - Why it is useful: One of the canonical execution-optimization references for block trading and execution-cost minimization.

## Stanford

- **Order-Book Trading Algorithms**
  - Institution: Stanford University
  - URL: https://stanford.edu/~ashlearn/RLForFinanceBook/chapter9.pdf
  - Type: Book chapter / lecture-style chapter
  - Why it is useful: A strong bridge between algorithmic trading and modern reinforcement-learning-based finance workflows.

- **A Guided Tour of Chapter 10: Order Book Algorithms**
  - Institution: Stanford University
  - URL: https://web.stanford.edu/class/cme241/lecture_slides/Tour-OrderBook.pdf
  - Type: Lecture slides
  - Why it is useful: Useful for a clear explanation of limit orders, market orders, and order-book execution mechanics.

- **High Frequency Trading Strategies**
  - Institution: Stanford University
  - URL: http://stanford.edu/class/msande448/2021/Final_reports/gr1.pdf
  - Type: Final project report
  - Why it is useful: Adds a student-research perspective on HFT strategy construction and evaluation.

## Berkeley

- **High-Frequency Trading and Price Discovery**
  - Institution: University of California, Berkeley
  - URL: https://faculty.haas.berkeley.edu/hender/HFT-PD.pdf
  - Type: Academic paper
  - Why it is useful: A strong empirical source on how HFT interacts with market efficiency and price discovery.

## Princeton

- **Optimal Trade Execution under Stochastic Volatility and Liquidity**
  - Institution: Princeton University
  - URL: https://oar.princeton.edu/bitstream/88435/pr1vw06/1/OptimalTradeStochasticVolatility.pdf
  - Type: Academic paper
  - Why it is useful: Extends the execution problem into more realistic market conditions with stochastic liquidity and volatility.

## Cornell

- **High-frequency trading in a limit order book**
  - Institution: Cornell University
  - URL: https://people.orie.cornell.edu/sfs33/LimitOrderBook.pdf
  - Type: Academic paper
  - Why it is useful: A foundational order-book model for market making, inventory risk, and quote placement.

## Yale

- **Algorithmic Trading and Its Discontents**
  - Institution: Yale University
  - URL: https://zoo.cs.yale.edu/classes/cs458/materials/JEP2013_Pub.pdf
  - Type: Academic paper
  - Why it is useful: Useful for GraphWiki because it connects execution technology to fairness, stability, and market-structure concerns.

## Existing domain-standard sources already in this repository

- **FIX Protocol — Financial Information eXchange**
  - Local source file: `sources/articles/fix-protocol-financial-information-exchange.md`
  - Type: Standards article capture
  - Why it is useful: The core message-layer standard for algorithmic execution, market data, and order routing.

- **Ontology for Stock Market Monitoring and Surveillance**
  - Local source file: `sources/papers/ontology-stock-market-monitoring-surveillance.md`
  - Type: Academic paper capture
  - Why it is useful: Adds a semantic and surveillance-oriented branch for suspicious trading behavior and market-event modeling.

- **Knowledge Graph Construction for Stock Markets with LLMs**
  - Local source file: `sources/papers/knowledge-graph-construction-stock-markets-llm.md`
  - Type: Academic paper capture
  - Why it is useful: Connects algorithmic-trading workflows to GraphWiki's broader LLM-plus-knowledge-graph direction.

## Notes

- The strongest execution and microstructure anchors in this pack are the MIT execution-cost paper, the Cornell limit-order-book paper, the Berkeley HFT paper, and the Stanford order-book materials.
- The repository's FIX Protocol and stock-market ontology captures remain necessary because they provide the semantic and infrastructure layer missing from purely quantitative execution papers.