// renames to gulpfile.esm.js to use the esm package support of es6 module 'import' syntax

import gulp from 'gulp';
import sass from 'gulp-sass';
import browserSync from 'browser-sync';

const myGlobs = {
  scssSource: './app/scss/**/*.scss', // includes .scss files in any subfolders of ./scss also
  cssDest: './app/css',
  htmlSource: './app/*.html',
};

export function compileSass() {
  // enables 'gulp compileSass' from the terminal
  return gulp
    .src(myGlobs.scssSource) // make a stream of files to compile
    .pipe(sass()) // use the gulp-sass plugin on each file in the stream
    .pipe(gulp.dest(myGlobs.cssDest)) // save the compiled files
    .pipe(browserSync.stream()); // push updates to open browsers with browser-sync
}

function reload(cb) {
  browserSync.reload(); // A simple task to reload the page
  cb(); // use the error-first callback to signal task completion
}

export function startServer() {
  // enables 'gulp startServer' from the terminal
  browserSync.init({
    server: {
      baseDir: './app/',
    },
    // If you are already serving your website locally using something like apache
    // You can use the proxy setting to proxy that instead
    // proxy: "yourlocal.dev"
  });
  gulp.watch(myGlobs.scssSource, compileSass); // if something here updates, run the compileSass task
  gulp.watch(myGlobs.htmlSource, reload); // if something in the html glob updates, run the reload task
}

export default gulp.series(startServer, compileSass); // start the browser-sync server with a simple 'gulp' command in terminal
