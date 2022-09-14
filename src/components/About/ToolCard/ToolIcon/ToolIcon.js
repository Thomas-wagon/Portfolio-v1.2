import React from "react";
import "./ToolIcon.scss";

//import tippy pluggin & style
import Tippy from "@tippyjs/react";
import "tippy.js/dist/tippy.css";
import "tippy.js/animations/scale.css";

const ToolIcon = (props) => {
  return (
    <Tippy animation={"scale"} content={props.toolTip} classname="tooltip">
      <div
        className="icon"
        style={{
          backgroundImage: `url('images/${props.toolIcon}')`,
        }}
      ></div>
    </Tippy>
  );
};

export default ToolIcon;
