import React from "react";
import Category from "../Category/Category";
import MidHero from "../MidHero/MidHero";
import Newsletter from "../Newsletter/Newsletter";
import Services from "../Services/Services";
import ShopHeader from "../ShopHeader/ShopHeader";
import ShopHero from "../ShopHeroSection/ShopHero";
import Supplements from "../SupplementsSection/Supplements";
import TrendingSlide from "../TrendingSlide/TrendingSlide";
import Footer from "../../Home/Footer/Footer";
import AllItems from "../AllItems/AllItems";
import Item from "../Item/Item";

const Shop = () => {
  return (
    <div className="shop">
      <ShopHeader />
      <Item />
      {/* <ShopHero />
      <Services />
      <Category />
      <TrendingSlide Category="Women" />
      <MidHero />
      <TrendingSlide Category="Men" />
      <Supplements />
      <TrendingSlide Category="Supplements" />
      <Newsletter /> */}
    </div>
  );
};

export default Shop;
