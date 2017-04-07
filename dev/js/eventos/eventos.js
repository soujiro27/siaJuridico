var funciones=require('./funciones.js');
var eventos=function(){

	var funcion= new funciones();
	return{
		btnAgregar:function()
		{
			$('button#agregar').on('click',function(){
				funcion.formAdd();
			});
		},
				

	}
}

module.exports=eventos;