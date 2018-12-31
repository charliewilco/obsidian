const { PHASE_PRODUCTION_SERVER } =
  process.env.NODE_ENV === 'development'
    ? {}
    : !process.env.NOW
      ? require('next/constants')
      : require('next-server/constants');

module.exports = (phase, { defaultConfig }) => {
  const raw = {
    test: /\.txt$/,
    use: 'raw-loader'
  };

  if (phase === PHASE_PRODUCTION_SERVER) {
    // Config used to run in production.
    return {
      webpack(config) {
        config.module.rules.push(raw);

        return config;
      }
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
        webpack(config) {
          config.module.rules.push(raw);

          return config;
        }
      })
    )
  );
};
