'use strict';

var gulp = require('gulp'),
    plugins = require("gulp-load-plugins")({
        pattern: ['gulp-*', 'gulp.*'],
        replaceString: /\bgulp[\-.]/
    });
    
    
var resources = {}, paths = {}, assetsFiles;

paths.bowerComponents = 'bower_components/';
paths.css = 'web/core/assets/css';

resources = {
    css: [
        paths.css + 'reset.css'
        ,paths.css + 'fonts.css'
        ,paths.css + 'common-style.css'
    ],
    assestCss: [
        paths.bowerComponents + 'font-awesome/css/font-awesome.min.css'
    ]
};

gulp.task('less', function(){
   return gulp.src('web/core/assets/less/_common-style.less')
    .pipe(plugins.less())
    .pipe(plugins.rename('main-app.css'))
    .pipe(gulp.dest('web/core/assets'));
});

gulp.task('css', function(){
  return gulp.src(resources.css)
    
    .pipe(plugins.concat('main-app.css'))
    .pipe(gulp.dest('web/core/assets'));
});


gulp.task('css:assets', function () {
    return gulp.src(resources.assestCss)
        .pipe(plugins.concat('assets.min.css'))
        .pipe(plugins.size({
            showFiles: true
        }))
        .pipe(gulp.dest('web/vendor/css'));
      
});

gulp.task('default', ['less']);