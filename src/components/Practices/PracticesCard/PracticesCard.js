import React from "react";

//import style
import "./PracticesCard.scss";

//import images
import "../../../images/tictactoe.png";
import "../../../images/calculator.png";

const PracticesCard = ({ giveToCard, ...props }) => {
  const { id, title, image, description } = props.data;
  function buttonClicked() {
    giveToCard(id);
  }
  return (
    <div className="practices-card">
      <div className="title">
        <h3>{title}</h3>
      </div>
      <div className="practices-card-content">
        <img src={`../../../images/${image}.png`} alt={title} />
        <div className="practices-card-description">
          <p>{description}</p>
          {props.children}
          <button onClick={buttonClicked}>Start !</button>
        </div>
      </div>
    </div>
  );
};

export default PracticesCard;
