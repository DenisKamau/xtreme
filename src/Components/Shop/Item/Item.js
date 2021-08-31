import React from "react";
import "../../../Styles/Shop/Item/Item.css";
import ImageSlide from "./ImageSlide";

const Item = () => {
  return (
    <div className="container">
      <div className="itemLeft">
        <h6>Mens / Apparel/Sweatshirt</h6>
        <ImageSlide />
      </div>
    </div>
  );
};

export default Item;
