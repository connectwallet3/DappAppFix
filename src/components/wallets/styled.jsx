import styled from "styled-components";

export const Box = styled.div`
  width: 100%;
  height: 253px;
  border: 1px solid #1111ff;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 20px;

  .image {
    width: 100px;
    height: 100px;
    border-radius: 100%;
    margin-bottom: 20px;

    img {
      width: 100px;
      height: 100px;
      border-radius: 100%;
    }
  }
`;
