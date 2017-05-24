var Noty = require('noty');

module.exports=class notificaciones{

	Error(){
			new Noty({
			text: 'Registro Duplicado',
			type: 'error',
			layout: 'center',
			theme: 'metroui',
			timeout: 2000,
			progressBar: true
		}).show();
	}

	Success(){
		new Noty({
			text: 'Registro Guardado Correctamente',
			type: 'success',
			layout: 'center',
			theme: 'metroui',
			timeout: 1000,
			progressBar: true,
			callbacks:{
				afterClose:function(){
					alert("works");
				}
			}
		}).show();
	}
	volante(idVolante){
		new Noty({
			text: 'La auditoria ya fue asignada ',
			type: 'error',
			layout: 'center',
			theme: 'metroui',
			timeout: 3000,
			progressBar: true
		}).show();
	}
	folio(){
		new Noty({
			text: 'El folio ya se encuentra asignado',
			type: 'error',
			layout: 'center',
			theme: 'metroui',
			timeout: 1000,
			progressBar: true,
			callbacks:{
				afterClose:function(){
					alert("works");
				}
			}
		}).show();
	}
}