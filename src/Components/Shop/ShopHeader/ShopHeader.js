import React from "react";
import "../../../Styles/Shop/ShopHeader/ShopHeader.css";
import "../../../Styles/Home/Header/Header.css";
import logo from "../../../assets/logo.svg";
import SearchRoundedIcon from "@material-ui/icons/SearchRounded";
import AccountCircleOutlinedIcon from "@material-ui/icons/AccountCircleOutlined";
import LocalMallOutlinedIcon from "@material-ui/icons/LocalMallOutlined";

const ShopHeader = () => {
  return (
    <section
      className="headerSection shopHeaderSection
    "
    >
      <div className="container homeHeader">
        <div className="logo">
          <img alt="logo" src={logo} className="logoImage" />
        </div>
        <div className="headerLinks">
          <ul>
            <li>Women</li>
            <li>Men</li>
          </ul>
        </div>
        <div className="headerIcons">
          <SearchRoundedIcon />
          <AccountCircleOutlinedIcon />
          <LocalMallOutlinedIcon />
        </div>
      </div>
    </section>
  );
};

export default ShopHeader;
