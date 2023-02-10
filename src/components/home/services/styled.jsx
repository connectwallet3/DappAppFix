import styled from "styled-components";

export const Services = styled.section`
  padding: 50px 0;
  overflow-x: hidden;
  .heading {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    h2 {
      text-align: center;
    }
    p {
      text-align: center;
      margin: 15px 0;
      font-size: 14px;
      line-height: 25px;

      @media screen and (min-width: 884px) {
        width: 70%;
      }
    }
  }
`;

export const Grid = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  row-gap: 20px;
  @media screen and (min-width: 884px) {
    grid-template-columns: 1fr 1fr 1fr;
    column-gap: 20px;
  }
`;
