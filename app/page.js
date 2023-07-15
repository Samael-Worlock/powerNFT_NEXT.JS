'use client'

import Image from 'next/image'
import Header from './navbar'
import Modal from './modal/modal'
import News from './latest/latestnews'
import NavegarTopo from './functionsBtn/backToppg'
import BuyNft from './functionsBtn/mintNft'


export default function Home() {
  return (
    <main>
      <Header></Header>
      <aside>
        <h1>Unlock the Potential of our Ecosystem</h1>
        <p>At PowerNFT, we are building a powerful and decentralized ecosystem that empowers users to embrace the future of digital assets. Here's why you should be part of it:</p>

        <ul>
          <li>Access to Exclusive NFT Collections</li>
          <li>Participate in Staking and Earn Rewards</li>
          <li>Tokenize Your Digital Assets</li>
          <li>Community-driven Governance</li>
          <li>Secure and Transparent Transactions</li>
        </ul>
        <button onClick={NavegarTopo}>Connect to purchase NFTs</button>
        <button hidden onClick={BuyNft}>BUY NFT</button>
      </aside>
      <div className="app">
        <div className="app_img_bx">
          <img src="Crypto App.png" />
        </div>
        <div className="app_content_bx">
          <h1>Unleash the Potential of Our Future Ecosystem</h1>
          <p>At PowerNFT, we are working towards building a revolutionary ecosystem that will shape the future of Web3. Here's what you can expect from our upcoming ecosystem:</p>
          

          <ul>
            <li>Seamless Integration of NFTs, DeFi, and More</li>
            <li>Unlock New Revenue Streams with Tokenized Assets</li>
            <li>Community-Driven Governance and Decision-Making</li>
            <li>Secure and Scalable Infrastructure</li>
            <li>Empowering Collaboration and Innovation</li>
          </ul>

        </div>
      </div>

      <Modal></Modal>

      <div className="road_map" id="road_map">
        <h1>Stay Engaged and Shape Our Crypto Road Map</h1>
            <p>At PowerNFT, we believe in the power of community collaboration. Your support and involvement are crucial in driving our roadmap forward. Here's why your engagement matters:</p>
        <div className="map">
            <div className="card">
                <div className="title">
                    <h6>2023 Q1</h6>
                    <h4>Initial Launch of PowerNFT</h4>
                </div>
                <h5></h5>
                <h2></h2>
                </div>
                
                <div className="card">
                    <div className="title">
                        <h6>2023 Q1/Q2</h6>
                        <h4>Development and Release of First Exclusive NFTs</h4>
                    </div>
                    <h5></h5>
                    <h2></h2>
                </div>
                
                <div className="card">
                    <div className="title">
                        <h6>2023 Q2/Q3</h6>
                        <h4>Creation of an Active and Engaged Community</h4>
                    </div>
                    <h5></h5>
                    <h2></h2>
                </div>
                
                <div className="card">
                    <div className="title">
                        <h6>2023 Q3/Q4</h6>
                        <h4>Integration with NFT Marketplace Platforms</h4>
                    </div>
                    <h5></h5>
                    <h2></h2>
                </div>
                
                <div className="card">
                    <div className="title">
                        <h6>2023 Q4</h6>
                        <h4>Expansion of NFT Collection with New Artworks and Artists</h4>
                    </div>
                    <h5></h5>
                    <h2></h2>
                </div>
                
                <div className="card">
                    <div className="title">
                        <h6>2024 Q1</h6>
                        <h4>Launch of Coin Cryptocurrency</h4>
                    </div>
                    <h5></h5>
                    <h2></h2>
                </div>
                
                <div className="card">
                    <div className="title">
                        <h6>2024 Q1/Q2</h6>
                        <h4>Launch of NFT Staking</h4>
                    </div>
                    <h5></h5>
                    <h2></h2>
                </div>

                <div className="card">
                    <div className="title">
                        <h6>2024 Q1/Q2</h6>
                        <h4>More after</h4>
                    </div>
                    <h5></h5>
                    <h2></h2>
                </div>
                
                </div>
    </div>

    <div className="follow_road">
    <ul className="road_fallow">
        <li>Accelerate Development: Your feedback and ideas guide us in implementing new features and functionalities at a faster pace.</li>
        <li>Priority Features: By actively participating in our community, you can influence the priority of upcoming roadmap features based on your needs and preferences.</li>
        <li>Early Access: Community members will have exclusive access to beta releases and new features before they are available to the wider audience.</li>
        <li>Continuous Improvement: Together, we can identify areas for improvement, address challenges, and ensure a seamless and user-centric experience.</li>
        <li>Shared Vision: By engaging with our roadmap, you become an integral part of our shared vision for a thriving Web3 ecosystem.</li>
        <p>Join our community today and help shape the future of PowerNFT. Together, we can achieve remarkable milestones on our crypto roadmap.</p>

    </ul>
    </div>

    

    <div className="man">
        <div className="man_img">
            <img src="Crypto Man.png" alt="" />
        </div>
        <div className="man_content">
            <h1>Unlock the Power of Web3 and Explore New Possibilities</h1>
            <p>Welcome to the exciting world of Web3, where blockchain technology is revolutionizing the way we interact and transact online. At PowerNFT, we believe in harnessing the true potential of Web3 to empower individuals and businesses alike. With Web3, you can break free from traditional centralized systems and take control of your digital assets. Say goodbye to intermediaries and hello to a decentralized ecosystem where transparency, security, and privacy are at the forefront.</p>
            <div className="client_cole">
                <div className="cont">
                    <div className="star">
                        <i className="bi bi-star-fill"></i><i className="bi bi-star-fill"></i><i className="bi bi-star-fill"></i><i className="bi bi-star-fill"></i><i className="bi bi-star-fill"></i><i className="bi bi-star-fill"></i>
                    </div>
                    <h4>TopChain</h4>
                    <p>Web3.Dev</p>
                </div>
                <div className="img">
                   <img src="#" alt="" />  
                </div>
            </div>
        </div>
    </div>

    <News></News>


    
      


    </main>
  )
}
