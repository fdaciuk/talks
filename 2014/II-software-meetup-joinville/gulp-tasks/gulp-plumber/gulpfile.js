var gulp = require( 'gulp' );
var minifycss = require( 'gulp-minify-css' );
var compass = require( 'gulp-compass' );
var plumber = require( 'gulp-plumber' );

gulp.task( 'css', function() {
  gulp.src( './src/sass/**/*.{sass,scss}' )
  .pipe( plumber() )
  .pipe( compass({
    css: './public/css',
    sass : './src/sass'
  }) )
  .pipe( minifycss() )
  .pipe( gulp.dest( './public/css' ) );
});

gulp.task( 'default', function() {
  gulp.watch( './src/sass/**/*.{sass,scss}', [ 'css' ] );
});