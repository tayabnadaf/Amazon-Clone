import React, { useState } from "react";
import "./Product.css";
import AddToCartButton from "./AddToCartButton";

function Product({ id, title, image, price, rating, onAddToCart}) {
  const [quantity,setQuantity]=useState(1);

  function handleAddToCart(){
    onAddToCart({id,title,price,quantity})
  }
  return (
    <div className="product">
      <div className="product__info">
        <p>{title}</p>
        <p className="product__price">
          <small>$</small>
          <strong>{price}</strong>
        </p>
        <div className="product__rating">
          {Array(rating)
            .fill()
            .map((_, i) => (
              <p key={i}>⭐</p>
            ))}
        </div>
       </div>
      <img src={image} alt="" />
      <AddToCartButton onClick={handleAddToCart}/>
    </div>
  );
}

export default Product;
