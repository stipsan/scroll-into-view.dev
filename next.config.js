const withTypescript = require('@zeit/next-typescript')
const ForkTsCheckerWebpackPlugin = require('fork-ts-checker-webpack-plugin')

module.exports = withTypescript({
  assetPrefix: process.env.DOCS ? require('../package.json').homepage : '',
  exportPathMap() {
    return {
      '/': { page: '/' },
    }
  },
  webpack: function(config, { dev, isServer }) {
    // Do not run type checking twice
    if (isServer) {
      config.plugins.push(new ForkTsCheckerWebpackPlugin())
    }

    return config
  },
})
