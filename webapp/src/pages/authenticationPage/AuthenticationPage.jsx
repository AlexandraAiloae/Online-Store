import React from "react";
import "./AuthenticationStyles.css";
import Navbar from "../../components/navbarMainPage/Navbar";
import SignUpForm from "../../components/signUpForm/SignUpForm";
import SignInForm from "../../components/signInForm/SignInForm";

function AuthenticationPage() {
  return (
    <div className="authentication">
      <Navbar color="#111" />
      <div className="authentication-container">
        <SignInForm />
        <SignUpForm />
      </div>
    </div>
  );
}

export default AuthenticationPage;
