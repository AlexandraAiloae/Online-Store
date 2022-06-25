import React, {useContext } from "react";

import { Fragment } from "react";
import { Outlet } from "react-router-dom";

import CartIcon from "../cart-icon/CartIcon";
import CartDropDown from "../cart-dropdown/CartDropDown";

import {NavbarContainer, NavbarMenu, NavbarLink, NavbarList} from "./NavbarStyles";
import { UserContext } from "../../contexts/user.context";
import { CartContext } from "../../contexts/cart.context";
import { signOutUser } from "../../utils/firebase/Firebase";

function Navbar(props) {
  const { currentUser } = useContext(UserContext);
  const { isCartOpen } = useContext(CartContext);

  const styles = {
    fontSize: "1.5rem",
    color: props.color,
  };

  return (
    <Fragment>
      <NavbarContainer>
        <div className="logo"  style={{ color: props.color }}>
          <h2>AHomeToBe.</h2>
        </div>
        <NavbarMenu>
          <NavbarList>
            <NavbarLink to="/" style={{ color: props.color }}>
              {" "}
              Home{" "}
            </NavbarLink>
          </NavbarList>
          {/* <NavbarList>
            <Link2
              to="DirectoryItemContainer"
              smooth={true}
              duration={500}
              style={{ color: props.color }}
            >
              {" "}
              Categories{" "}
            </Link2>
          </NavbarList> */}
          <NavbarList>
            <NavbarLink to="/shop" style={{ color: props.color }}>
              {" "}
              Shop{" "}
            </NavbarLink>
          </NavbarList>
          <NavbarList>
            <NavbarLink to="/account" style={{ color: props.color }}>
              {" "}
              Account{" "}
            </NavbarLink>
          </NavbarList>
          <NavbarList>
            <NavbarLink to="/contact" style={{ color: props.color }}>
              {" "}
              Contact{" "}
            </NavbarLink>
          </NavbarList>
          <NavbarList>
          {currentUser ? (
          <NavbarLink as='span' onClick={signOutUser} style={styles}>
            {" "}
            Sign out{" "}
          </NavbarLink>
        ) : (
          <NavbarLink className="nav-link" to="/authentication" style={styles}>
            Sign in
          </NavbarLink>
        )}
        </NavbarList>
          {/* <li>
            <Link1 to="/admin" style={{ color: props.color }}>
              {" "}
              Admin{" "}
            </Link1>
          </li> */}
        </NavbarMenu>
        <CartIcon color={props.color} />
        {isCartOpen && <CartDropDown />}
      </NavbarContainer>
      <Outlet />
    </Fragment>
  );
}

export default Navbar;
