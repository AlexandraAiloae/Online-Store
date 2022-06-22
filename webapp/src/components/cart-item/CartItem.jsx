import React from "react";
import "./CartItemStyles.css";

const CartItem = ({ CartItem }) => {
  const { name, imageUrl, price, quantity } = CartItem;
  return (
    <div className="cart-item-container">
      <img src={imageUrl} alt={`${name}`} />
      <div className="item-details">
        <span className="name" style={{fontSize:12}}>{name}</span>
        <span className="price" style={{fontSize:12}}>
          {quantity} x {price}Lei
        </span>
      </div>
    </div>
  );
};

export default CartItem;
