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
    // Raw for CDN
    .pipe(postcss([atImport]))
    .pipe(rename('obsidian.raw.css'))
    .pipe(gulp.dest(paths.dist))

    .pipe(postcss(processors))

    // Unminified in the CDN
    .pipe(rename('obsidian.css'))
    .pipe(gulp.dest(paths.dist))

    // Bundled for Testing
    .pipe(rename('bundle.css'))
    .pipe(size({ gzip: true, pretty: true }))
    .pipe(gulp.dest(paths.build))

    .pipe(nano({ mergeRules: false }))

    // Minified in the CDN
    .pipe(rename('obsidian.min.css'))
    .pipe(gulp.dest(paths.dist))

    .pipe(bs.stream());
};
