let gulp = require('gulp'), // Сам gulp
  sass = require('gulp-sass'), // Компиляция стилей
  minifyJs = require('gulp-terser'), // Минификация js
  autoPrefixer = require('gulp-autoprefixer'), // Вендорные префиксы
  bs = require('browser-sync'), // Server
  htmlMin = require('gulp-htmlmin'), // Минификация html
  rename = require('gulp-rename'), //Rename
  delFiles = require('del'), // Delete files
  cssMinify = require('gulp-csso'), // Minify css
  babel = require('gulp-babel') // babel


gulp.task('html', () => {
  return gulp.src('src/html/*.html') // Выбор файла
    .pipe(htmlMin({
      collapseWhitespace: true // Использование минификации
    }))
    .pipe(gulp.dest('dist'));
});

// Стили
gulp.task('sass', () => {
  return gulp.src('src/css/**/*.sass')
    .pipe(sass())
    .pipe(autoPrefixer())
    .pipe(cssMinify())
    .pipe(gulp.dest('dist/css'))
});
// Очистка перед сборкой
gulp.task('clean', () => {
  return delFiles('dist');
});

// Минификация js
gulp.task('js:es6', () => {
  return gulp.src('src/js/*.js')
    .pipe(minifyJs())
    .pipe(rename({
      suffix: '.min'
    }))
    .pipe(gulp.dest('dist/js'))
});
// Компиляция es6+ в es5
gulp.task('js:babel', () => {
  return gulp.src('src/js/*.js')
    .pipe(babel({
      presets: ['@babel/env']
    }))
    .pipe(rename({
      suffix: '.es5'
    }))
    .pipe(gulp.dest('dist/js'))
});

// Вотчеры позволяют следить за изменениями
// в исходных файлах, как только они появятся - выполняем задачи
gulp.task('sass:watch', () => {
  return gulp.watch('src/css/**/*.sass', gulp.series('sass', (done) => {
    bs.reload();
    done()
  }))
});
gulp.task('js:watch', () => {
  return gulp.watch('src/js/**/*.js', gulp.series('js:es6', (done) => {
    bs.reload();
    done()
  }))
});

gulp.task('copy:js', () => {
  return gulp.src('src/js/vendor/*.js')
    .pipe(gulp.dest('dist/js/vendor'));
});

gulp.task('copy:img', () => {
  return gulp.src('src/img/*.+(jpg|png|gif|svg)')
    .pipe(gulp.dest('dist/img'));
});

gulp.task('copy:css', () => {
  return gulp.src('src/css/vendor/*.css')
    .pipe(gulp.dest('dist/css/vendor'));
});


// Задача по умолчанию, которая вызывается в терминале командой gulp
// Содержит все задачи в определенной последовательности
gulp.task('default', gulp.series(
  'clean',
  gulp.parallel('sass', 'html', 'copy:js', 'copy:css', 'copy:img', 'js:es6', 'js:babel'),
  gulp.parallel('sass:watch', 'js:watch')
));



















