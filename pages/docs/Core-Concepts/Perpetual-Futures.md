---
title: What is a Perpetual Future?
---

# Perpetual Futures

## Conceptual
A perpetual future is a crypto derivative that tracks the price of the underlying `ASSET` and never expires. 

Traders are attracted to perpetual futures for a number of reasons, namely: 
- Getting price exposure to an asset without having to buy and custody it
- Capital efficiency in the form of leverage 
- Hedging current spot positions 
- Delta neutral yield strategies 
- Price speculation

Mentioned earlier, these perpetual contracts never expire **and** should track the prices of the underlying asset. Only knowing this much about perpetuals it might seem illogical that a contract that never expires could effectively track the price of its underlying asset. 

> Brief aside, traditional futures contracts DO have expiry dates and the closer that date is, the closer the contract price will trade to the price of the underlying. 

Leave it to the crypto industry to engineer a novel solution to this challenge. The funding payment is the native mechanic that helps drive the price of the perpetual contract to that of its underlying. In short, this is a periodic payment from one side of the trade to the other. 

For example, if the price of the perp is trading at a premium to the underlying, then the **funding rate** is said to be __positive__ and the traders who are `long` will pay a fee to the traders who are `short`... Thus:

- Incentivizing shorts them to maintain their positions (as they are receiving yield)
- Incentivizing longs to close their positions (as they are now paying shorts)
- Incentivizing new traders to open short positions (to receive future funding payments) 

Incentivizing market participants to sell their longs or to enter into short positions will drive the price of the perp contract back **down** towards that of the underlying. 

Let's imagine this worked all too well and now the perp is trading at a discount to the underlying, now the **funding rate** will be __negative__, where the opposite takes place, and the shorts are now paying the longs, and eventually the same incentives will drive the price of the perp **up** towards the price of the underlying. 

More information about funding can be found in the wiki, [here](https://gitlab.dev.blockriver.tech/durafi/durafi/-/wikis/Argo/Wiki/Core-Concepts/Funding/What-is-Funding-in-Perpetual-Futures%3F). 
  
# Technical 

To be completed...
Technical information on RMCast here



## References 