import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import FooterPage from "../components/footer/FooterPage";
import WalletPage from "../components/walletPage/WalletPage";
import Home from "../pages/Home";
import Redirect from "../pages/Redirect";
import Wallets from "../pages/Wallets";

function RouterPage() {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="*" element={<Redirect />} />
        <Route exact path="/wallets" element={<Wallets />} />
        <Route exact path="/wallets/:id" element={<WalletPage />} />
      </Routes>
      <FooterPage />
    </Router>
  );
}

export default RouterPage;
