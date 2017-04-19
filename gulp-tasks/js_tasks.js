'use strict';

var gulp = require('gulp'),
    merge = require('merge-stream'),
    del = require('del'),
    file = require('gulp-file'),
    plugins = require("gulp-load-plugins")({
        pattern: ['gulp-*', 'gulp.*'],
        replaceString: /\bgulp[\-.]/
    });
    
var resources = {},
    paths = {};

paths.bowerComponents = './bower_components/';    


resources.bowerJs = [
    paths.bowerComponents + "jquery/dist/jquery.js",
    paths.bowerComponents + 'angular-nicescroll/angular-nicescroll.js'
];

gulp.task('clean:js:assets', function () {
    return del.sync(['web/vendor/js/assets.min.js']);
});

gulp.task('js:assets', ['clean:js:assets'], function () {
    console.log('resources.bowerJs', resources.bowerJs);
    
    return  gulp.src(resources.bowerJs)
            .pipe(plugins.concat('web/vendor/js/**/*.js'))
            
        .pipe(plugins.concat('assets.js'))
        .pipe(plugins.size({
            showFiles: true
        }))
        .pipe(gulp.dest('web/vendor/js/bundle/'));
        
});