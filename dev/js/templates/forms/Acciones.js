var yo=require('yo-yo');

module.exports=function(){
return (function () {
      
      var ac = require('c:\\xampp\\htdocs\\juridico\\node_modules\\yo-yoify\\lib\\appendChild.js')
      var bel6 = document.createElement("form")
bel6.setAttribute("method", "POST")
bel6.setAttribute("id", "Acciones")
bel6.setAttribute("class", "form-inline")
var bel2 = document.createElement("div")
bel2.setAttribute("class", "form-group nombre")
var bel0 = document.createElement("label")
bel0.setAttribute("htmlFor", "nombre")
ac(bel0, ["Nombre "])
var bel1 = document.createElement("input")
bel1.setAttribute("type", "text")
bel1.setAttribute("id", "nombre")
bel1.setAttribute("placeholder", "Nombre")
bel1.setAttribute("required", "required")
bel1.setAttribute("pattern", "[A-Za-z].{1,10}")
bel1.setAttribute("name", "nombre")
bel1.setAttribute("title", "Nombre Incorrecto o Caracteres maximos")
bel1.setAttribute("class", "form-control")
ac(bel2, ["\n    ",bel0,"\n    ",bel1,"\n"])
var bel5 = document.createElement("div")
bel5.setAttribute("class", "form-group send")
var bel3 = document.createElement("input")
bel3.setAttribute("type", "submit")
bel3.setAttribute("value", "Guardar")
bel3.setAttribute("class", "btn btn-primary btn-sm")
var bel4 = document.createElement("button")
bel4.setAttribute("id", "cancelar")
bel4.setAttribute("class", "btn btn-default btn-sm")
ac(bel4, ["Cancelar"])
ac(bel5, ["\n    ",bel3,"\n    ",bel4,"\n"])
ac(bel6, ["\n",bel2,"\n\n",bel5,"\n"])
      return bel6
    }());

}