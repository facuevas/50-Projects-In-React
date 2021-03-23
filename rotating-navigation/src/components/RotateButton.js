import { React, useState } from "react";

// CSS Imports
import "./css/RotateButton.css";

const RotateButton = ({ parentCallback }) => {
  const [showNav, setShowNav] = useState(false);

  const openClick = () => {
    console.log(showNav + "in child");
    setShowNav(!showNav);
    parentCallback(showNav);
  };

  const closeClick = () => {
    console.log(showNav + "in child");

    setShowNav(!showNav);
    parentCallback(showNav);
  };

  return (
    <div className="circle-container">
      <div className="circle">
        <button id="close" onClick={closeClick}>
          <i className="fas fa-times"></i>
        </button>
        <button id="open" onClick={openClick}>
          <i className="fas fa-bars"></i>
        </button>
      </div>
    </div>
  );
};

export default RotateButton;
