import React from "react";
import "../../../Styles/Shop/AllItems/AllItems.css";
import ArrowDropDownIcon from "@material-ui/icons/ArrowDropDown";
import Product from "../Product/Product";
import IMAGES from "../../../assets/Shop/Clothing/index";

const filterType = (filterTitle) => {
  return (
    <div className="filterType">
      <h5>{filterTitle}</h5>
      <ArrowDropDownIcon />
    </div>
  );
};

const AllItemsContent = () => {
  return (
    <div className="container allItemsContent">
      <div className="contentLeft">
        <h6>Womens /All</h6>
        <h3>FILTERS</h3>
        <div className="filters">
          {filterType("Product")}
          {filterType("Size")}
          {filterType("Color")}
          {filterType("Price")}
        </div>
      </div>
      <div className="contentRight">
        <div className="topSection">
          <h3>Women's</h3>
          {filterType("Featured")}
        </div>
        <div className="itemsRow">
          <Product img={IMAGES.img1} name="Nike Sports Bra" />
          <Product img={IMAGES.img2} name="adidas joggers " />
          <Product img={IMAGES.img3} name="black Sports Bra" />
          <Product img={IMAGES.img4} name="black hoodie" />
        </div>
        <button>Load more</button>
      </div>
    </div>
  );
};

export default AllItemsContent;
