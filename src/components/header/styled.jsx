import styled from "styled-components";

export const HeaderBackground = styled.div`
  background: #fff;
  z-index: 30px;
  overflow-x: hidden;

  .white {
    margin: -20px;
    padding: 20px;
    background: #fff;
    z-index: 300px;
    overflow-x: hidden;
  }
`;

export const Header = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: relative;

  h2{
    cursor: pointer;
  }

  span {
    color: #3535dd;
  }
  .mobile {
    display: none;
  }
  nav ul {
    display: flex;
    align-items: center;

    li {
      list-style: none;
      font-weight: 700;
      margin-left: 30px;
      cursor: pointer;

      a {
        text-decoration: none;
      }
      a.active {
        color: #3535dd;
      }
    }
  }

  @media screen and (max-width: 884px) {
    nav ul {
      display: none;
    }
    .mobile {
      display: block;

      .icon {
        font-size: 28px;
        cursor: pointer;
      }
    }
  }
`;
export const Menu = styled.div`
  position: absolute;
  width: 100%;
  padding: 30px 0;
  left: 0;
  background: #fff;
  z-index: 10;

  ul {
    display: flex;
    flex-direction: column;
    align-items: center;

    li {
      list-style: none;
      font-weight: 600;
      font-size: 20px;
      margin-bottom: 30px;
      cursor: pointer;

      a {
        text-decoration: none;
      }
      a.active {
        color: #3535dd;
      }
    }
  }
`;
