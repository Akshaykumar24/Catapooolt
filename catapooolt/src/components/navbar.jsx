import "./navbar.module.css";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";
export default function Nav() {
  // const [ser, setSer] = useState();
  const [me, setMe] = useState();
  useEffect(() => {
    axios.get("https://first-server24.herokuapp.com/profile").then((res) => {
      setMe(res.data.name);
    });
  }, []);
  return (
    <nav>
      <div>
        <Link to="./">
          <img
            src="https://www.catapooolt.com/assets/images/c-logo.png"
            alt="Logo"
          />
        </Link>
      </div>
      <ul>
        <li>
          {/* <input
            type="text"
            name="search"
            value={ser}
            placeholder="Search"
            onChange={(e) => {
              setSer(e.target.value);
            }}
          /> */}
          <Link to="/search">
            <button>Search</button>
          </Link>
        </li>
        <li>
          <Link to="/how">
            <button>How it works</button>
          </Link>
        </li>
        <li>
          <Link to="/create">
            <button>Start a campaign</button>
          </Link>
        </li>
        <li>
          <Link to="/explore">
            <button>Explore</button>
          </Link>
        </li>
        <li>
          <Link to="/login">
            <button>{me === null ? "Login" : me}</button>
          </Link>
        </li>
        <li>
          <select>
            <option value="INR">INR</option>
          </select>
        </li>
      </ul>
    </nav>
  );
}
