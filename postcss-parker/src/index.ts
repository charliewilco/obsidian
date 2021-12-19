import * as postcss from "postcss";
import * as fs from "fs";
const Parker = require("parker/lib/Parker");
const metrics = require("parker/metrics/All");

let defaultOptions = {
  outputFile: "./parker.json"
};

const parker = (options = {}): postcss.Plugin => {
  let opts = Object.assign({}, defaultOptions, options);
  return {
    prepare(result) {
      let reporter = new Parker(metrics);
      let results = reporter.run(result.css);

      let output = JSON.stringify(results, null, 2);

      fs.writeFile(opts.outputFile, output, (err: Error) => {
        if (err) throw err;
        console.log("The file has been saved!");
      });
      return {};
    },
    postcssPlugin: "postcss-parker"
  };
};

module.exports = parker;
