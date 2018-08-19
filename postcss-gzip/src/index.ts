import * as postcss from 'postcss'
import chalk from 'chalk'
const path = require("path");

const gs = require("gzip-size");
const pretty = require("pretty-bytes");

module.exports = postcss.plugin("postcss-gzip", (opts: any) => {
  opts = opts || {};

  return function(root: postcss.Root, result: postcss.Result) {
    const size = gs.sync(root.toString());

    let gzipSize = pretty(size);
    let ungzipSize = path.relative(process.cwd(), result.opts.to);

    console.log(`${chalk.blue(ungzipSize)} --> ${chalk.red(gzipSize)}`);
  };
});
