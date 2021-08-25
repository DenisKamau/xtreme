import React from "react";
import "../../../Styles/Header/Header.css";
import logo from "../../../assets/logo.svg";
import SearchRoundedIcon from "@material-ui/icons/SearchRounded";
import AccountCircleOutlinedIcon from "@material-ui/icons/AccountCircleOutlined";
import LocalMallOutlinedIcon from "@material-ui/icons/LocalMallOutlined";

const Header = () => {
  return (
    <section className="headerSection">
      <div className="container homeHeader">
        <div className="logo">
          <img alt="logo" src={logo} className="logoImage" />
        </div>
        <div className="headerLinks">
          <ul>
            <li>About us</li>
            <li>Our trainers</li>
            <li>Membership</li>
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

export default Header;
