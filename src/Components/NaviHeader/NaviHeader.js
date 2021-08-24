import React from "react";
import "../../Styles/NaviHeader/NaviHeader.css";
import { NavLink } from "react-router-dom";

const NaviHeader = () => {
  return (
    <div className="naviHeader">
      <ul>
        <NavLink exact activeClassName="active" to="/">
          <li>Home</li>
        </NavLink>
        <NavLink activeClassName="active" to="/shop">
          <li>Shop</li>
        </NavLink>
      </ul>
    </div>
  );
};

export default NaviHeader;
