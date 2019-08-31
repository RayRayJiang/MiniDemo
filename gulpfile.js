var gulp = require("gulp");
// var minifycss = require("gulp-minify-css");
// var imagemin = require("gulp-imagemin");
// var uglify = require("gulp-uglify");
// var babel = require("gulp-babel");
// var sass = require("gulp-sass");
var less = require("gulp-less");
var rename = require("gulp-rename");

// gulp.task("wxml", async () => {
//     gulp.src("pages/**/*.wxml")
//         .pipe(gulp.dest("dist/"));
// });

// 建一个less文件时,生成对应的wxss文件,监听less文件,实时编译成wxss
gulp.task("less", async () => {
    gulp.src("pages/**/*.less")
        .pipe(less())
        .pipe(rename((path) => {
            path.extname = '.wxss'
        }))
        .pipe(gulp.dest("pages/"));
    gulp.src("components/**/*.less")
        .pipe(less())
        .pipe(rename((path) => {
            path.extname = '.wxss'
        }))
        .pipe(gulp.dest("components/"));
});

gulp.task("watchless", async () => {
    gulp.watch(["pages/**/*.less","components/**/*.less"], gulp.series(["less"]));
})

