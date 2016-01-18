const gulp         = require('gulp');
const handlebars   = require('gulp-compile-handlebars');
const rename       = require('gulp-rename');
const bs           = require('browser-sync').create();
const paths        = require('../paths');

const options = {
  ignorePartials: true,
  batch: [paths.partials]
};
const config = {
  base: './'
};

module.exports = () => {
  return gulp.src(paths.testSrc)
    .pipe(handlebars(config, options))
    .pipe(rename('index.html'))
    .pipe(gulp.dest(paths.build + '/'))
    .pipe(bs.stream());
};
