const raw = {
  test: /\.txt$/,
  use: 'raw-loader'
};

const withMDX = require('@next/mdx')();
const withCSS = require('@zeit/next-css');

const webpack = config => {
  config.module.rules.push(raw);
  return config;
};

module.exports = withCSS(
  withMDX({
    target: 'serverless',
    pageExtensions: ['tsx', 'js', 'jsx', 'mdx'],
    webpack
  })
);
