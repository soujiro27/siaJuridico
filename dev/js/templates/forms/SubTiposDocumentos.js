var yo=require('yo-yo');

module.exports=function(){
return (function () {
      
      var ac = require('c:\\xampp\\htdocs\\juridico\\node_modules\\yo-yoify\\lib\\appendChild.js')
      var bel9 = document.createElement("form")
bel9.setAttribute("method", "POST")
bel9.setAttribute("id", "SubTiposDocumentos")
bel9.setAttribute("class", "form-inline")
var bel2 = document.createElement("div")
bel2.setAttribute("class", "form-group idDocumento")
var bel0 = document.createElement("label")
bel0.setAttribute("htmlFor", "idDocumento")
ac(bel0, ["Tipo de Documento"])
var bel1 = document.createElement("select")
bel1.setAttribute("name", "idTipoDocto")
bel1.setAttribute("id", "idDocumento")
bel1.setAttribute("required", "required")
bel1.setAttribute("class", "form-control")
ac(bel1, ["\n    "])
ac(bel2, ["\n    ",bel0,"\n    ",bel1,"\n"])
var bel5 = document.createElement("div")
bel5.setAttribute("class", "form-group nombre")
var bel3 = document.createElement("label")
bel3.setAttribute("htmlFor", "nombre")
ac(bel3, ["Nombre"])
var bel4 = document.createElement("input")
bel4.setAttribute("type", "text")
bel4.setAttribute("id", "nombre")
bel4.setAttribute("placeholder", "Nombre")
bel4.setAttribute("required", "required")
bel4.setAttribute("pattern", "[A-Za-z].{1,49}")
bel4.setAttribute("name", "nombre")
bel4.setAttribute("title", "Nombre Incorrecto o Caracteres maximos")
bel4.setAttribute("class", "form-control")
ac(bel5, ["\n    ",bel3,"\n    ",bel4,"\n"])
var bel8 = document.createElement("div")
bel8.setAttribute("class", "form-group send")
var bel6 = document.createElement("input")
bel6.setAttribute("type", "submit")
bel6.setAttribute("value", "Guardar")
bel6.setAttribute("class", "btn btn-primary btn-sm")
var bel7 = document.createElement("button")
bel7.setAttribute("id", "cancelar")
bel7.setAttribute("class", "btn btn-default btn-sm")
ac(bel7, ["Cancelar"])
ac(bel8, ["\n    ",bel6,"\n    ",bel7,"\n"])
ac(bel9, ["\n   ",bel2,"\n",bel5,"\n",bel8,"\n\n"])
      return bel9
    }());

}