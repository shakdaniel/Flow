/******************************************************
GULP DEPENDENCIES & PLUGINS
*******************************************************/
// gulp:            node task runner
// clean:           removes files/folders
// jade:            compile jade into html files
// stylus:          compile stly into css files
// autoprefixer:    sets missing browser prefixes
// minifycss:       minify css files
// jshint:          debug js files
// stylish:         make jshint style pretty
// uglify:          minify js files
// concat:          merge all js files into one file
// rename:          chanage file names
// filesize:        logs sizes in readable strings
// changes:         pass only changed files
// imagemin:        minify png jpeg gif svg files
// notify:          send notification messages
// plumber:         disable plugin interuptions
// watch:           watch files in an endless stream
// livereload:      used for livereload
// browsersync:     live css reload & browser syncing

var gulp = require('gulp'),
  clean = require('gulp-clean'),
  jade = require('gulp-jade'),
  stylus = require('gulp-stylus'),
  autoprefixer = require('gulp-autoprefixer'),
  minifycss = require('gulp-minify-css'),
  jshint = require('gulp-jshint'),
  stylish = require('jshint-stylish'),
  uglify = require('gulp-uglify'),
  concat = require('gulp-concat'),
  rename = require('gulp-rename'),
  filesize = require('gulp-filesize'),
  changed = require('gulp-changed'),
  imagemin = require('gulp-imagemin'),
  notify = require('gulp-notify'),
  plumber = require('gulp-plumber'),
  watch = require('gulp-watch'),
  livereload = require('gulp-livereload'),
  browserSync = require('browser-sync');



gulp.task('default', function() {
  // place code for your default task here
});
