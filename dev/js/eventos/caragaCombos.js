
var subCombo=require('./../templates/combos/subtiposDocumentos.js');

var combos=function()
{
	return{

		comboSubDocumentos:function(doc)
		{
			
				$.get({
					url:'/subtiposdocumentos/'+doc,
					success:function(data){
						data=JSON.parse(data);
						if(data.length>0){
							
							all=subCombo(data);
							$('form#Volantes select#subDocumento').html(all);
							$('form#Volantes div.subDocumento').show('slow');

						}else{
							$('form#Volantes div.subDocumento').hide('slow');
						}


					}
				});
		}

	}
}



module.exports=combos;