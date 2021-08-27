import React from "react";
import "../../../Styles/Shop/Services/Services.css";
import ServiceCard from "./ServiceCard";
import shippingIcon from "../../../assets/Shop/shipping.png";
import cardIcon from "../../../assets/Shop/card.png";
import shirtIcon from "../../../assets/Shop/shirt.png";
import supportIcon from "../../../assets/Shop/support.png";

const Services = () => {
  return (
    <div className="container">
      <div className="serviceRow">
        <ServiceCard icon={shippingIcon} heading="Free shipping " text="Orders above Ksh. 5,000" />
        <ServiceCard icon={shirtIcon} heading="30 Days return " text="For any good’s issues " />
        <ServiceCard icon={cardIcon} heading="Secure payments" text="100% secure & safe" />
        <ServiceCard icon={supportIcon} heading="24/7 support" text="Dedicated support team " />
      </div>
      <div className="serviceLine"></div>
    </div>
  );
};

export default Services;
