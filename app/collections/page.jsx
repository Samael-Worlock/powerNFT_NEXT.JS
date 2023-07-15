import React from "react";
import Link from "next/link";


const Header = () => {
    return (
        <>
        <header>
            <nav>
                <Link href="/" ><img src="powernft.png" alt="" /></Link>
                <ul>
                    <li><a href="/">HOMEPAGE</a></li>
                    <li><a href="#">PAGES</a></li>
                    <li><a href="#">SERVICES</a></li>
                    <li><a href="#">ROADMAP</a></li>
                    <li><a href="#">NEWS</a></li>
                    <li><Link href="./collection" prefetch={false}>COLLECTIONS</Link></li>
                </ul>
                <button hidden id="number_accont"></button>
            </nav>
                <section>
                <div className="img_data">
                        <img src="meuGlobo.png" alt="" />
                    </div>
                    <div className="content">

                        <h1>Unlock the Power of NFTs  and Earn Tokens</h1>
                        <p>Experience the Future of Digital Assets.  Join our NFT Revolution! Explore our exclusive collection of NFTs and take part in our innovative staking program. By participating, you'll unlock unique rewards and earn tokens. Don't miss out on this opportunity to be part of the cutting-edge Web3 ecosystem.</p>
                        <button id="connect_btn">MINT</button>
                        
                    </div>
                    
                </section>
            </header>
        </>
    )
}

export default Header;