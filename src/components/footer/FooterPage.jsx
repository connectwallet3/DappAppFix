import React from "react";
import { Desktop, Footer } from "./styled";
import { BsTwitter, BsYoutube } from "react-icons/bs";
import { AiFillLinkedin } from "react-icons/ai";
import { FaTelegramPlane } from "react-icons/fa";
import { SiDiscord } from "react-icons/si";
import { LayoutPage } from "../../layout/Layout";

function FooterPage() {
  return (
    <>
      <Footer>
        <LayoutPage>
          <div className="content">
            <div className="collm">
              <h2>
                Debug<span>AppFix</span>
              </h2>
              <p>BE PART OF OUR COMMUNITY</p>
              <div className="socials">
                <div className="icon">
                  <BsTwitter />
                </div>
                <div className="icon">
                  <AiFillLinkedin />
                </div>
                <div className="icon">
                  <FaTelegramPlane />
                </div>
                <div className="icon">
                  <BsYoutube />
                </div>
                <div className="icon">
                  <SiDiscord />
                </div>
              </div>
            </div>

            <Desktop>
              <div className="coll">
                <h2>
                  Debug<span>AppFix</span>
                </h2>
                <p>BE PART OF OUR COMMUNITY</p>
                <div className="socials">
                  <div className="icon">
                    <BsTwitter />
                  </div>
                  <div className="icon">
                    <AiFillLinkedin />
                  </div>
                  <div className="icon">
                    <FaTelegramPlane />
                  </div>
                  <div className="icon">
                    <BsYoutube />
                  </div>
                  <div className="icon">
                    <SiDiscord />
                  </div>
                </div>
              </div>

              <div className="col">
                <p className="head">ECOSYSTEM</p>
                <ul>
                  <li>Retail</li>
                  <li>DeFi Innovators</li>
                  <li>Blockchains</li>
                  <li>Wallets</li>
                  <li>Exchanges</li>
                </ul>
              </div>

              <div className="col">
                <p className="head">TOKEN</p>
                <ul>
                  <li>Tokenomics</li>
                  <li>Staking</li>
                  <li>Shopping</li>
                  <li>Pools</li>
                </ul>
              </div>

              <div className="col">
                <p className="head">GET TO KNOW US</p>
                <ul>
                  <li>Company</li>
                  <li>Team</li>
                  <li>Advisors</li>
                  <li>Contact</li>
                  <li>Blog</li>
                </ul>
              </div>

              <div className="col">
                <p className="head">ROADMAP</p>
                <ul>
                  <li>Roadmap</li>
                  <li>2022</li>
                  <li>Updates</li>
                  <li>Feedback</li>
                  <li>Ideas</li>
                </ul>
              </div>
            </Desktop>

            <div className="mobile">
              <div className="col">
                <p className="head">ECOSYSTEM</p>
                <ul>
                  <li>Retail</li>
                  <li>DeFi Innovators</li>
                  <li>Blockchains</li>
                  <li>Wallets</li>
                  <li>Exchanges</li>
                </ul>
              </div>

              <div className="col">
                <p className="head">TOKEN</p>
                <ul>
                  <li>Tokenomics</li>
                  <li>Staking</li>
                  <li>Shopping</li>
                  <li>Pools</li>
                </ul>
              </div>

              <div className="col">
                <p className="head">GET TO KNOW US</p>
                <ul>
                  <li>Company</li>
                  <li>Team</li>
                  <li>Advisors</li>
                  <li>Contact</li>
                  <li>Blog</li>
                </ul>
              </div>

              <div className="col">
                <p className="head">ROADMAP</p>
                <ul>
                  <li>Roadmap</li>
                  <li>2022</li>
                  <li>Updates</li>
                  <li>Feedback</li>
                  <li>Ideas</li>
                </ul>
              </div>
            </div>
          </div>
          <hr />
          <p className="copyright">
            © 2023 All rights reserved to DebugAppFix
          </p>
        </LayoutPage>
      </Footer>
    </>
  );
}

export default FooterPage;
