"use strict";

var gulp = require("gulp");
var less = require("gulp-less");
  //var plumber = require("gulp-plumber");
var postcss = require("gulp-postcss");
var autoprefixer = require("autoprefixer");
//var server = require("browser-sync").create();
var minify = require("gulp-csso");
var rename = require("gulp-rename");
//var imagemin = require("gulp-imagemin");
//var svgstore = require("gulp-svgstore");
//var webp = require("gulp-webp");
  //var run = require("run-sequence");
//var del = require("del");
var posthtml = require("gulp-posthtml");
var include = require("posthtml-include");
//var uglify = require("gulp-uglify");
  //var pump = require("pump");

gulp.task("style", function() {
  return gulp.src("less/main.less")
  .pipe(less())
  .pipe(postcss([ autoprefixer ]))
  .pipe(gulp.dest("build/css"))
  .pipe(minify())
  .pipe(rename("style.min.css"))
  .pipe(gulp.dest("build/css"));
});

gulp.task("html", function () {
  return gulp.src("*.html")
    .pipe (posthtml([
      include()
    ]))
    .pipe(gulp.dest("build"));
});

gulp.task("run", gulp.series(
  "html",
  "style"
  )
);
