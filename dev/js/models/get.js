var $ = require('jquery');
var axios=require('axios');
var table=require('./../templates/tables/Remitentes.js');
var caracteres=require('./../templates/tables/Caracteres.js');
var turnados=require('./../templates/tables/Turnados.js');
var acciones=require('./../templates/tables/Acciones.js');
var tiposDocumentos=require('./../templates/combos/TiposDocumentos.js');
var SubTiposDocumentos=require('./../templates/tables/SubTiposDocumentos.js');
var volantes=require(('./../templates/tables/Volantes.js'));
var Combos=require('./../eventos/caragaCombos.js');
var comboRemitente=require('./../templates/combos/Remitentes.js');
var comboCaracter=require('./../templates/combos/Caracter.js');
var comboTurnado=require('./../templates/combos/Turnado.js');
var comboAccion=require('./../templates/combos/Accion.js');
var comboAuditoria=require('./../templates/combos/Auditoria.js');
var updates=require('./../eventos/update.js');
var funcionesCombos=require('./../eventos/eventoCombos.js');

var combo=new Combos;
var update=new updates();
var funcionCombo=new funcionesCombos();


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
				else if(ruta=='Volantes'){all=volantes(response.data)}
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
							funcionCombo.changeSubDocumentos(subTipoDoc);

							$('select#promocion').on('change',function(){
								var valor=$(this).val();
								funcionCombo.changeSubPromocion(valor);
							});

							$('select#cveAuditoria').on('change',function(){
								valor=$(this).val();
								//console.log(valor);
								funcionCombo.cargaDatosAuditoria(valor);
							});


						});
					});

					
				}
			})
		},

		getComboRemitentes:function(){
			$.get({
				url:'/getComboRemitente',
				success:function(data){
					
					data=$.parseJSON(data);
					all=comboRemitente(data);
					$('select#idRemitente').append(all);
					$('select#idRemitente').on('change',function(){
						idRemitente=$(this).val();
						$.get({
							url:'/getDatosRemitente/'+idRemitente,
							success:function(data){
								data=$.parseJSON(data);
								
								$('input#NombreRemitente').val(data[0].nombre);
								$('input#cargo').val(data[0].cargo);
								$('input#dependencia').val(data[0].procedencia);
							}
						});
					});
				}
			})
		},

		getComboCaracter:function(){
			$.get({
				url:'/getComboCaracter',
				success:function(data)
				{
					data=$.parseJSON(data);
				
					all=comboCaracter(data);

					$('select#idCaracter').append(all);
				}
			});
		},
		getComboTurnado:function()
		{
			$.get({
				url:'/getComboTurnado',
				success:function(data){
					data=$.parseJSON(data);
					
					all=comboTurnado(data);
					$('select#idTurnado').append(all);

				}
			});
		},
		getComboAccion:function()
		{
			$.get({
				url:'/getComboAccion',
				success:function(data){
					data=$.parseJSON(data);
					all=comboAccion(data);
					$('select#idAccion').append(all);
				}
			});
		},

		getComboAuditoria:function()
		{
			$.get({
				url:'/getComboAuditoria',
				success:function(data){
					data=$.parseJSON(data);
					all=comboAuditoria(data);
					$('select#cveAuditoria').append(all);
				}
			});
		}







	}
}

module.exports=getAll;