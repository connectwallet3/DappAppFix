import styled from "styled-components";

export const Footer = styled.footer`
  border-top: 1px solid #e1dfec;
  padding: 30px 0;
  margin-top: 100px;

  span {
    color: #3535dd;
  }
  hr {
    margin: 20px 0;
    border: 0.5px solid #e1dfec;
    
  }
  .copyright {
    font-size: 14px;
    color: #8c87a6;
  }

  .content {
    display: flex;
    flex-direction: column;
    justify-content: center;
  }
  .mobile {
    display: grid;
    grid-template-columns: 1fr 1fr;
    row-gap: 20px;
    justify-content: center;
    align-content: center;
    @media screen and (min-width: 884px) {
      display: none;
    }
  }

  .col {
    margin-top: 30px;

    .head {
      font-weight: 700;
      color: #8c87a6;
    }
    ul li {
      list-style: none;
      margin-top: 10px;
      cursor: pointer;
    }
  }

  .collm {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    p {
      margin: 15px 0;
      color: #8c87a6;
      font-weight: 600;
    }

    .socials {
      width: 70%;
      display: flex;
      justify-content: space-between;
      align-items: center;
      .icon {
        border: 1px solid #e1dfec;
        border-radius: 100%;
        height: 40px;
        width: 40px;
        display: flex;
        justify-content: center;
        align-items: center;
        color: #3535dd;
      }
    }
    @media screen and (min-width: 884px) {
      display: none;
    }
  }
`;

export const Desktop = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr 1fr;
  column-gap: 20px;
  margin-bottom: 40px;
  .coll {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    p {
      margin: 15px 0;
      color: #8c87a6;
      font-weight: 600;
      font-size: 12px;
    }

    .socials {
      width: 100%;
      display: flex;
      justify-content: space-between;
      align-items: center;
      .icon {
        border: 1px solid #e1dfec;
        border-radius: 100%;
        height: 30px;
        width: 30px;
        display: flex;
        justify-content: center;
        align-items: center;
        color: #3535dd;
      }
    }
  }
  @media screen and (max-width: 884px) {
    display: none;
  }
`;
