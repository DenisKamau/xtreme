import React from "react";
import "../../../Styles/Shop/Item/Item.css";
import Product from "../Product/Product";
import IMAGES from "../../../assets/Shop/Clothing/index";

const OtherItems = () => {
  return (
    <section className="otherItems">
      <div className="container">
        <h2>You'll Also Love</h2>
        <div className="otherItemsRow">
          <Product img={IMAGES.img8} name="adidas joggers " />
          <Product img={IMAGES.img11} name="Men black joggers" />
          <Product img={IMAGES.img10} name="black hoodie" />
          <Product img={IMAGES.img9} name="adidas joggers " />
          <Product img={IMAGES.img12} name="adidas joggers " />
        </div>
      </div>
    </section>
  );
};

export default OtherItems;
