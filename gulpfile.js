/******************************************************
GULP DEPENDENCIES & PLUGINS
*******************************************************/
// gulp:            node task runner
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

var paths = {
	jade_src: 'src/templates/**/*.jade',
	html_dest: 'builds/development',
	styl_src: 'src/styl/**/*.styl',
	css_dest: 'builds/development/css/',
	img_src: 'src/images/**'
}
gulp.task('jade', function() {
    return gulp.src(paths.jade_src)
        .pipe(jade())
        .pipe(gulp.dest(paths.html_dest));
});
gulp.task('stylus', function() {
    return gulp.src(paths.styl_src)
        .pipe(stylus())
        .pipe(gulp.dest(paths.css_dest));
});

gulp.task('default', ['jade', 'stylus']);







// var paths = {
// 	templates: "src/templates/**/*.jade" 
// 	styls: "src/styl/**/*.styl",
//     scripts: 'src/js/**/*.js',
//     images: 'src/images/**/*'
// };
// // Rerun the task when a file changes
// gulp.task('watch', function() {
//     gulp.watch(paths.scripts, ['scripts']);
//     gulp.watch(paths.images, ['images']);
// });

// // The default task (called when you run `gulp` from cli)
// gulp.task('default', ['watch']);



// var target = {
//     sass_src: 'scss/**/*.scss', // all sass files
//     css_dest: 'css', // where to put minified css
//     js_lint_src: [ // all js that should be linted
//         'js/build/app.js',
//         'js/build/custom/switch.js',
//         'js/build/custom/scheme-loader.js'
//     ],
//     js_uglify_src: [ // all js files that should not be concatinated
//         'js/build/custom/scheme-loader.js',
//         'js/build/vendor/modernizr.js'
//     ],
//     js_concat_src: [ // all js files that should be concatinated
//         'js/build/custom/switch.js',
//         'js/build/app.js'
//     ],
//     js_dest: 'js' // where to put minified js
// };
