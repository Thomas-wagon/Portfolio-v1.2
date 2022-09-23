import React, { useState } from "react";
import { StaticImage } from "gatsby-plugin-image";

//import style
import "./Practices.scss";

//import image
import ReactIcon from "../../images/react_no_bg.png";

//import component
import PracticesCard from "./PracticesCard/PracticesCard";
import Modal from "../UI/Modal/Modal";
import Tictactoe from "./PracticesCard/Tictactoe/Tictactoe";
import Calculator from "./PracticesCard/Calculator/Calculator";

const tile = [
  {
    id: 1,
    title: "Tic Tac Toe",
    challenge: Tictactoe,
    image: "tictactoe.png",
    description:
      "The player who succeeds in placing three of his marks in an horizontal, vertical, or diagonal row is the winner",
    program: "Tictactoe",
  },
  {
    id: 2,
    title: "Calculator",
    challenge: Calculator,
    image: "calculator.png",
    description:
      "customizable themed calculator. I found this little practice on the platform www.frontendmentor.io and challenged myself to code it and use it in my portfolio",
    program: "Calculator",
  },
];

const Practices = (props) => {
  //original state
  const [showModal, setShowModal] = useState(null);
  return (
    <div id="practices" className="practices">
      <h2>React Practices</h2>
      <div className="content">
        <StaticImage
          src="../../images/react_no_bg.png"
          alt="React"
          placeholder="tracedSVG"
          className="react"
        />
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
        {tile.map((data) => {
          const Challenge = data.challenge;
          return (
            <PracticesCard key={data.id} data={data} giveToCard={setShowModal}>
              {showModal === data.id && (
                <Modal onClose={() => setShowModal(null)} title={props.title}>
                  <Challenge />
                </Modal>
              )}
            </PracticesCard>
          );
        })}
      </div>
    </div>
  );
};

export default Practices;
