module.exports = {
  siteMetadata: {
    title: `Mariam's Cake`,
    description: `A little custom cakes and cupcakes shop.`,
    author: `bahnasawy`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: "gatsby-plugin-react-svg",
      options: {
        rule: {
          include: /svgs/, // See below to configure properly
        },
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `mariams-cake`,
        short_name: `mariams-cake`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
      },
    },
    {
      resolve: `gatsby-alias-imports`,
      options: {
        aliases: {
          "@components": `src/components`,
          "@svgs": `src/svgs`,
          "@imgs": `static/images`,
        },
      },
    },
  ],
}
