import React from "react";
import "../../../Styles/Home/TestimonialCard/TestimonialCard.css";
import rating from "../../../assets/rating.png";
import quotes from "../../../assets/quotes.png";

const TestimonialCard = ({ avatar, testimony, name, location }) => {
  return (
    <div className="testimonialCard">
      <div className="cardContents">
        <div
          className="avatar"
          style={{ backgroundImage: `url(${avatar})`, backgroundPosition: "center", backgroundSize: "cover", backgroundRepeat: "no-repeat" }}
        ></div>
        <img className="rating" alt="rating" src={rating} />
        <p>{testimony}</p>
        <div style={{ display: "flex", justifyContent: "space-between" }}>
          <div className="userInfo">
            <h4>{name}</h4>
            <h5>{location}</h5>
          </div>
          <div>
            <img alt="quotes" src={quotes} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default TestimonialCard;
