var menu=require('./eventos/menu.js');
var eventos=require('./eventos/eventos.js');
var $=require('jquery');
var funciones=require('./eventos/funciones.js');

var evento = new eventos;
var funcion=new funciones;

$(function(){
	menu();
	evento.btnAgregar();
	//funcion.cargaTabla();
	var datosTabla;
	var id;
});