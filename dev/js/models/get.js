var $ = require('jquery');
var axios=require('axios');
var table=require('./../templates/tables/Remitentes.js');
var caracteres=require('./../templates/tables/Caracteres.js');
var turnados=require('./../templates/tables/Turnados.js');
var acciones=require('./../templates/tables/Acciones.js');
var tiposDocumentos=require('./../templates/combos/TiposDocumentos.js');
var SubTiposDocumentos=require('./../templates/tables/SubTiposDocumentos.js');
var Combos=require('./../eventos/caragaCombos.js');

var combo=new Combos;

var updates=require('./../eventos/update.js');
var update=new updates();


var getAll=function(){


	return{

		getCat:function(){
			var ruta=localStorage.getItem("ruta");
			axios.get('/get'+ruta)
			.then(function(response){
				if(ruta=='Remitentes'){all=table(response.data);}
				else if (ruta=='Caracteres') {all=caracteres(response.data);	}
				else if(ruta=='Turnados'){all=turnados(response.data);}
				else if(ruta=='Acciones'){all=acciones(response.data);}
				else if(ruta=='SubTiposDocumentos'){all=SubTiposDocumentos(response.data)}
				//all=table(response.data);
				$('div.table-responsive').append(all);
				$('table tbody tr').on('click',function(){
					id=$(this).data('id');
					campo=$(this).data('campo');
					update.obtieneId(id,campo);
				});
			})
			.then(function(){
				//table(datosTabla);
			});

		},

		getComboDocumentos:function()
		{
			var ruta=localStorage.getItem("ruta");
			$.get({
				url:'/gettiposdocumentos',
				success:function(data)
				{
					data=JSON.parse(data);
					all=tiposDocumentos(data);
					$('select#idDocumento').append(all);
					$('form#Volantes select#idDocumento').on('change',function(){
						doc=$(this).val();
						combo.comboSubDocumentos(doc);
						$('select#subDocumento').on('change',function(){
							var subTipoDoc=$(this).val();
							
							if(subTipoDoc=='DTC-FRA' || subTipoDoc=='DTC-FRE'){
								
								$('form#Volantes div.Promocion').show('slow');
							}else{
								$('form#Volantes div.Promocion').hide('slow');

							}
						});
					});
				}
			})
		},







	}
}

module.exports=getAll;