import React from "react";

//import style
import "./About.scss";

//import data
import AboutData from "./AboutData.json";

//import components
import ToolsCard from "./ToolCard/ToolsCard";
import ToolIcon from "./ToolCard/ToolIcon/ToolIcon";

// import images and logo
import Thomas from "../../images/thomas.png";

const About = () => {
  return (
    <div id="about" className="about">
      <h2>About</h2>
      <div className="content">
        <div className="profil">
          <div className="card">
            <img className="photo" src={Thomas} alt="me" />
            <div className="text">
              <p>
                After 7 years working as an industrial designer, I wanted to
                renew myself and start learning web development by following the
                full Stack Web Development training offered by LE WAGON
                MONTREAL.
              </p>
              <a target="blank_" href="https://www.lewagon.com/">
                (www.lewagon.com)
              </a>
              <p>
                Today, while I continue to improve my skills on technos such as
                JavaScript (React), MySQL, Python or JAVA, thanks to the
                position of Web integrator that I have held since January 2021,
                I continue my learning journey working on personal projects, or
                taking courses on platforms such as CodeCademy, because I aspire
                to become a Web Developer eventually
              </p>
            </div>
          </div>
        </div>
        <div className="tools">
          {AboutData.map((data) => {
            return (
              <ToolsCard toolType={data.toolType}>
                {data.toolList.map((tool) => (
                  <ToolIcon toolTip={tool.toolTip} toolIcon={tool.toolIcon} />
                ))}
              </ToolsCard>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default About;
