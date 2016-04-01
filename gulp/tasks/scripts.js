var fs = require('fs'),
	config = JSON.parse(fs.readFileSync('./gulp/config.json')),
	gulp = require('gulp'),
	uglify = require('gulp-uglify'),
	rename = require('gulp-rename'),
	concat = require('gulp-concat'),
	notify = require('gulp-notify');

gulp.task('scripts', function() {
	return gulp
		.src([
			config.srcPath + 'scripts/**/*.js'
		])
		.pipe(concat('jquery.' + config.packageName + '.js'))
		.pipe(gulp.dest(config.distPath + 'scripts'))
		.pipe(rename({suffix: '.min'}))
		.pipe(uglify())
		.on('error', function (err) {
			console.log(err.message);
			this.emit('end');
		})
		.pipe(gulp.dest(config.distPath + 'scripts'))
		.pipe(notify({ message: 'Scripts task complete' }))
		.on('error', function (err) {
			console.log(err.message);
			this.emit('end');
		});
});