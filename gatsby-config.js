module.exports = {
  siteMetadata: {
    siteUrl: `https://www.thomasviaules.com/`,
  },
  plugins: [
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images/`,
      },
    },
    `gatsby-plugin-sass`,
    `gatsby-plugin-image`,
    `gatsby-plugin-sharp`,
    `gatsby-transformer-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: "Thomas Viaules - Portfolio",
        short_name: "thomas viaules",
        description: `thomas viaules - I'm a web developer based in Montreal, welcome to my portfolio`,
        start_url: `/`,
        background_color: `#F7F3EB`,
        theme_color: `#F7F3EB`,
        display: `standalone`,
        icon: `src/images/my_logo.png`,
        crossOrigin: `use-credentials`,
      },
    },
  ],
};
