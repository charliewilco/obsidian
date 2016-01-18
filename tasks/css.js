const gulp         = require('gulp');
const rename       = require('gulp-rename');
const postcss      = require('gulp-postcss');
const size         = require('gulp-size');
const cssnext      = require('postcss-cssnext');
const strip        = require('postcss-strip-units');
const partials     = require('postcss-partial-import');
const atImport     = require('postcss-import');
const not          = require('postcss-selector-not');
const autoprefixer = require('autoprefixer');
const nano         = require('cssnano');
const bs           = require('browser-sync').create();
const paths        = require('../paths');

const mainProcessors = [
  atImport,
  autoprefixer({ browsers: ['last 2 version'] }),
  not,
  cssnext,
  partials,
  strip,
  nano({ mergeRules: false }),
];

module.exports = () => {
  return gulp.src(paths.cssSrc)
    .pipe(postcss(mainProcessors))
    .pipe(rename('bundle.css'))
    .pipe(gulp.dest(paths.build))
    .pipe(size({ gzip: true, pretty: true }))
    .pipe(bs.stream());
};
