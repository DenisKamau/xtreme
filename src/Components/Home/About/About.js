import React from "react";
import "../../../Styles/About/About.css";
import AboutMiddle from "./AboutMiddle";
import AboutTop from "./AboutTop";

const About = () => {
  return (
    <div className="section aboutSection">
      <AboutTop />
      <AboutMiddle />
    </div>
  );
};

export default About;
