const gulp         = require('gulp');
const rename       = require('gulp-rename');
const nano         = require('gulp-cssnano');
const postcss      = require('gulp-postcss');
const size         = require('gulp-size');
const cssnext      = require('postcss-cssnext');
const atImport     = require('postcss-import');
const not          = require('postcss-selector-not');
const bs           = require('browser-sync').create();
const paths        = require('../paths');

const processors = [
  atImport,
  not,
  cssnext({
    browsers: ['last 2 version'],
    features: {
      rem: false,
    },
  }),
];

module.exports = () => {
  return gulp.src(paths.cssSrc)
    .pipe(postcss(processors))
    .pipe(rename('obsidian.css'))
    .pipe(gulp.dest(paths.dist))
    .pipe(rename('bundle.css'))
    .pipe(nano({ mergeRules: false }))
    .pipe(gulp.dest(paths.build))
    .pipe(rename('obsidian.min.css'))
    .pipe(gulp.dest(paths.dist))
    .pipe(size({ gzip: true, pretty: true }))
    .pipe(bs.stream());
};
