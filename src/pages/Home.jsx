import React, { useEffect } from "react";
import styled from "styled-components";
import ContactScreen from "../components/home/contact/ContactScreen";
import HeroScreen from "../components/home/hero/Hero";
import ServicesScreen from "../components/home/services/ServicesScreen";
import ovalLeft from "../assets/oval-left.svg";
import dots from "../assets/Dots.svg";
import HeaderPage from "../components/header/Header";

function Home() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
      <Bg>
        <img src={ovalLeft} alt="" className="ovalLeft" />
      </Bg>
      <HeaderPage />
      <HeroScreen />
      <Bg>
        <img src={dots} alt="" className="dots" />
      </Bg>
      <ServicesScreen />
      <ContactScreen />
      <Bg>
        <img src={dots} alt="" className="dot" />
      </Bg>
    </>
  );
}

export default Home;

const Bg = styled.div`
  position: relative;
  .ovalLeft {
    position: absolute;
    width: 330px;

    @media screen and (min-width: 884px) {
      width: 600px;
    }
  }
  .dots {
    position: absolute;
    width: 100px;
    right: 100px;
    z-index: -1;

    @media screen and (min-width: 884px) {
      width: 200px;
      right: 200px;
    }
  }
  .dot {
    position: absolute;
    width: 130px;
    left: 0;
    top: -720px;
    // z-index: -1;

    @media screen and (min-width: 884px) {
      width: 200px;
      left: 1000px;
      top: -100px;
    }
  }
`;
