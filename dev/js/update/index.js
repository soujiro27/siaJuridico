var empty=require('empty-element');
var page=require('page');

var Acciones=require('./Acciones');
var Caracteres=require('./Caracteres');
var SubTiposDocumentos=require('./SubTiposDocumentos');
var Volantes=require('./Volantes');
var Irac=require('./irac');

var template=require('./../table/template')

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
        creaSelect(response,'idDocumento');
    		$('select#idDocumento > option[value="'+selected+'"]').attr('selected', 'selected');
   		})
		sendData(campo,id);
	})
});



page('/juridico/Volantes/update/:campo/:id',function(ctx, netx){
  var id=ctx.params.id;
  var campo=ctx.params.campo;
  var obj={};
  obj[campo]=id;
  cargaDatos(obj).
  then(response => {
    console.log(response);
    var form=Volantes(response[0]);
    render(form);
    $('a#agregar').attr('target','_blank');
    $('a#agregar').attr('href','/juridico/php/reportes/Volantes.php'+ "?param1="+ response[0].idVolante).text('Imprimir').show();
    cargaCombosInicio(response);
    
    sendData(campo,id);
  })
});


page('/juridico/Irac/update/:campo/:id',function(ctx, netx){
  var id=ctx.params.id;
  var campo=ctx.params.campo;
  var obj={};
  obj[campo]=id;
  cargaDatos(obj).
  then(response => {
    var form=Irac();
    render(form);
    cargaTablaIrac(response[0].idVolante);
    cargaFormIrac(response[0].idVolante);
    $('button#print').click(function(){
      link.reporteIfa(response[0].idVolante);
    });
  })

});




/*---------------------funciones -------------------*/


function render(form){
    var main=document.getElementById('main-content');
    empty(main);
    $('div#main-content').append(form);
    $('a#agregar').hide();
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


function actualizaRegistro(datos){
	
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
            resolve(datos);
          }
      });
  })
  return combo;
}


function creaSelect(datos,id){
  var cont=1;
  var opt='<option value="">Escoge una Opcion</option>';
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

  opt=$.parseHTML(opt);
  $('select#'+id).html(opt);
}


function cargaCombosInicio(valores){
  var remitente=jsonCombo.remitentes();
  var caracter=jsonCombo.caracteres();
  var turnado=jsonCombo.turnados();
  var accion=jsonCombo.acciones();
  
  var objetos={
    idRemitente:[remitente],
    idCaracter:[caracter],
    idTurnado:[turnado],
    idAccion:[accion]
  }

  $.each(objetos, function(index, val) {
     val.map(function(data){
        cargaCombo(data).then(response=>{
          creaSelect(response,index);
          $('select#idRemitente > option[value='+valores[0].idRemitente+']').attr('selected', 'selected');
          $('select#idCaracter > option[value='+valores[0].idCaracter+']').attr('selected', 'selected');
          $('select#idTurnado > option[value='+valores[0].idTurnado+']').attr('selected', 'selected');
          $('select#idAccion > option[value='+valores[0].idAccion+']').attr('selected', 'selected');
          });
     });
  });

  
}





function cargaFormIrac(idVolante)
{
  $('button#addIrac').click(function(){
    var sub=jsonCombo.iracSubDoc(idVolante);
    cargaCombo(sub)
    .then(response=>{
        var form=require('./irac/form');
        var main=document.getElementById('contentIrac');
        empty(main);
        $('div.contentIrac').append(form());
        sendDataObsIrac(response);
        cancelar();
    })

  });
}


function sendDataObsIrac(response){
  $('form#insert'+ruta).on('submit',function(e){
      e.preventDefault();
      var datos=$(this).serialize()+'&cveAuditoria='+response[0].cveAuditoria+'&idSubTipoDocumento='+response[0].idSubTipoDocumento+'&idVolante='+response[0].idVolante;
      guardaRegistroIrac(datos,'ObservacionesDoctosJuridico');
   })
}


function guardaRegistroIrac(datos,modulo){
    let save=new Promise((resolve,reject)=>{
        $.post({
            url:'/insert/'+modulo,
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
    return save;
}


function cargaTablaIrac(id)
{
  var obsv=jsonCombo.tablaIracObs(id);
  cargaCombo(obsv)
  .then(response=>{
    var table=template(response);
    var main=document.getElementById('contentIrac');
    empty(main);
    $('div.contentIrac').append(table);
    $('div.contentIrac table tr').click(function(){
        var id=$(this).data('id');
        var obsv=jsonCombo.updateIracObs(id);
        cargaCombo(obsv)
        .then(response=>{
          console.log(response);
            var form=require('./irac/updateIrac');
            var main=document.getElementById('contentIrac');
            empty(main);
            $('div.contentIrac').append(form(response[0]));
            sendData('idObservacionDoctoJuridico'
,response[0].idObservacionDoctoJuridico)
            cancelar();
        })
        //var updt=form(response)
       
    })
  })
}




