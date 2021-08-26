import React from "react";
import "../../../Styles/Team/Team.css";
import TeamCard from "./TeamCard";
import trainer1 from "../../../assets/trainer1.jpg";
import trainer2 from "../../../assets/trainer2.jpg";
import trainer3 from "../../../assets/trainer3.jpg";
import trainer4 from "../../../assets/trainer4.jpg";
import trainer5 from "../../../assets/trainer5.jpg";
import trainer6 from "../../../assets/trainer6.jpg";

const Team = () => {
  return (
    <section className="section">
      <div className="container team">
        <h3>Meet the Team</h3>
        <div className="line"></div>
      </div>
      <div className="overlay">
        <div className="container trainersRow">
          <TeamCard Background={trainer1} />
          <TeamCard Background={trainer2} />
          <TeamCard Background={trainer3} />
          <TeamCard Background={trainer4} />
          <TeamCard Background={trainer5} />
          <TeamCard Background={trainer6} />
        </div>
      </div>
    </section>
  );
};

export default Team;
