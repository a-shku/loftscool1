'use strict';

var gulp = require('gulp'),
    plugins = require("gulp-load-plugins")({
        pattern: ['gulp-*', 'gulp.*'],
        replaceString: /\bgulp[\-.]/
    });
    
    
var paths = {};

paths.bowerComponents = 'bower_components/';

gulp.task('less', function(){
   return gulp.src('web/core/assets/less/_common-style.less')
    .pipe(plugins.less())
    .pipe(plugins.rename('main-app.css'))
    .pipe(gulp.dest('web/core/assets'));
});

gulp.task('default', ['less']);