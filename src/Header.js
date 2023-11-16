import React from "react";
import "./headers.css";

const Header = () => {
  return (
    <header className="header">
      <div className="container">
        <h1 className="header-title animate__animated animate__fadeInDown">
          ClimaCast
        </h1>
        <p className="header-subtitle animate__animated animate__fadeInUp">
          Stay Ahead of the Weather
        </p>
      </div>
    </header>
  );
};

export default Header;
