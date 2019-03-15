var gulp = require('gulp');
var sass = require('gulp-sass');
var autoprefixer = require('gulp-autoprefixer');
var browserSync = require('browser-sync').create();
var uglify = require('gulp-uglify');
var concat = require('gulp-concat');

gulp.task('serve', function() {
    browserSync.init({
        server: {
            baseDir: "./dist"
        }
    });
    browserSync.watch ('./dist', browserSync.reload)
});

gulp.task('js', function() {
    return gulp.src([
            'node_modules/jquery/dist/jquery.js',
            'node_modules/owl.carousel/dist/owl.carousel.min.js',
            'node_modules/masonry-layout/dist/masonry.pkgd.min.js',
            'src/js/**/*.js'
        ])
        .pipe(uglify())
        .pipe(concat('scripts.js'))
        .pipe(gulp.dest('./dist/js'));
});

gulp.task('sass', function(){
    return gulp.src('./src/styles/main.sass')
        .pipe(sass())
        .pipe(autoprefixer({
            browsers: ['last 2 versions'],
            cascade: false
        }))
        .pipe(gulp.dest('./dist/css'));
});

gulp.task('watch', function(){
    gulp.watch('./src/styles/**/*.sass', gulp.series('sass'));
    gulp.watch('./src/js/**/*.js', gulp.series('js'))
});

gulp.task('default', gulp.series(
    gulp.parallel('sass'),
    gulp.parallel('js'),
    gulp.parallel('serve', 'watch')
));
