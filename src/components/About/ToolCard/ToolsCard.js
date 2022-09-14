import React from "react";
import "./ToolsCard.scss";

const ToolsCard = (props) => {
  return (
    <div className="tool-type">
      <div className="title">
        <h3>{props.toolType}</h3>
      </div>
      <div className="icons">{props.children}</div>
    </div>
  );
};

export default ToolsCard;
