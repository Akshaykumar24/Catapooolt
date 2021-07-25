import axios from "axios";
import { useEffect, useState } from "react";
import { Inner } from "../Create";
export function Sign() {
  const [user, setuser] = useState({
    org: "",
    email: "",
    num: "",
    password: "",
  });

  const style2 = {
    marginTop: "30px",
  };
  const handleOnChange = (e) => {
    let data = {
      ...user,
      [e.target.name]: e.target.value,
    };
    setuser(data);
  };
  const handleOnSubmit = (e) => {
    e.preventDefault();
    console.log(user);
    axios
      .post("http://localhost:3001/project", user)
      .then((e) => {
        console.log(e);
        alert("Account Created Succesfully, Please Log-In to Continue");
      })
      .catch((e) => {
        console.log(e);
      });
  };
  // useEffect(()=>{

  // },[user])
  return (
    <>
      <form onSubmit={handleOnSubmit}>
        <Inner>
          <input
            style={style2}
            onChange={handleOnChange}
            type="text"
            placeholder="Organisation Name"
            name="org"
          />

          <input
            style={style2}
            onChange={handleOnChange}
            type="password"
            placeholder="passsword"
            name="password"
          />

          <input
            style={style2}
            onChange={handleOnChange}
            type="email"
            placeholder="email"
            name="email"
          />

          <input
            style={style2}
            onChange={handleOnChange}
            type="Number"
            placeholder="Phone Number"
            name="num"
          />
          <input style={style2} type="submit" value="Sign-Up" />
        </Inner>
      </form>
    </>
  );
}
