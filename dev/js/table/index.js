var page=require('page');
var empty=require('empty-element');
var template=require('./template');
var url=require('./../Redireccion/Urls');

var link=new url();


page('/juridico/'+ruta,function(ctx,next){
	cargaDatos(ruta)
	.then(response => {
		var table=template(response);
		$('div.table-responsive').html(table);
		$('table tbody tr').click(function(){
			var id=$(this).data('id');
			var campo=$(this).data('nombre');
			$('table').remove();
			
			page.redirect('/juridico/'+ruta+'/update/'+campo+'/'+id);
		})
	})

})



function cargaDatos(tabla){
	let get = new Promise((resolve,reject)=>{
		$.get({
			url:'/table/'+tabla,
			success:function(data){
				data=$.parseJSON(data);
				resolve(data);
			}
		})
	})
	return get;
}