import React from "react";
import "./headerBar.css";
const HeaderBar = () => {
  return (
    <header>
      <div className="header-sectionsLink">
        <a href="./#section1">Page1</a>
        <a href="./#section2">Page2</a>
        <a href="./#section3">Page3</a>
      </div>
    </header>
  );
};

export default HeaderBar;
