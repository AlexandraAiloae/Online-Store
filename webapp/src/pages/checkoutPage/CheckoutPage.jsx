import React, { useContext } from "react";
import { CartContext } from "../../contexts/cart.context";
import "./CheckoutPageStyles.css";
import Navbar from "../../components/navbarMainPage/Navbar";
import CheckoutItem from "../../components/checkout-tem/CheckoutItem";

function CheckoutPage() {
  const { cartItems, cartTotal} = useContext(CartContext);
  return (
    <div className="checkout">
      <Navbar Navbar color="#111" />
      <div className="checkout-container">
          <div className="checkout-header">
              <div className="header-block">
                <span>Product</span>
              </div>
              <div className="header-block">
              <span>Description</span>
              </div>
              <div className="header-block">
              <span>Quantity</span>
              </div>
              <div className="header-block">
              <span>Price</span>
              </div>
              <div className="header-block">
              <span>Remove</span>
              </div>
          </div>
          {cartItems.map((cartItem) =>
            (
              <CheckoutItem key={cartItem.id} cartItem={cartItem} />
            ))}
          <span className="total">Total: {cartTotal} Lei</span>
        </div>
    </div>
  );
}

export default CheckoutPage;
