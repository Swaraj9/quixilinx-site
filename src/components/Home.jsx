import React from "react";
import "../styles/home.css";
import logo from "../assets/logoCrop.png";

const Home = () => {
  return (
    <div id="home" className="hm">
      <div className="hm-txt">
        <div className="hm-txt-main">Building Dreams For You</div>
        <div className="hm-txt-sec">
          We are specialised in setting up the foundation of your brand and
          setting you up for success.
        </div>
        <div className="hm-links">
          <a className="hm-link-button" href="#about">About Us</a>
          <a className="hm-link" href="#services">Services</a>
        </div>
      </div>
      <div className="hm-logo">
        <img className="hm-logo-img" src={logo} alt="" />
      </div>
    </div>
  );
};

export default Home;
