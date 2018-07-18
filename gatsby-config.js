module.exports = {
  plugins: [
    'gatsby-plugin-typescript',
    'gatsby-plugin-react-helmet',
    'gatsby-plugin-netlify-cache',
    {
      resolve: 'gatsby-plugin-styled-components',
      options: { displayName: false },
    },
    'gatsby-plugin-netlify',
  ],
}
