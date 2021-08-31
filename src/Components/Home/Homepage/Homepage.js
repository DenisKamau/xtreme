import React from "react";
import About from "../About/About";
import Contact from "../Contact/Contact";
import Footer from "../Footer/Footer";
import Header from "../Header/Header";
import HeroSection from "../HeroSection/HeroSection";
import Price from "../PriceSection/Price";
import ProgramSection from "../ProgramsSection/ProgramSection";
import Team from "../TeamSection/Team";
import Testimonials from "../Testimonials/Testimonials";

const Homepage = () => {
  return (
    <div className="homepage">
      <Header />
      <HeroSection />
      <ProgramSection />
      <About />
      <Team />
      <Price />
      <Testimonials />
      <Contact />
    </div>
  );
};

export default Homepage;
