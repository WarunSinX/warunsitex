module.exports = {
  siteMetadata: {
    title: `WarunSiteX`,
    description: `Warun Singhal is a simple man who love to code.`,
    author: `warunsinx`,
  },
  plugins: [
    {
      resolve: `gatsby-plugin-scroll-reveal`,
      options: { threshold: 1, once: true },
    },
    `gatsby-plugin-smoothscroll`,
    `gatsby-plugin-postcss`,
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-plugin-google-fonts`,
      options: {
        fonts: [`roboto mono\:400,700`],
        display: "swap",
      },
    },
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
        name: `Warun Singhal | WarunSiteX`,
        short_name: `warunsitex`,
        start_url: `/`,
        background_color: `#121117`,
        theme_color: `#fa8231`,
        display: `minimal-ui`,
        icon: `src/images/wicon.png`, // This path is relative to the root of the site.
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
