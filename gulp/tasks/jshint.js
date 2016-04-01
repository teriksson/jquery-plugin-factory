var fs = require('fs'),
	config = JSON.parse(fs.readFileSync('./gulp/config.json')),
	gulp = require('gulp'),
	jshint = require('gulp-jshint'),
	notify = require('gulp-notify');

gulp.task('jshint', function() {
	return gulp.src(config.srcPath + 'scripts/**/*.js')
		.pipe(jshint('.jshintrc'))
		.pipe(jshint.reporter('default'))
		.pipe(notify({ message: 'Scripts task complete' }));
});
