const { src, dest, series, watch, lastRun, parallel } = require('gulp');
const sass = require('gulp-sass')(require('sass'));

const browserSync = require('browser-sync');

function buildsass () {
    // place code for your default task here
    return src('./scss/**/*.scss')
        .pipe(sass())
        .pipe(dest('./css'))
        .pipe(browserSync.stream());
}

const browserSyncOption = {
    open: false,
    port: 3000,
    ui: {
        port: 3001
    },
    server: {
        baseDir: "./",
        index: "index.html"
    },
}

function browsersync (done) {
    browserSync.init(browserSyncOption);
    done();
}

function browserReload(done) {
    browserSync.reload();
    done();
    console.log('Browser da reload thanh cong.')
}

function watchFiles(done) {
    watch('./scss/**/*.scss', buildsass);
    watch('./index.html', series(browserReload))
}

exports.default = series(
    parallel(buildsass),
    series(browsersync, watchFiles)
);