//font family
//font-family: "Helvetica Neue", Helvetica, Arial, sans-serif;
import axios from "axios";
import { useEffect, useState } from "react";
import CardExp from "./CardExp";
import styled from "styled-components";
import { Inner } from "./Create";

export const Divi = styled.div`
  font-family: "Helvetica Neue", Helvetica, Arial, sans-serif;
  display: flex;
  flex-wrap: wrap;
  max-width: 1000px;
  margin: auto;
`;

export default function Explore() {
  const [glob, setCatch] = useState([]);
  const [page, setPage] = useState(1);
  useEffect(() => {
    makeGet();
  }, [page]);

  const makeGet = () => {
    axios
      .get(`https://first-server24.herokuapp.com/funds?_limit=3&_page=${page}`)
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
      {/* <button onClick={makeGet}>Click</button> */}
      <Divi>
        {glob.map((g) => (
          <CardExp g={g} key={g.id} />
        ))}
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
