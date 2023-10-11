// LoadingAnimation.js
import React from "react";
import "./load.css"; // Import the CSS file for styling
import logo from "../../assets/1.svg";

const LoadingAnimation = () => {
  return (
    <div className="loading-container">
      <div className="loading-spinner">
        <img src={logo} alt="logo-spinner" />
      </div>
    </div>
  );
};

export default LoadingAnimation;
