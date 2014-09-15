// name: "Workflow"
// description: "Workflow Framework"
// author: "Shak Daniel <web.designs@me.com>"
// url: "https://github.com/shakdaniel/Flow.git"

'use strict';

// Include Gulp, Plugins & Tools.
var gulp        = require('gulp'),
    prefix      = require('gulp-autoprefixer'),
    rimraf      = require('gulp-rimraf'),
    concat      = require('gulp-concat'),
    filesize    = require('gulp-filesize'),
    imagemin    = require('gulp-imagemin'),
    jade        = require('gulp-jade'),
    stylus      = require('gulp-stylus'),
    mincss      = require('gulp-minify-css'),
    jshint      = require('gulp-jshint'),
    stylish     = require('jshint-stylish'),
    uglify      = require('gulp-uglify'),
    rename      = require('gulp-rename'),
    newer       = require('gulp-newer'),
    totalsize   = require('gulp-size'),
    notify      = require('gulp-notify'),
    pngcrush    = require('imagemin-pngcrush'),
    browserSync = require('browser-sync');

// Paths to Folders.
var html_src = 'dev/templates/*.jade',
    html_dest = 'public/',
    css_src = 'dev/styles/*.styl',
    css_dest = 'public/css/',
    js_src = 'dev/scripts/*.js',
    js_dest = 'public/js/',
    img_src = 'dev/images/*',
    img_dest = 'public/imgs/';

// Browsers to Autoprefix.
var browsers = [
    'ie >= 10',
    'ie_mob >= 10',
    'ff >= 30',
    'chrome >= 34',
    'safari >= 7',
    'opera >= 23',
    'ios >= 7',
    'android >= 4.4',
    'bb >= 10'
];

// HTML
/*
gulp.task('html', function() {
    return gulp.src(html_src)
        .pipe(newer(html_dest))
        .pipe(jade())
        .pipe(filesize())
        .pipe(gulp.dest(html_dest));
});*/
gulp.task('html', function() {
    return gulp.src(html_src)
        .pipe(jade())
        .pipe(filesize())
        .pipe(gulp.dest(html_dest));
});

// CSS
gulp.task('css', function() {
    return gulp.src(css_src)
        .pipe(newer(css_dest))
        .pipe(stylus())
        .pipe(prefix('last 5 version', '> 1%', 'ie 8', 'ie 7', {
            cascade: true
        }))
        .pipe(mincss())
        .pipe(rename({
            suffix: '.min'
        }))
        .pipe(filesize())
        .pipe(gulp.dest(css_dest));
});

// JS hint
gulp.task('jshint', function() {
    return gulp.src(js_src)
        .pipe(jshint())
        .pipe(jshint.reporter(stylish));
});

// JS
gulp.task('jsconcat', function() {
    return gulp.src(['dev/scripts/main.js'])
        .pipe(newer(js_dest))
        .pipe(concat('custom.min.js'))
        .pipe(uglify())
        .pipe(filesize())
        .pipe(gulp.dest(js_dest));
});

// JS COMPRESS
gulp.task('js', function() {
    return gulp.src(js_src)
        .pipe(newer(js_dest))
        .pipe(uglify({
            mangle: false
        }))
        .pipe(rename({
            suffix: '.min'
        }))
        .pipe(filesize())
        .pipe(gulp.dest(js_dest));
});

// IMAGES
gulp.task('img', function() {
    return gulp.src(img_src)
        .pipe(newer(img_dest))
        .pipe(imagemin({
            optimizationLevel: 5,
            progressive: true,
            interlaced: true,
            use: [pngcrush()]
        }))
        .pipe(filesize())
        .pipe(gulp.dest(img_dest));
});

// FILE SIZES
gulp.task('size', function() {
    return gulp.src('public/**/*')
        .pipe(totalsize());
});

// WATCH
gulp.task('watch', function() {
    gulp.watch('dev/templates/**/*', ['html']);
    gulp.watch('dev/styles/**/*', ['css']);
    gulp.watch('dev/scripts/**/*', ['js']);
    gulp.watch('dev/images/**/*', ['img']);
    gulp.watch('public/**/*', ['size']);
});

// BROWSER SYNC
gulp.task('sync', function() {
    browserSync.init('public/**/*', {
        server: {
            baseDir: 'public/'
        }
    });
});


// Default Task
gulp.task('default', ['html', 'css', 'js', 'img', 'watch', 'sync']);