// GULP DEPENDENCIES & PLUGINS
var gulp = require('gulp'),
    jade = require('gulp-jade'),
    stylus = require('gulp-stylus'),
    prefixer = require('gulp-autoprefixer'),
    mincss = require('gulp-minify-css'),
    jshint = require('gulp-jshint'),
    stylish = require('jshint-stylish'),
    uglify = require('gulp-uglify'),
    concat = require('gulp-concat'),
    imagemin = require('gulp-imagemin'),
    pngcrush = require('imagemin-pngcrush'),
    rename = require('gulp-rename'),
    clean = require('gulp-clean'),
    newer = require('gulp-newer'),
    filesize = require('gulp-filesize'),
    totalsize = require('gulp-size'),
    notify = require('gulp-notify'),
    browserSync = require('browser-sync');

// PATHS TO FOLDERS
var html_src = 'dev/templates/*.jade',
    html_dest = 'public/',
    css_src = 'dev/styl/*.styl',
    css_dest = 'public/css/',
    js_src = 'dev/js/*.js',
    js_dest = 'public/js/',
    img_src = 'dev/images/*',
    img_dest = 'public/images/';

// HTML
gulp.task('html', function() {
    return gulp.src(html_src)
        .pipe(newer(html_dest))
        .pipe(jade())
        .pipe(filesize())
        .pipe(gulp.dest(html_dest));
});

// CSS
gulp.task('css', function() {
    return gulp.src(css_src)
        .pipe(newer(css_dest))
        .pipe(stylus())
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
gulp.task('js', function() {
    return gulp.src('dev/js/main.js')
    	.pipe(newer(js_dest))
        .pipe(jshint())
        .pipe(jshint.reporter(stylish))
        .pipe(concat('custom.min.js'))
        .pipe(uglify())
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
gulp.task('totalsize', function() {
    return gulp.src('public/**/*')
        .pipe(totalsize());
});

// WATCH
gulp.task('watch', function() {
    gulp.watch(html_src, ['html']);
    gulp.watch(css_src, ['css']);
    gulp.watch(js_src, ['js']);
    gulp.watch(img_src, ['img']);
    gulp.watch('public/**/*', ['totalsize']);
});

// BROWSER SYNC
gulp.task('sync', function() {
    browserSync.init('public/**/*', {
        server: {
            baseDir: 'public/'
        }
    });
});

// DEFAULT
gulp.task('default', ['html', 'css', 'js', 'img', 'watch', 'sync']);
