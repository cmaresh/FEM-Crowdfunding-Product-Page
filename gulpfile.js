const gulp = require('gulp');
const gulp_sass = require('gulp-sass');
const browser_sync = require('browser-sync').create();

function sass() {
  return gulp.src('./scss/*.scss')
    .pipe(gulp_sass())
    .pipe(gulp.dest('.'))
    .pipe(browser_sync.stream());
}

function sync() {
  browser_sync.init({
    server: {
        baseDir: "./"
    }
  });
}

function watch() {
  gulp.watch('./scss/*.scss', { ignoreInitial: false }, sass);
}

exports.default = gulp.parallel(sync, watch);