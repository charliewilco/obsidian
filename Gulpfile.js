var gulp         = require('gulp');
var size         = require('gulp-size');
var rename       = require('gulp-rename');
var minify       = require('gulp-cssmin');
var postcss      = require('gulp-postcss');
var autoprefixer = require('gulp-autoprefixer');
var cssnext      = require('gulp-cssnext');
var atImport     = require('postcss-import');
var not          = require('postcss-selector-not');
var bs           = require('browser-sync').create();

gulp.task('styles', function() {
  var processors = [
    atImport,
    not
  ];
  return gulp.src('./*.css')
    .pipe(postcss(processors))
    .pipe(cssnext({
      compress: true,
      features: {
        pixrem: false
      }
    }))
    .pipe(autoprefixer({browsers: ['last 2 version']}))
    .pipe(rename('bundle.css'))
    .pipe(gulp.dest('./dest/'))
    .pipe(size())
    .pipe(bs.stream());
});

gulp.task('styles:min', function() {
  var processors = [
    atImport,
    not
  ];
  return gulp.src('./*.css')
    .pipe(postcss(processors))
    .pipe(cssnext())
    .pipe(autoprefixer({browsers: ['last 2 version']}))
    .pipe(minify())
    .pipe(rename('bundle.css'))
    .pipe(gulp.dest('./dest/'))
    .pipe(size({ gzip: true }))
    .pipe(bs.stream());
});




gulp.task('connect', function() {
  bs.init({
    server: {
      baseDir: './dest'
    }
  });
});

gulp.task('html', function() {
  return gulp.src('./test/index.html')
  .pipe(gulp.dest('./dest/'))
    .pipe(bs.stream());
});


gulp.task('watch', function() {
  gulp.watch(['./*.css', './lib/**/*.css'], ['styles']);
  gulp.watch('./test/index.html', ['html']);
});

gulp.task('build', ['html', 'styles']);
gulp.task('default', ['build', 'connect', 'watch']);
