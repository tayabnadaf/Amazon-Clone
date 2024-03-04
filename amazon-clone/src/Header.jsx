import React from "react";
import "./Header.css";
import { Link } from "react-router-dom";
import SreachIcon from "@mui/icons-material/Search";

function Header() {
  return (
    <nav className="header">
      {/*logo on left*/}
      <Link to="/login">
        <img
          className="header__logo"
          src="https://pngimg.com/uploads/amazon/amazon_PNG11.png"
          alt=""
        />
      </Link>

      {/*the search box*/}
      <div className="header__search">
        <input type="text" className="header__searchIntput" />
        <SreachIcon className="header__searchIcon" />
      </div>

      {/*2 links*/}
      <div className="header__linkBar">
        {/* sign link */}
        {/* return & order link */}
      </div>
      {/*cart logo with number on it*/}
    </nav>
  );
}
export default Header;
