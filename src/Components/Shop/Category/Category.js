import React from "react";
import "../../../Styles/Shop/Category/Category.css";
import CategoryCard from "./CategoryCard";
import menImage from "../../../assets/Shop/men.png";
import womenImage from "../../../assets/Shop/women.png";

const Category = () => {
  return (
    <div className="container categoryRow">
      <CategoryCard discount="20% off all selected items" heading="MEN" image={menImage} />
      <CategoryCard discount="10% discount on all items" heading="WOMEN" image={womenImage} />
    </div>
  );
};

export default Category;
