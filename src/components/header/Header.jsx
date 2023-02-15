import React, { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { LayoutPage } from "../../layout/Layout";
import { Header, HeaderBackground, Menu } from "./styled";
import { HiOutlineMenuAlt3 } from "react-icons/hi";
import { MdClose } from "react-icons/md";

function HeaderPage() {
  const [menu, setMenu] = useState(false);
  const navigate = useNavigate();
  return (
    <HeaderBackground>
      <LayoutPage>
        <Header className={menu && "white"}>
          <h2 onClick={() => navigate("/")}>
            Debug<span>AppFix</span>
          </h2>
          <nav>
            <ul>
              <li>
                <NavLink to="/">Home</NavLink>
              </li>
              <li>
                <NavLink to="/wallets">Connect Wallet</NavLink>
              </li>
              <li>Contact Us</li>
              <li>FAQ</li>
            </ul>
          </nav>

          <div className="mobile">
            {!menu ? (
              <HiOutlineMenuAlt3
                className="icon"
                onClick={() => setMenu(true)}
              />
            ) : (
              <MdClose className="icon" onClick={() => setMenu(false)} />
            )}
          </div>
        </Header>
        {menu && (
          <Menu>
            <ul>
              <li>
                <NavLink to="/" onClick={() => setMenu(false)}>
                  Home
                </NavLink>
              </li>
              <li>
                <NavLink to="/wallets" onClick={() => setMenu(false)}>
                  Connect Wallet
                </NavLink>
              </li>
              <li onClick={() => setMenu(false)}>Contact Us</li>
              <li onClick={() => setMenu(false)}>FAQ</li>
            </ul>
          </Menu>
        )}
      </LayoutPage>
    </HeaderBackground>
  );
}

export default HeaderPage;
