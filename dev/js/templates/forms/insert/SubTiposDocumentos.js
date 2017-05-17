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
      var bel14 = document.createElement("form")
bel14.setAttribute("method", "POST")
bel14.setAttribute("id", "SubTiposDocumentos")
bel14.setAttribute("class", "form-inline")
var bel1 = document.createElement("div")
bel1.setAttribute("class", "form-group idDocumento")
var bel0 = document.createElement("label")
bel0.setAttribute("htmlFor", "idDocumento")
ac(bel0, ["Tipo de Documento"])
ac(bel1, ["\n    ",bel0,"\n    ",arguments[0],"\n"])
var bel4 = document.createElement("div")
bel4.setAttribute("class", "form-group nombre")
var bel2 = document.createElement("label")
bel2.setAttribute("htmlFor", "nombre")
ac(bel2, ["Nombre"])
var bel3 = document.createElement("input")
bel3.setAttribute("type", "text")
bel3.setAttribute("id", "nombre")
bel3.setAttribute("placeholder", "Nombre")
bel3.setAttribute("required", "required")
bel3.setAttribute("pattern", "[A-Za-z].{1,49}")
bel3.setAttribute("name", "nombre")
bel3.setAttribute("title", "Nombre Incorrecto o Caracteres maximos")
bel3.setAttribute("class", "form-control")
ac(bel4, ["\n    ",bel2,"\n    ",bel3,"\n"])
var bel10 = document.createElement("div")
bel10.setAttribute("class", "form-group promocion")
var bel5 = document.createElement("label")
bel5.setAttribute("htmlFor", "estatus")
ac(bel5, ["Promocion"])
var bel9 = document.createElement("select")
bel9.setAttribute("id", "promocion")
bel9.setAttribute("name", "promocion")
bel9.setAttribute("required", "required")
bel9.setAttribute("class", "form-control")
var bel6 = document.createElement("option")
bel6.setAttribute("value", "")
ac(bel6, ["Escoga Opcion"])
var bel7 = document.createElement("option")
bel7.setAttribute("value", "SI")
ac(bel7, ["SI"])
var bel8 = document.createElement("option")
bel8.setAttribute("value", "NO")
ac(bel8, ["NO"])
ac(bel9, ["\n    ",bel6,"\n    ",bel7,"\n    ",bel8,"\n    "])
ac(bel10, ["\n    ",bel5,"\n    ",bel9,"\n"])
var bel13 = document.createElement("div")
bel13.setAttribute("class", "form-group send")
var bel11 = document.createElement("input")
bel11.setAttribute("type", "submit")
bel11.setAttribute("value", "Guardar")
bel11.setAttribute("class", "btn btn-primary btn-sm")
var bel12 = document.createElement("button")
bel12.setAttribute("id", "cancelar")
bel12.setAttribute("class", "btn btn-default btn-sm")
ac(bel12, ["Cancelar"])
ac(bel13, ["\n    ",bel11,"\n    ",bel12,"\n"])
ac(bel14, ["\n   ",bel1,"\n",bel4,"\n\n",bel10,"\n",bel13,"\n\n"])
      return bel14
    }(render));

}


function test()
{
    alert('no se que onda');
}