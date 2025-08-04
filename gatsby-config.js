module.exports = {
  siteMetadata: {
    title: `Bruno Parga - Web Developer`,
    description: `Personal portfolio page of Bruno Parga, web developer and coding bootcamp instructor`,
    author: `Bruno Parga`,
    siteUrl: `https://brunoparga.net`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/static`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
  ],
} 