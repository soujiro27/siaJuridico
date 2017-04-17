var $ = require('jquery');
var axios=require('axios');
var template=require('./../templates/forms/updateRemitentes.js');
var caracteres=require('./../templates/forms/updateCaracteres.js');
var turnados=require('./../templates/forms/updateTurnados.js');
var acciones=require('./../templates/forms/updateAcciones.js');
var SubTiposDocumentos=require('./../templates/forms/updateSubTiposDocumentos.js');
var models=require('./../models/update.js');
var modals=require('./../templates/modals/duplicado.js');


model=new models()
var update=function(){


	return{
		obtieneId:function(id,campo){
			var ruta=localStorage.getItem("ruta");
			axios.get('/get'+ruta+'/'+ruta+'/'+campo+'/'+id)
			.then(function(response){
				if(ruta=='Remitentes'){all=template(response.data[0]);}
				else if (ruta=='Caracteres') {all=caracteres(response.data[0]);}
				else if(ruta=='Turnados'){all=turnados(response.data[0]);}
				else if(ruta=='Acciones'){all=acciones(response.data[0]);}
				else if(ruta=='SubTiposDocumentos'){all=SubTiposDocumentos(response.data[0]);}


				var msgDuplicado=modals();
				$('div.table-responsive').hide('slow');
				$('button#agregar').hide();
				$('div.formularioPrincipal').append(msgDuplicado);
				$('div.formularioPrincipal').append(all);

				if(ruta=='SubTiposDocumentos')
				{
					var valorSelect=(response.data[0].idTipoDocto);
					$('select#idDocumento option#'+valorSelect).attr('selected',true);
				}

				$('form input[type=text]').on('keyup',function(){
					var letra=$(this).val();
					$(this).val(letra.toUpperCase());
				});
				
				$('button#cancelar').on('click',function(e){
					e.preventDefault();
					var ruta=localStorage.getItem("ruta");
					location.href="http://localhost:88/cat"+ruta;
				});
				
				$('form#Update'+ruta).on('submit',function(e){
					e.preventDefault();
					var datos=$(this).serialize();
					model.updateCat(ruta,campo,id,datos);
				});
			});
		},

		
	

	}
}


module.exports=update;