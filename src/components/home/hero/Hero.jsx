import React from "react";
import { LayoutPage } from "../../../layout/Layout";
import { Hero, Left, Right } from "./styled";
import world from "../../../assets/world.png";

function HeroScreen() {
  return (
    <Hero>
      <LayoutPage>
        <div className="grid">
          <Left>
            <h1 data-aos="fade-up">
              <span>Decentralized</span> Platform Wallet
            </h1>
            <p data-aos="fade-up">
              DebugAppFix is a powerful tool for wallet validation, essential
              for ensuring the security and integrity of digital assets.
              Performs a comprehensive analysis of the wallet's structure and
              contents, including checks for correct formatting, correct key
              derivation, and proper encryption.
            </p>
           <a href="#service"> <button data-aos="fade-up">Get Started</button></a>
          </Left>
          <Right data-aos="fade-up">
            <img src={world} alt="" />
          </Right>
        </div>
      </LayoutPage>
    </Hero>
  );
}

export default HeroScreen;
