import React from "react";
import "./Header.css";
import { Link } from "react-router-dom";
import SreachIcon from "@mui/icons-material/Search";
import ShopingBasketIcon from "@mui/icons-material/ShoppingBasket";

function Header() {
  return (
    <nav className="header">
      <Link to="/login">
        <img
          className="header__logo"
          src="https://pngimg.com/uploads/amazon/amazon_PNG11.png"
          alt=""
        />
      </Link>

      <div className="header__search">
        <input type="text" className="header__searchIntput" />
        <SreachIcon className="header__searchIcon" />
      </div>

      <div className="header__linkBar">
        <Link to="/login" className="header__link">
          <div className="header__option">
            <span className="header__opLone">Hello,sign in</span>
            <span className="header__opLtwo">Account & Lists</span>
          </div>
        </Link>

        <Link to="/login" className="header__link">
          <div className="header__option">
            <span className="header__opLone">Returns</span>
            <span className="header__opLtwo"> & Order</span>
          </div>
        </Link>

        <Link to="/login" className="header__link">
          <div className="header__option">
            <span className="header__opLone">Your</span>
            <span className="header__opLtwo">Prime</span>
          </div>
        </Link>
        <Link to="/checkout" className="header__link">
          <div className="header__optionBasket">
            <ShopingBasketIcon />
            <span className="header__opLtwo header__basketCount">0</span>
          </div>
        </Link>
      </div>
    </nav>
  );
}
export default Header;
