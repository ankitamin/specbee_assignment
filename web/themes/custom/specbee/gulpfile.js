const gulp = require("gulp");
const sass = require('gulp-sass')(require('sass'));
const autoprefixer = require('gulp-autoprefixer');
const sourcemaps = require('gulp-sourcemaps');
const scsslint = require('gulp-scss-lint');
const concat = require('gulp-concat');
const connect = require('gulp-connect');
const cache = require('gulp-cache');

function scsstocss() {
  return gulp.src('scss/**/*.scss')
    .pipe(sourcemaps.init())
    .pipe(sass({ outputStyle: 'compressed' }).on('error', sass.logError))
    .pipe(autoprefixer('last 2 version'))
    .pipe(concat('style.min.css'))
    .pipe(sourcemaps.write('./'))
    .pipe(gulp.dest('./build/css'))
    .pipe(connect.reload());
}

function lintScss() {
  return gulp.src('scss/**/*.scss')
    .pipe(scsslint({
      configFile: '.sass-lint.yml',
    }))
    .pipe(scsslint.failReporter());
}
lintScss.description = 'Lints all SCSS files.';

const style = gulp.series(lintScss, scsstocss);

function cacheclean(done) {
  return cache.clearAll(done);
}

function watch() {
  gulp.watch('scss/**/*.scss', gulp.series(style));
}

gulp.task('scsstocss', scsstocss);
gulp.task('style', style);
gulp.task('cacheclean', cacheclean);
gulp.task('watch', watch);

gulp.task('default', gulp.series(style, watch));
