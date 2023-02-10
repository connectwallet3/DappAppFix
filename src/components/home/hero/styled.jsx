import styled from "styled-components";

export const Hero = styled.section`
  .grid {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }

  @media screen and (min-width: 884px) {
    .grid {
      display: grid;
      grid-template-columns: 1fr 1fr;
      column-gap: 30px;
    }
  }
`;
export const Left = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  h1 {
    font-weight: 700;
    font-size: 50px;
    text-align: center;

    span {
      background: linear-gradient(94.59deg, #6d6dfc 7.54%, #3535dd 36.55%);
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
      background-clip: text;
      text-fill-color: transparent;
    }
  }
  p {
    text-align: justify;
    margin: 15px 0;
    font-size: 14px;
    line-height: 25px;
  }

  @media screen and (min-width: 884px) {
    justify-content: flex-start;
    align-items: start;
    h1 {
      text-align: start;
    }
  }
`;
export const Right = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  margin-top: 15px;
  img {
    width: 100%;
  }

  @media screen and (min-width: 884px) {
    margin-top: 0px;
  }
`;
