import React from "react";
import About from "../About/About";
import Header from "../Header/Header";
import HeroSection from "../HeroSection/HeroSection";
import ProgramSection from "../ProgramsSection/ProgramSection";
import Team from "../TeamSection/Team";

const Homepage = () => {
  return (
    <div className="homepage">
      <Header />
      <HeroSection />
      <ProgramSection />
      <About />
      <Team />
    </div>
  );
};

export default Homepage;
