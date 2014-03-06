var gulp = require( 'gulp' );
var minifycss = require( 'gulp-minify-css' );

gulp.task( 'default', function() {
  gulp.src( './src/**/*.css' )
  .pipe( minifycss() )
  .pipe( gulp.dest( './public/css' ) );
});
