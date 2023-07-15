'use client'

import React from "react";
import Link from "next/link";
import ConnectWallet from "./functionsBtn/connect";
import DisconnectWallet from "./functionsBtn/disconnect";
import "./page";



const Header = () => {

    return (
        <>
        <header>
            <nav>
               <img src="powernft.png" alt="" />
                <ul>
                    <li><Link href="/">HOMEPAGE</Link></li>
                    <li><a href="#">PAGES</a></li>
                    <li><a href="#">SERVICES</a></li>
                    <li><Link href="road_map">ROADMAP</Link></li>
                    <li><Link href="#">NEWS</Link></li>
                    <li><Link href="./collections" prefetch={false}>COLLECTIONS</Link></li>
                </ul>
                <button hidden id="number_accont"></button>
            </nav>
                <section>
                    <div className="content">

                        <h1>Unlock the Power of NFTs  and Earn Tokens</h1>
                        <p>Experience the Future of Digital Assets.  Join our NFT Revolution! Explore our exclusive collection of NFTs and take part in our innovative staking program. By participating, you'll unlock unique rewards and earn tokens. Don't miss out on this opportunity to be part of the cutting-edge Web3 ecosystem.</p>
                        <button onClick={ConnectWallet}>CONNECT WALLET</button>
                        <button hidden onClick={DisconnectWallet}>DISCONNECT WALLET</button>
                    </div>
                    <div className="img_data">
                        <img src="meuGlobo.png" alt="" />
                    </div>
                </section>
            </header>
        </>
    )
}

export default Header;




