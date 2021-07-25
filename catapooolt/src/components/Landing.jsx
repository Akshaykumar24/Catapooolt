import styled from "styled-components";
import { Link } from "react-router-dom";
// import { Footer } from "./footer/Footer";
const Cate = styled.div`
  width: 70%;
  margin: 50px auto;
  display: flex;
  flex-wrap: wrap;

  div {
    width: 16.3%;
    padding: 10px 0;
    color: white;
    font-size: 20px;
    font-weight: 500;
    background: rgba(0, 0, 0, 0.6);
    /* border: 1px solid black; */
  }

  div:nth-child(1) {
    width: 33%;
    color: black;
    background: transparent;
  }
  div:nth-child(2) {
    background-image: url("https://s3.ap-south-1.amazonaws.com/catapooolt/catapoooltdist/assets/img/music.jpg");
  }
  div:nth-child(3) {
    background-image: url("https://s3.ap-south-1.amazonaws.com/catapooolt/catapoooltdist/assets/img/lit.jpg");
  }
  div:nth-child(4) {
    background-image: url("https://s3.ap-south-1.amazonaws.com/catapooolt/catapoooltdist/assets/img/gmae.jpg");
  }
  div:nth-child(5) {
    background-image: url("https://s3.ap-south-1.amazonaws.com/catapooolt/catapoooltdist/assets/img/fashion.jpg");
  }
  div:nth-child(6) {
    background-image: url("https://s3.ap-south-1.amazonaws.com/catapooolt/catapoooltdist/assets/img/film.jpg");
  }
  div:nth-child(7) {
    background-image: url("https://s3.ap-south-1.amazonaws.com/catapooolt/catapoooltdist/assets/img/stage.jpg");
  }
  div:nth-child(8) {
    background-image: url("https://s3.ap-south-1.amazonaws.com/catapooolt/catapoooltdist/assets/img/event.jpg");
  }
  div:nth-child(9) {
    background-image: url("https://s3.ap-south-1.amazonaws.com/catapooolt/catapoooltdist/assets/img/food.jpg");
  }
  div:nth-child(10) {
    background-image: url("https://s3.ap-south-1.amazonaws.com/catapooolt/catapoooltdist/assets/img/travel.jpg");
  }
  div:nth-child(11) {
    background-image: url("https://s3.ap-south-1.amazonaws.com/catapooolt/catapoooltdist/assets/img/tech.jpg");
  }
  div:nth-child(12) {
    background-image: url("https://s3.ap-south-1.amazonaws.com/catapooolt/catapoooltdist/assets/img/envoirment.jpg");
  }
  div:nth-child(13) {
    background-image: url("https://s3.ap-south-1.amazonaws.com/catapooolt/catapoooltdist/assets/img/sport.jpg");
  }
  div:nth-child(14) {
    background-image: url("https://s3.ap-south-1.amazonaws.com/catapooolt/catapoooltdist/assets/img/art.jpg");
  }
  div:nth-child(15) {
    background-image: url("https://s3.ap-south-1.amazonaws.com/catapooolt/catapoooltdist/assets/img/photography.jpg");
  }
  div:nth-child(16) {
    background-image: url("https://s3.ap-south-1.amazonaws.com/catapooolt/catapoooltdist/assets/img/social.jpg");
  }
  div:nth-child(17) {
    background-image: url("https://s3.ap-south-1.amazonaws.com/catapooolt/catapoooltdist/assets/img/startups.jpg");
  }
  div:hover {
    background: rgba(17, 109, 151, 0.5);
  }
`;

