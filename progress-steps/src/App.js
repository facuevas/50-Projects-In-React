import { React, useState } from "react";
import "./App.css";

const App = () => {
  const [index, setIndex] = useState(1);

  return (
    <div className="App">
      <div className="container">
        <div className="progress-container">
          <div className="progress" id="progress"></div>
          <div className="circle active">1</div>
          <div className="circle">2</div>
          <div className="circle">3</div>
          <div className="circle">4</div>
        </div>
        <button className="btn" id="prev" disabled={false}>
          Prev
        </button>
        <button className="btn" id="next">
          Next
        </button>
      </div>
    </div>
  );
};

export default App;
