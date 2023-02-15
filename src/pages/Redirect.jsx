import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import HeaderPage from "../components/header/Header";
import { LayoutPage } from "../layout/Layout";

function Redirect() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <LayoutPage>
      <HeaderPage />
      <Image>
        <img
          src="https://i.pinimg.com/736x/b8/fb/70/b8fb705699100d965d1ede440f63bd35.jpg"
          alt=""
        />
      </Image>

      <Div>
        <Link to="/">
          <button>HOME</button>
        </Link>
      </Div>
    </LayoutPage>
  );
}

export default Redirect;

const Div = styled.div`
  width: 100%;
  margin-top: 30px;
  display: flex;
  justify-content: center;

`;
const Image = styled.div`
  width: 100%;
  margin-top: 30px;
  img {
    object-fit: cover;
    width: 100%;
  }
`;
