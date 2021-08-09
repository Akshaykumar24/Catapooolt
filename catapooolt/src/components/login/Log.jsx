import axios from "axios";
import { useEffect, useState } from "react";
import { Inner } from "../Create";
//import {axios} from "axios"
export function Log() {
  const [getdata, setgetdata] = useState([]);
  const [valid, setvalid] = useState(false);
  const [email, setemail] = useState("");
  const [password, setpassword] = useState("");
  const [user, setUser] = useState(null);
  const style1 = {
    marginTop: "30px",
  };

  const handleOnLogin = (e) => {
    e.preventDefault();
    // console.log(getdata);
    //   getdata.map((el) => {
    for (let i = 0; i < getdata.length; i++) {
      //console.log(getdata[i].org + "all the time");
      if (getdata[i].email === email && getdata[i].password === password) {
        alert("Logged in");
        setvalid(true);
        setUser(getdata[i].org);

        // valid ? alert("logged in") : alert("Password or email is wrong");
        chan(getdata[i].org);
        return;
      }
    }

    // });

    valid ? alert("logged in") : alert("Password or email is wrong");
    //console.log(user + "supposed to be changed");
    // valid ? chan() : console.log("Name didnt change");
  };

  function getdatafun() {
    axios.get("http://localhost:3001/project").then((res) => {
      //console.log(res);
      setgetdata(res.data);
    });
  }
  useEffect(() => {
    getdatafun();
    axios.get("http://localhost:3001/profile").then((res) => {
      // console.log(res);
      setUser(res.data.name);
      if (user !== null) {
        setvalid(true);
      }
    });

    //console.log(getdata);
    // axios.delete("http://localhost:3001/project/2");
  }, [user]);

  const chan = (a) => {
    //console.log(a);
    let n = { name: a };
    axios.patch("http://localhost:3001/profile", n).then((res) => {
      //console.log(res.data);
    });
  };

  const logOut = () => {
    // console.log(valid);
    let x = window.confirm("You want to Log-Out");
    if (x) {
      let n = { name: null };
      axios.patch("http://localhost:3001/profile", n).then((res) => {
        // console.log(res.data);
      });
    }
  };

  return user !== null && valid ? (
    <div>
      <Inner>
        <button onClick={logOut}>Log Out</button>
      </Inner>
    </div>
  ) : (
    <form onSubmit={handleOnLogin}>
      <Inner>
        <input
          style={style1}
          type="text"
          onChange={(e) => setemail(e.target.value)}
          placeholder="email"
        />

        <input
          style={style1}
          type="password"
          onChange={(e) => setpassword(e.target.value)}
          placeholder="password"
        />

        <input style={style1} type="submit" value="Log-In" />
      </Inner>
    </form>
  );
}
