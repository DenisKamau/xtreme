import React from "react";
import "../../../Styles/Shop/Item/Item.css";
import ImageSlide from "./ImageSlide";
import ExpandLessIcon from "@material-ui/icons/ExpandLess";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import ShareIcon from "@material-ui/icons/Share";
import OtherItems from "./OtherItems";
import Newsletter from "../Newsletter/Newsletter";

const Item = () => {
  return (
    <section>
      <div className="container items">
        <div className="itemLeft">
          <h6>Mens/Apparel/Sweatshirt</h6>
          <ImageSlide />
        </div>
        <div className="itemRight">
          <h5>New!</h5>
          <h1>Nike Sports Bra</h1>
          <h2 className="price">
            <span>Ksh 200.00</span> Ksh 150.00
          </h2>
          <div className="greyLine"></div>
          <h3 className="color">
            Color : <span>Black</span>
          </h3>
          <div className="colorCircle"></div>
          <h3>Size</h3>
          <div className="itemSizes">
            <div className="size">S</div>
            <div style={{ backgroundColor: "black", color: "white" }} className="size">
              M
            </div>
            <div className="size">L</div>
            <div className="size">XL</div>
            <div className="size">XXL</div>
          </div>
          <button>Add to bag</button>
          <div className="greyLine"></div>
          <div className="info">
            <div className="infoTitle">
              <h4>Description</h4>
              <ExpandLessIcon />
            </div>
            <h6>master your mobility</h6>
            <p>
              Marty, you're acting like you haven't seen me in a week. Oh. My insurance, it's your car, your insurance should pay for it. Hey, I wanna
              know who's gonna pay for this? I spilled beer all over it when that car smashed into me. Who's gonna pay my cleaning bill? Listen, Doc.
              He's a peeping tom. Dad.
            </p>
          </div>
          <div className="greyLine"></div>
          <div className="info">
            <div className="infoTitle">
              <h4>delivery & returns</h4>
              <ExpandMoreIcon />
            </div>
            <div className="greyLine"></div>
            <div className="share">
              <ShareIcon />
              <text>Share</text>
            </div>
          </div>
        </div>
      </div>
      <div className="other">
        <OtherItems />
        <Newsletter />
      </div>
    </section>
  );
};

export default Item;
