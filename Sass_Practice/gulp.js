const { src, dest, watch, series } = require("gulp");
const sass = require("gulp-sass")(require("sass"));

function buildStyles() {
  return src("found/**/*.scss").pipe(sass()).pipe(dest("ccss"));
}

function watchTask() {
  watch(["found/**/*.scss"], buildStyles);
}

exports.default = series(buildStylesm, watchTask);
