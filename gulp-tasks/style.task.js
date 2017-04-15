'use strict';

var gulp = require('gulp'),
    plugins = require("gulp-load-plugins")({
        pattern: ['gulp-*', 'gulp.*'],
        replaceString: /\bgulp[\-.]/
    }), 
    browserSync = require('browser-sync');
    
    
var resources = {}, paths = {}, assetsFiles;
var filesForWatch = ['web/core/assets/less/*.less', 'index.html'];

paths.bowerComponents = 'bower_components/';
paths.css = 'web/core/assets/css';

resources = {
    // css: [
    //     paths.css + 'reset.css'
    //     ,paths.css + 'fonts.css'
    //     ,paths.css + 'common-style.css'
    // ],
    assestCss: [
        paths.bowerComponents + 'font-awesome/css/font-awesome.min.css'
    ]
};

gulp.task('less', function(){
   return gulp.src('web/core/assets/less/main.less')
    .pipe(plugins.less())
    .pipe(plugins.rename('main-app.css'))
    .pipe(gulp.dest('web/core/assets'))
    
});

// gulp.task('css', function(){
//   return gulp.src(resources.css)
    
//     .pipe(plugins.concat('main-app.css'))
//     .pipe(gulp.dest('web/core/assets'));
// });


gulp.task('css:assets', function () {
    return gulp.src(resources.assestCss)
        .pipe(plugins.concat('assets.min.css'))
        .pipe(plugins.size({
            showFiles: true
        }))
        .pipe(gulp.dest('web/vendor/css'));
      
});

gulp.task('browser-sync', function() {

    browserSync({
    
        // You can use wildcards in here.
        
        files: filesForWatch,
        
        // We can pick port 8081 or 8082, if you are more of a 2's kind of guy, go for the 8082. Highly recommended.
        
        port: process.env.PORT
    
    });

});

//watch
gulp.task('watch', function() {
    
    //gulp.watch('web/core/assets/less/*.less', ['less', 'browser-sync']);
    gulp.watch(filesForWatch, ['less', 'browser-sync']);
    
});

gulp.task('default', ['less']);