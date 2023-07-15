'use client'

import React from "react";
import ReadMore from "../functionsBtn/readMore";

const News = () => {
    return(
        <>

<div className="news">
        <h1>Crypto Latest News</h1>
        <div className="cards">
            <div className="card">
                <h6>BITCOIN</h6>
                <h2>Latest News: Bitcoin's Soaring Price Sparks Investor Excitement</h2>
                <p>The price of Bitcoin has been skyrocketing, causing a wave of excitement among investors. With its renewed surge, Bitcoin has once again captured the attention of the financial world, as more people are drawn to the potential returns and the transformative power of cryptocurrency. This upward momentum has sparked discussions about the future of Bitcoin and its role in the global economy.</p>
                <h5>JUL , 2023</h5>
            </div>
            <div className="card">
                <h6>CRYPTO</h6>
                <h2>4 Cryptos Gaining Momentum</h2>
                <p>In the crypto world, four cryptocurrencies are gaining momentum with strong performance and market influence. Bitcoin (BTC), the industry pioneer, sets the standard as the most recognized and traded digital currency. Ethereum (ETH) excels with smart contract technology and decentralized applications. Binance Coin (BNB) gains popularity as the native token of Binance, a leading exchange. Cardano (ADA) offers innovative security and scalability, attracting investors and developers.</p>
                <h5>JUL , 2023</h5>
            </div>     
            <div className="card">
                <h6>BLOCKCHAIN</h6>
                <h2>The Blockchain Revolution: Decentralizing Future</h2>
                <p>Blockchain disrupts globally, providing secure and transparent transactions. Its decentralized nature removes intermediaries, enabling direct interactions. With finance, supply chain, healthcare, and more, blockchain transforms systems. Ensuring data integrity and reducing fraud, it fosters trust and innovation. Organizations and governments embrace blockchain for efficiency and progress. The revolution paves the way.</p>
                <h5>JUL , 2023</h5>
            </div> 
        </div>
        <div className="btn">
            <button onClick={ReadMore}>READ MORE</button>
        </div>
    </div>

        
        </>
    )
}

export default News;