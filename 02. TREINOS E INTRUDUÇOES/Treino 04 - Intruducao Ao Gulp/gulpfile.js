const gulp = require('gulp');
const sass = require('gulp-sass')(require('sass')); // gulp-sass integra o gulp com o sass | sass quem faz a compilação de um arquivo sass para css
const sourcemaps = require('gulp-sourcemaps');
const uglify = require('gulp-uglify');
const obfuscate = require('gulp-obfuscate');
const imagemin = require('gulp-imagemin')

function comprimeImagens(){
    return gulp.src('./source/images/*')
        .pipe(imagemin())
        .pipe(gulp.dest('./build/images'))
}

function comprimeJavaScript() {
    return gulp.src('./source/scripts/*.js')
    .pipe(uglify())
    .pipe(obfuscate())
    .pipe(gulp.dest('./build/scripts'))
}

function compilaSass(){
    return gulp.src('./source/styles/main.scss') // * seleciona todos os arquivos com .scss
        .pipe(sourcemaps.init())
            .pipe(sass({
                style: 'compressed' // esse comando faz com que o arquivo compilado seja minimificado
            })) 
            .pipe(sourcemaps.write('./maps'))
            .pipe(gulp.dest('./build/styles')) // função para enviar os arquivos compilados no destino descrito
}                                             // pipe encadeia as funções que estamos utilizando

function funcaoPadrao(callback){
    console.log("Executando via Gulp");
    callback();
}


exports.default = function(){ 
    gulp.watch('./source/styles/*.scss', { ignoreInitial: false }, gulp.series(compilaSass))
    gulp.watch('../source/scripts/*.js', { ignoreInitial: false }, gulp.series(comprimeJavaScript))
    gulp.watch('./source/images/*', { ignoreInitial: false }, gulp.series(comprimeImagens))
}
// com esse código é possível compilar todos os comandos abaixo ao mesmo tempo em apenas um comando, npm run gulp 

// exports.sass = compilaSass;
// exports.javascript = comprimeJavaScript;
// exports.images = comprimeImagens;
