module.exports=class Components{

	label(obj){
		var labelForm='<label for="'+obj.for+'">'+obj.text+'</label>';
		return $.parseHTML(labelForm);
	}
	selectTipoDoc(name,id,data){
		var select='<select class=form-control name='+name+' id='+id+' required>';
		select+='<option value=" ">Escoga una Opcion</option>';
		$.each(data, function(index, val) {
			select+='<option value='+data[index].idTipoDocto+'>'+data[index].nombre+'</option>';
		});
		select+='</select>';
		return $.parseHTML(select);
	}
	selectTipoDocUpdate(name,id,data,defalt){
		var select='<select class=form-control name='+name+' id='+id+' required>';
		select+='<option value="">Escoga una Opcion</option>';
		$.each(data, function(index, val) {
			if(defalt==data[index].idTipoDocto){
				select+='<option value='+data[index].idTipoDocto+' selected>'+data[index].nombre+'</option>';
				
			}
			else{
			select+='<option value='+data[index].idTipoDocto+'>'+data[index].nombre+'</option>';
				
			}
		});
		select+='</select>';
		return $.parseHTML(select);
	}

	selectSubTipoDoc(name,id,data){
		var select='<select class=form-control name='+name+' id='+id+' required>';
		select+='<option value=" ">Escoga una Opcion</option>';
		$.each(data, function(index, val) {
			select+='<option value='+data[index].idSubTipoDocumento+'>'+data[index].nombre+'</option>';
		});
		select+='</select>';
		return $.parseHTML(select);
	}

	selectAuditorias(name,id,data){
		var select='<select class=form-control name='+name+' id='+id+' required>';
		select+='<option value=" ">Escoga una Opcion</option>';
		$.each(data, function(index, val) {
			select+='<option value='+data[index].idAuditoria+'>'+data[index].clave+'</option>';
		});
		select+='</select>';
		return $.parseHTML(select);
	}

	selectAreas(name,id,data){
	var select='<select class=form-control name='+name+' id='+id+' required>';
	select+='<option value=" ">Escoga una Opcion</option>';
	$.each(data, function(index, val) {
		select+='<option value='+data[index].idArea+'>'+data[index].nombre+'</option>';
	});
	select+='</select>';
	return $.parseHTML(select);
	}


	selectCaracter(name,id,data){
		var select='<select class=form-control name='+name+' id='+id+' required>';
		select+='<option value=" ">Escoga una Opcion</option>';
		$.each(data, function(index, val) {
			select+='<option value='+data[index].idCaracter+'>'+data[index].nombre+'</option>';
		});
		select+='</select>';
		return $.parseHTML(select);
	}



	selectAccion(name,id,data){
		var select='<select class=form-control name='+name+' id='+id+' required>';
		select+='<option value=" ">Escoga una Opcion</option>';
		$.each(data, function(index, val) {
			select+='<option value='+data[index].idAccion+'>'+data[index].nombre+'</option>';
		});
		select+='</select>';
		return $.parseHTML(select);
	}


}