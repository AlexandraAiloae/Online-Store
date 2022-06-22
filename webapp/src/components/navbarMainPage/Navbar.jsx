import React, { useState, useContext } from "react";
// import { BsPerson } from "react-icons/bs";
import { HiOutlineMenuAlt4 } from "react-icons/hi";
import { AiOutlineClose } from "react-icons/ai";
import { FaFacebook, FaInstagram } from "react-icons/fa";
import { Link as Link1 } from "react-router-dom";
import { Link as Link2 } from "react-scroll";
import { Fragment } from "react";
import { Outlet } from "react-router-dom";

import CartIcon from "../cart-icon/CartIcon";
import CartDropDown from "../cart-dropdown/CartDropDown";

import "./NavbarStyles.css";
import { UserContext } from "../../contexts/user.context";
import { CartContext } from "../../contexts/cart.context";
import { signOutUser } from "../../database/firebase";

function Navbar(props) {
  const [nav, setNav] = useState(false);
  // we're basically saying "set it to the opposite of what it currently is set up
  // so if it's false this will set it to true
  const handleNav = () => setNav(!nav);
  const { currentUser } = useContext(UserContext);
  const { isCartOpen } = useContext(CartContext);

  // const signOutHandler =async () => {
  //   await signOutUser();
  //   // setCurrentUser(null);
  // }

  const styles = {
    fontSize: "1.5rem",
    color: props.color,
  };

  return (
    <Fragment>
      <div name="home" className={nav ? "navbar navbar-bg" : "navbar"}>
        <div className={nav ? "logo dark" : "logo"}>
          <h2>AHomeToBe.</h2>
        </div>
        <ul className="nav-menu">
          <li>
            <Link1 to="/" style={{ color: props.color }}>
              {" "}
              Home{" "}
            </Link1>
          </li>
          <li>
            <Link2
              to="categories-container"
              smooth={true}
              duration={500}
              style={{ color: props.color }}
            >
              {" "}
              Categories{" "}
            </Link2>
          </li>
          <li>
            <Link1 to="/shop" style={{ color: props.color }}>
              {" "}
              Shop{" "}
            </Link1>
          </li>
          <li>
            <Link1 to="/account" style={{ color: props.color }}>
              {" "}
              Account{" "}
            </Link1>
          </li>
          <li>
            <Link1 to="/contact" style={{ color: props.color }}>
              {" "}
              Contact{" "}
            </Link1>
          </li>
          <li>
            <Link1 to="/admin" style={{ color: props.color }}>
              {" "}
              Admin{" "}
            </Link1>
          </li>
        </ul>
        {/* <div className="nav-icons">
          <Link1 to="/authentication">
          <BsPerson style={{ color: props.color }} className="icon" />{" "}
          <div className="sign_in_out">SignIn</div>
        </Link1>
      </div> */}
        {currentUser ? (
          <div className="nav-link" onClick={signOutUser} style={styles}>
            {" "}
            Sign out{" "}
          </div>
        ) : (
          <Link1 className="nav-link" to="/authentication" style={styles}>
            Sign in
          </Link1>
        )}
        <CartIcon color={props.color} />
        <div className="hamburger" onClick={handleNav}>
          {!nav ? (
            <HiOutlineMenuAlt4 className="icon" />
          ) : (
            <AiOutlineClose style={{ color: "#000" }} className="icon" />
          )}
        </div>
        {/* if nav is true we want to execute mobile-menu active else mobile-menu */}
        <div className={nav ? "mobile-menu active" : "mobile-menu"}>
          <ul className="mobile-nav">
            <li>
              <Link1 to="/" style={{ color: "black" }}>
                {" "}
                Home{" "}
              </Link1>
            </li>
            <li>
              <Link2
                to="categories-container"
                smooth={true}
                duration={500}
                style={{ color: "black" }}
              >
                {" "}
                Categories{" "}
              </Link2>
            </li>
            <li>
              <Link1 to="/shop" style={{ color: "black" }}>
                {" "}
                Shop{" "}
              </Link1>
            </li>
            <li>
              <Link1 to="/account" style={{ color: "black" }}>
                {" "}
                Account{" "}
              </Link1>
            </li>
            <li>
              <Link1 to="/contact" style={{ color: "black" }}>
                {" "}
                Contact{" "}
              </Link1>
            </li>
            <li>
              <Link1 to="/admin" style={{ color: "black" }}>
                {" "}
                Admin{" "}
              </Link1>
            </li>
          </ul>
          <div className="mobile-menu-bottom">
            <div className="menu-icons">
              <button>Sign In</button>
              <button>
                <Link1 to="/login" style={{ color: "#fff" }}>
                  {" "}
                  Log In{" "}
                </Link1>{" "}
              </button>
            </div>
            <div className="social-icons">
              <FaFacebook className="icon" />
              <FaInstagram className="icon" />
            </div>
          </div>
        </div>
        {isCartOpen && <CartDropDown />}
      </div>
      <Outlet />
    </Fragment>
  );
}

export default Navbar;
