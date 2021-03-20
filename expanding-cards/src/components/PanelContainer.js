import { React, useState } from "react";

//CSS imports
import "./PanelContainer.css";

// Components imports
import Panel from "./Panel";

const panels = [
  {
    imageURL:
      "https://images.unsplash.com/photo-1612533923019-b532b3131212?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
    imageTitle: "Explore The World",
    isActive: true,
  },
  {
    imageURL:
      "https://images.unsplash.com/photo-1508459855340-fb63ac591728?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=934&q=80",
    imageTitle: "Waterfall Rock",
    isActive: false,
  },
  {
    imageURL:
      "https://images.unsplash.com/photo-1611458181887-e4a588329222?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=1267&q=80",
    imageTitle: "Loch Raven Reservoir Bridge",
    isActive: false,
  },
  {
    imageURL:
      "https://images.unsplash.com/photo-1612534335151-1b6d8c588003?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=934&q=80",
    imageTitle: "Winter Landscape",
    isActive: false,
  },
  {
    imageURL:
      "https://images.unsplash.com/photo-1612318024487-155dcc020a52?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=934&q=80",
    imageTitle: "Pink and Blue Divide",
    isActive: false,
  },
];

const PanelContainer = () => {
  const [panelState, setPanelState] = useState(panels);

  const updatePanels = () => {
    setPanelState(panels);
  };

  useState(() => {}, [updatePanels]);
  return (
    <div className="panel-container" onClick={updatePanels}>
      {panelState &&
        panels.map((panel, index) => {
          return (
            <Panel
              key={index}
              imageURL={panel.imageURL}
              title={panel.imageTitle}
              panelState={panel.isActive}
            />
          );
        })}
    </div>
  );
};

export default PanelContainer;
