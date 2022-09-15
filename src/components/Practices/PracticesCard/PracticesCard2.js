import React, { useState } from "react";

//import style
import "./PracticesCard2.scss";

// import components
import Modal from "../../UI/Modal/Modal";
import TictactoeGame from "../PracticesCard/Tictactoe/Tictactoe";

//import image
import Tictactoe from "../../../images/tictactoe.png";

const PracticesCard2 = (props) => {
  //original state
  const [showModal, setShowModal] = useState(false);

  return (
    <div className="practices-card">
      <div className="title">
        <h3>{props.title}</h3>
      </div>
      <div className="practices-card-content">
        <div
          className="image"
          style={{
            backgroundImage: `url('images/${props.image}')`,
          }}
        ></div>
        <div className="practices-card-description">
          <p>{props.description}</p>
          {props.children}
          <button onClick={() => setShowModal(!showModal)}>Start !</button>
        </div>
      </div>
      <div className="practices-card-content">
        <img src={Tictactoe} alt="sliding puzzle" />
        <div className="practices-card-description">
          <p>{props.description}</p>
          <Modal>
            <TictactoeGame />
          </Modal>
          <button onClick={() => setShowModal(!showModal)}>Start !</button>
        </div>
      </div>
    </div>
  );
};

export default PracticesCard2;
