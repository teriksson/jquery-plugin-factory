var gulp = require('gulp');

gulp.task('default', function() {
	gulp.start('jshint', 'scripts', 'watch');
});