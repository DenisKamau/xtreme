import React from "react";
import "../../../Styles/About/About.css";
import AboutBottom from "./AboutBottom";
import AboutMiddle from "./AboutMiddle";
import AboutTop from "./AboutTop";

const About = () => {
  return (
    <div className="section aboutSection">
      <AboutTop />
      <AboutMiddle />
      <AboutBottom />
    </div>
  );
};

export default About;
