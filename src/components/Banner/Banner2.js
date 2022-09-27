import React from "react";
import "./Banner2.scss";
import { StaticImage } from "gatsby-plugin-image";

const Banner = () => {
  return (
    <div id="home" className="banner">
      <StaticImage
        src="../../images/lake.png"
        alt="lake"
        placeholder="tracedSVG"
        className="hero"
      />
    </div>
  );
};

export default Banner;
