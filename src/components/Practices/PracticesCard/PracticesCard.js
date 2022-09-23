import React from "react";
import { GatsbyImage, getImage } from "gatsby-plugin-image";

//import style
import "./PracticesCard.scss";

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
        <GatsbyImage
          image={getImage(image)}
          alt={title}
          placeholder="tracedSVG"
          className="photo"
        />
        {/* <img src={`../../../images/${image}`} alt={title} /> */}
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
