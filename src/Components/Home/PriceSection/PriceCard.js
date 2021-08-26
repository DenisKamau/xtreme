import React from "react";
import "../../../Styles/PriceCard/PriceCard.css";
import CheckCircleOutlineOutlinedIcon from "@material-ui/icons/CheckCircleOutlineOutlined";

const PriceCard = () => {
  return (
    <div className="priceCard">
      <div className="priceCardContent">
        <h4>1</h4>
        <h5>Month</h5>
        <div className="perks">
          <CheckCircleOutlineOutlinedIcon className="checkIcon" />
          <p>Unlimited access to the gym</p>
        </div>
        <h6>Kshs. 3,000</h6>
        <button>Choose Plan</button>
      </div>
    </div>
  );
};

export default PriceCard;
