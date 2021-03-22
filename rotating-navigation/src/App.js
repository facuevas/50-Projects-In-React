import { React, useState, useEffect } from "react";
import "./App.css";

// Components
import RotateButton from "./components/RotateButton";
import Article from "./components/Article";
import Navigation from "./components/Navigation";

const App = () => {
  const [showNav, setShowNav] = useState(false);

  const closeClick = () => {
    setShowNav(true);
  };

  const openClick = () => {
    setShowNav(false);
  };

  useEffect(() => {}, [showNav]);

  console.log(showNav);

  return (
    <div>
      <div className={`container ${showNav ? "show-nav" : ""}`}>
        <RotateButton openClick={openClick} closeClick={closeClick} />
        <Article />
      </div>
      <Navigation />
    </div>
  );
};

export default App;
