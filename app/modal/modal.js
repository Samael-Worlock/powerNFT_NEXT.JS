'use client'

import React from "react";
import OpenModal from "../functionsBtn/openModal";

const Modal = () => {
    
    return (

        <>
            <div className="rocket">
                <div className="rocket_content">
                    <h1>Unlock the Power of Our Comprehensive Services</h1>
                    <p>At PowerNFT, we offer a range of cutting-edge services to enhance your digital asset experience. Our services are designed to meet your needs in the Web3 era. Discover the following services we provide:</p>
                    <ul>
                        <li>NFT Marketplace:</li>
                        <li>Staking and Rewards:</li>
                        <li>DeFi Integration:</li>
                        <li>Asset Security:</li>
                        <li>Community Governance:</li>
                        <li>Multi-Currency Wallet:</li>
                    </ul>
                    <button onClick={OpenModal}>COMING SOON</button>
                </div>
                <div className="rocket_img">
                    <img src="meu foguete.png" alt="" />
                </div>
            </div>

            <div className="modal" id="myModal">
                <div className="modal-content">
                    <h3>NFT Marketplace:</h3>
                    <p>The NFT Marketplace is a platform where users can buy, sell, and trade non-fungible tokens (NFTs). It provides a digital marketplace for collectors and artists.</p>

                    <h3>Staking and Rewards:</h3>
                    <p>Staking allows users to lock their tokens on a platform to earn additional rewards. Users can earn rewards for participating in staking and keeping their tokens locked for a certain period of time.</p>

                    <h3>DeFi Integration:</h3>
                    <p>DeFi integration enables users to access decentralized financial services such as lending on a platform without intermediaries. With DeFi integration, cryptocurrency holders have the opportunity to participate in lending protocols, provide liquidity in liquidity pools, and earn yields through staking and farming. This integration offers greater financial autonomy, transparency, and the potential for more attractive returns compared to traditional financial services.</p>

                    <h3>Asset Security:</h3>
                    <p>Asset security is a fundamental priority in any crypto project. Security measures such as secure storage of private keys and smart contract audits are implemented to protect users' assets.</p>

                    <h3>Community Governance:</h3>
                    <p>Community governance allows token holders to participate in important project decisions. They have the opportunity to vote on proposals and influence the development and direction of the project.</p>

                    <h3>Multi-Currency Wallet:</h3>
                    <p>A multi-currency wallet supports various cryptocurrencies, allowing users to manage different assets in a single wallet. This provides convenience and flexibility in interacting with multiple cryptocurrencies.</p>

                    <button className="button" id="closeModal">Close</button>
                </div>
            </div>


        </>


    )
}

export default Modal;