import React from "react";
import "./HeroStyles.css";
// import { BsSearch } from "react-icons/bs";

import Video from "../../assets/video3.mp4";

function Hero() {
  return (
    <div className="hero">
      <video autoPlay loop muted id="video">
        <source src={Video} type="video/mp4" />
      </video>
      {/* <div className="overlay"></div> */}
      <div className="content">
        <h1>Welcome to AHomeToBe.</h1>
        <h2>There is no place like HOME.</h2>
        {/* <form className="form">
          <div>
            <input type="text" placeholder="Search Books" />
          </div>
          <div>
            <button>
              <BsSearch className="icon" />
            </button>
          </div>
        </form> */}
      </div>
</div>
  );
}

export default Hero;
