require("dotenv").config({
  path: `.env.${process.env.NODE_ENV}`,
});

const contentfulConfig = {
  spaceId: process.env.CONTENTFUL_SPACE_ID,
  accessToken: process.env.CONTENTFUL_ACCESS_TOKEN,
};

if (process.env.CONTENTFUL_HOST) {
  contentfulConfig.host = process.env.CONTENTFUL_HOST;
  contentfulConfig.accessToken = process.env.CONTENTFUL_PREVIEW_ACCESS_TOKEN;
}

const { spaceId, accessToken } = contentfulConfig;

if (!spaceId || !accessToken) {
  throw new Error(
    "Contentful spaceId and the access token need to be provided. Received: " +
      JSON.stringify(contentfulConfig)
  );
}

// starter config
module.exports = {
  siteMetadata: {
    title: "Camist",
    description:
      "Elevate Your Brand with Expert Videography offering: EDITING, SOCIAL MEDIA, DOCUMENTARIES, MUSIC VIDEOS, VIDEO PRODUCTION",
    siteUrl: `https://camist.co.uk`,
  },
  plugins: [
    {
      resolve: "gatsby-plugin-sitemap",
    },
    {
      resolve: `gatsby-theme-landing-page`,
      options: contentfulConfig,
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Gatsby Starter Landing Page`,
        short_name: `Gatsby Starter Landing Page`,
        start_url: `/`,
        background_color: `#fff`,
        theme_color: `#000`,
        display: `browser`,
        icon: `src/assets/gatsby-monogram.png`,
      },
    },
  ],
};
