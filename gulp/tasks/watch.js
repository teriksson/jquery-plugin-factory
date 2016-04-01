var fs = require('fs'),
	config = JSON.parse(fs.readFileSync('./gulp/config.json')),
	gulp = require('gulp');

gulp.task('watch', function() {
	// Watch scripts
	gulp.watch(config.srcPath + 'scripts/**/*.js', ['jshint', 'scripts']);
});
