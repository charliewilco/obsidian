/* eslint-disable */

const bs    = require('browser-sync').create();
const paths = require('../paths');

module.exports = ()=> {
  bs.init({
    server: {
      baseDir: paths.build
    }
  });
};
