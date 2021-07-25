import { useState } from "react";

export function Threediv() {
  const [show, setshow] = useState(1);
  const style1 = {
    display: "grid",
    background: "rgb(0,0,255,0.1)",
    // border:"1px solid black",
  };
  const style2 = {
    display: "flex",
    gap: "45%",
    paddingLeft: "15px",
    borderBottom: "1px solid rgb(212, 212, 212)",
  };
  return (
    <div style={style1}>
      {/* <div style={style2}><p>Why is it important? </p><p>&#10009;</p></div>
        <div style={style2}></div>
        <div style={style2}><p>Why is it important?</p><p> &#10009;</p></div>
        <div style={style2}><p>Why is it important? </p> <p>&#10009;</p></div> */}

      <div
        style={style2}
        onClick={() => {
          setshow(show + 1);
        }}
      >
        <p>What should the brief contain? </p>
        <p>&#10009;</p>
      </div>
      {show % 2 === 0 ? (
        <div style={{ background: "white", paddingLeft: "15px" }}>
          What, why and how you started your idea/initiative in order to arose
          interest in your contributors.
        </div>
      ) : null}
      <div style={style2}>
        <p>What should the brief contain? </p>
        <p>&#10009;</p>
      </div>
      <div style={style2}>
        <p>What should the brief contain? </p>
        <p>&#10009;</p>
      </div>
    </div>
  );
}
