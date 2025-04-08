const gulp = require("gulp");
const sass = require("gulp-sass")(require("sass"));
const browserSync = require("browser-sync").create();

// Compile Sass and Autoprefix
gulp.task("sass", function () {
  return gulp
    .src("src/scss/*.scss")
    .pipe(sass({ outputStyle: "compressed" }).on("error", sass.logError))
    .pipe(gulp.dest("dist/css"))
    .pipe(browserSync.stream());
});

// Serve and watch files
gulp.task(
  "serve",
  gulp.series("sass", function () {
    browserSync.init({
      server: "./dist/",
    });

    gulp.watch("src/scss/**/*.scss", gulp.series("sass"));
    gulp.watch("dist/*.html").on("change", browserSync.reload);
  })
);

// Default task
gulp.task("default", gulp.series("serve"));
