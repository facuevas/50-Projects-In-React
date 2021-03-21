import React from "react";

// CSS Imports
import "./css/RotateButton.css";

const RotateButton = () => {
  return (
    <div className="container">
      <div className="circle">
        <button id="close">
          <i className="fas fa-times"></i>
        </button>
        <button id="open">
          <i className="fas fa-bars"></i>
        </button>
      </div>
    </div>
  );
};

export default RotateButton;
