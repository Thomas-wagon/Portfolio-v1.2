import React, { useState } from "react";

// import styles
import "./Navbar.scss";
import "./Burger.scss";

// component
const Navbar = () => {
  // original state
  const [isOpen, setIsOpen] = useState(false);

  //component return
  return (
    <div className={`navbar ${isOpen ? "open" : ""}`}>
      <div className="logo">
        <span className="thomas">thomas</span>
        <span className="viaules">viaules</span>
        <p>web developer</p>
      </div>
      <div className="list">
        <ul>
          <li>
            <a
              href="#home"
              onClick={() => {
                setIsOpen(false);
              }}
            >
              home
            </a>
          </li>
          <li>
            <a
              href="#about"
              onClick={() => {
                setIsOpen(false);
              }}
            >
              about
            </a>
          </li>
          <li>
            <a
              href="#projects"
              onClick={() => {
                setIsOpen(false);
              }}
            >
              projects
            </a>
          </li>
          <li>
            <a
              href="#practices"
              onClick={() => {
                setIsOpen(false);
              }}
            >
              practices
            </a>
          </li>
          <li>
            <a
              href="#contact"
              onClick={() => {
                setIsOpen(false);
              }}
            >
              contact
            </a>
          </li>
        </ul>
      </div>
      <span
        className="burger"
        onClick={() => {
          setIsOpen(!isOpen);
        }}
        onKeyDown={() => {
          setIsOpen(!isOpen);
        }}
      >
        <i></i>
        <i></i>
        <i></i>
      </span>
    </div>
  );
};

export default Navbar;
