---
title: What are Funding Payments in Perpetual Futures?
---

# Funding Payments

## Conceptual
The **high level overview** of what funding is in perpetual futures contracts. 

Let us first understand what a [traditional futures contract](https://www.investopedia.com/terms/f/futurescontract.asp#:~:text=our%20editorial%20policies-,What%20Is%20a%20Futures%20Contract%3F,trading%20on%20a%20futures%20exchange.) is 

> A futures contract is a legal agreement to buy or sell a particular commodity asset, or security at a predetermined price at a specified time in the future.

The element of time, "...at a specified time in the future", is the important takeaway here. Since these contracts have an expiration date, the closer to that date, the closer the price of the futures contract is to the price of the underlying asset. 

The Crypto Industry spiced things up with the invention of the **Perpetual Futures Contract** when BitMex started offering this novel instrument. As the name implies, these contracts **DO NOT** have expiration dates. 

Since all futures contracts are derivatives of the underlying asset, they need to closely track the price of that underlying asset. Since these "perpetual" instruments never expire, something else had to be introduced to force parity between the price of the perpetual contract and the asset it represents. This solution was found in the form of **Funding Payments**.

Simply put, a funding payment is a payment made between parties on either side of the trade. This payment will influence new traders to take the less popular side of the trade / encourage current traders on the more popular side of the trade to close their positions. Traders behaving in this way will, through supply and demand forces, drive the price of the perpetual contract towards the price of the underlying asset, on the local exchange. 

There are several popular methodologies for implementing funding payments, that are explained in detail ([#1031 - Funding Rates Refreshed](https://gitlab.dev.blockriver.tech/durafi/durafi-webserver/-/issues/1031)) put regardless of implementation, we can summarize these mechanisms simply:

IF the price of the perpetual contract is **HIGHER** than the underlying asset
THEN the funding rate will be `positive`. This means that the `LONGS` will pay the `SHORTS`, encouraging current longs to close their positions and new entrants to open short positions (to receive funding payments). 

IF the price of the perpetual contract is **LOWER** than the underlying asset
THEN the funding rate will be `negative`. This means that the `SHORTS` will pay the `LONGS`, encouraging current shorts to close their positions and new entrants to open long positions (to receive funding payments).

Now that we have the basics down, let's dive into the basics of how these rates are determined. 

As mentioned earlier, the ways in which exchanges derive the funding payment and how often these are paid between traders varies, but in general it is rather simple. 

The **Mark Price** is the __local__ price of the perpetual contract, in other words, the price of the perpetual contract on THIS exchange. This is set by the fundamental laws of supply and demand. 

The **Index Price** is the __global__ price of the underlying asset. There are various ways of ascertaining this, but for now, just assume that we are getting an average price from the top exchanges in the world. 

## Example

The afternoon of June 27th, 2002:

**BTC**

Mark price at our exchange is $20,000

Index price globally is $25,000

Houston, we have a problem... We need to get the price of the perpetual contract on our exchange in line with the real price of BTC. One obvious solution would be to wait on arbitrage traders to notice this deviation and come in to bid the price up.. and this will happen, but we can do better. 

Let's start forcing the traders who are suppressing the price, the shorts, to start paying the longs a **funding payment**. Depending on the exchange, this payment might be every 8 hours, every hour, or continuous. Over time, in addition to 3rd party arbitrage, this payment will influence participants to exit their positions and or join the other side until the **mark price** and **index price** converge at the actual price of the underlying asset. 

The magnitude of the price deviation between mark and index will influence the **funding rate**

The relative depth and size of the order book will influence the payments made or received by the respective parties.  


## Technical 

To be completed...
Technical information on Funding here



## References 
[Ticket #631 - DuraFi funding rate methodology](https://gitlab.dev.blockriver.tech/durafi/durafi-webserver/-/issues/631)

[Ticket #1031 - Funding rates refreshed](https://gitlab.dev.blockriver.tech/durafi/durafi-webserver/-/issues/1031)

