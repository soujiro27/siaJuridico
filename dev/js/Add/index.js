
var page=require('page');
var empty=require('empty-element');
require("jquery-ui-browserify");

var Acciones=require('./Acciones');
var Caracteres=require('./Caracteres');
var SubtiposDocumentos=require('./SubTiposDocumentos');
var Volantes=require('./Volantes');

var url=require('./../Redireccion/Urls');
var notfications=require('./../Notificaciones/noty');
var objCombo=require('./../jsonCombos')

var jsonCombo=new objCombo();
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


/*---------------FUNCIONES-----------------*/


function render(form){
    var main=document.getElementById('main-content');
    empty(main);
    $('div#main-content').append(form);
    $('input#fDocumento').datepicker({ dateFormat: "yy-mm-dd" });
    $('input#fRecepcion').datepicker({ dateFormat: "yy-mm-dd" });
    cancelar();
}

function sendData(){
   $('form#'+ruta).on('submit',function(e){
      e.preventDefault();
      var datos=$(this).serialize();
      guardaRegistro(datos);
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
            //var option=$.parseHTML(creaSelect(datos));
            //resolve(option);
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
  //var auditorias=jsonCombo.auditorias();
  var remitente=jsonCombo.remitentes();
  var caracter=jsonCombo.caracteres();
  var turnado=jsonCombo.turnados();
  var accion=jsonCombo.acciones();
  
  var objetos={
    idDocumento:[tiposDocumentos],
    //cveAuditoria:[auditorias],
    idRemitente:[remitente],
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
  datosAuditoria(id).then(response=>{
    separaDatosAuditoria(response[0].sujeto,'idUnidad');
    separaDatosAuditoria(response[0].objeto,'idObjeto');
    $('ul#tipoAuditoria').html('<li>'+response[0].tipo+'</li>');
    $('div.datosAuditoria').css('display','flex');
    $('div.datosAuditoria').slideDown('slow');
    $('div.contentVolante').show('slow');
      //escondeDatos();
  })
}


function checaDocumento(){
  
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
          url:'/folio/Volantes/idVolante',
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

