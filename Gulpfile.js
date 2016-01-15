const gulp         = require('gulp');
const size         = require('gulp-size');
const rename       = require('gulp-rename');
const postcss      = require('gulp-postcss');
const autoprefixer = require('autoprefixer');
const nano         = require('cssnano');
const cssnext      = require('postcss-cssnext');
const strip        = require('postcss-strip-units');
const partials     = require('postcss-partial-import');
const atImport     = require('postcss-import');
const not          = require('postcss-selector-not');
const reporter     = require('postcss-reporter');
const stylelint    = require('stylelint');
const bs           = require('browser-sync').create();

const lintconfig = require('./stylelint.config');

const mainProcessors = [
  atImport,
  autoprefixer({ browsers: ['last 2 version'] }),
  not,
  cssnext,
  partials,
  strip,
  nano({ mergeRules: false }),
];

const linters = [
  stylelint({ rules: lintconfig.rules }),
  reporter({ clearMessages: true }),
];

const allProcessors = mainProcessors.concat(linters);

gulp.task('styles', ()=> {
  return gulp.src('./*.css')
    .pipe(postcss(mainProcessors))
    .pipe(rename('bundle.css'))
    .pipe(gulp.dest('./dest/'))
    .pipe(size({ gzip: true, pretty: true }))
    .pipe(bs.stream());
});

gulp.task('lint', ()=> {
  return gulp.src(['./index.css', './lib/**/*.css'])
    .pipe(postcss(linters));
});

gulp.task('connect', ()=> {
  bs.init({
    server: {
      baseDir: './dest'
    }
  });
});

gulp.task('html', ()=> {
  return gulp.src('./test/index.html')
    .pipe(gulp.dest('./dest/'))
    .pipe(bs.stream());
});

gulp.task('watch', ()=> {
  gulp.watch(['./*.css', './lib/**/*.css'], ['styles', 'lint']);
  gulp.watch('./test/index.html', ['html']);
});

gulp.task('build', ['html', 'styles']);
gulp.task('default', ['build', 'connect', 'watch']);
