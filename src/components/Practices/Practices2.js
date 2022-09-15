import React, { Component, useState } from "react";

//import style
import "./Practices2.scss";

//import image
import ReactIcon from "../../images/react_no_bg.png";

//import data
import PracticesData from "./PracticesData.json";

//import component
import PracticesCard2 from "./PracticesCard/PracticesCard2";
import Modal from "../../components/UI/Modal/Modal";
import TictactoeGame from "./PracticesCard/Tictactoe/Tictactoe";
import Calculator from "./PracticesCard/Calculator/Calculator";

const Practices2 = (props) => {
  //original state
  const [showModal, setShowModal] = useState(false);
  const componentNames = { tictactoe: TictactoeGame };
  var MappedComponent = componentNames[0];

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
      <div className="practices-list">
        {PracticesData.map((data) => {
          return (
            <PracticesCard2
              title={data.title}
              image={data.image}
              description={data.description}
            >
              {/* <Modal
              showModal={showModal}
              setShowModal={setShowModal}
              title={props.title}
            >
              <MappedComponent showModal={showModal} />
            </Modal> */}
            </PracticesCard2>
          );
        })}
      </div>
    </div>
  );
};

export default Practices2;
