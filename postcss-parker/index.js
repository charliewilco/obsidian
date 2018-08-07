const postcss = require('postcss');
const fs = require('fs');
const Parker = require('parker/lib/Parker');
const metrics = require('parker/metrics/All');
const format = require('json-format');

let defaultOptions = {
  outputFile: './parker.json'
};

module.exports = postcss.plugin('postcss-parker', options => {
  let opts = Object.assign({}, defaultOptions, options);

  return function(root, result) {
    let reporter = new Parker(metrics);

    const { css } = root.toResult();

    let results = reporter.run(css);

    let output = format(results, { type: 'space', size: 2 });

    fs.writeFile(opts.outputFile, output, err => {
      if (err) throw err;
      console.log('The file has been saved!');
    });
  };
});
