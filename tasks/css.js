const gulp         = require('gulp');
const rename       = require('gulp-rename');
const nano         = require('gulp-cssnano');
const postcss      = require('gulp-postcss');
const size         = require('gulp-size');
const cssnext      = require('postcss-cssnext');
const partials     = require('postcss-partial-import');
const atImport     = require('postcss-import');
const not          = require('postcss-selector-not');
const autoprefixer = require('autoprefixer');
const bs           = require('browser-sync').create();
const paths        = require('../paths');

const processors = [
  atImport,
  autoprefixer({ browsers: ['last 2 version'] }),
  not,
  cssnext,
  partials
];

module.exports = () => {
  return gulp.src(paths.cssSrc)
    .pipe(postcss(processors))
    .pipe(rename('bundle.css'))
    .pipe(nano({
      mergeRules: false,
    }))
    .pipe(gulp.dest(paths.build))
    .pipe(size({ gzip: true, pretty: true }))
    .pipe(bs.stream());
};
