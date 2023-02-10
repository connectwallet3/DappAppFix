import styled from "styled-components";

export const Contact = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: #f5f3fe;
  border-radius: 20px;
  width: 100%;
  padding: 30px;
  overflow-x: hidden;

  @media screen and (min-width: 884px){
    flex-direction: row;
}
`;
export const Left = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  overflow-x: hidden;
  h3 {
    text-align: center;
    font-size: 20px;
  }
  h3 span {
    background: linear-gradient(94.59deg, #6d6dfc 7.54%, #3535dd 36.55%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
    text-fill-color: transparent;
  }
  span {
    color: #a0a0cd;
    text-align: center;
    font-weight: 700;
    font-size: 20px;
  }

  form {
    width: 100%;
    input {
      background: #fff;
      border: 1.5px solid #e5e5f2;
      border-radius: 10px;
      padding: 10px;
      width: 100%;
      height: 50px;
      margin: 10px 0;

      &:focus {
        outline: none;
      }
    }
    textarea {
      background: #fff;
      border: 1.5px solid #e5e5f2;
      border-radius: 10px;
      padding: 10px;
      width: 100%;
      height: 150px;
      margin: 10px 0;

      &:focus {
        outline: none;
      }
    }
    button{
        width: 100%;
    }
  }
`;
export const Right = styled.section`

@media screen and (max-width: 884px){
    display: none;
}
`;
