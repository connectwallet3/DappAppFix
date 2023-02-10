import React, { useEffect, useState } from "react";
import styled from "styled-components";
import HeaderPage from "../components/header/Header";
import Template from "../components/wallets/Template";
import wallets from "../data/wallets";
import { LayoutPage } from "../layout/Layout";

function Wallets() {
  const [data] = useState(wallets);
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
      <HeaderPage />
      <LayoutPage>
      <H2>Choose your Wallet</H2>
        <Grid data-aos="flip-left">
          <Template wallets={data} />
        </Grid>
      </LayoutPage>
    </>
  );
}

export default Wallets;

const H2 = styled.h2`
    text-align: center;
    margin: 20px 0;
`
const Grid = styled.div`
  display: grid;
  row-gap: 20px;

  @media screen and (min-width: 884px) {
    column-gap: 20px;
    grid-template-columns: 1fr 1fr 1fr 1fr;
  }
`;
