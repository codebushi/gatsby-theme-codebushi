const tailwindcss = require('tailwindcss');
const path = require('path');
const autoprefixer = require('autoprefixer');

module.exports = ({
  tailwindConfig = `${__dirname}/tailwind.config.js`,
  purgeCSS: { purgeOnly = [path.join(__dirname, 'src/css/tailwind.css')], content = [] } = {}
}) => {
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
          purgeOnly,
          content: [
            path.join(__dirname, 'src/**/!(*.d).{ts,js,jsx,tsx}'),
            path.join(process.cwd(), 'src/**/!(*.d).{ts,js,jsx,tsx}'),
            ...content
          ]
        }
      }
    ]
  };
};
