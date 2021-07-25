import { useState, useEffect } from "react";
import { Inner } from "../Create";
// import axios from "axios";
import { Log } from "./Log";
import "./logsin.css";
import { Sign } from "./Sign";

export function LogSign() {
  const [togle, settogle] = useState(false);
  //   const [meName, setMeName] = useState(() => {
  //     axios.get("http://localhost:3001/profile").then((res) => {
  //       return res.data.name;
  //     });
  //   });
  //   useEffect(() => {
  //     axios.get("http://localhost:3001/profile").then((res) => {
  //       return res.data.name;
  //     });
  //   }, []);
  return (
    <>
      <div id="logsinmain">
        <div
          style={{
            display: "flex",
            width: "90%",
            margin: "25px auto",
            justifyContent: "space-evenly",
          }}
        >
          <div
            id="logsinlog"
            onClick={() => {
              settogle(false);
            }}
          >
            {togle ? (
              <p>Log-In</p>
            ) : (
              <h3 style={{ margin: "15px auto" }}>Log-In</h3>
            )}
          </div>
          <div
            id="logsinsignup"
            onClick={() => {
              settogle(true);
            }}
          >
            {!togle ? (
              <p>Register</p>
            ) : (
              <h3 style={{ margin: "15px auto" }}>Register</h3>
            )}
          </div>
        </div>
        {togle ? <Sign /> : <Log />}
      </div>
    </>
  );
}
