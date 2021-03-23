import { React, useState, useEffect } from "react";
import "./App.css";

// Components
import RotateButton from "./components/RotateButton";
import Article from "./components/Article";
import Navigation from "./components/Navigation";

const App = () => {
  const [navState, setNavState] = useState(false);
  const callback = (showNav) => {
    setNavState(!showNav);
  };

  return (
    <div>
      <div className={`container ${navState ? "show-nav" : ""}`}>
        <RotateButton parentCallback={callback} />
        <Article />
      </div>
      <Navigation />
    </div>
  );
};

export default App;
