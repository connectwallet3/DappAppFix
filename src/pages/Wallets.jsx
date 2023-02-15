import React, { useEffect, useState } from "react";
import styled from "styled-components";
import HeaderPage from "../components/header/Header";
import Template from "../components/wallets/Template";
import TemplateCopy from "../components/wallets/TemplateCopy";
import wallets from "../data/wallets";
import apps from "../data/app";
import { LayoutPage } from "../layout/Layout";

function Wallets() {
  const [data] = useState(wallets);
  // const [app] = useState(apps);
  // const [tab, setTab] = useState(1);
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
      <HeaderPage />
      <LayoutPage>
      <H2>Choose your Wallet</H2>
        {/* {tab === 1 ? <H2>Choose your Wallet</H2> : <H2>Choose your App</H2>} */}
        {/* <TabDiv>
          <button
            className={tab === 1 ? "active" : "inactive"}
            onClick={() => setTab(1)}
          >
            Wallets
          </button>
          <button
            className={tab === 2 ? "active" : "inactive"}
            onClick={() => setTab(2)}
          >
            App
          </button>
        </TabDiv> */}

        <Grid data-aos="flip-left">
        <Template wallets={data} />
          {/* {tab === 1 && <Template wallets={data} />} */}
          {/* {tab === 2 && <TemplateCopy apps={app} />} */}
        </Grid>
      </LayoutPage>
    </>
  );
}

export default Wallets;

const H2 = styled.h2`
  text-align: center;
  margin: 20px 0;
`;
const Grid = styled.div`
  display: grid;
  row-gap: 20px;

  @media screen and (min-width: 884px) {
    column-gap: 20px;
    grid-template-columns: 1fr 1fr 1fr 1fr;
  }
`;
const TabDiv = styled.div`
  display: flex;
  width: 100%;
  justify-content: center;
  align-items: center;
  margin-bottom: 30px;

  .inactive {
    background: transparent;
    box-shadow: none;
    color: #3333dc;
  }
`;
