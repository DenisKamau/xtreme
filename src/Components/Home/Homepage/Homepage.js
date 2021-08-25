import React from "react";
import About from "../About/About";
import Header from "../Header/Header";
import HeroSection from "../HeroSection/HeroSection";
import ProgramSection from "../ProgramsSection/ProgramSection";

const Homepage = () => {
  return (
    <div className="homepage">
      <Header />
      <HeroSection />
      <ProgramSection />
      <About />
    </div>
  );
};

export default Homepage;
