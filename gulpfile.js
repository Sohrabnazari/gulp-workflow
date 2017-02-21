var gulp            = require('gulp'),
    browserify      = require('gulp-browserify'),
    gutil           = require('gulp-util'),
    connect         = require('gulp-connect'),
    gulpif          = require('gulp-if'),
    concat          = require('gulp-concat'),
    imagemin        = require('gulp-imagemin'),
    pngquant        = require('imagemin-pngquant'),
    sass            = require('gulp-sass'),
    autoprefixer    = require('gulp-autoprefixer'),
    sourcemaps      = require('gulp-sourcemaps'),
    minifyCSS       = require('gulp-minify-css'),
    uglifyJS        = require('gulp-uglify');
  


var jsSources,
    sassSources,
    htmlSources,
    env,
    outputDir;


env = process.env.NODE_ENV || 'development';


if( env === 'development') {
    outputDir = 'builds/development/';
} else {
    outputDir = 'builds/production/';
}


jsSources = [
  'components/scripts/lib.js',
  'components/scripts/common.js',
  'components/scripts/home.js',
  'components/scripts/header.js',
  'components/scripts/slider.js'
];

sassSources = [ 'components/sass/style.scss' ];

htmlSources = [ 'components/*.html' ];

buildfiles = [ 
    'builds/development/*',
    'builds/production/*',
 ];


gulp.task( 'default', [  'html', 'sass',  'js', 'connect', 'watch' ]);




gulp.task('js', function() {
  gulp.src( jsSources )
      .pipe( concat( 'script.js' ) )
      .pipe( browserify() )
      .pipe( gulpif( env === 'production', uglifyJS() ) )  
      .pipe( gulp.dest( outputDir + 'js/' ) )
      .pipe( connect.reload() )
});



gulp.task('sass', function() {
  gulp.src( sassSources )
    .pipe( sourcemaps.init({ loadMaps: true }) )
      .pipe( sass().on('error', sass.logError) )
      .pipe( autoprefixer() )
    .pipe( gulpif( env === 'production', minifyCSS() ) )
    .pipe (sourcemaps.write('./') )
    .pipe( gulp.dest( outputDir + 'css' ) ) 
    .pipe( connect.reload() ) 
})




gulp.task( 'html', function(){
    gulp.src( htmlSources )
      //  .pipe( gulpif( env === 'production', minifyHTML() ) )  
        .pipe( gulp.dest( outputDir ) ) 
        .pipe( connect.reload() ) 
});



gulp.task( 'image', function(){
    gulp.src( 'components/images/**/*.*' )
        .pipe( gulpif( env === 'production', imagemin() ) )  
        .pipe( gulp.dest( outputDir + 'images') ) 
        .pipe( connect.reload() ) 
});



gulp.task( 'connect', function() {
    connect.server({
      root: outputDir,
      livereload: true
    });
});



gulp.task( 'watch', function() {
    gulp.watch( jsSources, [ 'js' ] );
    gulp.watch( 'components/sass/*.scss', [ 'sass' ] );
    gulp.watch( htmlSources, [ 'html' ] );
   // gulp.watch( 'components/images/**/*.*', [ 'image' ] );
});



var clean = require('gulp-clean');
 
gulp.task('clean', function() {
  return gulp.src( buildfiles, {read: false} )
    .pipe( clean() );
});