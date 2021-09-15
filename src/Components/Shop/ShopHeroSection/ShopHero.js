import React from "react";
import "../../../Styles/Home/HeroSection/HeroSection.css";
import "../../../Styles/Shop/ShopHeroSection/ShopHero.css";

const ShopHero = () => {
  return (
    <div className="heroSection shopHero">
      <div className="container heroLeft shopHeroLeft">
        <div className="orangeLine shopLine" />
        <div className="heroLeftContent">
          <h1>
            Work Hard,
            <br />
            Look Good
          </h1>
          <p>
            Add a touch of sass wearing these gym apparel.
            <br /> Meticulously designed support and comfort to <br /> keep you focused from start to finish
          </p>
          <button>SHOP NOW</button>
        </div>
      </div>
    </div>
  );
};

export default ShopHero;
