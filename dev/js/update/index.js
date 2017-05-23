var empty=require('empty-element');
var page=require('page');

var Acciones=require('./Acciones');
var Caracteres=require('./Caracteres');
var SubTiposDocumentos=require('./SubTiposDocumentos');

var objCombo=require('./../jsonCombos')
var url=require('./../Redireccion/Urls');
var notfications=require('./../Notificaciones/noty');

var link=new url();
var noty=new notfications();
var jsonCombo=new objCombo();
/*------------------RUTAS-----------------*/

page('/juridico/Acciones/update/:campo/:id',function(ctx, netx){
	var id=ctx.params.id;
	var campo=ctx.params.campo;
	var obj={};
	obj[campo]=id;
	cargaDatos(obj).
	then(response => {
		var form=Acciones(response[0]);
		render(form);
		sendData(campo,id);
	})
});


page('/juridico/Caracteres/update/:campo/:id',function(ctx, netx){
	var id=ctx.params.id;
	var campo=ctx.params.campo;
	var obj={};
	obj[campo]=id;
	cargaDatos(obj).
	then(response => {
		var form=Caracteres(response[0]);
		render(form);
		sendData(campo,id);
	})
});


page('/juridico/SubTiposDocumentos/update/:campo/:id',function(ctx, netx){
	var id=ctx.params.id;
	var campo=ctx.params.campo;
	var obj={};
	obj[campo]=id;
	cargaDatos(obj).
	then(response => {
		var form=SubTiposDocumentos(response[0]);
		render(form);
		var selected=response[0].idTipoDocto;
		var objeto=jsonCombo.tiposDocumentos();
		cargaCombo(objeto)
   		.then(response =>{
    		$('select#idDocumento').html(response);
    		$('select#idDocumento > option[value="'+selected+'"]').attr('selected', 'selected');
   		})
		sendData(campo,id);
	})
});








function render(form){
    var main=document.getElementById('main-content');
    empty(main);
    $('div#main-content').append(form);
    cancelar();
}

function cancelar(){
  $('button#cancelar').click(function(e){
    e.preventDefault();
    link.Main();
  });
}

function cargaDatos(obj){
	let get = new Promise((resolve,reject) =>{
		$.get({
			url:'/get/'+ruta,
			data:obj,
			success:function(data){
				var data=$.parseJSON(data);
				resolve(data);
			}
		})
	})
	return get;
}



function sendData(campo,id){
   $('form#Update'+ruta).on('submit',function(e){
      e.preventDefault();
      var datos=$(this).serialize()+'&'+campo+'='+id;;
      actualizaRegistro(datos);
   })
}


function actualizaRegistro(datos)
{
	
	let update=new Promise((resolve,reject)=>{
        $.post({
            url:'/update/'+ruta,
            data:datos,
            success:function(response) {
                var data=$.parseJSON(response);
                if(data.insert=='false'){
                  noty.Error();
                }else{
                  link.Main();
                }
            }
        });
    });
    return update;
}


function cargaCombo(obj){
  let combo = new Promise((resolve,reject)=>{
      $.get({
          url:'/getCombo',
          data:obj,
          success:function(data){
            var datos=$.parseJSON(data);
            var option=$.parseHTML(creaSelect(datos));
            resolve(option);
          }
      });
  })
  return combo;
}


function creaSelect(datos){
  var cont=1;
  var opt='<option value="">Escogue una Opcion</option>';
  $.each(datos, function(index, val) {
    cont=1;
     for(var x in datos[index]){
        if(cont<2){
          opt+='<option value='+datos[index][x]+'>';
          cont=5;
        }else{
          opt+=datos[index][x]+'</option>';
        }
     }
  });

  return opt;
}


