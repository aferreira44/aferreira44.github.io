var gulp = require('gulp');
var del = require('del')
var webserver = require('gulp-webserver');

gulp.task('cleanVendor', () => {
  return del([
    'app/vendor'
  ])
})

// Copy third party libraries from /node_modules into /vendor
gulp.task('vendor', ['cleanVendor'], () => {
  // Font Awesome
  gulp.src([
      './bower_components/Font-Awesome/svg-with-js/js/fontawesome-all.min.js'
    ])
    .pipe(gulp.dest('app/vendor/font-awesome'))
})

gulp.task('serve', ['vendor'], function () {
  gulp.src('app')
    .pipe(webserver({
      livereload: {
        enable: true
      },
      directoryListing: false,
      open: true
    }));
});