const tailwindcss = require('tailwindcss');
// const path = require('path');
const autoprefixer = require('autoprefixer');

module.exports = ({ tailwindConfig = `${__dirname}/tailwind.config.js` }) => {
  return {
    plugins: [
      `gatsby-plugin-react-helmet`,
      `gatsby-plugin-emotion`,
      {
        resolve: `gatsby-plugin-postcss`,
        options: {
          postCssPlugins: [tailwindcss(tailwindConfig), autoprefixer]
        }
      },
      {
        resolve: `gatsby-plugin-purgecss`,
        options: {
          tailwind: true,
          purgeOnly: [`src/css/tailwind.css`]
        }
      }
    ]
  };
};
