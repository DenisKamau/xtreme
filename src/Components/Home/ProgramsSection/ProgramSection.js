import React from "react";
import "../../../Styles/ProgramSection/ProgramSection.css";
import bands from "../../../assets/bands.svg";
import yoga from "../../../assets/yoga.svg";
import strength from "../../../assets/strength.svg";
import fitness from "../../../assets/fitness.svg";

const ProgramSection = () => {
  return (
    <div className="container programs">
      <div className="programsLeft">
        <h1>
          Training <br />
          Programs <br /> We Offer You
        </h1>
        <img alt="bands" src={bands} />
      </div>
      <div className="programsRight">
        <div className="programCategory">
          <div className="categoryTop">
            <h3>Yoga</h3>
            <img alt="programImage" src={yoga} />
          </div>
          <p>Enjoy yoga classes for all levels, body weight exercises and more.</p>
        </div>
        <div className="programCategory">
          <div className="categoryTop">
            <h3>Strength</h3>
            <img alt="programImage" src={strength} />
          </div>
          <p>Regular strength training improves the health of your bones, muscles and connective tissue.</p>
        </div>
        <div className="programCategory">
          <div className="categoryTop">
            <h3>Fitness</h3>
            <img alt="programImage" src={fitness} />
          </div>
          <p>Your trainer will prepare and show you a workout regime designed to meet your fitness level and goals.</p>
        </div>
      </div>
    </div>
  );
};

export default ProgramSection;
