var gulp = require('gulp');
var exec = require('child_process').exec;
var watch = require('gulp-watch');

//Ng Build
gulp.task('build', function () {
  exec('ng build', function () {
    gulp.start('copy');
  });
});

//Copiar arquivos da pasta dist para app/public
gulp.task('copy', function () {
  gulp.src('./dist/*')
    .pipe(gulp.dest('../server/app/public'))
});


//Watcher para buildar e copiar
gulp.task('watch', function () {
  gulp.watch('src/*', ['build']);
  //gulp.watch('dist/*', ['copy']);
});
