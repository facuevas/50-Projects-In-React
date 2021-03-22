import React from "react";

//CSS
import "./css/Navigation.css";
const Navigation = () => {
  return (
    <nav>
      <ul>
        <li>
          <i className="fas fa-home">Home</i>
          <i className="fas fa-user-alt">About</i>
          <i className="fas fa-envelope">Contact</i>
        </li>
      </ul>
    </nav>
  );
};

export default Navigation;
