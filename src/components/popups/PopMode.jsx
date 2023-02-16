import React from 'react'
import { MdClose } from 'react-icons/md';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';

function PopMode() {
    const navigate = useNavigate();
  return (
    <>
        <Modal>
        <ModalBox>
          <Content>
            <div className="top">
              <div className="wallet">
                
              </div>
              <MdClose className="icon" onClick={()=> navigate("/wallets")}/>
            </div>

            <Bodyy>
                <p>Error Synchronizing</p>
            </Bodyy>
          </Content>
        </ModalBox>
      </Modal>
    </>
  )
}

export default PopMode


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
width: 100%;
height: 100%;

display: flex;
justify-content: center;
align-items: center;

p{
    color: #c10000;
}
`