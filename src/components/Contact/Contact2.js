import React from "react";
import { StaticImage } from "gatsby-plugin-image";

//import style
import "./Contact2.scss";

const Contact = () => {
  return (
    <div id="contact" className="contact">
      <h2>Contact</h2>
      <div className="icons">
        <a href="mailto:thomas.viaules@gmail.com" className="icon">
          <StaticImage
            src="../../images/gmail.png"
            alt="Gmail"
            placeholder="tracedSVG"
            className="photo"
          />
        </a>
        <a
          target="blank_"
          href="https://github.com/Thomas-wagon"
          className="icon"
        >
          <StaticImage
            src="../../images/github.png"
            alt="Github"
            placeholder="tracedSVG"
            className="photo"
          />
        </a>
        <a
          target="blank_"
          href="https://www.linkedin.com/in/thomas-viaules/"
          className="icon"
        >
          <StaticImage
            src="../../images/linkedin.png"
            alt="Linkedin"
            placeholder="tracedSVG"
            className="photo"
          />
        </a>
      </div>
    </div>
  );
};

export default Contact;
