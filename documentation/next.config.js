const { PHASE_PRODUCTION_SERVER } =
  process.env.NODE_ENV === 'development'
    ? {}
    : !process.env.NOW_REGION
      ? require('next/constants')
      : require('next-server/constants');

const raw = {
  test: /\.txt$/,
  use: 'raw-loader'
};

const webpack = config => {
  config.module.rules.push(raw);
  return config;
};

module.exports = (phase, { defaultConfig }) => {
  if (phase === PHASE_PRODUCTION_SERVER) {
    // Config used to run in production.

    return {
      pageExtensions: ['js', 'jsx', 'mdx'],
      webpack
    };
  }
  // ✅ Put the require call here.

  const withCSS = require('@zeit/next-css');
  const withTypescript = require('@zeit/next-typescript');
  const withMDX = require('@zeit/next-mdx')({
    extension: /\.mdx?$/
  });

  return withTypescript(
    withCSS(
      withMDX({
        pageExtensions: ['js', 'jsx', 'mdx'],
        webpack
      })
    )
  );
};
