import React from "react";
import "../../../Styles/Price/Price.css";
import "../../../Styles/PriceCard/PriceCard.css";
import CheckCircleOutlineOutlinedIcon from "@material-ui/icons/CheckCircleOutlineOutlined";

const Price = () => {
  return (
    <section className="section">
      <div className="container price">
        <h3>Our Prices</h3>
        <div className="line"></div>
      </div>
      <div className="container pricesRow">
        <div className="priceCard">
          <div className="priceCardContent">
            <h4>1</h4>
            <h5>Month</h5>
            <div className="perks">
              <CheckCircleOutlineOutlinedIcon className="checkIcon" />
              <p>Unlimited access to the gym</p>
            </div>
            <div className="perks">
              <CheckCircleOutlineOutlinedIcon className="checkIcon" />
              <p>Personal trainer</p>
            </div>
            <div className="perks">
              <CheckCircleOutlineOutlinedIcon className="checkIcon" />
              <p>Free consulting </p>
            </div>
            <h6>Kshs. 3,000</h6>
            <button>Choose Plan</button>
          </div>
        </div>
        <div className="priceCard">
          <div className="priceCardContent">
            <h4>3</h4>
            <h5>Months</h5>
            <div className="perks">
              <CheckCircleOutlineOutlinedIcon className="checkIcon" />
              <p>Unlimited access to the gym</p>
            </div>
            <div className="perks">
              <CheckCircleOutlineOutlinedIcon className="checkIcon" />
              <p>Personal trainer</p>
            </div>
            <div className="perks">
              <CheckCircleOutlineOutlinedIcon className="checkIcon" />
              <p>Free consulting </p>
            </div>
            <div className="perks">
              <CheckCircleOutlineOutlinedIcon className="checkIcon" />
              <p>Diet plan</p>
            </div>
            <h6>Kshs. 8,000</h6>
            <button>Choose Plan</button>
          </div>
        </div>
        <div style={{ outline: "10px solid #FF9C0B" }} className="priceCard">
          <div className="priceCardContent">
            <h4>6</h4>
            <h5>Months</h5>
            <div className="perks">
              <CheckCircleOutlineOutlinedIcon className="checkIcon" />
              <p>Unlimited access to the gym</p>
            </div>
            <div className="perks">
              <CheckCircleOutlineOutlinedIcon className="checkIcon" />
              <p>Personal trainer</p>
            </div>
            <div className="perks">
              <CheckCircleOutlineOutlinedIcon className="checkIcon" />
              <p>Free consulting </p>
            </div>
            <div className="perks">
              <CheckCircleOutlineOutlinedIcon className="checkIcon" />
              <p>Diet plan</p>
            </div>
            <h6>Kshs. 15,000</h6>
            <button style={{ background: " #5A4FF3" }}>Choose Plan</button>
          </div>
        </div>
        <div className="priceCard">
          <div className="priceCardContent">
            <h4>1</h4>
            <h5>year</h5>
            <div className="perks">
              <CheckCircleOutlineOutlinedIcon className="checkIcon" />
              <p>Unlimited access to the gym</p>
            </div>
            <div className="perks">
              <CheckCircleOutlineOutlinedIcon className="checkIcon" />
              <p>Personal trainer</p>
            </div>
            <div className="perks">
              <CheckCircleOutlineOutlinedIcon className="checkIcon" />
              <p>Free consulting </p>
            </div>
            <div className="perks">
              <CheckCircleOutlineOutlinedIcon className="checkIcon" />
              <p>Diet plan</p>
            </div>
            <h6>Kshs. 32,000</h6>
            <button>Choose Plan</button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Price;
