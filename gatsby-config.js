module.exports = {
  siteMetadata: {
    siteUrl: "https://hkjc-members-portal.netlify.app",
    title: "HKJC Members' Portal",
    description: "This site uses Gatsby for development",
    author: "@derekchan88",
  },
  plugins: [
    "gatsby-plugin-sass",
    "gatsby-plugin-image",
    "gatsby-plugin-react-helmet",
    "gatsby-plugin-sitemap",
    {
      resolve: "gatsby-plugin-manifest",
      options: {
        icon: "src/images/icon_PORTAL_sample.png",
        name: `HKJC Members' Portal`,
        short_name: `Portal`,
        start_url: `/`,
        background_color: `#FFF`,
        theme_color: `#1D314F`,
        display: `standalone`,
      },
    },
    "gatsby-plugin-mdx",
    "gatsby-plugin-sharp",
    "gatsby-transformer-sharp",
    
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "images",
        path: "./src/images/",
      },
      __key: "images",
    },
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "pages",
        path: "./src/pages/",
      },
      __key: "pages",
    },
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "mock",
        path: "./src/mock/",
      },
      __key: "mock",
    },
    "gatsby-plugin-remove-serviceworker",
  ],
};
