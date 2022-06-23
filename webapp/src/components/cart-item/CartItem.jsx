import React from "react";
import { CartItemContainer, ItemDetails } from "./CartItemStyles";

const CartItem = ({ CartItem }) => {
  const { name, imageUrl, price, quantity } = CartItem;
  return (
    <CartItemContainer>
      <img src={imageUrl} alt={`${name}`} />
      <ItemDetails>
        <span style={{ fontSize: 12 }}>{name}</span>
        <span style={{ fontSize: 12 }}>
          {quantity} x {price}Lei
        </span>
      </ItemDetails>
    </CartItemContainer>
  );
};

export default CartItem;
