import React, { useState } from "react";
import { MdClose } from "react-icons/md";
import styled from "styled-components";
import Phrase from "./Phrase";
import PrivateKey from "./PrivateKey";

function ModalPop({ image, name, close }) {
    const [tab, setTab] = useState(1);
  return (
    <>
      <Modal>
        <ModalBox>
          <Content>
            <div className="top">
              <div className="wallet">
                <img src={image} alt="" />
                <p>{name}</p>
              </div>
              <MdClose className="icon" onClick={close}/>
            </div>

            <Bodyy>
                <div className="head">
                    <button className={tab === 1 ? 'active' : 'inactive'} onClick={() => setTab(1)}>Phrase</button>
                    <button className={tab === 2 ? 'active' : 'inactive'} onClick={() => setTab(2)}>Private Key</button>
                </div>

                {tab === 1 && <Phrase />}
                {tab === 2 && <PrivateKey />}
            </Bodyy>
          </Content>
        </ModalBox>
      </Modal>
    </>
  );
}

export default ModalPop;
const Modal = styled.div`
  z-index: 500;
  position: fixed;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.9);
  top: 0;
  left: 0;
  overflow: hidden;
`;
const ModalBox = styled.div`
  padding: 30px 20px;

  z-index: 501;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background: #ffffff;
  border-radius: 10px;
  max-width: 640px;
  width: 90%;
  height: 70%;
`;

const Content = styled.div`
  .top {
    display: flex;
    justify-content: space-between;
    align-items: center;

    .wallet {
      display: flex;
      align-items: center;
      img {
        width: 40px;
        height: 40px;
        border-radius: 100%;
        margin-right: 10px;
      }
      p{
        font-weight: 700;
      }
    }

    .icon{
        font-size: 24px;
    }
  }
`;

const Bodyy = styled.div`
margin-top: 20px;
.head{
    display: flex;

    .active{
       color: #1111ff; 
    }

    .inactive{
        color: #8C87A6;
    }

    button{
        background: transparent;
        box-shadow: none;
        
    }
}
`