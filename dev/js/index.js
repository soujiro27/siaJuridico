/*--------------- LIBRERIAS ARCHIVOS EXTERNOS -------------*/
require('babelify-es6-polyfill');
var page=require('page');
var menu =require ('./menu/menu');
var $=require('jquery');
console.log('%cStop!', 'color: red;font-size:2.5rem;font-weight:bold;');
menu();
require('./Add')
require('./table');
require('./update');

page();


