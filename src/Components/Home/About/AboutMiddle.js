import React from "react";
import "../../../Styles/Home/About/About.css";
import PillarCard from "./PillarCard";
import yoga from "../../../assets/yoga.svg";
import mobility from "../../../assets/mobility.svg";
import barbell from "../../../assets/barbell.svg";
import cardio from "../../../assets/cardio.svg";
import muscle from "../../../assets/muscle.svg";

const AboutMiddle = () => {
  return (
    <div className="aboutMiddle">
      <div className="firstRow">
        <div className="firstRowRight">
          <h5>
            Our trainers follow our 5 key <br /> pillars of fitness to get you in <br /> top condition
          </h5>
          <div className="leftCards">
            <PillarCard
              image={yoga}
              heading="Posture"
              paragraph="Correcting your posture will reduce stress and strain on your body. You’ll stand taller, move better and feel less fatigue."
            />
            <PillarCard
              image={muscle}
              heading="Core"
              paragraph="Your core is part of almost every move you make. Strong core mucles act as a stabilizer, making moving safer and more efficient."
            />
          </div>
        </div>
        <div className="firstRowLeft">
          <PillarCard
            image={mobility}
            heading="Mobility"
            paragraph="Good mobility allows your body to move the way it was designed to move - pain free and with a good range of motion."
          />
          <PillarCard
            image={barbell}
            heading="Strength"
            paragraph="Strength training helps you develop strong bones, manage weight and help you do everyday activities better and easier."
          />
          <PillarCard
            image={cardio}
            heading="Cardio"
            paragraph="Improving your cardio will strengthen your stamina and endurance so you can work harder for long and burn more calories."
          />
        </div>
      </div>
      <div className="secondRow">
        <h1>Our plans and services</h1>
        <div className="servicesRow">
          <div className="service">
            <h2>Workout Programs</h2>
            <p>Affordable and effective workout programs tailored to your fitness goals.</p>
          </div>
          <div className="service">
            <h2>Workout videos</h2>
            <p>Access to hundreds of free, full-length workout videos.</p>
          </div>
          <div className="service">
            <h2>Meal plans</h2>
            <p>Plans created by registered dietitians and nutritionists.</p>
          </div>
          <div className="service">
            <h2>
              xtreme+ <span>ALL ACCESS</span>
            </h2>
            <p>Add powerful features to your membership</p>
          </div>
        </div>
      </div>
      <div className="thirdRow">
        <div className="thirdRowContent">
          <h3>About us</h3>
          <p>" We believe that fitness should be accessible to everyone, everywhere, regardless of income level or access to a gym. "</p>
          <div className="numbersRow">
            <div className="numbersContent">
              <h1>20+</h1>
              <p>20+ years of combined experience helping people achieve their fitness and health goals.</p>
            </div>
            <div className="numbersContent">
              <h1>100+</h1>
              <p>100+ clients who we have helped transform their bodies through our training programs and meal plans.</p>
            </div>
            <div className="numbersContent">
              <h1>1 Goal</h1>
              <p>1 united goal. To get healthy in body and mind and to live a longer and more fulfilled life.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutMiddle;
