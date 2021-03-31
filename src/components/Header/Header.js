import React from "react";
import "./Header.css";
import Logo from "./../../resources/desktop.svg";

const Header = ({nameOfApp, headerExpanded}) => {
  // destructor can be used like {nameOfApp}  //here only nameOfApp can be used to get text
  return (
    <div className="head-container">
      <img
        src={Logo}
        className={`head-image ${
          headerExpanded ? "head-image-expanded" : "head-image-contracted"
        }`}
        alt="something went wrong"
      />

      <h1
        className={`headerText ${
          headerExpanded ? "headerText-expanded" : "headerText-contracted"
        }`}
      >
        {" "}
        {nameOfApp}{" "}
      </h1>
    </div>
  );
};

export default Header;
