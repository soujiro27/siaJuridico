var yo=require('yo-yo');

module.exports=function(data){


if(data.estatus=='ACTIVO')
{
    var opuesto='INACTIVO'
}
else {
 var opuesto='ACTIVO'   
}

return (function () {
      
      var ac = require('c:\\xampp\\htdocs\\juridico\\node_modules\\yo-yoify\\lib\\appendChild.js')
      var bel11 = document.createElement("form")
bel11.setAttribute("method", "POST")
bel11.setAttribute("id", "UpdateAcciones")
bel11.setAttribute("class", "form-inline")
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
bel1.setAttribute("value", arguments[0])
bel1.setAttribute("class", "form-control")
ac(bel2, ["\n    ",bel0,"\n    ",bel1,"\n"])
var bel7 = document.createElement("div")
bel7.setAttribute("class", "form-group estatus")
var bel3 = document.createElement("label")
bel3.setAttribute("htmlFor", "estatus")
ac(bel3, ["Estatus"])
var bel6 = document.createElement("select")
bel6.setAttribute("id", "estatus")
bel6.setAttribute("name", "estatus")
bel6.setAttribute("class", "form-control")
var bel4 = document.createElement("option")
bel4.setAttribute("value", arguments[1])
ac(bel4, [arguments[2]])
var bel5 = document.createElement("option")
bel5.setAttribute("value", arguments[3])
ac(bel5, [arguments[4]])
ac(bel6, ["\n    ",bel4,"\n    ",bel5,"\n    "])
ac(bel7, ["\n    ",bel3,"\n    ",bel6,"\n"])
var bel10 = document.createElement("div")
bel10.setAttribute("class", "form-group send")
var bel8 = document.createElement("input")
bel8.setAttribute("type", "submit")
bel8.setAttribute("value", "Guardar")
bel8.setAttribute("class", "btn btn-primary btn-sm")
var bel9 = document.createElement("button")
bel9.setAttribute("id", "cancelar")
bel9.setAttribute("class", "btn btn-default btn-sm")
ac(bel9, ["Cancelar"])
ac(bel10, ["\n    ",bel8,"\n    ",bel9,"\n"])
ac(bel11, ["\n",bel2,"\n",bel7,"\n",bel10,"\n"])
      return bel11
    }(data.nombre,data.estatus,data.estatus,opuesto,opuesto));

}