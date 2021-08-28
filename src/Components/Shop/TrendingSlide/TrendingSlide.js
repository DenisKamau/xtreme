import React from "react";
import Slider from "react-slick";
import "../../../Styles/Shop/TrendingSlide/TrendingSlide.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Product from "../Product/Product";
import IMAGES from "../../../assets/Shop/Clothing/index";

const TrendingSlide = ({ Category }) => {
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
            <h5>{Category === "Women" ? "Women" : Category === "Men" ? "Men" : "Supplements"}</h5>
            <h3>{Category === "Supplements" ? "Best Selling" : "Trending"}</h3>
          </div>
          <div className="sliderTopRight">
            <h6>View all</h6>
            <p>🠒</p>
          </div>
        </div>
        <div style={{ overflow: "hidden" }} className="container">
          {Category === "Women" ? (
            <Slider {...settings}>
              <div>
                <Product img={IMAGES.img1} name="Nike Sports Bra" />
              </div>
              <div>
                <Product img={IMAGES.img2} name="adidas joggers " />
              </div>
              <div>
                <Product img={IMAGES.img3} name="black Sports Bra" />
              </div>
              <div>
                <Product img={IMAGES.img4} name="black hoodie" />
              </div>
              <div>
                <Product img={IMAGES.img5} name="Nike Sports Bra" />
              </div>
              <div>
                <Product img={IMAGES.img6} name="adidas joggers" />
              </div>
            </Slider>
          ) : Category === "Men" ? (
            <Slider {...settings}>
              <div>
                <Product img={IMAGES.img7} name="Men black joggers" />
              </div>
              <div>
                <Product img={IMAGES.img8} name="adidas joggers " />
              </div>
              <div>
                <Product img={IMAGES.img9} name="black Runner shorts" />
              </div>
              <div>
                <Product img={IMAGES.img10} name="black hoodie" />
              </div>
              <div>
                <Product img={IMAGES.img11} name="Men black joggers" />
              </div>
              <div>
                <Product img={IMAGES.img12} name="adidas joggers" />
              </div>
            </Slider>
          ) : (
            <Slider {...settings}>
              <div>
                <Product img={IMAGES.img13} name="usn creatine" />
              </div>
              <div>
                <Product img={IMAGES.img14} name="usn all9 amino " />
              </div>
              <div>
                <Product img={IMAGES.img15} name="usn whey protein" />
              </div>
              <div>
                <Product img={IMAGES.img16} name="Usn apre-workout" />
              </div>
              <div>
                <Product img={IMAGES.img17} name="usn creatine" />
              </div>
            </Slider>
          )}
        </div>
      </div>
    </section>
  );
};

export default TrendingSlide;

//  <Slider {...settings}>
// <div>
//   <Product />
// </div>
// <div>
//   <Product />
// </div>
// <div>
//   <Product />
// </div>
// <div>
//   <Product />
// </div>
// <div>
//   <Product />
// </div>
// <div>
//   <Product />
// </div>
// <div>
//   <Product />
// </div>
// </Slider>
