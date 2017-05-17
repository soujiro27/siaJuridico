
module.exports=class cadenas{


	datosTabla(){
		let caracteres=['idCaracter']; //poner los campos que no apareceran en el thead;
		let Acciones=['idAccion'];
		let SubTiposDocumentos=['idSubTipoDocumento'];
		let Volante=['idVolante'];
		if(ruta=='Caracteres'){var thead=caracteres;}
		else if (ruta=='Acciones') {var thead=Acciones;}
		else if (ruta=='SubTiposDocumentos') {var thead=SubTiposDocumentos;}
		else if (ruta=='Volantes') {var thead=Volante;}
		return thead;
	}

	encabezadoTabla(datos){
		
		var thead=this.datosTabla();
		var header= Array();
		$.each(datos[0], function(index, val) {
			 header.push(index);
		});
		for(var x in thead){
			var pos=header.indexOf(thead[x]);
			header.splice(pos,1);
		}
	
	return header;
	

	}



}