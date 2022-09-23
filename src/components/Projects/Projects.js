import React from "react";
import "./Projects.scss";
import { StaticImage } from "gatsby-plugin-image";

const Projects = () => {
  return (
    <div id="projects" className="projects">
      <h2>Projects</h2>
      <div id="selector" className="card right">
        <StaticImage
          src="../../images/leohnart.png"
          alt="Leonartmusic.com"
          placeholder="tracedSVG"
          className="photo"
        />
        <div className="text">
          <h3>Leohnart - fevrier 2021</h3>
          <p>
            For my very first project after school, I had the chance to build
            the new website of the artist LEOHNART!
          </p>
          <p>
            We were looking for something easy to handle and update, offering
            the artist the chance to introduce him-self, expose is work and play
            his music to the world. This project's been really exciting and
            instructive to work on, as I handled it entirely, from the design to
            the development; and as we decided to build it using Worldpress.
            This strategy would give to LEOHNART the ownership of his website
            after my job's done, Worldpress being user-friendly enough when it
            will be time for him to upload new albums or new tracks.
          </p>
          <a target="blank_" href="https://leohnartmusic.com/">
            view site
          </a>
        </div>
      </div>
      <div id="selector" className="card left">
        <StaticImage
          src="../../images/portfolio.png"
          alt="My portfolio"
          placeholder="tracedSVG"
          className="photo"
        />
        <div className="text">
          <h3>My Portfolio - Septembre 2020</h3>
          <p>
            I have designed my own portfolio on Figma, and built it as a single
            page application with the static-site generator Gatsby.
          </p>
          <p>
            I plan to improve its aesthetics as I progress with CSS, javascript,
            React and pluggins libraries, by regularly adding new effects and
            animations here and there.
          </p>
          <a target="blank_" href="https://github.com/Thomas-wagon/Portfolio">
            view source
          </a>
        </div>
      </div>
      <div id="selector" className="card right">
        <StaticImage
          src="../../images/yummy.png"
          alt="Yummy Palette"
          placeholder="tracedSVG"
          className="photo"
        />
        <div className="text">
          <h3>Yummy Palette - July 2020</h3>
          <p>
            Are you looking for a restaurant which offers only authentic exotic
            dishes, faithful to the local cuisine ? you found this little place
            that offers this typical dish from your locality and you want to
            share this place with the world ? Yummy palette is a web application
            where you’ll be able to find and recommend only those places that
            offers authentic dishes.
          </p>
          <a target="blank_" href="https://youtu.be/_FQoOiv5nJM?t=1415">
            see demo here
          </a>
          <p>
            This MVP has been designed, implemented and shipped to production in
            10 days, using Ruby On Rails and MVC architecture (model, view,
            controller), as my final project for Le Wagon coding bootcamp
          </p>
          <a target="blank_" href="https://www.yummypaletteapp.com/">
            <span>the app is on maintenance currently</span>
          </a>
          <span className="link"> / </span>
          <a
            target="blank_"
            href="https://github.com/jmh-xposures/Yummy_Palette"
          >
            view source
          </a>
        </div>
      </div>
    </div>
  );
};

export default Projects;
