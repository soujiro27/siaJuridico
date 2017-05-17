/*--------------- LIBRERIAS ARCHIVOS EXTERNOS -------------*/
require('babelify-es6-polyfill');
var drawTable=require('./controllers/drawTable.js');
//var eventos=require('./controllers/forms.js');
var menu=require('./controllers/menu.js');
/*-----------variables globales --------------------*/

var ruta=localStorage.getItem('ruta');
/*--------------inicializar clases---------------------*/
var tabla=new drawTable();
//var form= new eventos();

/*----------------funciones --------------------------*/
menu();
tabla.tablaPrincipal();
//form.formularioAgregar();





