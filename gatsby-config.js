module.exports = {
  plugins: [
    'gatsby-plugin-typescript',
    'gatsby-plugin-netlify-cache',
    'gatsby-plugin-purgecss',
    {
      resolve: 'gatsby-plugin-styled-components',
      options: { displayName: false },
    },
  ],
}
