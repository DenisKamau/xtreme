import React from "react";
import "../../../Styles/Home/TeamCard/TeamCard.css";

const TeamCard = ({ Background }) => {
  return (
    <div
      className="teamCard"
      style={{ backgroundImage: `url(${Background})`, backgroundPosition: "center", backgroundSize: "cover", backgroundRepeat: "no-repeat" }}
    ></div>
  );
};

export default TeamCard;
