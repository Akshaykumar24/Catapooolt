import styled from "styled-components";
// import { Link } from "react-router-dom";
import Modal from "react-modal";
import { useState } from "react";
import axios from "axios";
const CardWrap = styled.div`
  font-family: "Helvetica Neue", Helvetica, Arial, sans-serif;
  width: 300px;
  height: 400px;
  margin: 15px;
  display: flex;
  flex-direction: column;
  text-align: left;
  justify-content: space-between;
  /* padding: 15px; */
  border: 1px solid rgb(216, 230, 239);
  h4 {
    font-size: 16px;
    padding: 0 30px;
    margin: 0;
  }
  p {
    padding: 0 30px;
    font-size: 14px;
  }
  img {
    width: 100%;
    height: 35%;
  }
  div {
    display: flex;
    text-align: center;
    justify-content: space-around;
  }
`;
const Bot = styled.div`
  background-color: rgb(213, 234, 243);

  h5 {
    padding-top: 15px;
    margin: 0;
  }
  div {
    display: flex;
    flex-direction: column;
  }
`;
const InMod = styled.div`
  text-align: center;
`;
const Cont = styled.div`
  width: 90%;
  margin: auto;
  display: flex;
  justify-content: space-between;
  img {
    width: 65%;
    height: auto;
  }
  div {
    width: 25%;
    padding: 0 30px;
    text-align: center;
  }
  div > div {
    width: 100%;
    display: flex;
    justify-content: space-between;
  }
`;
Modal.defaultStyles.content.width = "1000px";

export default function CardExp({ g }) {
  const [open, setOpen] = useState(false);
  const [don, setDon] = useState(0);
  const [glob, setGlob] = useState(g);

  const handleDonate = () => {
    let x = window.confirm("Confirm Payment");
    if (!x) {
      return;
    }
    if (glob.donated === undefined) {
      glob.donated = Number(don);
    } else {
      glob.donated = Number(glob.donated) + Number(don);
    }
    if (glob.backers === undefined) {
      glob.backers = Number(1);
    } else {
      glob.backers = Number(glob.backers) + 1;
    }
    //console.log(don, glob.donated, glob.backers, glob);
    // setGlob({ ...glob, donated: don });
    let dab = { donated: Number(glob.donated), backers: Number(glob.backers) };
    axios
      .patch(`https://first-server24.herokuapp.com/funds/${g.id}`, dab)
      .then((res) => {
        // console.log(res);
      });
  };
  return (
    <div>
      <CardWrap>
        <img
          src={
            g.mainPic === undefined
              ? "https://www.catapooolt.com/assets/images/c-logo.png"
              : g.mainPic
          }
          alt="Logo"
          onClick={() => setOpen(true)}
        />

        <h4>{g.title}</h4>
        <p>{g.punchline}</p>
        <Bot>
          <div>
            <h5>{g.goal}</h5>
            <p>Goal</p>
          </div>
          <div>
            <h5>{g.donated}</h5>
            <p>Funded</p>
          </div>
          <div>
            <h5>{g.end}</h5>
            <p>Last Day</p>
          </div>
        </Bot>
      </CardWrap>
      <Modal
        isOpen={open}
        onRequestClose={() => {
          setOpen(false);
        }}
      >
        <InMod>
          <h1>{g.title}</h1>
          <Cont>
            <img
              src={
                g.mainPic === undefined
                  ? "https://www.catapooolt.com/assets/images/c-logo.png"
                  : g.mainPic
              }
              alt="logo"
            />
            <div>
              <p>
                {g.donated
                  ? (Number(g.donated) / Number(g.goal)).toFixed(2) * 100
                  : 0}
                % Completed
              </p>
              <h4>INR {g.goal}</h4>
              <div>
                <p>Funded</p>
                <p>{g.donated ? g.donated : "No donations Yet"}</p>
              </div>
              <div>
                <p>Backers</p>
                <p>{g.backers ? g.backers : "No Backers Yet"}</p>
              </div>
              <input
                type="Number"
                placeholder="Contribute to the needy"
                value={don}
                name="donated"
                onChange={(e) => {
                  setDon(e.target.value);
                }}
              />
              <button onClick={handleDonate}>DONATE</button>
            </div>
          </Cont>
        </InMod>
      </Modal>
    </div>
  );
}
