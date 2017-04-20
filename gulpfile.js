var gulp=require('gulp');
var stylus=require('gulp-stylus');
var babel = require('babelify');
var browserify = require('browserify');
var source = require('vinyl-source-stream');
var watchify = require('watchify');
var rename = require('gulp-rename');
var yoyoify = require('yo-yoify-standalone');

gulp.task('stylus',function(){
	 gulp.src('dev/stylus/estilo.styl')
	 .pipe(stylus({
	 	'include css':true
	 }))
	 .pipe(gulp.dest('assets/css/'));
});



function compile(watch) {
  var bundle = watchify(browserify('./dev/js/index.js', {debug: true}));

  function rebundle() {
    bundle
      .transform(babel)
      .bundle()
      .on('error', function (err) { console.log(err); this.emit('end') })
      .pipe(source('index.js'))
      .pipe(rename('app.js'))
      .pipe(gulp.dest('assets/js/'));
  }

  if (watch) {
    bundle.on('update', function () {
      console.log('--> Bundling...');
      rebundle();
    });
  }

  rebundle();
}

gulp.task('build', function () {
  return compile();
});

gulp.task('watch', function () { return compile(true); });


gulp.task('templates',function(){
 /*-----------catalogos------------------*/
  yoyoify('dev/js/yoyoTemplates/forms/Remitentes.js','dev/js/templates/forms/Remitentes.js');
  yoyoify('dev/js/yoyoTemplates/forms/updateRemitentes.js','dev/js/templates/forms/updateRemitentes.js');
  yoyoify('dev/js/yoyoTemplates/forms/Caracteres.js','dev/js/templates/forms/Caracteres.js');
  yoyoify('dev/js/yoyoTemplates/forms/updateCaracteres.js','dev/js/templates/forms/updateCaracteres.js');
  yoyoify('dev/js/yoyoTemplates/forms/Turnados.js','dev/js/templates/forms/Turnados.js');
  yoyoify('dev/js/yoyoTemplates/forms/updateTurnados.js','dev/js/templates/forms/updateTurnados.js');
  yoyoify('dev/js/yoyoTemplates/forms/Acciones.js','dev/js/templates/forms/Acciones.js');
  yoyoify('dev/js/yoyoTemplates/forms/updateAcciones.js','dev/js/templates/forms/updateAcciones.js');
 yoyoify('dev/js/yoyoTemplates/forms/SubTiposDocumentos.js','dev/js/templates/forms/SubTiposDocumentos.js');
 yoyoify('dev/js/yoyoTemplates/forms/updateSubTiposDocumentos.js','dev/js/templates/forms/updateSubTiposDocumentos.js');
/*--------------------volantes-----------------------*/
  yoyoify('dev/js/yoyoTemplates/forms/Volantes.js','dev/js/templates/forms/Volantes.js');
    yoyoify('dev/js/yoyoTemplates/forms/UpdateVolantes.js','dev/js/templates/forms/UpdateVolantes.js');



  yoyoify('dev/js/yoyoTemplates/modals/duplicado.js','dev/js/templates/modals/duplicado.js');


/*------------------tablas -------------------------------*/  
  yoyoify('dev/js/yoyoTemplates/tables/Remitentes.js','dev/js/templates/tables/Remitentes.js');
  yoyoify('dev/js/yoyoTemplates/tables/tbody/Remitentes.js','dev/js/templates/tables/tbody/Remitentes.js');
  yoyoify('dev/js/yoyoTemplates/tables/Caracteres.js','dev/js/templates/tables/Caracteres.js');
  yoyoify('dev/js/yoyoTemplates/tables/tbody/Caracteres.js','dev/js/templates/tables/tbody/Caracteres.js');
  yoyoify('dev/js/yoyoTemplates/tables/Turnados.js','dev/js/templates/tables/Turnados.js');
  yoyoify('dev/js/yoyoTemplates/tables/tbody/Turnados.js','dev/js/templates/tables/tbody/Turnados.js');
  yoyoify('dev/js/yoyoTemplates/tables/Acciones.js','dev/js/templates/tables/Acciones.js');
  yoyoify('dev/js/yoyoTemplates/tables/tbody/Acciones.js','dev/js/templates/tables/tbody/Acciones.js');
  yoyoify('dev/js/yoyoTemplates/tables/SubTiposDocumentos.js','dev/js/templates/tables/SubTiposDocumentos.js');
  yoyoify('dev/js/yoyoTemplates/tables/tbody/SubTiposDocumentos.js','dev/js/templates/tables/tbody/SubTiposDocumentos.js');
  yoyoify('dev/js/yoyoTemplates/tables/Volantes.js','dev/js/templates/tables/Volantes.js');
  yoyoify('dev/js/yoyoTemplates/tables/tbody/Volantes.js','dev/js/templates/tables/tbody/Volantes.js');
});


gulp.task('default',['stylus','build','templates']);