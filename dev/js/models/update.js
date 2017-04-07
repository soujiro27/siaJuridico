var $ = require('jquery');
var noty=require('noty');

var update=function(){

	return{
		updateCat:function(tabla,campo,id,datos){
			$.post({
				url:'/get'+ruta+'/'+ruta+'/'+campo+'/'+id,
				data:datos,
				success:function(data){
					
					salida=JSON.parse(data);
				
					if(salida.update=='false')
					{
						var n = $('.noty_message').noty({
							layout:'center',
							text: 'Error: Registro Duplicado',
							type:'error',
							dismissQueue: true, 
							force: false,
							maxVisible:1,
							timeout: 5000,
							progressBar: true
						});
					}
					else if (salida.update=='true') {
						 location.href="http://localhost:88/cat"+ruta;
					}
				}
			});
		}



		
	}
}

module.exports=update;