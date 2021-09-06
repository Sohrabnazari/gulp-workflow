// Gulp.js configuration

// include gulp and plugins
var
	autoprefixer	= require('gulp-autoprefixer'),
	babel 			= require('gulp-babel'),
	clean         	= require('gulp-clean'),
	concat          = require('gulp-concat'),
	connect         = require('gulp-connect'),
	cssnano 		= require('cssnano'),
	del 			= require('del'),
	gulp            = require('gulp'),
	gulpbrowserify  = require('gulp-browserify'),
	gulpif          = require('gulp-if'),
	gulpprint       = require('gulp-print'),
	gutil           = require('gulp-util'),
	htmlclean 		= require('gulp-htmlclean'),
	jscs            = require('gulp-jscs'),
	jshint          = require('gulp-jshint'),
	newer 			= require('gulp-newer'),
	notify          = require('gulp-notify'),
	pkg 			= require('./package.json'),
	plumber 		= require('gulp-plumber'),
	postcss 		= require('gulp-postcss'),
	preprocess 		= require('gulp-preprocess'),
	rucksack 		= require('rucksack-css'),
	sass            = require('gulp-sass'),
	size 			= require('gulp-size'),
	sourcemaps 		= require('gulp-sourcemaps'),
	uglify 			= require('gulp-uglify'),
	watchify        = require('watchify'),

	// get argument from cli
	args = require('yargs').argv,

	// react and es6
	browserify = require('browserify'),
	babelify = require('babelify'),
	vinylSource = require('vinyl-source-stream'),

	//var uglify = require('uglify');
	browserSync = require('browser-sync').create(),
	reload = browserSync.reload;





// file locations
var
	devBuild = ((process.env.NODE_ENV || 'development').trim().toLowerCase() !== 'production'),

	source = 'source/',
	dest = 'output/',

	html = {
		input: source + '*.html',
		watch: [ source + '*.html', source + 'template/**/*' ],
		output: dest,
		context: {
			devBuild: devBuild,
			author: pkg.author,
			version: pkg.version
		}
	},

	images = {
		input: source + 'images/*.*',
		output: dest + 'images/'
	},

	css = {
		input: source + 'scss/main.scss',
		watch: [source + 'scss/**/*'],
		output: dest + 'css/',
		sassOpts: {
			outputStyle: 'nested',	//compressed
			imagePath: '../images',
			precision: 8,
			errLogToConsole: true
		},
    	cssnanoOpts: {
		    discardComments: {
			       removeAll: false
		    }
		}
	},

	fonts = {
		input: source + 'fonts/*.*',
		output: dest + 'fonts/'
	};

	js = {
		input: source + 'javascript/*.*',
		output: dest + 'javascript/'
	};



// show build type
console.log(pkg.name + ' ' + pkg.version + ', ' + (devBuild ? 'development' : 'production') + ' build');


// clean the build folder
gulp.task('clean', function() {
	del( [dest + '*'] );
});



// build HTML files
gulp.task('html', function() {
	var page = gulp.src(html.input)
					.pipe( preprocess({ context: html.context }) );

	if (!devBuild) {
		page = page
			.pipe(size({ title: 'HTML in' }))
			.pipe(htmlclean())
			.pipe(size({ title: 'HTML out' }));
	}
	return page
			.pipe( gulp.dest(html.output) )
			.pipe( connect.reload() );
	 
});


// manage images
gulp.task('images', function() {
	return gulp.src( images.input )
		.pipe( newer(images.output) )
		.pipe( gulp.dest(images.output) )
		.pipe( connect.reload() );
});

// copy fonts
gulp.task('fonts', function() {
	return gulp.src( fonts.input )
		.pipe( newer(fonts.output) )
		.pipe( gulp.dest(fonts.output) );
});



// Copy and minify javascript files
gulp.task('js', function () {
	return gulp.src( js.input )
	// .pipe(plumber(function(error) {
	// 	gutil.log(gutil.colors.green(error.message));
	// 	this.emit('end');
	// }))
//  .pipe( concat( 'script.js' ) )
	.pipe( browserify() )
	.pipe( babel({ 

		presets: ["es2015", "stage-0"],
	
		}))
	.pipe( newer(js.output) )
	.pipe( size({ title: 'JS in ' }) )
	.pipe( gulpif(!devBuild, uglify()) )
	.pipe( size({ title: 'JS out ' }) )
	.pipe( gulp.dest(js.output) )
	.pipe( connect.reload() );
})


// compile Sass
gulp.task('sass', function() {
	return gulp.src( css.input )
		.pipe( size({title: 'SCSS in '}) )
  		.pipe( sass(css.sassOpts).on('error', sass.logError) )
		.pipe( sass(css.sassOpts) )
  		.pipe( postcss([ // ask peyman why commented the cssnano
			  rucksack(),
			   /* cssnano(css.cssnanoOpts) */ 
			]) )
		.pipe( autoprefixer("last 10 version", "> 1%", "ie 8") )
		.pipe( sourcemaps.write() )
		.pipe( size({ title: 'CSS out ' }) )
		.pipe( gulp.dest( css.output ) )
		.pipe( connect.reload() ) ;
});


gulp.task( 'connect', function() {
    connect.server({
      root: dest,
      livereload: true
    });
});


// default tasks
gulp.task('default', gulp.series('html', 'sass', 'images', 'fonts', 'js', 'connect', function(){

	gulp.watch( html.watch, ['html'] );
	gulp.watch( css.watch, ['sass'] );
	gulp.watch( js.input, ['js'] );
	gulp.watch( images.input, ['images'] );
	gulp.watch( fonts.input, ['fonts'] );

}));
