const postcss = require("postcss");
const path = require("path");
const chalk = require("chalk");
const gs = require("gzip-size");
const pretty = require("pretty-bytes");

module.exports = postcss.plugin("postcss-gzip", opts => {
  opts = opts || {};

  return function(root, result) {
    const size = gs.sync(root.toString());

    let gzipSize = pretty(size);
    let ungzipSize = path.relative(process.cwd(), result.opts.to);

    console.log(`${chalk.blue(ungzipSize)} --> ${chalk.red(gzipSize)}`);
  };
});
