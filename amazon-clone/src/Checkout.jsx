import React from "react";
import Header from "./Header";
import "./Checkout.css";

function Checkout({ cart }) {
  return (
    <div>
      <Header cartItemCount={cart.length} />
      <div className="checkout">
        <h1 className="checkout__title">Checkout</h1>
        <ul className="checkout__items">
          {cart.map((item, index) => (
            <li key={index} className="checkout__item">
              <div className="checkout__item-image">
                <img src={item.image} alt={item.title} />
              </div>
              <div className="checkout__item-details">
                <span className="checkout__item-title">{item.title}</span>
                <span className="checkout__item-price">${item.price}</span>
              </div>
            </li>
          ))}
        </ul>
        <div className="checkout__total">
          Total: ${cart.reduce((total, item) => total + item.price, 0)}
        </div>
      </div>
    </div>
  );
}

export default Checkout;
