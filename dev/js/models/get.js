var combo = require('./../templates/combos/combos.js');

module.exports=class Get{

	getAll(tabla){
		let get= new Promise((resolve,reject) => {

			$.get({
				url:'/table/'+tabla,
				success:function(data){
					data=$.parseJSON(data);
					
					resolve(data);
				}
			});

		});
			return get;
	}

	getUpdate(json){
		let get= new Promise((resolve,reject) => {
			$.ajax({
				url:'/get/'+ruta,
				data:json,
				success:function(data){
					data=$.parseJSON(data);
					resolve(data);
				}
			});

		});
		return get;
	}

	getCombos(table){
		
		let get= new Promise((resolve,reject) => {
			$.ajax({
				url:'/combo/'+table,
				success:function(data){
					data=$.parseJSON(data);
					resolve(data);
				}
			});
			
		});
		return get;
	}

	getCombosCampo(table,campo){
		
		let get= new Promise((resolve,reject) => {
			$.ajax({
				url:'/combo/'+table+'/'+campo,
				success:function(data){
					data=$.parseJSON(data);
					resolve(data);
				}
			});
			
		});
		return get;
	}


	getDatosAuditoria(id){
		let get= new Promise((resolve,reject) => {
			$.ajax({
				url:'/auditorias/'+id,
				success:function(data){
				data=$.parseJSON(data);
				resolve(data);
				}
			});
			
		});
		return get;
	}


	getComboTest(tabla,data){
		let get= new Promise((resolve,reject) => {
			$.ajax({
				url:'/combo/'+tabla,
				data:data,
				success:function(data){
					data=$.parseJSON(data);
					resolve(data);
				}
			});
			
		});
		return get;
	}



	

}