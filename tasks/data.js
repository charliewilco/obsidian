/* eslint-disable */

const gulp       = require('gulp');
const gutil      = require('gulp-util');
const sizereport = require('gulp-sizereport');
const postcss    = require('gulp-postcss');
const reporter   = require('postcss-reporter');
const cssstats   = require('postcss-cssstats');
const doiuse     = require('doiuse');

module.exports = () => {
  return gulp.src('./dist/obsidian.min.css')
    .pipe(postcss([
      doiuse({ browsers: ['last 1 version'], ignore: ['rem'] }),
      cssstats((stats) => {
        gutil.log(`${gutil.colors.yellow('Specificity:')} ${gutil.colors.red.bold(stats.averages.specificity)}`);
        gutil.log(`${gutil.colors.yellow('Rule Size:')} ${gutil.colors.red.bold(stats.averages.ruleSize)}`);
        gutil.log(`${gutil.colors.yellow('Number of Selectors:')} ${gutil.colors.red.bold(stats.aggregates.selectors)}`);
        gutil.log(`${gutil.colors.yellow('Number of Declarations:')} ${gutil.colors.red.bold(stats.aggregates.declarations)}`);
      })
    ]))
    .pipe(sizereport({
        gzip: true,
        '*': {
          'maxTotalGzippedSize': 10000
        },
    }));
};
