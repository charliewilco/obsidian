/* eslint-disable */

// TODO: Use stylelint's selector pattern and BEM linter
// TODO: KSSify documentation
// TODO: Consider moving to Gulp 4.0

const gulp         = require('gulp');
const rename       = require('gulp-rename');
const nano         = require('gulp-cssnano');
const postcss      = require('gulp-postcss');
const util         = require('gulp-util');
const sizereport   = require('gulp-sizereport');
const handlebars   = require('gulp-compile-handlebars');
const cssnext      = require('postcss-cssnext');
const atImport     = require('postcss-import');
const not          = require('postcss-selector-not');
const reporter     = require('postcss-reporter');
const bemLinter    = require('postcss-bem-linter');
const cssstats     = require('postcss-cssstats');
const doiuse       = require('doiuse');
const stylelint    = require('stylelint');
const bs           = require('browser-sync').create();
const del          = require('del');

const paths = require('./paths');

gulp.task('clean', () => {
  return del(paths.build);
});

gulp.task('logo', () => {
  return gulp.src(paths.logo)
    .pipe(gulp.dest(paths.build));
});

gulp.task('styles', () => {
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
    .pipe(gulp.dest(paths.build))

    .pipe(nano({ mergeRules: false }))

    // Minified in the CDN
    .pipe(rename('obsidian.min.css'))
    .pipe(gulp.dest(paths.dist))

    .pipe(bs.stream());
});


gulp.task('lint', () => {
  const linters = [
    stylelint(),
    bemLinter('bem'),
    reporter({ clearMessages: true }),
  ];

  return gulp.src([paths.cssSrc, paths.cssLib])
    .pipe(postcss(linters));
});


gulp.task('info', () => {
  return gulp.src('./dist/obsidian.min.css')
    .pipe(postcss([
      doiuse({ browsers: ['last 1 version'], ignore: ['rem'] }),
      cssstats((stats) => {
        const clr = util.colors;

        util.log(`${clr.yellow('Specificity:')} ${clr.red.bold(stats.averages.specificity)}`);
        util.log(`${clr.yellow('Rule Size:')} ${clr.red.bold(stats.averages.ruleSize)}`);
        util.log(`${clr.yellow('Number of Selectors:')} ${clr.red.bold(stats.aggregates.selectors)}`);
        util.log(`${clr.yellow('Number of Declarations:')} ${clr.red.bold(stats.aggregates.declarations)}`);
      })
    ]))
    .pipe(sizereport({
        gzip: true,
        '*': {
          'maxTotalGzippedSize': 10000
        },
    }));
});


gulp.task('handlebars', ['logo'], () => {
  const options = {
    ignorePartials: true,
    batch: [paths.partials]
  };

  const config = {
    base: './'
  };

  return gulp.src(paths.testSrc)
    .pipe(handlebars(config, options))
    .pipe(rename('index.html'))
    .pipe(gulp.dest(paths.build + '/'))
    .pipe(bs.stream());
});

gulp.task('connect', () => {
  return bs.init({
    server: {
      baseDir: paths.build
    }
  });
});


gulp.task('watch', ()=> {
  gulp.watch([paths.cssSrc, paths.cssLib], ['styles', 'lint']);
  gulp.watch([paths.testSrc, paths.partials + '*'], ['handlebars']);
});

gulp.task('build', ['clean', 'handlebars', 'styles']);
gulp.task('default', ['build', 'connect', 'watch']);
