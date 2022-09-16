import React, { useState } from "react";

//import style
import "./PracticesCard3.scss";

//import data
import PracticesData from "../../Practices/PracticesData.json";

// import components
import Modal from "../../UI/Modal/Modal";

//import image
import Tictactoe from "../../../images/tictactoe.png";
import TictactoeGame from "../PracticesCard/Tictactoe/Tictactoe";
import Calculator from "../PracticesCard/Calculator/Calculator";

const PracticesCard3 = (props) => {
  //original state
  const [showModal, setShowModal] = useState(false);
  const PracticesCards = {
    tictactoe: TictactoeGame,
    calculator: Calculator,
  };

  //methodes
  function renderCard() {
    if (typeof PracticesCards[data.component] !== "undefined") {
      return React.createElement(PracticesCards[data.component], {
        key: data.id,
      });
    }
  }

  return (
    <div className="practices-card">
      <div className="title">
        <h3>{props.title}</h3>
      </div>
      <div className="practices-card-content">
        <img src={Tictactoe} alt="tictactoe" />
        <div className="practices-card-description">
          <p>{props.description}</p>
          <Modal
            showModal={showModal}
            setShowModal={setShowModal}
            title={props.title}
          >
            {PracticesData.map((data) => renderCard(data))}
          </Modal>
          <button onClick={() => setShowModal(!showModal)}>Start !</button>
        </div>
      </div>
    </div>
  );
};

export default PracticesCard3;
