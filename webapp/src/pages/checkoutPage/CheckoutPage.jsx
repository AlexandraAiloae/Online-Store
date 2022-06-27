import React from "react";
import { useSelector } from "react-redux";
import {
  selectCartItems,
  selectCartTotal,
} from "../../store/cart/cart.selector";
import "./CheckoutPageStyles.css";
import Navbar from "../../components/navbarMainPage/Navbar";
import CheckoutItem from "../../components/checkout-Item/CheckoutItem";
import PaymentForm from "../../components/payment-form/payment-form.component";

function CheckoutPage() {
  const cartItems = useSelector(selectCartItems);
  const cartTotal = useSelector(selectCartTotal);
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
        {cartItems.map((cartItem) => (
          <CheckoutItem key={cartItem.id} cartItem={cartItem} />
        ))}
        <span className="total">Total: {cartTotal} Lei</span>
        <PaymentForm />
      </div>
    </div>
  );
}

export default CheckoutPage;
