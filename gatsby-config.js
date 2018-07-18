module.exports = {
  plugins: [
    'gatsby-plugin-typescript',
    'gatsby-plugin-react-helmet',
    {
      resolve: 'gatsby-plugin-styled-components',
      options: { displayName: false },
    },
    'gatsby-plugin-netlify',
  ],
}
