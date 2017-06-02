
var page=require('page');
var empty=require('empty-element');
require("jquery-ui-browserify");
var query=require('jquery-confirm');

var Acciones=require('./Acciones');
var Caracteres=require('./Caracteres');
var SubtiposDocumentos=require('./SubTiposDocumentos');
var Volantes=require('./Volantes');
var nota=require('./nota/');
var notaUpdate=require('./../update/nota/');

var url=require('./../Redireccion/Urls');
var notfications=require('./../Notificaciones/noty');
var objCombo=require('./../jsonCombos')

var link=new url();
var noty=new notfications();
var jsonCombo=new objCombo();



/*-------------RUTAS-------------*/

page('/juridico/Acciones/Add',function(ctx,next) {
   render(Acciones);
   sendData();
})

page('/juridico/Caracteres/Add',function(ctx,next) {
   render(Caracteres);
   sendData();
})

page('/juridico/SubtiposDocumentos/Add',function(ctx,next) {
   render(SubtiposDocumentos);
   var objeto=jsonCombo.tiposDocumentos();
   cargaCombo(objeto)
   .then(response =>{
       creaSelect(response,'idDocumento');
   })
   sendData();
})

page('/juridico/Volantes/Add',function(ctx,next) {
   render(Volantes); 
   cargaCombosInicio();
   cargaSubDocumento();
   obtieneFolio().then(response=>{$('input#Folio').val(response[0].folio)});
   sendData();
})





page('/juridico/Nota/update/:campo/:id',function(ctx, netx){
  var id=ctx.params.id;
  var campo=ctx.params.campo;
  var notaJson=jsonCombo.notas(id);
  cargaCombo(notaJson)
  .then(response =>{
    if(response.length>0){
        render(notaUpdate(response[0]));
        $('div.widget-icons').html('<button class="btn btn-primary btn-sm" id="printNota" data-id='+response[0].idVolante+' >Imprimir Acuse </button>');
        $('button#printNota').click(function(){
            var idV=$(this).data('id');
            link.reporteConfronta(idV);
        })
        sendDataUpdate('confrontasJuridico',response[0].idVolante);

    }else{
      render(nota(id)); 
      sendData()
    }
  })
  //render(nota(id));
  
});









/*---------------FUNCIONES-----------------*/


function render(form){
    var main=document.getElementById('main-content');
    empty(main);
    $('div#main-content').append(form);
    $('input#fDocumento').datepicker({ dateFormat: "yy-mm-dd" });
    $('input#fRecepcion').datepicker({ dateFormat: "yy-mm-dd" });
    $('a#agregar').hide();
    cancelar();
}

function sendData(){
   $('form#'+ruta).on('submit',function(e){
      e.preventDefault();
      var datos=$(this).serialize();
      if(ruta=='Volantes'){

      var fl=$('input#Folio').val();
      var objeto=jsonCombo.folio(fl);
      cargaCombo(objeto).
      then(response=>{
        if(response.length>0){
            noty.folio();
        }else{
          guardaRegistro(datos);
        }
      })
      }else{
        guardaRegistro(datos);
      }
      
   })
}

function cancelar(){
  $('button#cancelar').click(function(e){
    e.preventDefault();
    link.Main();
  });
}

