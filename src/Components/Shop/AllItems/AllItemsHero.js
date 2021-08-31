import React from "react";
import "../../../Styles/Shop/AllItems/AllItems.css";
import hero from "../../../assets/Shop/itemsHeader.jpg";

const AllItemsHero = () => {
  return (
    <div
      style={{ backgroundImage: `url(${hero})`, backgroundPosition: "center", backgroundSize: "cover", backgroundRepeat: "no-repeat" }}
      className="allItemsHero"
    >
      <div className="container">
        <div className="allItemsHeroContent">
          <h1>MEMBER EXCLUSIVE</h1>
          <p>10% off everything + extra Ksh 200 off for plus status</p>
          <text>
            Not a member ? <span>Join now</span> for discounts
          </text>
        </div>
      </div>
    </div>
  );
};

export default AllItemsHero;
