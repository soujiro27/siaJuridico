var yo=require('yo-yo');
var comboRemitente=require('./../combos/Remitentes.js');
var comboCaracter=require('./../combos/Caracter.js');
var comboTurnado=require('./../combos/Turnado.js');
var comboAccion=require('./../combos/Accion.js');
module.exports=function(data){

if(data.estatus=='ACTIVO')
{
    var opuesto='INACTIVO'
}
else {
 var opuesto='ACTIVO'   
}

$.get({
    url:'/getComboRemitente',
    async:false,
    success:function(data){
        data=$.parseJSON(data);
       options=comboRemitente(data);
      
    }

});


var nombre,cargo,dependencia;

$.get({
    url:'/getDatosRemitente/'+data.idRemitente,
    async:false,
    success:function(data){
        data=$.parseJSON(data);
        nombre=data[0].nombre;
        cargo=data[0].cargo;
        dependencia=data[0].procedencia;
    }
});

$.get({
    url:'/getComboCaracter',
    async:false,
    success:function(data)
    {
        data=$.parseJSON(data);
        caracter=comboCaracter(data);
    }
});


$.get({
    url:'/getComboTurnado',
    async:false,
    success:function(data){
    data=$.parseJSON(data);
    turnado=comboTurnado(data);
    }
});


$.get({
    url:'/getComboAccion',
    async:false,
    success:function(data){
        data=$.parseJSON(data);
        accion=comboAccion(data);
    }
});




options=$.parseHTML(options);
caracter=$.parseHTML(caracter)
turnado=$.parseHTML(turnado);
accion=$.parseHTML(accion);

asunto=data.asunto;
console.log(asunto);
console.log(asunto.length);
asunto=asunto.trim();
console.log(asunto.length);

return (function () {
      
      var ac = require('c:\\xampp\\htdocs\\juridico\\node_modules\\yo-yoify\\lib\\appendChild.js')
      var bel54 = document.createElement("form")
bel54.setAttribute("method", "POST")
bel54.setAttribute("id", "UpdateVolantes")
bel54.setAttribute("class", "form-inline")
var bel53 = document.createElement("div")
bel53.setAttribute("class", "contentVolante")
var bel2 = document.createElement("div")
bel2.setAttribute("class", "form-group Folio")
var bel0 = document.createElement("label")
bel0.setAttribute("htmlFor", "Folio")
ac(bel0, ["Folio"])
var bel1 = document.createElement("input")
bel1.setAttribute("type", "number")
bel1.setAttribute("id", "Folio")
bel1.setAttribute("name", "folio")
bel1.setAttribute("required", "required")
bel1.setAttribute("value", arguments[0])
bel1.setAttribute("disabled", "true")
bel1.setAttribute("class", "form-control")
ac(bel2, ["\n    ",bel0,"\n    ",bel1,"\n"])
var bel5 = document.createElement("div")
bel5.setAttribute("class", "form-group numDocumento")
var bel3 = document.createElement("label")
bel3.setAttribute("htmlFor", "numDocumento")
ac(bel3, ["Numero de Documento"])
var bel4 = document.createElement("input")
bel4.setAttribute("type", "text")
bel4.setAttribute("id", "numDocumento")
bel4.setAttribute("name", "numDocumento")
bel4.setAttribute("required", "required")
bel4.setAttribute("value", arguments[1])
bel4.setAttribute("disabled", "true")
bel4.setAttribute("class", "form-control")
ac(bel5, ["\n    ",bel3,"\n    ",bel4,"\n"])
var bel8 = document.createElement("div")
bel8.setAttribute("class", "form-group fDocumento")
var bel6 = document.createElement("label")
bel6.setAttribute("htmlFor", "fDocumento")
ac(bel6, ["Fecha de Documento"])
var bel7 = document.createElement("input")
bel7.setAttribute("type", "text")
bel7.setAttribute("id", "fDocumento")
bel7.setAttribute("name", "fDocumento")
bel7.setAttribute("required", "required")
bel7.setAttribute("pattern", "(?:19|20)[0-9]{2}-(?:(?:0[1-9]|1[0-2])-(?:0[1-9]|1[0-9]|2[0-9])|(?:(?!02)(?:0[1-9]|1[0-2])-(?:30))|(?:(?:0[13578]|1[02])-31))")
bel7.setAttribute("value", arguments[2])
bel7.setAttribute("class", "form-control")
ac(bel8, ["\n    ",bel6,"\n    ",bel7,"\n"])
var bel11 = document.createElement("div")
bel11.setAttribute("class", "form-group anexos")
var bel9 = document.createElement("label")
bel9.setAttribute("htmlFor", "anexos")
ac(bel9, ["Numero de Anexos"])
var bel10 = document.createElement("input")
bel10.setAttribute("type", "number")
bel10.setAttribute("id", "anexos")
bel10.setAttribute("name", "anexos")
bel10.setAttribute("required", "required")
bel10.setAttribute("value", arguments[3])
bel10.setAttribute("class", "form-control")
ac(bel11, ["\n    ",bel9,"\n    ",bel10,"\n"])
var bel14 = document.createElement("div")
bel14.setAttribute("class", "form-group fRecepcion")
var bel12 = document.createElement("label")
bel12.setAttribute("htmlFor", "fRecepcion")
ac(bel12, ["Fecha de Recepcion"])
var bel13 = document.createElement("input")
bel13.setAttribute("type", "text")
bel13.setAttribute("id", "fRecepcion")
bel13.setAttribute("name", "fRecepcion")
bel13.setAttribute("required", "required")
bel13.setAttribute("pattern", "(?:19|20)[0-9]{2}-(?:(?:0[1-9]|1[0-2])-(?:0[1-9]|1[0-9]|2[0-9])|(?:(?!02)(?:0[1-9]|1[0-2])-(?:30))|(?:(?:0[13578]|1[02])-31))")
bel13.setAttribute("value", arguments[4])
bel13.setAttribute("class", "form-control")
ac(bel14, ["\n    ",bel12,"\n    ",bel13,"\n"])
var bel17 = document.createElement("div")
bel17.setAttribute("class", "form-group hRecepcion")
var bel15 = document.createElement("label")
bel15.setAttribute("htmlFor", "hRecepcion")
ac(bel15, ["Hora de Recepcion"])
var bel16 = document.createElement("input")
bel16.setAttribute("type", "time")
bel16.setAttribute("id", "hRecepcion")
bel16.setAttribute("name", "hRecepcion")
bel16.setAttribute("required", "required")
bel16.setAttribute("value", arguments[5])
bel16.setAttribute("class", "form-control")
ac(bel17, ["\n    ",bel15,"\n    ",bel16,"\n"])
var bel20 = document.createElement("div")
bel20.setAttribute("class", "form-group idRemitente")
var bel18 = document.createElement("label")
bel18.setAttribute("htmlFor", "idRemitente")
ac(bel18, ["Remitente"])
var bel19 = document.createElement("select")
bel19.setAttribute("name", "idRemitente")
bel19.setAttribute("id", "idRemitente")
bel19.setAttribute("required", "required")
bel19.setAttribute("class", "form-control")
ac(bel19, ["\n   ",arguments[6],"\n    "])
ac(bel20, ["\n    ",bel18,"\n    ",bel19,"\n"])
var bel23 = document.createElement("div")
bel23.setAttribute("class", "form-group NombreRemitente")
var bel21 = document.createElement("label")
bel21.setAttribute("htmlFor", "NombreRemitente")
ac(bel21, ["Nombre"])
var bel22 = document.createElement("input")
bel22.setAttribute("type", "text")
bel22.setAttribute("id", "NombreRemitente")
bel22.setAttribute("disabled", "true")
bel22.setAttribute("value", arguments[7])
bel22.setAttribute("class", "form-control")
ac(bel23, ["\n    ",bel21,"\n    ",bel22,"\n"])
var bel26 = document.createElement("div")
bel26.setAttribute("class", "form-group cargo")
var bel24 = document.createElement("label")
bel24.setAttribute("htmlFor", "cargo")
ac(bel24, ["Cargo"])
var bel25 = document.createElement("input")
bel25.setAttribute("type", "text")
bel25.setAttribute("id", "cargo")
bel25.setAttribute("disabled", "true")
bel25.setAttribute("value", arguments[8])
bel25.setAttribute("class", "form-control")
ac(bel26, ["\n    ",bel24,"\n    ",bel25,"\n"])
var bel29 = document.createElement("div")
bel29.setAttribute("class", "form-group dependencia")
var bel27 = document.createElement("label")
bel27.setAttribute("htmlFor", "dependencia")
ac(bel27, ["Dependencia"])
var bel28 = document.createElement("input")
bel28.setAttribute("type", "text")
bel28.setAttribute("id", "dependencia")
bel28.setAttribute("disabled", "true")
bel28.setAttribute("value", arguments[9])
bel28.setAttribute("class", "form-control")
ac(bel29, ["\n    ",bel27,"\n    ",bel28,"\n"])
var bel32 = document.createElement("div")
bel32.setAttribute("class", "form-group Destinatario")
var bel30 = document.createElement("label")
bel30.setAttribute("htmlFor", "Destinatario")
ac(bel30, ["Destinatario"])
var bel31 = document.createElement("input")
bel31.setAttribute("type", "text")
bel31.setAttribute("id", "Destinatario")
bel31.setAttribute("name", "destinatario")
bel31.setAttribute("placeholder", "Destinatario")
bel31.setAttribute("value", arguments[10])
bel31.setAttribute("class", "form-control")
ac(bel32, ["\n    ",bel30,"\n    ",bel31,"\n"])
var bel35 = document.createElement("div")
bel35.setAttribute("class", "form-group Asunto")
var bel33 = document.createElement("label")
bel33.setAttribute("htmlFor", "Asunto")
ac(bel33, ["Asunto"])
var bel34 = document.createElement("textarea")
bel34.setAttribute("rows", "3")
bel34.setAttribute("name", "asunto")
bel34.setAttribute("required", "required")
bel34.setAttribute("placeholder", "Asunto")
bel34.setAttribute("class", "form-control")
ac(bel34, [arguments[11]])
ac(bel35, ["\n    ",bel33,"\n    ",bel34,"\n"])
var bel38 = document.createElement("div")
bel38.setAttribute("class", "form-group idCaracter")
var bel36 = document.createElement("label")
bel36.setAttribute("htmlFor", "idCaracter")
ac(bel36, ["Caracter"])
var bel37 = document.createElement("select")
bel37.setAttribute("name", "idCaracter")
bel37.setAttribute("id", "idCaracter")
bel37.setAttribute("required", "required")
bel37.setAttribute("class", "form-control")
ac(bel37, ["\n    ",arguments[12],"\n    "])
ac(bel38, ["\n    ",bel36,"\n    ",bel37,"\n"])
var bel41 = document.createElement("div")
bel41.setAttribute("class", "form-group idTurnado")
var bel39 = document.createElement("label")
bel39.setAttribute("htmlFor", "idTurnado")
ac(bel39, ["Turnado a:"])
var bel40 = document.createElement("select")
bel40.setAttribute("name", "idTurnado")
bel40.setAttribute("id", "idTurnado")
bel40.setAttribute("required", "required")
bel40.setAttribute("class", "form-control")
ac(bel40, ["\n    ",arguments[13],"\n    "])
ac(bel41, ["\n    ",bel39,"\n    ",bel40,"\n"])
var bel44 = document.createElement("div")
bel44.setAttribute("class", "form-group idAccion")
var bel42 = document.createElement("label")
bel42.setAttribute("htmlFor", "idAccion")
ac(bel42, ["Instruccion"])
var bel43 = document.createElement("select")
bel43.setAttribute("name", "idAccion")
bel43.setAttribute("id", "idAccion")
bel43.setAttribute("required", "required")
bel43.setAttribute("class", "form-control")
ac(bel43, ["\n    ",arguments[14],"\n    "])
ac(bel44, ["\n    ",bel42,"\n    ",bel43,"\n"])
var bel49 = document.createElement("div")
bel49.setAttribute("class", "form-group estatus")
var bel45 = document.createElement("label")
bel45.setAttribute("htmlFor", "estatus")
ac(bel45, ["Estatus"])
var bel48 = document.createElement("select")
bel48.setAttribute("id", "estatus")
bel48.setAttribute("name", "estatus")
bel48.setAttribute("class", "form-control")
var bel46 = document.createElement("option")
bel46.setAttribute("value", arguments[15])
ac(bel46, [arguments[16]])
var bel47 = document.createElement("option")
bel47.setAttribute("value", arguments[17])
ac(bel47, [arguments[18]])
ac(bel48, ["\n    ",bel46,"\n    ",bel47,"\n    "])
ac(bel49, ["\n    ",bel45,"\n    ",bel48,"\n"])
var bel52 = document.createElement("div")
bel52.setAttribute("class", "form-group send")
var bel50 = document.createElement("input")
bel50.setAttribute("type", "submit")
bel50.setAttribute("value", "Guardar")
bel50.setAttribute("class", "btn btn-primary btn-sm")
var bel51 = document.createElement("button")
bel51.setAttribute("id", "cancelar")
bel51.setAttribute("class", "btn btn-default btn-sm")
ac(bel51, ["Cancelar"])
ac(bel52, ["\n    ",bel50,"\n    ",bel51,"\n"])
ac(bel53, ["\n\n",bel2,"\n\n\n",bel5,"\n\n",bel8,"\n\n",bel11,"\n\n",bel14,"\n\n",bel17,"\n\n\n",bel20,"\n\n",bel23,"\n\n\n",bel26,"\n\n",bel29,"\n\n",bel32,"\n\n",bel35,"\n\n",bel38,"\n\n",bel41,"\n\n",bel44,"\n\n\n\n",bel49,"\n\n\n\n\n\n\n\n",bel52,"\n\n\n"])
ac(bel54, ["\n\n",bel53,"\n"])
      return bel54
    }(data.folio,data.numDocumento,data.fDocumento,data.anexos,data.fRecepcion,data.hRecepcion,options,nombre,cargo,dependencia,data.destinatario,asunto,caracter,turnado,accion,data.estatus,data.estatus,opuesto,opuesto));

}