function guardaRegistro(datos){
    let save=new Promise((resolve,reject)=>{
        $.post({
            url:'/insert/'+ruta,
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




function cargaCombosInicio(){
  var tiposDocumentos=jsonCombo.tiposDocumentos();
  var caracter=jsonCombo.caracteres();
  var turnado=jsonCombo.turnados();
  var accion=jsonCombo.acciones();
  
  var objetos={
    idDocumento:[tiposDocumentos],
    idCaracter:[caracter],
    idTurnado:[turnado],
    idAccion:[accion]
  }

  $.each(objetos, function(index, val) {
     val.map(function(data){
        cargaCombo(data).then(response=>{
          creaSelect(response,index);
          });
     });
  });
  
}

function cargaSubDocumento(){
  $('select#idDocumento').change(function(){
    var id=$(this).val();
    var sub=jsonCombo.subTipoDocumentos(id);
    cargaCombo(sub).
    then(response=>{
      creaSelect(response,'subDocumento');
      if($('select#subDocumento option').length>1){
          $('div.contentVolante').hide();
          $('div.subDocumento').show();
          $('div.datosAuditoria').slideUp('slow');
          $('select#subDocumento').on('change',cargaPromocion);
      }
      else{
        $('div.subDocumento').hide();
        $('div.Promocion').hide();
        $('div.cveAuditoria').hide();
        
        $('div.contentVolante').show();
        $('div.datosAuditoria').slideUp('slow');
      }
    })
  })
}


function cargaPromocion(){
  var sub=$(this).val();
  var optPromo= '<option value="">Escoge Opcion</option>';
  optPromo+='<option value="SI">SI</option>';
  optPromo+='<option value="NO">NO</option>';
  if(sub==' '){
     $('div.Promocion').hide();
  }
  $('div.cveAuditoria').hide();

  $('select#promocion').html(optPromo);
  $('div.Promocion').show();
  $('div.datosAuditoria').slideUp('slow');
  $('select#promocion').on('change',cargaComboAuditoria);
}


function cargaComboAuditoria(){
  $('div.datosAuditoria').slideUp('slow');
  var promo=$(this).val();
  var auditorias=jsonCombo.auditorias();
  cargaCombo(auditorias)
  .then(response => {
    creaSelect(response,'cveAuditoria');
  })
 
   if(promo==''){
     $('div.cveAuditoria').hide();
  }
     $('div.cveAuditoria').show();
     $('select#cveAuditoria').on('change',cargaDatosAuditoria);  


}


function cargaDatosAuditoria(){
var id=$(this).val();
checaDocumento(id);
}


function checaDocumento(id){
  var sub=$('select#subDocumento').val();
  var cve=$('select#cveAuditoria').val();
  var objDuplicado=jsonCombo.duplicado(sub,cve);
  cargaCombo(objDuplicado) 
  .then(response=>{
       
      if(response.length>0){
        noty.volante(response[0].idVolante);
        $('div.datosAuditoria').hide('fast');
        $('div.contentVolante').hide('fast');
      }else{
        datosAuditoria(id).then(response=>{
          console.log(response);
          separaDatosAuditoria(response[0].sujeto,'idUnidad');
          separaDatosAuditoria(response[0].objeto,'idObjeto');
          $('ul#tipoAuditoria').html('<li>'+response[0].tipo+'</li>');
          $('input#idRemitente').val(response[0].idArea);
          $('div.datosAuditoria').css('display','flex');
          $('div.datosAuditoria').slideDown('slow');
          $('div.contentVolante').show('slow');
            
        })
      }
  })


}



function datosAuditoria(id){
   let combo = new Promise((resolve,reject)=>{
      $.get({
          url:'/auditorias/'+id,
          success:function(data){
            var datos=$.parseJSON(data);
            //var option=$.parseHTML(creaSelect(datos));
            //resolve(option);
            resolve(datos);
          }
      });
  })
  return combo;
}


function separaDatosAuditoria(palabra,id){
  var arreglo=palabra.split("/");
  var li="";
  $.each(arreglo, function(index, val) {
    li+='<li>'+val+'</li>';
  });
     $('ul#'+id).html(li);
}



function obtieneFolio(){
  let folio = new Promise((resolve,reject)=>{
      $.get({
          url:'/folio/Volantes/folio',
          success:function(data){
            var datos=$.parseJSON(data);
            //var option=$.parseHTML(creaSelect(datos));
            //resolve(option);
            resolve(datos);
          }
      });
  })
  return folio;
}

function escondeDatos(){
   var cont=0;
    $('div.datosAuditoria p.escondeDatos').click(function(){
          $('div.idUnidad').toggle();
          $('div.idObjeto').toggle();
          $('div.tipoAuditoria').toggle();
          $('div.datosAuditoria span').toggle();
          if(cont==0){
            $(this).addClass('rotaFlecha') ;
            cont=1;
          }
          else
          {
            $(this).removeClass('rotaFlecha');
            cont=0;
          }
    })
}

function sendDataUpdate(tbl,id){
   $('form#Update'+ruta).on('submit',function(e){
      e.preventDefault();
      var datos=$(this).serialize();
      actualizaRegistro(datos,tbl,id);
   })
}



function actualizaRegistro(datos,tbl,id){
  
  let update=new Promise((resolve,reject)=>{
        $.post({
            url:'/update/'+tbl,
            data:datos,
            success:function(response) {
                var data=$.parseJSON(response);
                if(data.insert=='false'){
                  noty.Error();
                }else{
                 $.confirm({
                  title: 'El Registro se ha Actualizado!',
                  content: '¿Desea Imprimir el Acuse?',
                  buttons: {
                      confirm: function () {
                         link.reporteConfronta(id);
                  },
                      cancel: function () {
                         link.Main();
                      }
                  }
                });
                }
            }
        });
    });
    return update;
}


