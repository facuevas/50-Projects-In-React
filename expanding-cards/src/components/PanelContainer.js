import { React, useState } from "react";

//CSS imports
import "./PanelContainer.css";

// Components imports
import Panel from "./Panel";

// url images
const imageURLS = [
  "https://images.unsplash.com/photo-1612533923019-b532b3131212?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
  "https://images.unsplash.com/photo-1508459855340-fb63ac591728?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=934&q=80",
  "https://images.unsplash.com/photo-1611458181887-e4a588329222?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=1267&q=80",
  "https://images.unsplash.com/photo-1612534335151-1b6d8c588003?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=934&q=80",
];

const imageTitles = [
  "Explore The World",
  "Waterfall Rock",
  "Loch Raven Reservoir Bridge",
  "Winter Landscape",
];

const activePanels = [true, false, false, false];

// picture titles

const PanelContainer = () => {
  const updatePanelStates = (e) => {
    if (e.target.classList.contains("panel")) {
      console.log(e.target);
    }
  };

  return (
    <div className="panel-container" onClick={updatePanelStates}>
      {imageURLS.map((imgURL, index) => {
        return (
          <Panel
            key={index}
            imageURL={imgURL}
            title={imageTitles[index]}
            panelState={activePanels[index]}
          />
        );
      })}
    </div>
  );
};

export default PanelContainer;
