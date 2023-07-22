import React from "react";
import logo from "./images/VK_logo.png";

const Header = () => {
  return (
    <>
      <div className="header">
        <img src={logo} alt="logo" height='100' width='90'/>
        <h1>Keep</h1>
      </div>
    </>
  );
};

export default Header;
