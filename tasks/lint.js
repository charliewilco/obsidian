const gulp       = require('gulp');
const postcss    = require('gulp-postcss');
const reporter   = require('postcss-reporter');
const bemLinter  = require('postcss-bem-linter');
const stylelint  = require('stylelint');
const paths      = require('../paths');

const linters = [
  stylelint(),
  bemLinter('bem'),
  reporter({ clearMessages: true }),
];

module.exports = () => {
  return gulp.src([paths.cssSrc, paths.cssLib])
    .pipe(postcss(linters));
};
