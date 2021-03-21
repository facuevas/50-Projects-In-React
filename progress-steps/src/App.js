import { React, useState, useEffect } from "react";
import "./App.css";

const App = () => {
  const [current, setCurrent] = useState(1);
  const [prevBtnState, setPrevBtnState] = useState(true);
  const [nextBtnState, setNextBtnState] = useState(false);

  const decrementIndex = () => {
    setCurrent(current - 1);
  };

  const incrementIndex = () => {
    setCurrent(current + 1);
  };

  const updateButtonState = () => {
    if (current > 1 && current < 4) {
      setNextBtnState(false);
      setPrevBtnState(false);
    } else if (current === 1) {
      setPrevBtnState(true);
    } else if (current === 4) {
      setNextBtnState(true);
    }
  };

  const updateActiveCircles = () => {
    const circles = document.querySelectorAll(".circle");

    circles.forEach((circle, index) => {
      if (index < current) {
        circle.classList.add("active");
      } else {
        circle.classList.remove("active");
      }
    });

    const progressBar = document.getElementById("progress");

    progressBar.style.width = ((current - 1) / (4 - 1)) * 100 + "%";
  };

  useEffect(() => {
    updateButtonState();
    updateActiveCircles();
  });

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
        <button
          className="btn"
          id="prev"
          disabled={prevBtnState}
          onClick={decrementIndex}
        >
          Prev
        </button>
        <button
          className="btn"
          id="next"
          disabled={nextBtnState}
          onClick={incrementIndex}
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default App;
