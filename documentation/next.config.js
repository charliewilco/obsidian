const withTypescript = require('@zeit/next-typescript');
const withMDX = require('@zeit/next-mdx')({
  extension: /\.mdx?$/
});

const withCSS = require('@zeit/next-css');

const raw = {
  test: /\.txt$/,
  use: 'raw-loader'
};

module.exports = withTypescript(
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
