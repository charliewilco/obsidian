const withMDX = require("@zeit/next-mdx")({
  extension: /\.mdx?$/
});

const withCSS = require("@zeit/next-css");

module.exports = withCSS(
  withMDX({
    pageExtensions: ["js", "jsx", "mdx"]
  })
);
