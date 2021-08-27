import React from "react";
import Slider from "react-slick";
import "../../../Styles/Shop/TrendingSlide/TrendingSlide.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Product from "../Product/Product";

const TrendingSlide = () => {
  const settings = {
    infinite: false,
    speed: 500,
    lazyLoad: true,
    slidesToShow: 4.5,
    slidesToScroll: 3,
  };

  return (
    <section className="section">
      <div className="container TrendingSlide">
        <div className="sliderTop">
          <div className="sliderTopLeft">
            <h5>Women</h5>
            <h3>Trending</h3>
          </div>
          <div className="sliderTopRight">
            <h6>View all</h6>
            <p>🠒</p>
          </div>
        </div>
        <div style={{ overflow: "hidden" }} className="container">
          <Slider {...settings}>
            <div>
              <Product />
            </div>
            <div>
              <Product />
            </div>
            <div>
              <Product />
            </div>
            <div>
              <Product />
            </div>
            <div>
              <Product />
            </div>
            <div>
              <Product />
            </div>
            <div>
              <Product />
            </div>
          </Slider>
        </div>
      </div>
    </section>
  );
};

export default TrendingSlide;
