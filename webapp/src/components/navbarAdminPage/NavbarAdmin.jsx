import React from "react";
import "./NavbarAdminStyles.css";

import Avatar from '../../assets/librarian.png'

import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
import LanguageOutlinedIcon from "@mui/icons-material/LanguageOutlined";
import DarkModeOutlinedIcon from "@mui/icons-material/DarkModeOutlined";
import FullscreenExitOutlinedIcon from "@mui/icons-material/FullscreenExitOutlined";
import NotificationsNoneOutlinedIcon from "@mui/icons-material/NotificationsNoneOutlined";
import ChatBubbleOutlineOutlinedIcon from "@mui/icons-material/ChatBubbleOutlineOutlined";
import ListOutlinedIcon from "@mui/icons-material/ListOutlined";

function NavbarAdmin() {
  return (
    <div className="navbarAdmin">
        {/* <div className="search">
          <input type="text" placeholder="Search..." />
          <SearchOutlinedIcon />
        </div> */}
        <div className="items">
          {/* <div className="item">
            <LanguageOutlinedIcon />
            English
          </div> */}
          <div className="item">
            <DarkModeOutlinedIcon className="icon"/>
          </div>
          {/* <div className="item">
            <FullscreenExitOutlinedIcon />
          </div> */}
          <div className="item">
            <NotificationsNoneOutlinedIcon className="icon"/>
            <div className="counter">1</div>
          </div>
          {/* <div className="item">
            <ChatBubbleOutlineOutlinedIcon />
          </div> */}
          {/* <div className="item">
            <ListOutlinedIcon />
          </div> */}
          <div className="item">
          <img
          src={Avatar}
          alt=""
          className="avatar"/>
          </div>
        </div>
    </div>
  );
}

export default NavbarAdmin;
