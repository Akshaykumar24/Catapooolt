export function Navmid({ h }) {
  return (
    <>
      <div style={{ height: "75px" }}>
        <div
          style={{
            width: "35%",
            margin: "auto",
            height: "100%",
            display: "flex",
            gap: "5%",
          }}
        >
          <h1>{h}</h1>
          <h1>Curate</h1>
          <h1>Connect</h1>
          <h3
            style={{
              color: "white",
              textAlign: "center",
              background: "blue",
              //   marginTop: "30px",
              padding: "5px 10px",
            }}
          >
            Get Started
          </h3>
        </div>
      </div>
    </>
  );
}
