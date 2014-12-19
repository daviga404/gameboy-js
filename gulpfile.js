var gulp   = require('gulp'),
    coffee = require('gulp-coffee'),
    uglify = require('gulp-uglify'),
    gutil  = require('gulp-util'),
    concat = require('gulp-concat');

var coffeeSciptSrc = [
    // TODO
];

// Build CoffeeScript files into ./build/
gulp.task('scripts', function() {
    return gulp.src(coffeeSciptSrc)
        .pipe(coffee({ bare: true })).on('error', gutil.log)
        .pipe(concat('gameboyjs.js'))
        .pipe(uglify())
        .pipe(gulp.dest('./build/js/'));
});

// Copy HTML to ./build/
gulp.task('html', function() {
    return gulp.src('./src/index.html')
        .pipe(gulp.dest('./build/'));
});

// Watch for changes
gulp.task('watch', function() {
    gulp.watch(coffeeSciptSrc, ['scripts']);
});

gulp.task('build', ['scripts', 'html']);
gulp.task('default', ['build', 'watch']);