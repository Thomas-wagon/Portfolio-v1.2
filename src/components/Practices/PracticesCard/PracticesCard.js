import React, { useState } from "react";

//import style
import "./PracticesCard.scss";

// import components
import Modal from "../../UI/Modal/Modal";
import TictactoeGame from "../PracticesCard/Tictactoe/Tictactoe";

//import image
import Tictactoe from "../../../images/tictactoe.png";

const PracticesCard = (props) => {
  //original state
  const [showModal, setShowModal] = useState(false);

  //methodes

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
            <TictactoeGame showModal={showModal} />
          </Modal>
          <button onClick={() => setShowModal(!showModal)}>Start !</button>
        </div>
      </div>
    </div>
  );
};

export default PracticesCard;
