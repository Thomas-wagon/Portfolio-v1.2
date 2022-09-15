import React from "react";

//import style
import "./Practices.scss";

//import image
import ReactIcon from "../../images/react_no_bg.png";

//import components
import PracticesCard from "./PracticesCard/PracticesCard";

const Practices = () => {
  return (
    <div id="practices" className="practices">
      <h2>React Practices</h2>
      <div className="content">
        <img src={ReactIcon} alt="React" />
        <div className="text">
          <h3>Introduction</h3>
          <p>
            As learning programming is a matter of practicing and exercicing,
            I’ll use this section of my portfolio to expose all the little
            programs I’ll code to practice my skills in React. They should be
            most of the time interactives interfaces, that should pop up on your
            screen as modal when you click on their “START !” button.
          </p>
        </div>
      </div>
      <PracticesCard
        title="Tic Tac Toe"
        description="The player who succeeds in placing three of their marks in a
            horizontal, vertical, or diagonal row is the winner"
      ></PracticesCard>
    </div>
  );
};

export default Practices;
