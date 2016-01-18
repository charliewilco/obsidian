const gulp = require('gulp');
const del  = require('del');
const paths = require('./paths');

gulp.task('clean', () => {
  return del(paths.build);
});
gulp.task('logo', () => {
  return gulp.src(paths.logo)
    .pipe(gulp.dest(paths.build));
});

gulp.task('styles', require('./tasks/css'));
gulp.task('lint', require('./tasks/lint'));
gulp.task('connect', require('./tasks/connect'));
gulp.task('handlebars', ['logo'], require('./tasks/handlebars'));

gulp.task('watch', ()=> {
  gulp.watch([paths.cssSrc, paths.cssLib], ['styles', 'lint']);
  gulp.watch([paths.testSrc, paths.partials + '*'], ['handlebars']);
});

gulp.task('build', ['clean', 'handlebars', 'styles']);
gulp.task('default', ['build', 'connect', 'watch']);
