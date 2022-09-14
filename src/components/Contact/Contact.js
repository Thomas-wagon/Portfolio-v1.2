import React from "react";
import "./Contact.scss";

//import image and icons
import Gmail from "../../images/gmail.png";
import Github from "../../images/github.png";
import Linkedin from "../../images/linkedin.png";

const Contact = () => {
  return (
    <div id="contact" className="contact">
      <h2>Contact</h2>
      <div className="icons">
        <a href="mailto:thomas.viaules@gmail.com" className="icon">
          <img src={Gmail} alt="Gmail" />
        </a>
        <a
          target="blank_"
          href="https://github.com/Thomas-wagon"
          className="icon"
        >
          <img src={Github} alt="Github" />
        </a>
        <a
          target="blank_"
          href="https://www.linkedin.com/in/thomas-viaules/"
          className="icon"
        >
          <img src={Linkedin} alt="Linkedin" />
        </a>
      </div>
    </div>
  );
};

export default Contact;
