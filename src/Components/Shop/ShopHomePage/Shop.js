import React from "react";
import Services from "../Services/Services";
import ShopHeader from "../ShopHeader/ShopHeader";
import ShopHero from "../ShopHeroSection/ShopHero";

const Shop = () => {
  return (
    <div className="shop">
      <ShopHeader />
      <ShopHero />
      <Services />
    </div>
  );
};

export default Shop;
