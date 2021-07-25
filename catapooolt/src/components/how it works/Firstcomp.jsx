import "./first.css";
import { Threediv } from "./threediv";
import { Navmid } from "./navmid";
export function First() {
  const h = "Create";
  return (
    <>
      <div id="main">
        <img
          id="left"
          src="https://s3.ap-south-1.amazonaws.com/catapooolt/catapoooltdist/assets/img/how-it-works/tell-us-your%20story.jpg"
          alt=""
          srcSet=""
        />
        <div id="right">
          <h5>Tells us your story</h5>
          <p>Craete your crowdfunding campaign with US</p>
          <p>&#10004; Start with a brief description.</p>
          <p>&#10004; First buzz-makers in the market</p>
          <p>&#10004; Usually are friends and family</p>
          <Threediv />
        </div>
      </div>
      <Navmid h={h} />
      <div id="main">
        <div id="right">
          <h3>Target Audience</h3>
          <p>
            &#10004; It is important to set an audience and reach out to your
            first connects.
          </p>
          <p>&#10004; First connects are early contributors</p>
          <p>&#10004; First buzz-makers in the market</p>
          <p>&#10004; Usually are friends and family</p>
          <Threediv />
        </div>
        <div id="right">
          <h5>PR & Marketing Strategy</h5>
          <p>Craete your crowdfunding campaign with US</p>
          <p>&#10004; Start with a brief description.</p>
          <p>&#10004; First buzz-makers in the market</p>
          <p>&#10004; Usually are friends and family</p>
          <Threediv />
        </div>
      </div>
      <div id="main">
        <div id="right">
          <h5>Tells us your story</h5>
          <p>Craete your crowdfunding campaign with US</p>
          <p>&#10004; Start with a brief description.</p>
          <p>&#10004; First buzz-makers in the market</p>
          <p>&#10004; Usually are friends and family</p>
          <Threediv />
        </div>
        <img
          id="left"
          src="https://s3.ap-south-1.amazonaws.com/catapooolt/catapoooltdist/assets/img/how-it-works/connect-with-right%20set-of-people.jpg"
          alt=""
          srcSet=""
        />
      </div>
      <div id="main">
        <img
          id="left"
          src="https://s3.ap-south-1.amazonaws.com/catapooolt/catapoooltdist/assets/img/how-it-works/Crowdfunding.jpg"
          alt=""
          srcSet=""
        />
        <div id="right">
          <h5>Tells us your story</h5>
          <p>Craete your crowdfunding campaign with US</p>
          <p>&#10004; Start with a brief description.</p>
          <p>&#10004; First buzz-makers in the market</p>
          <p>&#10004; Usually are friends and family</p>
          <Threediv />
        </div>
      </div>
      <div id="main">
        <div id="right">
          <h5>Tells us your story</h5>
          <p>Craete your crowdfunding campaign with US</p>
          <p>&#10004; Start with a brief description.</p>
          <p>&#10004; First buzz-makers in the market</p>
          <p>&#10004; Usually are friends and family</p>
          <Threediv />
        </div>
        <img
          id="left"
          src="https://s3.ap-south-1.amazonaws.com/catapooolt/catapoooltdist/assets/img/how-it-works/Questions.jpg"
          alt=""
          srcSet=""
        />
      </div>
    </>
  );
}
