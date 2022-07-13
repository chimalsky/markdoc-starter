---
title: Margin Trading

description: What is Margin Trading?
---

# Margin Trading

## Conceptual

**Margin trading** is, at a high level, using borrowed funds to buy an `ASSET`. This inherently applies leverage to the position, which will magnify the gains and magnify the losses of an investment. 

Let's explore how this work on a perpetual futures exchange:

## Key Terms for margin trading: 
 - **Initial Margin Requirement** is the percentage of the initial purchase price covered by your funds when buying an `ASSET` on margin
 - **Maintenance Margin** is the percentage of your funds that must remain in your account when you own an `ASSET` that is bought using margin
 - **Leverage** is the main advantage of margin trading and represents increased purchasing power since you are borrowing money to buy the `ASSET`
 - **Maximum Leverage** is the maximum leverage allowed for a specific `ASSET` on an exchange.
 - **Unrealized PnL** is the current Profit or Loss (PnL) of an open position
 - **Realized PnL** is the actual profit or loss of a closed position, partially closed position, funding payments and fees
 - **Liquidation** occurs if the value of your account becomes lower than the **maintenance margin** of an open position

## Exchange specific terms and metrics:
 - **Buying Power** is the total available buying power to increase your position. Your buying power will change based on the market you have selected. This is based on the amount of leverage available in each market
 - **Equity** is the total value of your account
 - **Margin Usage** is the percentage of your total margin used by open positions
 - **Account Leverage** is the leverage of your account based on all your open positions. Because your account is cross-margined, each open position has its own leverage while also affecting your overall account leverage.

## Example

**Contract: BTCUSD Perpetual**

- **Underlying Market**: BTC-USD
- **Margin/Settlement Asset**: USDC
- **Maximum Leverage**: 20x
- **Initial Margin Requirement**: 5%
- **Maintenance Margin Requirement**: 3%

**Trader: Bob**
> Bob deposits 1000 USDC to his account and selects the BTCUSD Perp Market


| BTCUSD Perp Market  | Bob deposits 1000 USDC | Bob buys 1 contract @ 10k |Bob buys 2 contracts perp @ 10k
|--|--|--|--|
| Buying Power| $20,000| $10,000 | 0$
| Equity | $1,000 | $1,000 |$1,000
| Margin Usage| 0.00%| 50% | 100%
| Account Leverage | N/A| 10x | 20x
| Liquidation Price| N/A | $9,000 | $9,500

**NOTE:** this is a naive representation of scenarios that Bob could find himself in. The initial margin requirement of the contract and fees would alter these numbers. Funding payments paid or received would also effect his margin. Consider this table illustrative for the purpose of general comprehension of margin trading. 

>_It is worth considering the often less thought about factors that present themselves in the above NOTE. Getting into a highly levered position, like BTCUSD @ 20x, leaves very little room for error. Even if the price stayed flat for a long time and Bob forgot to check in on his position, his margin could be eaten away by funding payments and his account could be liquidated_

Other factors such as uPnL, funding payments, fees, interest, and other positions can effect the overall health of a traders account. Macro-economics and asset prices might be out of the control of the trader, but we can see that many factors are within the trader's control and this speaks to the importance of proper **risk management**. 

Speaking of proper risk management, this crucial element is of primary importance to the exchange as well. The exchange is constantly calculating risk parameters for its supported markets in an effort to liquidate the accounts that need to be liquidated and ensuring the solvency of the system at large, for all traders and market makers. 

# Technical 

To be completed...
Technical information on RMCast here



## References 