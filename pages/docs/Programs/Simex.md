---
title: ATP

description: What is the ATP?
---

![simex matching engine](/simex.png)

## Conceptual
**Argo Matching Engine** is is a high capacity, low latency order matching server, the software core of electronic marketplace. 

**It implements:**
- fast price-time priority and pro-rata order matching algorithms
- industry standard FIX-based interfaces for order management
- inside market and market depth distribution facility
- RDBMS-based order history storage. 

Argo Matching Engine is written in C++. 
It runs on Linux and Windows. 
Argo Matching Engine supports MS SQL Server, mySQL, Oracle and Sybase RDBMS.

**Features:**

- Extendable set of instruments, support for equities, futures, options, bonds, FX spot, cryptocurrency contracts, forwards, exchange traded strategies (like calendar spreads, butterflies) out of box, and support for dynamic (intra-day) instrument creation
- Market, Limit, Stop-Loss and Stop-Limit Orders; Iceberg; Day, GTD, GTC, GFS, FOK, IOC, AON time-in-force options; one-cancel-the-other and if-done combinations
- Several variations of price-time priority and  pro-rata order matching algorithms
- Implied engine: implied IN and implied OUT
- Continuous and call auction style trading sessions
- Validation of order price alignment, price range, minimum order size, order size increment, and more
- FIX 4.2/4.4 interfaces for order management
- Publishing of market depth (full snapshot, incremental updates), market statistics, and instrument definitions via FIX/FAST
- Support for trading session scheduling on market, channel, and instrument level
- Administrative HTML and command line interfaces provide trader session statistic, trader activity, order book, fills, and market depth views
- Support for “manual” matching for dealer-desk setups
- Scalability. Advanced multithreading helps to utilize multiple processors efficiently; we can deploy multiple matching engines to work in concert in one trading environment
- Seamless integration with ATP Order Router, Market Data Feeder, Risk Management Server, and Argo Trader front-end

## Technical Information regarding Matching Engine

To be completed...

## Fills

Simply put, a **fill** is an __executed order__. 

When a trader places an order for an `ASSET` and a seller agrees to that price, a sale occurs, and the order **fills**.

Generally, when this happens, a **fill** will report: 
- The price(s) at which the order was filled
- The time-stamp(s) at which the order was filled
- The volume of the order (how much of `ASSET`)

You may have noticed plurality in the above list. This is a great time to talk about what a __partial__ fill is. 


### Refresher on order types

> **Market Orders** are instructions to buy or sell an asset at the current best price. In active markets, these order types are generally **filled** immediately. The party that submits these orders are referred to as the `TAKER` and an easy way to remember this is that they are **taking** liquidity from the order book as their purchase is coming from an existing limit order that another participant added to the order book previously. 

> **Limit Orders** are instructions to buy or sell a **specific quantity** of an `ASSET` as a **specific price**. Generally, these orders will be added to the order book and only executed when the specific conditions are met. Since traders submitting these orders are adding liquidity to the order book, they are referred to as a `MARKER`.  


A partial fill occurs when SOME, but not all, of the order is filled. 

Suppose that a trader issued a limit buy of 10 BTC @ $20,000 while BTC was trading at $20,500. They would be a `MAKER` and they would be adding $200,000 of liquidity to the order book. 

Briefly, BTC trades down to $20,000 and there are 3 BTC available for sale at this price. In a perfect world with no other variables, this trader's **limit buy order** would be triggered and they would absorb up to 10 BTC at this price level. In our scenario, they would now have bought 3 BTC @ $20,000 each. 

Now BTC rebounds off of the $20,000 level back up to $20,500. Our trader got **partially filled** and their **limit buy order** still stands, but it is now an order to buy up to 7 more BTC at or below the specified limit price of $20,000. 

This order will stand until: 
- The order is eventually **completely filled** (buy 10 BTC @ 20k)

OR
 
- The order is cancelled. If they cancel the remaining order their unused liquidity will be returned to their account to join the 3 BTC they received from the partial fill. 

### Technical 

To be completed...
Technical information on Fills here




## Orders

### What is an order book?
An order book is a list of buy and sell orders. The bids (buy orders) and asks (sell orders) are organized by price level. The quantity of all bids and asks at different price levels form a "Market Depth" and this can offer us insights into the levels of interest in a particular asset.
  
![Screen_Shot_2022-07-05_at_4.29.49_PM](uploads/e229b64e2ccb70d88776df25e4ca2a64/Screen_Shot_2022-07-05_at_4.29.49_PM.png)

**Let's break down this screenshot:**

The top section in red is the asks, or current sell orders, that are sitting on the order book.

The bottom section in green is all of the bids, or buy orders, that are sitting on the order book.

The `Price` column contains `Price levels` to which the bids or asks correspond.

The `Amount` column is **Total** quantity of `ASSET` that would be bought or sold at that price level. 

The middle of the order book represents the `mid price` or "fair price" that sits at the equilibrium between the **lowest ask** and **highest bid** on the order book. This number will bounce between those two levels as the price action unfolds. 

The difference between the **lowest ask** and **highest bid** is known as the `spread`. The spread can tell us how efficient a market is and generally how large the liquidity is. The more liquidity and efficiency of a market, should result in a smaller, or tighter spread. 

The `Total` column is a summation of all price levels, on each side, the further we move away from the mid price. The colored bars behind that data give us a visual indicator of market depth. The screenshot in question, shows us that there are more shorts than longs. We can also see that to raise the price of BTC to $21,098... There would need to be 103.472 BTC market bought to destroy the current asks. 

**Types of orders:**

A **market order** is an order to buy or sell an asset at the current best price of the market. These orders will take liquidity away from the order book. In our screenshot above, a market buy order would be executed at $21,086 and take liquidity from that price level. A market sell order would be executed at $21,085 and take liquidity at that price level. 

A **limit order** allows the trader to specify how much of an asset they will buy at a certain price. This is how liquidity gets added to the order book (and we can see it in the screenshot above). If we want to buy BTC, but we are confident that we can get a better price than the market price, we can execute a limit order at our desired price. Let's say that we are confident that we can buy BTC for $21,080 and submit a limit order for 1 BTC at this price. $21,080 will be taken from our account and added to the order book. **IF** the price of BTC hits this price level, our order will be filled and we will now own 1 BTC that we paid $21,080 for. 

A **stop loss order** builds on this and offers the trader some protection against price movements. These orders allow one to specify a price at which their position will be sold and as the name implies this mechanic, stops further losses. We know the markets can move fast, so we make our limit order from above a stop loss order and instruct the exchange to sell (or stop our losses) **IF** the price of BTC goes __below__ $21,000. This offers traders downside protection. 

A **trailing stop** order builds on this even further, allowing a trader to potentially limit downside and capture profits with the same order. To continue our example, Lets say that we bought our 1 BTC @ $21,080 with a 10% trailing stop order. **IF** the price goes down 10% to $18,972 our 1 BTC will be sold, but if the price rises 10% to $23,188 our __stop__ will be increased to $20,869 (10% below $23,188). This offers the same down side protection as a normal stop loss order, but since our stop moves with the increasing price, we are able to lock in profits along the way. 
 

### Technical 

To be completed...
Technical information on Balances here



## References

