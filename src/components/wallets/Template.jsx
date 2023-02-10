import React from "react";
import { Link } from "react-router-dom";
import { Box } from "./styled";

function Template({ wallets }) {
  return (
    <>
      {wallets.map((wallet, index) => (
       <div key={index}>
        <Link to={`/wallets/${wallet.id}`}>
        <Box >
          <div className="image">
            <img src={wallet.image} alt="" />
          </div>
          <h2>{wallet.name}</h2>
          <p>WALLET</p>
        </Box>
        </Link>
       </div>
      ))}
    </>
  );
}

export default Template;
