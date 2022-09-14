import React from "react";

import "./SlidingPuzzle.scss";

const SlidingPuzzle = () => {
  return (
    <div className="container">
      <div className="board">
        <div className="moves">
          <p>Moves</p>
          <p>counter of move</p>
        </div>
        <div className="timer">
          <p>Timer</p>
          <p>actual timer</p>
        </div>
      </div>
      <div className="puzzle"></div>
    </div>
  );
};

export default SlidingPuzzle;
