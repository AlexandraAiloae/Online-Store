import React, { useContext } from "react";
import { Routes, Route } from "react-router-dom";
import MainPage from "./pages/mainPage/MainPage";
import AdminPage from "./pages/adminPage/AdminPage";
import UsersPage from "./pages/usersPage/UsersPage";
import UserPage from "./pages/userPage/UserPage";
import NewUserPage from "./pages/newUserPage/NewUserPage";
import { userInputs } from "./formSource";
import ShopPage from "./pages/shopPage/ShopPage";
import CheckoutPage from "./pages/checkoutPage/CheckoutPage";
import AuthenticationPage from "./pages/authenticationPage/AuthenticationPage";
import AccountPage from "./pages/accountPage/AccountPage";
import ContactPage from "./pages/contactPage/ContactPage";
import { useState, useEffect } from "react";
import {
  onAuthStateChangedListener,
  createUserDocumentFromAuth,
} from "./utils/firebase/Firebase";
import { setCurrentUser } from "./store/user/user.action";
import { useDispatch } from "react-redux";

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    return onAuthStateChangedListener((user) => {
      if (user) {
        createUserDocumentFromAuth(user);
      }
      dispatch(setCurrentUser(user));
    });
  }, []);

  return (
    <div className="app">
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/shop/*" element={<ShopPage />} />
        <Route path="/checkout" element={<CheckoutPage />} />
        <Route path="/account" element={<AccountPage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/authentication" element={<AuthenticationPage />} />
        <Route path="/admin" element={<AdminPage />} />
        <Route path="/users">
          <Route index element={<UsersPage />} />
          <Route path=":userId" element={<UserPage />} />
          <Route
            path="newUser"
            element={<NewUserPage inputs={userInputs} title="Add New User" />}
          />
        </Route>
        {/* <Route path="/products">
        <Route index element={<ProductsPage />} />
        <Route path=":productId" element={<ProductPage />} />
        <Route path="newProduct" element={<NewProductPage inputs = {productInputs} title="Add New Product"/>} />
      </Route> */}
      </Routes>
    </div>
  );
}

export default App;
