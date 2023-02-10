import React from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";

function Template({ services }) {
  const navigate = useNavigate();
  return (
    <>
      {services.map((service, index) => (
        <>
          <Box
            key={index}
            data-aos="fade-left"
            onClick={() => navigate("/wallets")}
          >
            <img src={service.icon} alt="" />
            <h3>{service.title}</h3>
            <p>{service.text}</p>
          </Box>

          <BoxD
            key={index}
            onClick={() => navigate("/wallets")}
          >
            <img src={service.icon} alt="" />
            <h3>{service.title}</h3>
            <p>{service.text}</p>
          </BoxD>
        </>
      ))}
    </>
  );
}

export default Template;

const Box = styled.div`
  width: 100%;
  height: 333px;
  border: 1px solid #1111ff;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 20px;
  cursor: pointer;

  h3 {
    margin: 15px 0;
    text-decoration: none;
  }

  p {
    text-align: center;
    text-decoration: none;
  }
  img{
    width: 40px;
  }

  &:hover {
    background: #1111ff;
    color: #fff;
  }
  @media screen and (min-width: 884px) {
    display: none;
  }
`;
const BoxD = styled.div`
  width: 100%;
  height: 333px;
  border: 1px solid #1111ff;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 20px;
  cursor: pointer;

  h3 {
    margin: 15px 0;
    text-decoration: none;
  }

  p {
    text-align: center;
    text-decoration: none;
  }
  img{
    width: 40px;
  }

  &:hover {
    background: #1111ff;
    color: #fff;
  }
  @media screen and (max-width: 884px) {
    display: none;
  }
`;
