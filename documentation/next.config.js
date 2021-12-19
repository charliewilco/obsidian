const raw = {
  test: /\.txt$/,
  use: "raw-loader"
};

const withMDX = require("@next/mdx")();

const webpack = config => {
  config.module.rules.push(raw);
  return config;
};

module.exports = withMDX({
  pageExtensions: ["tsx", "js", "jsx", "mdx"],
  webpack
});
