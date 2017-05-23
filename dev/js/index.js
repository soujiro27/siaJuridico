/*--------------- LIBRERIAS ARCHIVOS EXTERNOS -------------*/
require('babelify-es6-polyfill');
var page=require('page');
var menu =require ('./menu/menu');


menu();
require('./Add')
require('./table');
require('./update');

page();


