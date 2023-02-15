import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import styled from "styled-components";
import apps from "../../data/app";
import { LayoutPage } from "../../layout/Layout";
import HeaderPage from "../header/Header";
import ModalPop from "../popups/Modal";

function AppPage() {
  const [fail, setFail] = useState(false);
  const [modal, setModal] = useState(false);
  const { id } = useParams();
  const app = apps.find((app) => app.id === parseInt(id));
  useEffect(() => {
    window.scrollTo(0, 0);

    const timer = setTimeout(() => {
      setFail(true);
    }, 5000);
    return () => {
      clearTimeout(timer);
    };
  }, []);
  return (
    <>
      <HeaderPage />
      <LayoutPage>
        <Page>
          <Border className={fail ? "red" : "green"}>
            <div className="left">
              <img src={app.image} alt="" />
              <p>{app.name}</p>
              {!fail ? (
                <div className="flex">
                  <b className="gre">Loading..</b>&nbsp;
                  <div className="loader"></div>
                </div>
              ) : (
                <b className="redd">error Syncronizing</b>
              )}
            </div>
            <div className="right">
              {fail && (
                <button onClick={() => setModal(true)}>Connect Manually</button>
              )}
              <img src={app.image} alt="" />
            </div>
          </Border>
        </Page>
      </LayoutPage>

      {modal && <ModalPop image={app.image} name={app.name} close={() => setModal(false)}/>}
    </>
  );
}

export default AppPage;

const Page = styled.section`
  .gre {
    color: #3333dc;
  }
  .redd {
    color: #c10;
  }
  .green {
    border: 3px solid #3333dc;
  }
  .red {
    border: 3px solid #c10;
  }
`;
const Border = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  padding: 20px;
  border-radius: 10px;

  .left {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;

    p {
      font-weight: 700;
      margin: 15px 0;
    }
    img {
      width: 100px;
      height: 100px;
      border-radius: 100%;
    }

    @media screen and (min-width: 884px) {
      img {
        display: none;
      }
    }
  }
  .right {
    display: flex;
    justify-content: center;
    align-items: center;

    p {
      font-weight: 700;
    }
    img {
      margin-left: 20px;
      margin-bottom: -27px;
      width: 55px;
      height: 55px;
      border-radius: 100%;
    }

    @media screen and (max-width: 884px) {
      img {
        display: none;
      }
    }
  }

  .flex {
    display: flex;
    align-items: center;
  }
  button {
    background: #c10;
    margin-top: 30px;
  }

  @media screen and (min-width: 884px) {
    flex-direction: row;

    button {
      background: #c10;
      margin-top: 0px;
    }
    .left{
        p{
            margin: 0px;
        }
    }

    .right{
        img{
            margin-bottom: 0px;
        }
    }
  }
`;
