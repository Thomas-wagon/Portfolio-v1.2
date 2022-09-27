import React from "react";
import "./Banner.scss";

// import images
import Lake from "../../images/lake.png";

const Banner = () => {
  return (
    <div id="home" className="banner">
      <img src={Lake} alt="lake" />
    </div>
  );
};

export default Banner;
