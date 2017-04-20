var $ = require('jquery');
var noty=require('noty');

var insert=function(){

	return{
		insertCat:function(datos,tabla){
			$.post({
				url:'/cat'+tabla,
				data:datos,
				success:function(data){
					salida=JSON.parse(data);
					console.log(salida);
					if(salida.salida=='false')
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
					else if (salida.salida=='true') {
						 location.href="http://localhost:88/cat"+tabla;
					}
				}
			});
		},


		
	}
}

module.exports=insert;