module.exports=class Insert{


	inicio(datos){
		if(ruta=='Volantes'){
			this.insertVolantes(datos);
			
		}
		else
		{
			this.insert(datos)
		}
	}


	insertVolantes(datos){
		let insert= new Promise((resolve,reject) => {

			$.post({
				url:'/tableVolantes/'+ruta,
				data:datos,
				success:function(data){
					resolve(data);
				}
			});

		});
		return insert;
	}


	insert(datos)
	{
		let insert= new Promise((resolve,reject) => {

			$.post({
				url:'/table/'+ruta,
				data:datos,
				success:function(data){
					resolve(data);
				}
			});

		});
		return insert;
	}

	update(datos)
	{
		let insert= new Promise((resolve,reject) => {
			
			$.post({
				url:'/update/'+ruta,
				data:datos,
				success:function(data){
					resolve(data);
				}
			});

		});
		return insert;
	}



}