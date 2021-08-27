import React from "react";
import "../../../Styles/Shop/CategoryCard/CategoryCard.css";

const CategoryCard = ({ discount, heading, image }) => {
  return (
    <div className="categoryCard">
      <div className="categoryCardContent">
        <div className="categoryCardLeft">
          <h3>{discount}</h3>
          <h2>
            {heading}
            <span style={{ color: "#B41F37" }}>.</span>
          </h2>
          <button>Explore</button>
        </div>
        <div className="categoryCardImage">
          <img alt="categoryImage" src={image} />
        </div>
      </div>
    </div>
  );
};

export default CategoryCard;
