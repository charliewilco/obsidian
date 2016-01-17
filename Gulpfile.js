const gulp         = require('gulp');
const handlebars   = require('gulp-compile-handlebars');
const size         = require('gulp-size');
const rename       = require('gulp-rename');
const postcss      = require('gulp-postcss');
const cssnext      = require('postcss-cssnext');
const strip        = require('postcss-strip-units');
const partials     = require('postcss-partial-import');
const atImport     = require('postcss-import');
const not          = require('postcss-selector-not');
const reporter     = require('postcss-reporter');
const bemLinter    = require('postcss-bem-linter');
const autoprefixer = require('autoprefixer');
const nano         = require('cssnano');
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
  bemLinter('bem'),
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

gulp.task('logo', () => {
  return gulp.src('test/images/*.png')
    .pipe(gulp.dest('./dest/'));
});

gulp.task('handlebars', ['logo'], ()=> {
  const options = {
    ignorePartials: true,
    batch: ['./test/partials']
  };
  const config = {
    base: './'
  };
  return gulp.src('./test/index.hbs')
    .pipe(handlebars(config, options))
    .pipe(rename('index.html'))
    .pipe(gulp.dest('./dest/'))
    .pipe(bs.stream());
});

gulp.task('watch', ()=> {
  gulp.watch(['./*.css', './lib/**/*.css'], ['styles', 'lint']);
  gulp.watch(['./test/partials/*', './test/index.hbs'], ['handlebars']);
});

gulp.task('build', ['handlebars', 'styles']);
gulp.task('default', ['build', 'connect', 'watch']);
