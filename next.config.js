const withTypescript = require('@zeit/next-typescript');

module.exports = withTypescript({
  assetPrefix: process.env.DOCS ? require('../package.json').homepage : '',
  exportPathMap() {
    return {
      '/': { page: '/' },
    };
  },
});
