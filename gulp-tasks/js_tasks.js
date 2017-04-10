'use strict';

var gulp = require('gulp'),
    plugins = require("gulp-load-plugins")({
        pattern: ['gulp-*', 'gulp.*'],
        replaceString: /\bgulp[\-.]/
    });

gulp.task('less', function(){
    gulp.src('web/core/assets/less/*.less')
    .pipe(plugins.less())
    .pipe.gulp.dest('web/core/assets/css');
});