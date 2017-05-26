/*--------------- LIBRERIAS ARCHIVOS EXTERNOS -------------*/
require('babelify-es6-polyfill');
var page=require('page');
var menu =require ('./menu/menu');
var $=require('jquery');

menu();
require('./Add')
require('./table');
require('./update');

page();


