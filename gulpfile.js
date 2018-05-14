const gulp = require('gulp');
const browsersync = require('browser-sync').create();


// ----------Server----------------------
gulp.task('server', function () {
    browsersync.init({
        server: {
            port: 9000,
            baseDir: "build"
        }
    });

    gulp.watch('build/**/*').on('change', browsersync.reload);

});