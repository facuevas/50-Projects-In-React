import { React, useState } from "react";

// CSS imports
import "./Panel.css";

const Panel = ({ imageURL, title, panelState }) => {
  // useState that sets the panel either active or not
  const [panelActive, setPanelActive] = useState(panelState);

  // when the div is clicked, updatePanelActive
  const updatePanelActive = () => {
    setPanelActive(!panelActive);
    console.log(panelActive);
  };

  return (
    <div
      className={panelActive ? "panel active" : "panel"}
      style={{ backgroundImage: `url("${imageURL}")` }}
      onClick={updatePanelActive}
    >
      <h3>{title}</h3>
    </div>
  );
};

export default Panel;
