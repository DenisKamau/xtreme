import React from "react";
import "../../../Styles/Shop/Product/Product.css";
import Background from "../../../assets/Shop/Clothing/image1.png";

const Product = () => {
  return (
    <div className="product">
      <div
        style={{ backgroundImage: `url(${Background})`, backgroundPosition: "center", backgroundSize: "cover", backgroundRepeat: "no-repeat" }}
        className="productImage"
      ></div>
      <div className="productDetails">
        <h3 className="prodectName">Nike Sports Bra</h3>
        <div className="productPrice">
          <p className="initialPrice">Ksh 200.00</p>
          <p className="discount">Ksh 150.00</p>
        </div>
      </div>
    </div>
  );
};

export default Product;
