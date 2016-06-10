'use strict';

var gulp = require('gulp');
var del = require('del');
var uglify = require('gulp-uglify');
var rename = require('gulp-rename');

gulp.task('clean', function() {
  return del('dist');
});

gulp.task('build', ['clean'], function() {
  gulp.src('src/angular-ngqueryparams.js')
    .pipe(uglify({ preserveComments: 'all' }))
    .pipe(rename({ suffix: '.min' }))
    .pipe(gulp.dest('dist'))
});
