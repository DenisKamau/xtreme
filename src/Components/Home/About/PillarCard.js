import React from "react";
import "../../../Styles/PillarCard/PillarCard.css";

const PillarCard = ({ image, heading, paragraph }) => {
  return (
    <div className="pillarCard">
      <div className="pillarCardLeft">
        <img alt="icon" src={image} />
      </div>
      <div className="pillarCardRight">
        <h3>{heading}</h3>
        <p>{paragraph}</p>
      </div>
    </div>
  );
};

export default PillarCard;
