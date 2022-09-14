import React from "react";
import "./404.scss";
import "../styles/styles.scss";

// import images
import Oglake from "../images/og_lake.png";

// using Gatsby Head API to pimp my pages Head : https://www.gatsbyjs.com/docs/reference/built-in-components/gatsby-head/
export const Head = () => (
  <>
    <meta charSet="utf-8" />
    <title>Thomas Viaules - 404</title>
    <link rel="canonical" href="https://www.thomasviaules.com/" />
    <meta property="og:title" content="Thomas Viaules - 404" />
    <meta property="og:type" content="website" />
    <meta property="og:url" content="https://www.thomasviaules.com/" />
    <meta
      property="og:description"
      content="thomas viaules - I'm a web developer based in Montreal. Sorry, but this page is not working at the moment"
    />
    <meta property="og:image" content={Oglake} />
  </>
);

const NotFoundPage = () => (
  <div className="not-found">
    <h1>Ooops!</h1>
    <h2>404 - PAGE NOT FOUND</h2>
    <p>
      The page you are looking for might have been removed, had its name changed
      or is temporarily unavailable.
    </p>
  </div>
);

export default NotFoundPage;
