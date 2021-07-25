//Bg Image URl
//https://www.catapooolt.com/assets/images/campaign_pic/cp_bg.jpg
import styled from "styled-components";
import axios from "axios";
import Modal from "react-modal";
import { useState } from "react";
import ImgUpload from "./Upload";

Modal.setAppElement("#root");

const Wrap = styled.div`
  div {
    width: 400px;
    margin: auto;
  }
  .makeModal > div {
    left: 100px;
    right: 100px;
    display: flex;
  }
`;
export const Inner = styled.div`
  display: flex;
  flex-direction: column;
  padding: 10px;
  margin: 15px;
  text-align: center;

  input,
  select {
    margin: 10px;
    height: 30px;
    border: 1px solid rgb(212, 222, 228);
    border-radius: 6px;
  }
  /* input:nth-child(2) {
    height: 80px;
  } */
  button,
  input[type="submit"] {
    width: auto;
    padding: 0 15px;
    height: 40px;
    margin: 10px auto;
    color: white;
    font-size: 16px;
    border-radius: 6px;
    border: 1px solid #000;
    background: linear-gradient(141deg, #2792b8 0%, #2c3d4f 51%, #12678a 75%);
    cursor: pointer;
  }
  button:hover {
    transition: width 0.3s;
    background: #1585ae;
    border: 1px solid #000;
    box-shadow: inset 0 0 58px #0d303d;
  }
  button:disabled {
    background: grey;
  }
  h1 {
    padding: 0;
    margin: 0;
  }
`;

const Revcard = styled.div`
  width: 150px;
  height: 350px;
  font-weight: 300;
  border: 1px solid rgb(216, 230, 239);
  margin: 25px 0;
  padding: 20px;
  display: flex;
  font-family: "Lato", sans-serif;
  flex-direction: column;
  justify-content: space-evenly;
  img {
    width: 30%;
    margin: auto;
  }
`;
Modal.defaultStyles.overlay.backgroundColor = "#f0eeee";
Modal.defaultStyles.overlay.opacity = "1";
Modal.defaultStyles.content.width = "500px";
Modal.defaultStyles.content.margin = "auto";
Modal.defaultStyles.content.opacity = "1";

