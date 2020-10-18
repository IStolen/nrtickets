/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.com/docs/gatsby-config/
 */

module.exports = {
  siteMetadata: {
    title: `NR tickets`,
    description: 'Get tickets from Norwegian Rails'
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Norwegian Rail`,
        short_name: `NR`,
        start_url: `/`,
        background_color: `#255839`,
        theme_color: `#255839`,
        display: `standalone`,
        icon: `src/images/nricon.png`, 
      },
    },   
    `gatsby-plugin-material-ui`,
    {
      resolve: `gatsby-plugin-google-fonts`,
      options: {
        fonts: [
          `Roboto`,
          `source sans pro\:300,400,400i,700` 
        ],
        display: 'swap'
      }
    }
  ]
}
