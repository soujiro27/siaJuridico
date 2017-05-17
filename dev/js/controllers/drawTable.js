var $=require('jquery'); 
var empty = require('empty-element');
var get=require('./../models/get.js');
var table=require('./../templates/tables/head/table.js');
var formUpdate=require('./../controllers/forms.js');
var form = new formUpdate();


module.exports=class drawTable{

	

	tablaPrincipal(){
		get=new get();
		get.getAll(ruta)
		.then(response =>{
			let tablePrincipal=table(response);
			var dom=document.querySelector('div.widget-content');
			empty(dom).appendChild(tablePrincipal);
			form.formularioAgregar();
		})
		.then(response =>{
			$('table tr').click(function(){
				var obj = {};
				obj[$(this).data('nombre')]=$(this).data('id');
				var campo=$(this).data('nombre');
				var id=$(this).data('id');
				form.formularioUpdate(obj,campo,id);
			});
		});


	}


}