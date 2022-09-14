import React from "react";
import "./Player.scss";

const Player = ({ player, activePlayer, changed }) => {
  return (
    <div
      className={`player ${activePlayer === player.id ? "active" : ""}`}
      key={`player-${player.id}`}
    >
      <input type="text" onChange={changed} value={player.name} />
      <div className="identity">
        <img src={player.sign} alt="sign" />
      </div>
      <p>score : {player.score}</p>
    </div>
  );
};

export default Player;
