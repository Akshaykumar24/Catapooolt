import styled from "styled-components";
// import "./footer.module.css";
const Foo = styled.div`
  padding-top: 80px;
  p,
  a {
    margin: 4px;
  }
  p:hover {
    color: blue;
    cursor: pointer;
  }
  p,
  h3,
  a {
    color: white;
    text-align: left;
    padding-left: 10px;
  }

  img {
    height: 15px;
    width: 15px;
    margin-right: 10px;
  }
  a {
    /* border: 1px solid springgreen; */
    display: flex;
    text-decoration: none;
  }

  #div {
    height: 100%;
    width: 15%;
    /* border: 1px solid greenyellow; */
    margin: auto;
  }
  #style1 {
    padding-top: 80px;
    display: flex;
    height: 250px;
    /* border: 1px solid red; */
    background: black;
    /* // padding:"1% 4% 1% 4%" */
  }
  @media only screen and (max-width: 600px) {
    #style1 {
      height: 500px;
      display: grid;
      grid-template-columns: auto auto;
      /* grid-template-rows: auto auto; */
      /* border: 5px solid green; */
      grid-gap: 10px;
    }
    /* #div {
      border: 1px solid green;
    } */
  }
`;
export function Footercomp() {
  return (
    <>
      <Foo>
        <div id="style1">
          <div id="div">
            <h3>About</h3>
            <p>Catapooolt</p>
            <p>Partners</p>
            <p>Careers</p>
            <p>Meedia & Press</p>
            <p>Blog</p>
          </div>
          <div id="div">
            <h3>How It Works</h3>
            <p>Getting Started</p>
            <p>FAQs</p>
            <p>Why Crowdfunding</p>
            <p>Campaign Rules</p>
          </div>
          <div id="div">
            <h3>Our Flagship Initiatives</h3>
            <p> The Econamics Times Changemakers Season 1 & 2</p>
            <p>Nasscom Catapoolt Gamechangers</p>
            <p>Catapoolt Product Czars</p>
          </div>
          <div id="div">
            <h3>Reach Us at</h3>
            <a href="/">
              <span>
                <img
                  src="https://image.shutterstock.com/image-vector/02032021-facebook-icon-260nw-1908960121.jpg"
                  alt=""
                  srcSet=""
                />{" "}
              </span>
              Facebook
            </a>
            <a href="/">
              <span>
                <img
                  src="https://www.freepnglogos.com/uploads/instagram-logo-png-hd-31.png"
                  alt=""
                  srcSet=""
                />
              </span>
              Instagram
            </a>
            <a href="/">
              <span>
                <img
                  src="https://tse1.mm.bing.net/th?id=OIP.Ff1a2zx1DnGg5rppyqq-XwHaHa&pid=Api&rs=1&c=1&qlt=95&w=115&h=115"
                  alt=""
                  srcSet=""
                />
              </span>
              Linkedin
            </a>
          </div>
        </div>
      </Foo>
    </>
  );
}