export default function Landing() {
  return (
    <div>
      <Cate>
        <div>
          <h2>Start a Fundraiser in the following CATEGORY</h2>
        </div>
        <div>
          <Link to="/create">
            <img
              src="https://s3.ap-south-1.amazonaws.com/catapooolt/catapoooltdist/assets/img/music-ic.png"
              alt="LOGO"
            />
          </Link>
          <p>MUSIC</p>
        </div>
        <div>
          <Link to="/create">
            <img
              src="https://s3.ap-south-1.amazonaws.com/catapooolt/catapoooltdist/assets/img/lit_ic.png"
              alt="LOGO"
            />
          </Link>
          <p>LITERATURE</p>
        </div>
        <div>
          <Link to="/create">
            <img
              src="https://s3.ap-south-1.amazonaws.com/catapooolt/catapoooltdist/assets/img/game_ic.png"
              alt="LOGO"
            />
          </Link>
          <p>GAMING</p>
        </div>
        <div>
          <Link to="/create">
            <img
              src="https://s3.ap-south-1.amazonaws.com/catapooolt/catapoooltdist/assets/img/fashion_ic.png"
              alt="LOGO"
            />
          </Link>
          <p>FASHION</p>
        </div>
        <div>
          <Link to="/create">
            <img
              src="https://s3.ap-south-1.amazonaws.com/catapooolt/catapoooltdist/assets/img/film_ic.png"
              alt="LOGO"
            />
          </Link>
          <p>FILM</p>
        </div>
        <div>
          <Link to="/create">
            <img
              src="https://s3.ap-south-1.amazonaws.com/catapooolt/catapoooltdist/assets/img/stage_ic.png"
              alt="LOGO"
            />
          </Link>
          <p>STAGE</p>
        </div>
        <div>
          <Link to="/create">
            <img
              src="https://s3.ap-south-1.amazonaws.com/catapooolt/catapoooltdist/assets/img/event_ic.png"
              alt="LOGO"
            />
          </Link>
          <p>EVENTS</p>
        </div>
        <div>
          <Link to="/create">
            <img
              src="https://s3.ap-south-1.amazonaws.com/catapooolt/catapoooltdist/assets/img/food_ic.png"
              alt="LOGO"
            />
          </Link>
          <p>FOOD</p>
        </div>
        <div>
          <Link to="/create">
            <img
              src="https://s3.ap-south-1.amazonaws.com/catapooolt/catapoooltdist/assets/img/travel_ic.png"
              alt="LOGO"
            />
          </Link>
          <p>TRAVEL</p>
        </div>
        <div>
          <Link to="/create">
            <img
              src="https://s3.ap-south-1.amazonaws.com/catapooolt/catapoooltdist/assets/img/tech_ic.png"
              alt="LOGO"
            />
          </Link>
          <p>TECHNOLOGY</p>
        </div>
        <div>
          <Link to="/create">
            <img
              src="https://s3.ap-south-1.amazonaws.com/catapooolt/catapoooltdist/assets/img/envoirment_ic.png"
              alt="LOGO"
            />
          </Link>
          <p>ENVIRONMENT</p>
        </div>
        <div>
          <Link to="/create">
            <img
              src="https://s3.ap-south-1.amazonaws.com/catapooolt/catapoooltdist/assets/img/sport_ic.png"
              alt="LOGO"
            />
          </Link>
          <p>SPORTS</p>
        </div>
        <div>
          <Link to="/create">
            <img
              src="https://s3.ap-south-1.amazonaws.com/catapooolt/catapoooltdist/assets/img/art_ic.png"
              alt="LOGO"
            />
          </Link>
          <p>ART & CRAFT</p>
        </div>
        <div>
          <Link to="/create">
            <img
              src="https://s3.ap-south-1.amazonaws.com/catapooolt/catapoooltdist/assets/img/photography_ic.png"
              alt="LOGO"
            />
          </Link>
          <p>PHOTOGRAPHY</p>
        </div>
        <div>
          <Link to="/create">
            <img
              src="https://s3.ap-south-1.amazonaws.com/catapooolt/catapoooltdist/assets/img/social_ic.png"
              alt="LOGO"
            />
          </Link>
          <p>SOCIAL</p>
        </div>
        <div>
          <Link to="/create">
            <img
              src="https://s3.ap-south-1.amazonaws.com/catapooolt/catapoooltdist/assets/img/startups_ic.png"
              alt="LOGO"
            />
          </Link>
          <p>START-UPs</p>
        </div>
      </Cate>
      {/* <Footer /> */}
    </div>
  );
}
