import React from 'react'
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import './carousel.css'
export const Caruus = () => {

    const settings = {
        dots: true,
        infinite: true,
        speed: 1000,
        slidesToShow: 1,
        autoplaySpeed: 2000,
        autoplay: true,
        slidesToScroll: 1,
        className:"center",

      };
    return (
        <div>
            <div>
        {/* <h2> Single Item</h2> */}
        <Slider {...settings}>
          <div>
            
            <img src="https://s3.ap-south-1.amazonaws.com/catapooolt/static/catapooolt_banner1.jpg" alt="" srcSet="" />
          </div>
          <div>
            <img src="https://s3.ap-south-1.amazonaws.com/catapooolt/static/websitebanner.jpg" alt="" srcSet="" />
          </div>
          <div>
            <img src="https://s3.ap-south-1.amazonaws.com/catapooolt/static/catapooolt_holosuit_banner.jpg" alt="" srcSet="" />
          </div>
          <div>
            <img src="https://catapooolt.s3.ap-south-1.amazonaws.com/static/super-solver-banner.png" alt="" srcSet="" />
          </div>
        </Slider>
      </div>
        </div>
    )
}

