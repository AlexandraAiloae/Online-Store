import React from "react";
import "./SidebarAdminStyles.css";

import { RiDashboardFill } from "react-icons/ri";
import { ImUsers, ImBooks } from "react-icons/im";
import { RiLogoutBoxRFill } from "react-icons/ri";

import { Link } from "react-router-dom";

function SidebarAdmin() {

  return (
    <div className="sidebar">
      <div className="top">
        <span className="logo">THEBOOKSHELF.</span>
      </div>
      <hr />
      <div className="center"></div>
      <ul>
        <p className="title">MAIN</p>
        <li>
          <RiDashboardFill className="icons" />
          <Link
            to="/admin"
            style={{ color: "rgb(81, 48, 7)", fontSize: 13, fontWeight: 600 }}
          >
            {" "}
            Dashboard
          </Link>
        </li>
        <p className="title">LISTS</p>
        <li>
          <ImUsers className="icons" />
          <Link
            to="/users"
            style={{ color: "rgb(81, 48, 7)", fontSize: 13, fontWeight: 600 }}
          >
            {" "}
            Users
          </Link>
        </li>
        <li>
          <ImBooks className="icons" />
          <span>Products</span>
        </li>
        <p className="title">ADMIN</p>
        <li>
          <RiLogoutBoxRFill className="icons" />
          <span>Logout</span>
        </li>
      </ul>
      {/* <div className="bottom">
      <p className="title">MODE</p>
        <div className="colorOption"></div>
        <div className="colorOption"></div>
      </div> */}
    </div>
  );
}

export default SidebarAdmin;
