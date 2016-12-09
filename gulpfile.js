const gulp = require('gulp');

gulp.task('lint', function lintCssTask() {
  const gulpStylelint = require('gulp-stylelint');

  return gulp
    .src('styles/**/*.scss')
    .pipe(gulpStylelint({
      config: {
        extends: 'stylelint-config-standard'
      },
      reporters: [
        {formatter: 'verbose', console: true}
      ],
      failAfterError: false
  }));
});

gulp.task('lint-live', function lintCssLiveTask() {
  return gulp.watch('styles/**/*.scss', gulp.series('lint'));
});
