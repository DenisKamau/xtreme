import React from "react";
import Category from "../Category/Category";
import MidHero from "../MidHero/MidHero";
import Newsletter from "../Newsletter/Newsletter";
import Services from "../Services/Services";
import ShopHeader from "../ShopHeader/ShopHeader";
import ShopHero from "../ShopHeroSection/ShopHero";
import Supplements from "../SupplementsSection/Supplements";
import TrendingSlide from "../TrendingSlide/TrendingSlide";

const Shop = () => {
  return (
    <div className="shop">
      <ShopHeader />
      <ShopHero />
      <Services />
      <Category />
      <TrendingSlide />
      <MidHero />
      <TrendingSlide />
      <Supplements />
      <TrendingSlide />
      <Newsletter />
    </div>
  );
};

export default Shop;
