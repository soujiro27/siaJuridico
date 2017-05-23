module.exports=class comboJson{

	tiposDocumentos()
	{
		var obj={
			tabla:'tiposdocumentos',
			campos:['idTipoDocto','nombre'],
			where:{
				estatus:'ACTIVO',
				tipo:'JURIDICO'
			}
		}

		return obj;
	}

	subTipoDocumentos(valor){
		var obj={
			tabla:'CatSubTiposDocumentos',
			campos:['idSubTipoDocumento','nombre'],
			where:{
				estatus:'ACTIVO',
				idTipoDocto:valor
			}
		}
		return obj;
	}

	auditorias(){
		var obj={
			tabla:'auditorias',
			campos:['idAuditoria','clave'],
			where:{
				idCuenta:nCampana
			}
		}
		return obj;
	}

	remitentes(){
		var obj={
			tabla:'remitentes',
			campos:['idArea','nombre'],
			where:{
				idAreaSuperior:'UTSFFA',
				idAreaMenor:'UTSFEAJ'
			}
		}
		return obj;
	}	



	caracteres(){
		var obj={
			tabla:'catcaracteres',
			campos:['idCaracter','nombre'],
			where:{
				estatus:'ACTIVO'
			}
		}
		return obj;
	}


	turnados(){
		var obj={
			tabla:'areas',
			campos:['idArea','nombre'],
			where:{
				idAreasuperior:'DGAJ',
			}
		}
		return obj;
	}

	acciones(){
		var obj={
			tabla:'catAcciones',
			campos:['idAccion','nombre'],
			where:{
				estatus:'ACTIVO',
			}
		}
		return obj;
	}

	 duplicado(valor1,valor2){
	 	return obj={
	 		tabla:'VolantesDocumentos',
	 		campos:['idVolante'],
	 		where:{
	 			idSubTipoDocumento:valor1,
	 			cveAuditoria:valor2
	 		}
	 	}
	 }
	


	
	



}