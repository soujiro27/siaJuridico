var yo=require('yo-yo');
var objCombo=require('./../../../models/objetoCombos.js');
var comboObj=new objCombo();

var cpm=require('./../../componentes/Components.js');
var componente=new cpm();



module.exports=function(){

var selec;
var combo=comboObj.tiposDocumentos();

$.ajax({
    url:'/combo/'+'tiposdocumentos',
    data:combo,
    async:false,
    success:function(data){
        data=$.parseJSON(data);
        selec=data;
    }
});



var render=componente.selectTipoDoc('idTipoDocto','idDocumento',selec);




return (function () {
      
      var ac = require('c:\\xampp\\htdocs\\juridico\\node_modules\\yo-yoify\\lib\\appendChild.js')
      var bel63 = document.createElement("form")
bel63.setAttribute("method", "POST")
bel63.setAttribute("id", "Volantes")
bel63.setAttribute("class", "form-inline")
var bel11 = document.createElement("div")
bel11.setAttribute("class", "headerVolante")
var bel1 = document.createElement("div")
bel1.setAttribute("class", "form-group idDocumento")
var bel0 = document.createElement("label")
bel0.setAttribute("htmlFor", "idDocumento")
ac(bel0, ["Tipo de Documento"])
ac(bel1, ["\n    ",bel0,"\n    ",arguments[0],"\n"])
var bel4 = document.createElement("div")
bel4.setAttribute("class", "form-group subDocumento")
var bel2 = document.createElement("label")
bel2.setAttribute("htmlFor", "subDocumento")
ac(bel2, ["Tipo de SubDocumento"])
var bel3 = document.createElement("div")
bel3.setAttribute("class", "selectSubDocumento")
ac(bel3, ["\n    "])
ac(bel4, ["\n    ",bel2,"\n    ",bel3,"\n"])
var bel7 = document.createElement("div")
bel7.setAttribute("class", "form-group Promocion")
var bel5 = document.createElement("label")
bel5.setAttribute("htmlFor", "subDocumento")
ac(bel5, ["Promocion de Accion"])
var bel6 = document.createElement("div")
bel6.setAttribute("class", "selectPromo")
ac(bel7, ["\n    ",bel5,"\n    ",bel6,"\n"])
var bel10 = document.createElement("div")
bel10.setAttribute("class", "form-group cveAuditoria")
var bel8 = document.createElement("label")
bel8.setAttribute("htmlFor", "cveAuditoria")
ac(bel8, ["Clave de Auditoria"])
var bel9 = document.createElement("div")
bel9.setAttribute("class", "selectAuditoria")
ac(bel10, ["\n    ",bel8,"\n    ",bel9,"\n"])
ac(bel11, ["\n\n",bel1,"\n\n",bel4,"\n\n",bel7,"\n\n\n\n",bel10,"\n\n"])
var bel21 = document.createElement("div")
bel21.setAttribute("class", "datosAuditoria")
var bel14 = document.createElement("div")
bel14.setAttribute("class", "form-group idUnidad")
var bel12 = document.createElement("label")
bel12.setAttribute("htmlFor", "idUnidad")
ac(bel12, ["Sujeto de Fiscalizacion"])
var bel13 = document.createElement("ul")
bel13.setAttribute("id", "idUnidad")
ac(bel14, ["\n    ",bel12,"\n    ",bel13,"\n"])
var bel17 = document.createElement("div")
bel17.setAttribute("class", "form-group idObjeto")
var bel15 = document.createElement("label")
bel15.setAttribute("htmlFor", "idObjeto")
ac(bel15, ["Rubro"])
var bel16 = document.createElement("ul")
bel16.setAttribute("id", "idObjeto")
ac(bel16, ["\n    "])
ac(bel17, ["\n    ",bel15,"\n    ",bel16,"\n"])
var bel20 = document.createElement("div")
bel20.setAttribute("class", "form-group tipoAuditoria")
var bel18 = document.createElement("label")
bel18.setAttribute("htmlFor", "tipoAuditoria")
ac(bel18, ["Tipo de Auditoria"])
var bel19 = document.createElement("ul")
bel19.setAttribute("id", "tipoAuditoria")
ac(bel19, ["\n    "])
ac(bel20, ["\n    ",bel18,"\n    \n     ",bel19,"\n"])
ac(bel21, ["\n\n",bel14,"\n\n",bel17,"\n\n",bel20,"\n\n\n\n"])
var bel62 = document.createElement("div")
bel62.setAttribute("class", "contentVolante")
var bel24 = document.createElement("div")
bel24.setAttribute("class", "form-group Folio")
var bel22 = document.createElement("label")
bel22.setAttribute("htmlFor", "Folio")
ac(bel22, ["Folio"])
var bel23 = document.createElement("input")
bel23.setAttribute("type", "number")
bel23.setAttribute("readonly", "readonly")
bel23.setAttribute("id", "Folio")
bel23.setAttribute("name", "folio")
bel23.setAttribute("required", "required")
bel23.setAttribute("class", "form-control")
ac(bel24, ["\n    ",bel22,"\n    ",bel23,"\n"])
var bel27 = document.createElement("div")
bel27.setAttribute("class", "form-group numDocumento")
var bel25 = document.createElement("label")
bel25.setAttribute("htmlFor", "numDocumento")
ac(bel25, ["Numero de Documento"])
var bel26 = document.createElement("input")
bel26.setAttribute("type", "text")
bel26.setAttribute("id", "numDocumento")
bel26.setAttribute("name", "numDocumento")
bel26.setAttribute("required", "required")
bel26.setAttribute("class", "form-control")
ac(bel27, ["\n    ",bel25,"\n    ",bel26,"\n"])
var bel30 = document.createElement("div")
bel30.setAttribute("class", "form-group fDocumento")
var bel28 = document.createElement("label")
bel28.setAttribute("htmlFor", "fDocumento")
ac(bel28, ["Fecha de Documento"])
var bel29 = document.createElement("input")
bel29.setAttribute("type", "text")
bel29.setAttribute("id", "fDocumento")
bel29.setAttribute("name", "fDocumento")
bel29.setAttribute("required", "required")
bel29.setAttribute("pattern", "(?:19|20)[0-9]{2}-(?:(?:0[1-9]|1[0-2])-(?:0[1-9]|1[0-9]|2[0-9])|(?:(?!02)(?:0[1-9]|1[0-2])-(?:30))|(?:(?:0[13578]|1[02])-31))")
bel29.setAttribute("class", "form-control")
ac(bel30, ["\n    ",bel28,"\n    ",bel29,"\n"])
var bel33 = document.createElement("div")
bel33.setAttribute("class", "form-group anexos")
var bel31 = document.createElement("label")
bel31.setAttribute("htmlFor", "anexos")
ac(bel31, ["Numero de Anexos"])
var bel32 = document.createElement("input")
bel32.setAttribute("type", "number")
bel32.setAttribute("id", "anexos")
bel32.setAttribute("name", "anexos")
bel32.setAttribute("required", "required")
bel32.setAttribute("pattern", "[0-9]{1,16}")
bel32.setAttribute("class", "form-control")
ac(bel33, ["\n    ",bel31,"\n    ",bel32,"\n"])
var bel36 = document.createElement("div")
bel36.setAttribute("class", "form-group fRecepcion")
var bel34 = document.createElement("label")
bel34.setAttribute("htmlFor", "fRecepcion")
ac(bel34, ["Fecha de Recepcion"])
var bel35 = document.createElement("input")
bel35.setAttribute("type", "text")
bel35.setAttribute("id", "fRecepcion")
bel35.setAttribute("name", "fRecepcion")
bel35.setAttribute("required", "required")
bel35.setAttribute("pattern", "(?:19|20)[0-9]{2}-(?:(?:0[1-9]|1[0-2])-(?:0[1-9]|1[0-9]|2[0-9])|(?:(?!02)(?:0[1-9]|1[0-2])-(?:30))|(?:(?:0[13578]|1[02])-31))")
bel35.setAttribute("class", "form-control")
ac(bel36, ["\n    ",bel34,"\n    ",bel35,"\n"])
var bel39 = document.createElement("div")
bel39.setAttribute("class", "form-group hRecepcion")
var bel37 = document.createElement("label")
bel37.setAttribute("htmlFor", "hRecepcion")
ac(bel37, ["Hora de Recepcion"])
var bel38 = document.createElement("input")
bel38.setAttribute("type", "time")
bel38.setAttribute("id", "hRecepcion")
bel38.setAttribute("name", "hRecepcion")
bel38.setAttribute("required", "required")
bel38.setAttribute("pattern", "([0-1]{1}[0-9]{1}|20|21|22|23):[0-5]{1}[0-9]{1}")
bel38.setAttribute("placeholder", "00:00")
bel38.setAttribute("title", "Formato de 24 horas 00:00")
bel38.setAttribute("class", "form-control")
ac(bel39, ["\n    ",bel37,"\n    ",bel38,"\n"])
var bel42 = document.createElement("div")
bel42.setAttribute("class", "form-group idRemitente")
var bel40 = document.createElement("label")
bel40.setAttribute("htmlFor", "idRemitente")
ac(bel40, ["Remitente"])
var bel41 = document.createElement("div")
bel41.setAttribute("class", "selectRemitente")
ac(bel42, ["\n    ",bel40,"\n     ",bel41,"\n\n   \n"])
var bel46 = document.createElement("div")
bel46.setAttribute("class", "form-group Destinatario")
var bel43 = document.createElement("label")
bel43.setAttribute("htmlFor", "Destinatario")
ac(bel43, ["Destinatario"])
var bel44 = document.createElement("input")
bel44.setAttribute("type", "text")
bel44.setAttribute("id", "Destinatario")
bel44.setAttribute("name", "destinatario")
bel44.setAttribute("placeholder", "Destinatario")
bel44.setAttribute("pattern", "[a-zA-Z._- ]")
bel44.setAttribute("required", "required")
bel44.setAttribute("title", "Unicamente letras")
bel44.setAttribute("value", "DR. IVÁN DE JESÚS OLMOS CANSINO")
bel44.setAttribute("readonly", "readonly")
bel44.setAttribute("class", "form-control")
var bel45 = document.createElement("button")
bel45.setAttribute("id", "destinatario")
bel45.setAttribute("class", "btn btn-info")
ac(bel45, ["Editar Destinatario"])
ac(bel46, ["\n    ",bel43,"\n    ",bel44,"\n    ",bel45,"\n\n"])
var bel49 = document.createElement("div")
bel49.setAttribute("class", "form-group Asunto")
var bel47 = document.createElement("label")
bel47.setAttribute("htmlFor", "Asunto")
ac(bel47, ["Asunto"])
var bel48 = document.createElement("textarea")
bel48.setAttribute("rows", "3")
bel48.setAttribute("name", "asunto")
bel48.setAttribute("required", "required")
bel48.setAttribute("placeholder", "Asunto")
bel48.setAttribute("class", "form-control")
ac(bel49, ["\n    ",bel47,"\n    ",bel48,"\n"])
var bel52 = document.createElement("div")
bel52.setAttribute("class", "form-group idCaracter")
var bel50 = document.createElement("label")
bel50.setAttribute("htmlFor", "idCaracter")
ac(bel50, ["Caracter"])
var bel51 = document.createElement("div")
bel51.setAttribute("class", "selectCaracter")
ac(bel52, ["\n    ",bel50,"\n    ",bel51,"\n   \n    \n"])
var bel55 = document.createElement("div")
bel55.setAttribute("class", "form-group idTurnado")
var bel53 = document.createElement("label")
bel53.setAttribute("htmlFor", "idTurnado")
ac(bel53, ["Turnado a:"])
var bel54 = document.createElement("div")
bel54.setAttribute("class", "selectTurnado")
ac(bel55, ["\n    ",bel53,"\n     ",bel54,"\n"])
var bel58 = document.createElement("div")
bel58.setAttribute("class", "form-group idAccion")
var bel56 = document.createElement("label")
bel56.setAttribute("htmlFor", "idAccion")
ac(bel56, ["Instruccion"])
var bel57 = document.createElement("div")
bel57.setAttribute("class", "selectAccion")
ac(bel58, ["\n    ",bel56,"\n     ",bel57,"\n"])
var bel61 = document.createElement("div")
bel61.setAttribute("class", "form-group send")
var bel59 = document.createElement("input")
bel59.setAttribute("type", "submit")
bel59.setAttribute("value", "Guardar")
bel59.setAttribute("class", "btn btn-primary btn-sm")
var bel60 = document.createElement("button")
bel60.setAttribute("id", "cancelar")
bel60.setAttribute("class", "btn btn-default btn-sm")
ac(bel60, ["Cancelar"])
ac(bel61, ["\n    ",bel59,"\n    ",bel60,"\n"])
ac(bel62, ["\n\n",bel24,"\n\n\n",bel27,"\n\n",bel30,"\n\n",bel33,"\n\n",bel36,"\n\n",bel39,"\n\n\n",bel42,"\n\n\n",bel46,"\n\n",bel49,"\n\n",bel52,"\n\n",bel55,"\n\n",bel58,"\n\n\n\n\n\n\n\n\n\n\n\n",bel61,"\n\n\n"])
ac(bel63, ["\n\n",bel11,"\n\n",bel21,"\n\n\n\n",bel62,"\n"])
      return bel63
    }(render));

}