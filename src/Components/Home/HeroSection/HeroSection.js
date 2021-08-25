import React from "react";
import "../../../Styles/HeroSection/HeroSection.css";
import image from "../../../assets/heroImage.jpg";

const HeroSection = () => {
  return (
    <div className="container heroSection">
      <div className="heroLeft">
        <div className="orangeLine"></div>
        <div className="heroLeftContent">
          <h1>
            Breath, <br />
            Train, <br />
            Achieve
          </h1>
          <p>
            Begin your health and fitness journey by taking <br /> one step in the right direction. The hard part isn’t getting your body in shape.
            The hard part is <br /> getting your mind in shape.
          </p>
          <button>Begin your journey</button>
        </div>
      </div>
      <div className="heroRight">
        <img alt="heroImage" src={image} />
      </div>
    </div>
  );
};

export default HeroSection;
