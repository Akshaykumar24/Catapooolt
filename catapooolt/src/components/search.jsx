import { useState } from "react";
import { Divi } from "./Explore";
import CardExp from "./CardExp";
import { Inner } from "./Create";
import axios from "axios";
export default function Search() {
  const [ser, setSer] = useState("");
  const [glob, setCatch] = useState([]);
  const [page, setPage] = useState(1);
  const makeGet = () => {
    axios
      .get(`http://localhost:3001/funds?q=${ser}&_limit=3&_page=${page}`)
      .then((res) => {
        // console.log(res);
        setCatch(res.data);
      });
    // console.log(glob);
  };

  const left = () => {
    if (page === 1) {
      return;
    }
    setPage(page - 1);
  };
  const right = () => {
    if (page > glob.length / 3) {
      return;
    }
    setPage(page + 1);
  };

  return (
    <div>
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          margin: "auto",
          width: "600px",
        }}
      >
        <Inner>
          <input
            type="text"
            name="search"
            value={ser}
            placeholder="Search"
            onChange={(e) => {
              setSer(e.target.value);
            }}
            style={{ width: "500px", margin: "auto" }}
          />
        </Inner>
        <Inner>
          <button onClick={makeGet}>Go</button>
        </Inner>
      </div>
      <Divi>
        {glob.length === 0 && ser !== "" ? (
          <div style={{ margin: "auto", width: "400px" }}>
            <p>Oh oo, No results matching for your Query</p>
            <img
              src="https://media2.giphy.com/media/nqThdMSYuTwUGTHmi0/200w.webp?cid=ecf05e47a1tisd5iyp12xpwy1dt9gfe1tvjdeae0v3jaa655&rid=200w.webp&ct=g"
              alt=""
              style={{ width: "100%" }}
            />
          </div>
        ) : (
          glob.map((g) => <CardExp g={g} key={g.id} />)
        )}
      </Divi>
      <Inner>
        <div style={{ display: "flex", width: "250px", margin: "auto" }}>
          <button disabled={page === 1} onClick={left}>
            Previous
          </button>
          <h3>{page}</h3>
          <button onClick={right}>Next</button>
        </div>
      </Inner>
    </div>
  );
}
