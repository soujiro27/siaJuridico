var $ = require('jquery');

var funcionesCombos=function(){

	return{

		changeSubDocumentos:function(subTipoDoc)
		{
			if(subTipoDoc=='DTC-FRA' || subTipoDoc=='DTC-FRE'){
								
				$('form#Volantes div.Promocion').show('slow');
			}else if(subTipoDoc=='IRAC'){
				$('div.cveAuditoria').show('slow');
				$('form#Volantes div.Promocion').hide('slow');
			}
			else{
				$('form#Volantes div.Promocion').hide('slow');
				$('div.cveAuditoria').hide('slow');
				$('div.datosAuditoria').hide('slow');
				$('div.contentVolante').hide('slow');
			}
		},

		changeSubPromocion:function(valor){
			if(valor=="SI" || valor=="NO"){
				$('div.cveAuditoria').show('slow');
			}else{
				$('div.cveAuditoria').hide('slow');
				$('div.datosAuditoria').hide('slow');
				$('div.contentVolante').hide('slow');
									
			}
		},

		cargaDatosAuditoria:function(idAuditoria){
			idAuditoria=parseInt(idAuditoria);
			console.log(idAuditoria);
			if(idAuditoria!=0){
				console.log('here');
			$.get({
				url:'/getDatosAuditoria/'+idAuditoria,
				success:function(data){
					data=$.parseJSON(data);

					$('input#idUnidad').val(data[0].sujeto);
					$('input#idObjeto').val(data[0].objeto);
					$('div.datosAuditoria').show('slow');
					$('div.contentVolante').show('slow');
				}
			});
		}else{
			$('div.datosAuditoria').hide('slow');
			$('div.contentVolante').hide('slow');
		}
		}


	}
}


module.exports=funcionesCombos;