import React, { useState } from "react";

//import style
import "./Practices.scss";

//import data
import PracticesData from "./PracticesData.json";

//import image
import ReactIcon from "../../images/react_no_bg.png";

//import component
import PracticesCard2 from "./PracticesCard/PracticesCard2";
import Modal from "../../components/UI/Modal/Modal";
import TictactoeGame from "./PracticesCard/Tictactoe/Tictactoe";

const Practices2 = (props) => {
  //original state
  const [showModal, setShowModal] = useState(false);

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
      {PracticesData.map((data) => {
        return (
          <PracticesCard2
            title={data.title}
            image={data.image}
            description={data.description}
          >
            <Modal title={props.title}>
              <TictactoeGame showModal={showModal} />
            </Modal>
          </PracticesCard2>
        );
      })}
    </div>
  );
};

export default Practices2;
