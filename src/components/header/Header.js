import React from "react";
import logo from "assets/logo.svg";
import "./header.css";
const Header = () => {
  return (
    <>
      <div className="header-container mx-auto">
        <img src={logo} alt="logo" className="header-logo" />
      </div>
      <div className="header-bar mx-auto"></div>
    </>
  );
};

export default Header;
