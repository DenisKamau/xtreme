import React from "react";
import Slider from "react-slick";
import "../../../Styles/Home/Testimonials/Testimonials.css";
import TestimonialCard from "./TestimonialCard";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import forwardArrow from "../../../assets/forwardarrow.png";
import backArrow from "../../../assets/backarrow.png";
import avatar1 from "../../../assets/Avatar.png";
import avatar2 from "../../../assets/Avatar2.png";
import avatar3 from "../../../assets/Avatar3.png";
import avatar4 from "../../../assets/Avatar4.png";

function NextArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{
        ...style,
        display: "block",
        backgroundImage: `url(${forwardArrow})`,
        backgroundPosition: "center",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        top: "-80px",
        right: "155px",
      }}
      onClick={onClick}
    />
  );
}

function PrevArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{
        ...style,
        display: "block",
        backgroundImage: `url(${backArrow})`,
        backgroundPosition: "center",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        right: "205px",
        top: "-80px",
        left: "initial",
      }}
      onClick={onClick}
    />
  );
}

const Testimonials = () => {
  const settings = {
    dots: true,
    infinite: false,
    speed: 500,
    lazyLoad: true,
    slidesToShow: 3,
    slidesToScroll: 3,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
  };

  return (
    <section className="section">
      <div className="container testimonials">
        <h3>What They say about us</h3>
        <div className="line"></div>
      </div>
      <div className="container">
        <Slider {...settings}>
          <div>
            <TestimonialCard
              avatar={avatar1}
              testimony="Lost 20kg in 3 months thanks to the training program and diet plan I was put on by an xtreme trainer. I have never felt better. "
              name="Wade Warren"
              location="Austin"
            />
          </div>
          <div>
            <TestimonialCard
              avatar={avatar2}
              testimony="Lost 20kg in 3 months thanks to the training program and diet plan I was put on by an xtreme trainer. I have never felt better. "
              name="Cooper, Kristin"
              location="Naperville"
            />
          </div>
          <div>
            <TestimonialCard
              avatar={avatar3}
              testimony="Lost 20kg in 3 months thanks to the training program and diet plan I was put on by an xtreme trainer. I have never felt better. "
              name="Nguyen, Shane"
              location="Pembroke Pines"
            />
          </div>
          <div>
            <TestimonialCard
              avatar={avatar4}
              testimony="Lost 20kg in 3 months thanks to the training program and diet plan I was put on by an xtreme trainer. I have never felt better. "
              name="Bessie Cooper"
              location="Pembroke Pines"
            />
          </div>
        </Slider>
      </div>
    </section>
  );
};

export default Testimonials;
