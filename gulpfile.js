const gulp = require('gulp');
const sass = require('gulp-sass');
const browserSync = require('browser-sync').create();
const webpack = require('webpack');

// Compile Sass
gulp.task('sass', function() {
  return gulp.src(['src/assets/scss/**/*.scss'])
    .pipe(sass())
    .on('error', function(error) {
      console.log(error.toString());
      this.emit('end');
    })
    .pipe(gulp.dest('src/dist/css'))
    .pipe(browserSync.stream());
});

// Compile JavaScript
gulp.task('js', (callback) => {
  return webpack(require('./webpack.config'), (error, stats) => {
    if(error) {
      console.log(error.toString());
    }

    console.log(stats.toString());
    callback();
  });
});

// Serve
gulp.task('serve',['sass', 'js'], () => {
  browserSync.init({
    notify: false,
    server: {
      baseDir: 'src'
    }
  });

  gulp.watch(['src/assets/scss/**/*.scss'], ['sass']);
  gulp.watch(['src/assets/js/**/*.js'], ['js']).on('change', browserSync.reload);
  gulp.watch(['src/*.html']).on('change', browserSync.reload);
});

gulp.task('default', ['serve']);