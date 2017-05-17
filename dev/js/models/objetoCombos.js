module.exports=class objetoCombo{

	tiposDocumentos(){
		var objeto={
			campos:['idTipoDocto','nombre'],
			tipo:'JURIDICO'
		}
		return objeto;
	}

	subDocumentos(valor){
		var objeto={
			campos:['idSubTipoDocumento','nombre'],
			idTipoDocto:valor
		}
		return objeto
	}

	remitentes(valor){
		var objeto={
			campos:['idArea','nombre'],
			idAreaSuperior:valor
		}
		return objeto;
	}

	caracteres(){
		var objeto={
			campos:['idCaracter','nombre'],
			estatus:'ACTIVO'
		}
		return objeto;
	}


	acciones(){
		var objeto={
			campos:['idAccion','nombre'],
			estatus:'ACTIVO'
		}
		return objeto;
	}
	

}