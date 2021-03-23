import React from "react";

//CSS
import "./css/Navigation.css";
const Navigation = () => {
  return (
    <nav>
      <ul>
        <li>
          <i className="fas fa-home">Home</i>
        </li>
        <li>
          <i className="fas fa-user-alt">About</i>
        </li>
        <li>
          <i className="fas fa-envelope">Contact</i>
        </li>
      </ul>
    </nav>
  );
};

export default Navigation;
