import React from "react";
import "../../../Styles/Shop/Product/Product.css";

const Product = ({ img, name }) => {
  return (
    <div className="product">
      <div
        style={{ backgroundImage: `url(${img})`, backgroundPosition: "center", backgroundSize: "cover", backgroundRepeat: "no-repeat" }}
        className="productImage"
      ></div>
      <div className="productDetails">
        <h3 className="prodectName">{name}</h3>
        <div className="productPrice">
          <p className="initialPrice">Ksh 200.00</p>
          <p className="discount">Ksh 150.00</p>
        </div>
      </div>
    </div>
  );
};

export default Product;
