'use strict';

var gulp = require('gulp'),
    plugins = require("gulp-load-plugins")({
        pattern: ['gulp-*', 'gulp.*'],
        replaceString: /\bgulp[\-.]/
    });
    
    
var resources = {}, paths = {}, assetsFiles;

paths.bowerComponents = 'bower_components/';

resources = {
    css: [
        paths.bowerComponents + 'font-awesome/css/font-awesome.css'
    ]
};

gulp.task('less', function(){
   return gulp.src('web/core/assets/less/_common-style.less')
    .pipe(plugins.less())
    .pipe(plugins.rename('main-app.css'))
    .pipe(gulp.dest('web/core/assets'));
});


gulp.task('css:assets', function () {
    return gulp.src(resources.css)
        .pipe(plugins.concat('assets.min.css'))
        .pipe(plugins.size({
            showFiles: true
        }))
        .pipe(gulp.dest('web/vendor/'));
      
});

gulp.task('default', ['less']);