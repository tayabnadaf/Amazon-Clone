import React from "react";
import "./Header.css";
import { Link } from "react-router-dom";
import SreachIcon from "@mui/icons-material/Search";
import ShopingBasketIcon from "@mui/icons-material/ShoppingBasket"

function Header({cartItemCount}) {
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
        <Link to="/login" className="header__link">
          <div className="header__option">
            <span className="header__opLone">Hello,sign in</span>
            <span className="header__opLtwo">Account & Lists</span>
          </div>
        </Link>
        {/* return & order link */}
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
         
            <ShopingBasketIcon/>
            <span className="header__opLtwo header__basketCount">{cartItemCount}</span>
          </div>
        </Link>
      </div>
    </nav>
  );
}
export default Header;
