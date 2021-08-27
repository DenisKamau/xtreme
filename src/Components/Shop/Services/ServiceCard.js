import React from "react";
import "../../../Styles/Shop/ServiceCard/ServiceCard.css";

const ServiceCard = ({ icon, heading, text }) => {
  return (
    <div className="serviceCard">
      <img alt="icon" src={icon} />
      <div className="serviceCardContent">
        <h3>{heading}</h3>
        <p>{text}</p>
      </div>
    </div>
  );
};

export default ServiceCard;