export default function Create() {
  const [global, setGlobal] = useState({});
  const [btn, setBtn] = useState(false);
  const [btn2, setBtn2] = useState(false);
  const [btn3, setBtn3] = useState(false);
  const [duration, setDuration] = useState(false);
  const [reward, setReward] = useState(false);
  const [friend, setFriend] = useState(false);
  const [bank, setBank] = useState(false);
  //const [imag, setImag] = useState("");

  const [file, setFile] = useState("");
  const [url, setUrl] = useState();
  const [thankFile, setThankFile] = useState("");
  const [thank, setThank] = useState();
  const [docFile, setDocFile] = useState("");
  const [doc, setDoc] = useState();

  const handleImageChange = (e) => {
    setFile(e.target.files[0]);
  };
  const thankImageChange = (e) => {
    setThankFile(e.target.files[0]);
  };
  const docImageChange = (e) => {
    setDocFile(e.target.files[0]);
  };

  const handleUpload = (url) => {
    const reader = new FileReader();
    reader.onload = () => {
      if (reader.readyState === 2) {
        setUrl(reader.result);
      }
    };
    reader.readAsDataURL(file);
    console.log(url, reader.result, reader.readyState);
    //setImag(url);
  };
  const thankUpload = (thank) => {
    const reader = new FileReader();
    reader.onload = () => {
      if (reader.readyState === 2) {
        setThank(reader.result);
      }
    };
    reader.readAsDataURL(thankFile);
    console.log(thank);
    //setImag(url);
  };
  const docUpload = (doc) => {
    const reader = new FileReader();
    reader.onload = () => {
      if (reader.readyState === 2) {
        setDoc(reader.result);
      }
    };
    reader.readAsDataURL(docFile);
    console.log(doc);
    //setImag(url);
    //setGlobal({ ...global, docIMG: doc });
  };

  const changeAll = (e) => {
    let { name, value } = e.target;

    setGlobal({ ...global, [name]: value });
    //console.log(global);
  };

  const handlePublish = () => {
    //console.log(url, thank, doc);
    setGlobal({
      ...global,
      mainPic: url,
      thankYouIMG: thank,
      documentIMG: doc,
      donated: 0,
    });
    console.log(global);

    axios.post("http://localhost:3001/funds", global).then((res) => {
      console.log(res);
    });
  };
  return (
    <Wrap>
      <Inner>
        <button
          onClick={() => {
            setBtn(true);
          }}
        >
          Campaign Title
        </button>
        {global.title ? `<h2>${global.title}</h2>` : null}
        <button
          onClick={() => {
            setBtn2(true);
          }}
        >
          Add Socials
        </button>

        <div>
          <ImgUpload
            wid={"300px"}
            handleUpload={handleUpload}
            handleImageChange={handleImageChange}
            url={url}
          />
        </div>

        <button
          onClick={() => {
            setBtn3(true);
          }}
        >
          INR Goal
        </button>
        {global.goal ? `<h3>INR ${global.goal}</h3>` : null}
        <button
          onClick={() => {
            setDuration(true);
          }}
        >
          Duration
        </button>
        {global.start ? `<h4>Starts on ${global.start}</h4>` : null}
        {global.end ? `<h4>Ends on ${global.end}</h4>` : null}
        <button
          onClick={() => {
            setReward(true);
          }}
        >
          Reward
        </button>
        {global.rewardName ? (
          <Revcard>
            <img
              src="https://s3.ap-south-1.amazonaws.com/catapooolt/catapoooltdist/assets/img/campaign_pic/reward_ic.png"
              alt="reward logo"
            />
            <h3>INR {global.rewardAmount ? global.rewardAmount : 0}</h3>
            <h4>{global.rewardName ? global.rewardName : "REWARD NAME"}</h4>
            <p>
              {global.rewardDescription
                ? global.rewardDescription
                : "REWARD DESCRIPTION"}
            </p>
            <p>{global.rewardDate ? global.rewardDate : "DELIVERY DATE"}</p>
          </Revcard>
        ) : null}

        <input
          type="text"
          placeholder="Describe Your Story"
          name="story"
          value={global.story}
          onChange={changeAll}
        />

        <button
          onClick={() => {
            setFriend(true);
          }}
        >
          ADD FRIEND
        </button>

        {global.friendNamw ? (
          <Revcard>
            <img
              src="https://s3.ap-south-1.amazonaws.com/catapooolt/catapoooltdist/assets/img/campaign_pic/tm.jpg"
              alt="friend logo"
            />
            <h3>{global.friendNamw ? global.friendNamw : "FRIEND Name"}</h3>
            <h4>{global.friendAbout ? global.friendAbout : "FRIEND ABOUT"}</h4>
          </Revcard>
        ) : (
          ""
        )}
        <h4>SUPPORTING DOCUMENTS</h4>
        <ImgUpload
          wid={"500px"}
          handleUpload={docUpload}
          handleImageChange={docImageChange}
          url={doc}
        />

        <h4>THANKYOU IMAGES</h4>
        <p>
          In case you want to show a customized thank you image to the
          contributor for making a contribution to your campaign
        </p>
        <ImgUpload
          wid={"500px"}
          handleUpload={thankUpload}
          handleImageChange={thankImageChange}
          url={thank}
        />
        <button
          onClick={() => {
            setBank(true);
          }}
        >
          ADD BANK DETAILS
        </button>

        {/* <button onClick={() => console.log(url)}>PRi</button> */}
        <div>
          {/* <ImgUpload
          wid={"500px"}
          handleUpload={thankUpload}
          handleImageChange={thankImageChange}
          url={thank}
        /> */}
        </div>
        <div>
          {/* <ImgUpload
          wid={"500px"}
          handleUpload={docUpload}
          handleImageChange={docImageChange}
          url={doc}
        /> */}
        </div>

        <button onClick={handlePublish}>PUBLISH</button>
      </Inner>

      {/* ////////All Modals are here Below\\\\\\\\\\\\\\\\\\ */}
      <Modal
        isOpen={btn}
        onRequestClose={() => {
          setBtn(false);
        }}

        // Mod
        // overlayClassName="Overlay"
      >
        <Inner>
          <h1>Campaign Title</h1>
          <p>Name your campaign</p>
          <input
            type="text"
            placeholder="Campaign Title"
            value={global.title}
            name="title"
            onChange={changeAll}
          />
          <input
            type="text"
            placeholder="Campaign Punchline in 300 Characters"
            value={global.punchline}
            name="punchline"
            onChange={changeAll}
          />
          <input
            type="text"
            placeholder="Campaign Slug"
            value={global.web}
            name="web"
            onChange={changeAll}
          />
          <input
            type="text"
            placeholder="City"
            value={global.city}
            name="city"
            onChange={changeAll}
          />
          <select
            name="category"
            id="category"
            value={global.category}
            onChange={changeAll}
          >
            <option value="Select Category">Select Category</option>
            <option value="Music">Music</option>
            <option value="Literature">Literature</option>
            <option value="Gaming">Gaming</option>
            <option value="Fashion">Fashion</option>
            <option value="Film">Film</option>
            <option value="Stage">Stage</option>
            <option value="Events">Events</option>
            <option value="Food">Food</option>
            <option value="Travel">Travel</option>
            <option value="Technology">Technology</option>
            <option value="Environment">Environment</option>
            <option value="Sports">Sports</option>
            <option value="Art & CRaft">Art & CRaft</option>
            <option value="Photography">Photography</option>
            <option value="Social">Social</option>
            <option value="Start-Up">Start-Up</option>
          </select>
          <select
            name="fundFor"
            id="fundFor"
            value={global.fundFor}
            onChange={changeAll}
          >
            <option value="Select Fund For">Select Fund For</option>
            <option value="Individual">Individual</option>
            <option value="Start-Up">Start-Up</option>
            <option value="NGO">NGO</option>
          </select>
          <button
            onClick={() => {
              console.log(global);
            }}
          >
            Save
          </button>

          <button
            onClick={() => {
              setBtn(false);
            }}
          >
            Close
          </button>
        </Inner>
      </Modal>
      <Modal
        isOpen={btn2}
        onRequestClose={() => {
          setBtn2(false);
        }}
      >
        <Inner>
          <h1>SOCIAL MEDIA LINKS</h1>
          <p>WRITE SOCIAL MEDIA URL</p>
          <input
            type="text"
            name="FBURL"
            placeholder="Facebook URL"
            value={global.FBURL}
            onChange={changeAll}
          />
          <input
            type="text"
            name="twitURL"
            placeholder="Twitter URL"
            value={global.twitURL}
            onChange={changeAll}
          />
          <input
            type="text"
            name="LIURL"
            placeholder="LinkerdIn"
            value={global.LIURL}
            onChange={changeAll}
          />
          <input
            type="text"
            name="googleURL"
            placeholder="Google+ URL"
            value={global.googleURL}
            onChange={changeAll}
          />
          <button>Save</button>
          <button
            onClick={() => {
              setBtn2(false);
            }}
          >
            Close
          </button>
        </Inner>
      </Modal>
      <Modal
        isOpen={btn3}
        onRequestClose={() => {
          setBtn3(false);
        }}
      >
        <Inner>
          <h1>FUNDING GOAL</h1>
          <p>WHAT DO YOU HOPE TO RAISE?</p>
          <input
            type="Number"
            name="goal"
            placeholder="0.00"
            value={global.goal}
            onChange={changeAll}
          />
          <select name="currency">
            <option value="Select Currency">Select Currency</option>
            <option value="INR">INR</option>
          </select>
          <p>Goal Break</p>
          <input
            type="text"
            placeholder="Funding Need"
            name="goalBreakName"
            value={global.goalBreakName}
            onChange={changeAll}
          />
          <input
            type="Number"
            placeholder="Estimated Expenses"
            name="goalBreak"
            value={global.goalBreak}
            onChange={changeAll}
          />
          <button>Save</button>
          <button
            onClick={() => {
              setBtn3(false);
            }}
          >
            Close
          </button>
        </Inner>
      </Modal>
      <Modal
        isOpen={duration}
        onRequestClose={() => {
          setDuration(false);
        }}
      >
        <Inner>
          <h1>DURATION</h1>
          <p>Start and End Dates</p>
          <input
            type="date"
            placeholder="Start date"
            name="start"
            value={global.start}
            onChange={changeAll}
          />
          <input
            type="date"
            placeholder="End date"
            name="end"
            value={global.end}
            onChange={changeAll}
          />
          <button
            onClick={() => {
              setDuration(false);
            }}
          >
            Close
          </button>
        </Inner>
      </Modal>
      <Modal
        isOpen={reward}
        onRequestClose={() => {
          setReward(false);
        }}
      >
        <Inner>
          <h1>ADD REWARDS</h1>
          <p>REWARD DETAILS</p>
          <input type="file" />
          <input
            type="Number"
            placeholder="Amount"
            name="rewardAmount"
            value={global.rewardAmount}
            onChange={changeAll}
          />
          <input
            type="text"
            placeholder="Reward name"
            name="rewardName"
            value={global.rewardName}
            onChange={changeAll}
          />
          <input
            type="text"
            placeholder="Reward Description"
            name="rewardDescription"
            value={global.rewardDescription}
            onChange={changeAll}
          />
          <input
            type="date"
            name="rewardDate"
            value={global.rewardDate}
            onChange={changeAll}
          />
          <input
            type="Number"
            placeholder="Quantity"
            name="rewardQuantity"
            value={global.rewardQuantity}
            onChange={changeAll}
          />
          <button>Save</button>
          <button
            onClick={() => {
              setReward(false);
            }}
          >
            Close
          </button>
        </Inner>
      </Modal>
      <Modal
        isOpen={friend}
        onRequestClose={() => {
          setFriend(false);
        }}
      >
        <Inner>
          <h1>ADD FRIEND</h1>
          <p>TEAM DETAILS</p>
          <input
            type="text"
            placeholder="Name"
            name="friendNamw"
            value={global.friendNamw}
            onChange={changeAll}
          />
          <input
            type="text"
            placeholder="About"
            name="friendAbout"
            value={global.friendAbout}
            onChange={changeAll}
          />
          <input
            type="text"
            placeholder="Facebook URL"
            name="friendFBURL"
            value={global.friendFBURL}
            onChange={changeAll}
          />
          <input
            type="text"
            placeholder="LinkedIn URL"
            name="friendLIURL"
            value={global.friendLIURL}
            onChange={changeAll}
          />
          <button>SAVE</button>
          <button
            onClick={() => {
              setFriend(false);
            }}
          >
            Close
          </button>
        </Inner>
      </Modal>
      <Modal
        isOpen={bank}
        onRequestClose={() => {
          setBank(false);
        }}
      >
        <Inner>
          <h1>BANK DETAILS</h1>
          <p>FILL IN BANK DETAILS</p>
          <input
            type="text"
            placeholder="Name as per Bank"
            name="nameAsPerBank"
            value={global.nameAsPerBank}
            onChange={changeAll}
          />
          <input
            type="text"
            placeholder="Name of the Bank"
            name="bankName"
            value={global.bankName}
            onChange={changeAll}
          />
          <input
            type="text"
            placeholder="Bank account Number"
            name="bankAccNumber"
            value={global.bankAccNumber}
            onChange={changeAll}
          />
          <input
            type="text"
            placeholder="IFSC code"
            name="bankIFSC"
            value={global.bankIFSC}
            onChange={changeAll}
          />
          <button>SAVE</button>
          <button
            onClick={() => {
              setBank(false);
            }}
          >
            Close
          </button>
        </Inner>
      </Modal>
    </Wrap>
  );
}
