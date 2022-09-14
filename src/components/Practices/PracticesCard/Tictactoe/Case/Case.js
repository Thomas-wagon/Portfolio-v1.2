import React from "react";
import "./Case.scss";

const Case = ({ lacase, onClick }) => {
  return (
    <div
      key={lacase.position}
      onClick={onClick}
      onKeyDown={onClick}
      className={`case ${
        lacase.player === 1 ? "is-p1" : lacase.player === 2 ? "is-p2" : ""
      }`}
    ></div>
  );
};

export default Case;
