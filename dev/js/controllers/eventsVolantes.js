require("jquery-ui-browserify");

var objCombo=require('./../models/objetoCombos.js');
var comboObj=new objCombo();

var cpm=require('./../templates/componentes/Components.js');;
var componente=new cpm();

var empty = require('empty-element');

module.exports=class eventsVolantes{





	inicio(ruta){
		if(ruta=='Volantes'){
			this.header();
			
		}
	}

	

	header(){
		$('select#idDocumento').on('change',this.cargaSubDocumento);
	}

	cargaSubDocumento()
	{
		var selec;
		var docto=$(this).val();
		var combo=comboObj.subDocumentos(docto);
		
		$.ajax({
		    url:'/combo/'+'SubTiposDocumentos',
		    data:combo,
		    async:false,
		    success:function(data){
		        data=$.parseJSON(data);
		        selec=data;
		    }
		});
		var render=componente.selectSubTipoDoc('idSubTipoDocumento','subDocumento',selec);

		$('div.selectSubDocumento').html(render);
		$('div.subDocumento').show();

		$('select#subDocumento').on('change',function(){
				var promo=$(this).val();
				if(promo!=1){
					cargaPromo();
					$('div.cveAuditoria').hide();
					$('div.datosAuditoria').hide();
				}
				else{
					$('div.Promocion').hide();
					$('div.cveAuditoria').hide();
					cargaComboAuditoria();
				}
				
		});

		

		function cargaPromo(){
			$('div.contentVolante').hide();	
			$('div.Promocion').show();
			var selectPromo='<select class="form-control" name="promocion" id="promocion" required>';
	        selectPromo+='<option value=""> Escoga Opcion </option>';
	        selectPromo+='<option value="SI"> SI </option>';
	        selectPromo+='<option value="NO"> NO </option></select>';
	  		$('div.selectPromo').html(selectPromo);
	  		$('select#promocion').on('change',function(){
	  			if($(this).val()=='SI' || $(this).val()=='NO'){
	  				cargaComboAuditoria();
	  			}	
	  		})
		}


		function cargaForm(){
		
			$('div.contentVolante').show();	
			$('input#fDocumento').datepicker({ dateFormat: "yy-mm-dd" });
			$('input#fRecepcion').datepicker({ dateFormat: "yy-mm-dd" });
		}


		function cargaComboAuditoria()
		{
			var datos;
			$.ajax({
		    url:'/getCombo/auditorias',
		    async:false,
		    success:function(data){
		        data=$.parseJSON(data);
		        datos=data;
		    	}
			});
			var render=componente.selectAuditorias('cveAuditoria','cveAuditoria',datos);
			$('div.selectAuditoria').html(render);
			$('div.cveAuditoria').show();

			$('select#cveAuditoria').on('change',cargaDatosAuditoria);
		}

		function cargaDatosAuditoria(){
			var idAudi=$(this).val();
			var datos;
			$.ajax({
			   	url:'/auditorias/'+idAudi,
			    async:false,
			    success:function(data){
			        data=$.parseJSON(data);
			        datos=data;
			    	}
			});

			var objetoAudi=separaDatosAuditoria(datos[0].objeto);
			$('ul#idObjeto').html(objetoAudi)
			var rubroAudi=separaDatosAuditoria(datos[0].sujeto);
			$('ul#idUnidad').html(rubroAudi)

			$('ul#tipoAuditoria').html(datos[0].tipo);

			$('div.datosAuditoria').show();
			$('div.datosAuditoria').css('display','flex');
			cargaForm();
			var numFolio=cargaUltimoFolio();
			console.log(numFolio);
			$('input#Folio').val(numFolio);
			cargaCombos();

		}

		function separaDatosAuditoria(cadena){
			var array=cadena.split('/');
			var li='';
			$.each(array, function(index, val) {
				 li+='<li>'+val+'</li>';
			});

			return li;
		}


		function cargaUltimoFolio(){
			var folio;
			$.ajax({
			    url:'/folio/Volantes/idVolante',
			    async:false,
			    success:function(data){
			        data=$.parseJSON(data);
			        folio=data[0].folio;
			    }
			});
			return folio;
		}

		function folioActual(folio){
			var idFolio;
			if(folio=='null'){
				idFolio=1;
			}else{
				var num=parseInt(folio);
				idFolio=num++;
			}
			return idFolio;
		}

		function cargaCombos()
		{
			var objeto=comboObj.remitentes('UTSFFA');
			var datosAjax=obtieneCombo('areas',objeto);
			var render=componente.selectAreas('idRemitente','idRemitente',datosAjax);
			$('div.selectRemitente').html(render);

			objeto=comboObj.caracteres();
			datosAjax=obtieneCombo('Caracteres',objeto);
			render=componente.selectCaracter('idCaracter','idCaracter',datosAjax);
			$('div.selectCaracter').html(render);

			objeto=comboObj.remitentes('DGAJ');
			datosAjax=obtieneCombo('areas',objeto);
			render=componente.selectAreas('idTurnado','idTurnado',datosAjax);
			$('div.selectTurnado').html(render);

			objeto=comboObj.acciones();
			datosAjax=obtieneCombo('Acciones',objeto);
			render=componente.selectAccion('idAccion','idAccion',datosAjax);
			$('div.selectAccion').html(render);

		}


		function obtieneCombo(combo,datos)
		{
			var datos;
			$.ajax({
			    url:'/combo/'+combo,
			    data:datos,
			    async:false,
			    success:function(data){
			        data=$.parseJSON(data);
			        datos=data;
			    }
			});
			return datos;
		}

	}














}