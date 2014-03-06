var gulp = require( 'gulp' );
var minifycss = require( 'gulp-minify-css' );
var compass = require( 'gulp-compass' );

gulp.task( 'default', function() {
  gulp.src( './src/sass/**/*.{sass,scss}' )
  .pipe( compass({
    css: './public/css',
    sass : './src/sass'
  }) )
  .pipe( minifycss() )
  .pipe( gulp.dest( './public/css' ) );
});
