module.exports = {
  siteMetadata: {
    title: `Przemyslaw Sipta`,
    description: `Przemyslaw Sipta front-end developer portfolio.`,
    author: `@gatsbyjs @PrzemekSipta`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Przemyslaw Sipta Frontend Developer`,
        short_name: `Przemyslaw Sipta`,
        start_url: `/`,
        background_color: `#FAFAFA`,
        theme_color: `#D7B377`,
        display: `minimal-ui`,
        icon: `src/images/icon.png`, // This path is relative to the root of the site.
      },
    },
    `gatsby-plugin-sass`,
    `gatsby-plugin-smoothscroll`,
    {
      resolve: `gatsby-plugin-google-fonts`,
      options: {
        fonts: [
          `Catamaran`,
          `Jura`,
          `Podkova`,
          `Sarabun`,
          `source sans-serif serif\:300,400,400i,700` // you can also specify font weights and styles
        ],
        display: 'swap'
      },
    },
    {
      resolve: `gatsby-plugin-offline`,
      options: {
        precachePages: [`/`],
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
