// GULP DEPENDENCIES & PLUGINS
// gulp: 			node task runner
// jade: 			compile jade into html files
// stylus: 			compile stly into css files
// nib: 			cross-browser css3 mixins
// prefixer: 		sets missing browser prefixes
// mincss: 			minify css files
// jshint: 			debug js files
// stylish: 		make jshint style pretty
// uglify: 			minify js files
// concat: 			merge all js files into one file
// rename: 			chanage file names
// size: 			logs sizes in readable strings
// changed: 		pass only changed files
// imagemin:        minify png jpeg gif svg files
// pngcrush: 		lossless or bit-depth reduction
// cache: 			compress only changed images
// notify:          send notification messages
// plumber:         disable plugin interuptions
// watch:           watch files in an endless stream
// livereload:      used for livereload
// browsersync: 	live css reload & browser syncing
var gulp = require('gulp'),
    changed = require('gulp-changed'),
    jade = require('gulp-jade'),
    stylus = require('gulp-stylus'),
    nib = require('nib'),
    prefixer = require('gulp-autoprefixer'),
    mincss = require('gulp-minify-css'),
    jshint = require('gulp-jshint'),
    stylish = require('jshint-stylish'),
    uglify = require('gulp-uglify'),
    concat = require('gulp-concat'),
    rename = require('gulp-rename'),
    size = require('gulp-filesize'),
    imagemin = require('gulp-imagemin'),
    pngcrush = require('imagemin-pngcrush'),
    cache = require('gulp-cache'),
    notify = require('gulp-notify'),
    plumber = require('gulp-plumber'),
    watch = require('gulp-watch'),
    livereload = require('gulp-livereload'),
    browsersync = require('browser-sync');
// PATHS TO FOLDERS
var paths = {
    html_src: 'dev/templates/**/*.jade',
    html_dest: 'public/',
    css_src: 'dev/styl/**/*.styl',
    css_dest: 'public/css/',
    js_src: 'dev/js/**/*.js',
    js_dest: 'public/js/',
    img_src: 'dev/images/**/*',
    img_dest: 'public/images'
};
// HTML
gulp.task('html', function() {
    gulp.src(paths.html_src)
        .pipe(changed(paths.html_dest, {
            extension: '.html'
        }))
        .pipe(jade())
        .pipe(gulp.dest(paths.html_dest))
        .pipe(size());
});
// CSS
gulp.task('css', function() {
    gulp.src(paths.css_src)
        .pipe(changed(paths.css_dest, {
            extension: '.css'
        }))
        .pipe(stylus({
            use: nib()
        }))
        .pipe(prefixer('last 16 versions', '> 1%', 'ie 8', 'ie 9', 'ios 6', 'android 4'))
        .pipe(gulp.dest(paths.css_dest))
        .pipe(rename({
            suffix: '.min'
        }))
        .pipe(mincss())
        .pipe(gulp.dest(paths.css_dest))
        .pipe(size());
});
// JS
gulp.task('js', function() {
    gulp.src(paths.js_src)
        .pipe(changed(paths.js_dest))
        .pipe(jshint())
        .pipe(jshint.reporter(stylish))
        .pipe(concat('all.js'))
        .pipe(gulp.dest(paths.js_dest))
        .pipe(uglify())
        .pipe(rename({
            suffix: '.min'
        }))
        .pipe(gulp.dest(paths.js_dest))
        .pipe(size());
});
// IMAGES
gulp.task('img', function() {
    gulp.src(paths.img_src)
        .pipe(changed(paths.img_dest))
        .pipe(cache(imagemin({
            optimizationLevel: 7,
            progressive: true,
            interlaced: true,
            use: [pngcrush()]
        })))
        .pipe(gulp.dest(paths.img_dest))
        .pipe(size());
});
// FILE SIZES
gulp.task('size', function() {
    gulp.src(['public/**/*', 'public'])
        .pipe(size());
});
// BROWSER SYNC
gulp.task('sync', function() {
    browsersync.init([
        'public/**/*'
    ], {
        proxy: {
            host: 'localhost',
            port: '2368'
        }
    });
});
// WATCH
gulp.task('watch', function() {
    gulp.watch(paths.html_src, ['html'])
    gulp.watch(paths.css_src, ['css'])
    gulp.watch(paths.js_src, ['js'])
    gulp.watch(paths.img_src, ['img']);
});
// DEFAULT
gulp.task('default', ['html', 'css', 'js', 'img', 'size', 'sync', 'watch']);
