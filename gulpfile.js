'use strict';
var path = require('path');
var DEST_FOLDER = path.join(__dirname, 'public', 'dist');
var gulp = require('gulp');
var webpack = require('gulp-webpack');
var browserSync = require('browser-sync');

gulp.task('webpack-dev', function() {
  return gulp.src('./entry.js')
    .pipe(webpack(require('./webpack.config.js')))
    .pipe(gulp.dest(path.join(DEST_FOLDER, 'js')))
});

gulp.task('browser-sync', function() {
    browserSync.init(['./public/dist/css/**.*', './public/dist/js/**.*'], {
        proxy: 'localhost:3000'
      });
});

gulp.task('default', ['webpack-dev', 'browser-sync']);
