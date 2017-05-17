/*--------------librerias ------------------*/
var $=require('jquery');
var empty = require('empty-element');
/*--------------formularios Insert------------------*/
var form=require('./../templates/forms/insert/Caracteres.js');
var formAcciones=require('./../templates/forms/insert/Acciones.js');
var formSubTiposDocumentos=require('./../templates/forms/insert/SubTiposDocumentos.js');
var formVolantes=require('./../templates/forms/insert/Volantes.js');
/*--------------Formularios Update---------------*/

var formUpdate=require('./../templates/forms/update/Caracteres.js');
var formAccionesUpdate=require('./../templates/forms/update/Acciones.js');
var formSubTiposDocumentosUpdate=require('./../templates/forms/update/SubTiposDocumentos.js');
var formVolantesUpdate=require('./../templates/forms/update/Volantes.js');
/*-----------------Modelos--------------------*/
var inserta=require('./../models/insert.js');
var obtiene=require('./../models/get.js');


/*-------------------Controllers---------------*/
var noti=require('./../controllers/noty.js');
var redirect=require('./../controllers/redireccion.js');
var event=require('./eventsVolantes.js');

/*---------------------eventos---------------------*/





var inst= new inserta();
var noty=new noti();
var link=new redirect();
var get= new obtiene();
var volanteEvents=new event();
module.exports=class{

	obtenerFormularioInsert(){
		var formAdd;
		if(ruta=='Caracteres'){formAdd=form();}
		else if (ruta=='Acciones') {formAdd=formAcciones();}
		else if (ruta=='SubTiposDocumentos') {formAdd=formSubTiposDocumentos();}
		else if (ruta=='Volantes') {formAdd=formVolantes();}
		return formAdd;
	}

	obtenerFormularioUpdate(data){
		var formAdd;
		if(ruta=='Caracteres'){formAdd=formUpdate(data);}
		else if (ruta=='Acciones') {formAdd=formAccionesUpdate(data);}
		else if (ruta=='SubTiposDocumentos') {formAdd=formSubTiposDocumentosUpdate(data);}
		return formAdd;
	}


	formularioAgregar()
	{
		var formulario=this.obtenerFormularioInsert();
		$('button#agregar').click(function(event){
			var dom=document.querySelector('div.widget-content');
			empty(dom).appendChild(formulario);
			volanteEvents.inicio(ruta);
			$('form#'+ruta).on('submit',function(e){
				e.preventDefault();
				var datos=$(this).serialize();
				inst.inicio(datos)
				.then(response => {
					var data=$.parseJSON(response);
					if(data.insert=='false'){
						//noty.notyError();
					}else{
						//link.rutaDefault();
					}
				})
			});

			$('button#cancelar').click(function(e){
				e.preventDefault();
				link.rutaDefault();
			})

		});
	}

	formularioUpdate(objeto,campo,id)
	{
		
		
		get.getUpdate(objeto)
			.then(response => {
				
				var formulario=this.obtenerFormularioUpdate(response[0]);
				var dom=document.querySelector('div.widget-content');
				empty(dom).appendChild(formulario);
				
				
			})
			.then(response =>{
				$('form#Update'+ruta).submit(function(e){
					e.preventDefault();
					var datos=$(this).serialize()+'&'+campo+'='+id;
					inst.update(datos)
					.then(response => {
						var data=$.parseJSON(response);
						if(data.insert=='false'){
							noty.notyError();
						}else{
							link.rutaDefault();
						}
					})

				});

				$('button#cancelar').click(function(e){
					e.preventDefault();
					link.rutaDefault();
				})
			});
		
	}






}