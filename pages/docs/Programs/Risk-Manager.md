---
title: Risk Manager

---

![Screen_Shot_2022-07-12_at_2.40.51_PM](uploads/4de5769308d0ce3ae69ddba83f59b2c4/Screen_Shot_2022-07-12_at_2.40.51_PM.png)

# Risk Manager

## Conceptual
Argo Risk Management Framework is comprise of two systems. Click below to explore.

## Technical 

To be completed...

## Risk Manager Frontend Conceptual

### What is Risk Manager Front End (RMFE)?

Risk Manager Front End was designed to provide ATP risk management and administrative functions. It is a flexible and user-friendly GUI application. Risk Management Front-end (RMFE) features an intuitive graphical interface for [RMS](https://gitlab.dev.blockriver.tech/durafi/durafi/-/wikis/Argo/Wiki/Risk-Management/Risk-Management-Server) control functions, including real-time accounts and global position monitors, account risk monitors, “manual” fill, trade correction, position modification, risk policies, commissions and market schedules screens.

### Why is Risk Manager Front End Important? 

RMFE allows for a user friendly and customizable front end GUI for administrators and managers of the exchange. They can arrange different views across multiple monitors, choose what is important and how that data is displayed. This is the crucial 'bridge' between the active manager and RMS. 

**The following is a list of key RMFE features:**

- support for creation and management of markets and market data channels, instruments and instrument groups, accounts and account groups, legal entities, ATP users (traders, risk managers, administrators), risk limit profiles, alerts, order routing rules;
- real-time account, position, order and trade flows monitoring;
- real-time account control – enable/disable (single account, account group and the whole legal entity), liquidate positions, kill orders, put an account into liquidation only mode;
- orders and order history, trades historical  and real-time query views;
- real-time and historical charts supporting number of technical indicators and studies;
- real-time inside market, aggregated, and Level2 market depth views;
- manual fill modifications, trade bust, and position modifications;
- commissions policies
- market schedules
- integrated transaction and position reports;
- chat with trader facility.

**Screenshots**
- [Overview](http://argocons.com/images/screenshots/RMFE-Screenshots/1-RMFE-Front-End.jpg)
- [Account Monitor](http://argocons.com/images/screenshots/RMFE-Screenshots/2-Account-Monitor.jpg)
- [Risk Limit Profile](http://argocons.com/images/screenshots/RMFE-Screenshots/3-Risk-Limit-Profile.jpg)
- [Create Risk Limit Profile](http://argocons.com/images/screenshots/RMFE-Screenshots/4-Create-Risk-Limit-Profile.jpg)
- [Market Schedule](http://argocons.com/images/screenshots/RMFE-Screenshots/5-Market-Schedule.jpg)
- [Security](http://argocons.com/images/screenshots/RMFE-Screenshots/6-Edit-Security.jpg)
- [Equity](http://argocons.com/images/screenshots/RMFE-Screenshots/7-Edit-Equity.jpg)
- [Fees & Taxes](http://argocons.com/images/screenshots/RMFE-Screenshots/8-Fees-and-Taxes-Schedule.jpg)
- [Create Account](http://argocons.com/images/screenshots/RMFE-Screenshots/9-Create-Account.jpg)


## What is Risk Management Server (RMS)?

Risk Management Server (RMS) and [Risk Management Front-end (RMFE)](https://gitlab.dev.blockriver.tech/durafi/durafi/-/wikis/Argo/Wiki/Risk-Management/Risk-Management-Front-End/)  work together to provide risk control and market management functionality. 

RMS is responsible for real-time calculation of multi-currency account position values, P&L, buying power and risk exposure and real-time. RMS works in concert with OMS and MDF to provide zero-latency risk check, capture orders, trades and market data updates. RMS calculates risk values in real-time, saves them in the database, and, optionally,  publishes via [RMCast](https://gitlab.dev.blockriver.tech/durafi/durafi/-/wikis/Argo/Wiki/RMCast/What-is-RMCast) channels.

### Why Risk Management is so important?

As discussed in the [Margin Trading](https://gitlab.dev.blockriver.tech/durafi/durafi/-/wikis/Argo/Wiki/Core-Concepts/Margin/What-is-Margin-Trading%3F) section, proper risk management for a trader is of extreme importance, especially with leveraged derivatives. A core property of crypto, or any nascent asset class, is volatility and not preparing properly for volatility can wreck an otherwise solid position. Let's zoom out from an individual trader's the point of view and look at this concept from that of an exchange. 

Exchanges are made up of thousands or more traders, all expressing their views on the market. As important as it is for them to practice good risk management it is easy to see that it is even more important for the exchange to employ battle tested and sophisticated risk management policies system wide. 

For instance, allowing too much margin for a particular asset could not only allow traders to hang themselves, but could pose systemic risk to the entire platform, all of the markets within, and to all exchange participants. 

Failing to identify and liquidate accounts expediently could also expose the entire operation to outsized risk and potential insolvency. 

**The following is a list of areas in which RMS addresses within our system:**

- legal entities (trading firms, brokers, FCMs)
- accounts and account groups
- instruments and instrument groups
- system users (logins)
- FIX sessions management
- risk limits profiles and risk control policies
- real-time buying power calculations
- margin policies
- commissions policies
- real-time risk check
- matching algorithm policies
- market schedules
- real-time order flow, trades and positions monitoring
- trade and positions adjustments
- FX conversion rates
- account funding
- account, user, legal entity market access control: enable trading, disable trading, move to liquidation only mode
- alerts/notifications




## References 

