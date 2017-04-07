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
      var bel24 = document.createElement("form")
bel24.setAttribute("method", "POST")
bel24.setAttribute("id", "UpdateRemitentes")
bel24.setAttribute("class", "form-inline")
var bel2 = document.createElement("div")
bel2.setAttribute("class", "form-group saludo")
var bel0 = document.createElement("label")
bel0.setAttribute("htmlFor", "saludo")
ac(bel0, ["Saludo"])
var bel1 = document.createElement("input")
bel1.setAttribute("type", "text")
bel1.setAttribute("id", "saludo")
bel1.setAttribute("placeholder", "saludo")
bel1.setAttribute("required", "required")
bel1.setAttribute("pattern", "[A-Za-z].{1,10}")
bel1.setAttribute("name", "saludo")
bel1.setAttribute("title", "Maximo 10 caracteres")
bel1.setAttribute("value", arguments[0])
bel1.setAttribute("class", "form-control")
ac(bel2, ["\n    ",bel0,"\n    ",bel1,"\n"])
var bel6 = document.createElement("div")
bel6.setAttribute("class", "form-group nombre")
var bel4 = document.createElement("label")
bel4.setAttribute("htmlFor", "nombre")
var bel3 = document.createElement("strong")
ac(bel3, ["(Nombre  Apellido Paterno  Apellido Materno)"])
ac(bel4, ["Nombre ",bel3])
var bel5 = document.createElement("input")
bel5.setAttribute("type", "text")
bel5.setAttribute("id", "nombre")
bel5.setAttribute("placeholder", "Nombre")
bel5.setAttribute("required", "required")
bel5.setAttribute("pattern", "[A-Za-z].{10,49}")
bel5.setAttribute("name", "nombre")
bel5.setAttribute("title", "Nombre Incorrecto o Caracteres maximos")
bel5.setAttribute("value", arguments[1])
bel5.setAttribute("class", "form-control")
ac(bel6, ["\n    ",bel4,"\n    ",bel5,"\n"])
var bel9 = document.createElement("div")
bel9.setAttribute("class", "form-group cargo")
var bel7 = document.createElement("label")
bel7.setAttribute("htmlFor", "cargo")
ac(bel7, ["Cargo"])
var bel8 = document.createElement("input")
bel8.setAttribute("type", "text")
bel8.setAttribute("id", "cargo")
bel8.setAttribute("placeholder", "Cargo")
bel8.setAttribute("required", "required")
bel8.setAttribute("pattern", "[A-Za-z].{5,99}")
bel8.setAttribute("name", "cargo")
bel8.setAttribute("title", "Maximo 100 carcateres")
bel8.setAttribute("value", arguments[2])
bel8.setAttribute("class", "form-control")
ac(bel9, ["\n    ",bel7,"\n    ",bel8,"\n"])
var bel12 = document.createElement("div")
bel12.setAttribute("class", "form-group siglas")
var bel10 = document.createElement("label")
bel10.setAttribute("htmlFor", "cveCargo")
ac(bel10, ["Siglas Cargo"])
var bel11 = document.createElement("input")
bel11.setAttribute("type", "text")
bel11.setAttribute("id", "siglas")
bel11.setAttribute("placeholder", "Siglas")
bel11.setAttribute("required", "required")
bel11.setAttribute("pattern", "[A-Za-z].{1,9}")
bel11.setAttribute("name", "siglas")
bel11.setAttribute("title", "Maximo 10 caracteres")
bel11.setAttribute("value", arguments[3])
bel11.setAttribute("class", "form-control")
ac(bel12, ["\n    ",bel10,"\n    ",bel11,"\n"])
var bel15 = document.createElement("div")
bel15.setAttribute("class", "form-group procedencia")
var bel13 = document.createElement("label")
bel13.setAttribute("htmlFor", "procedencia")
ac(bel13, ["Procedencia"])
var bel14 = document.createElement("input")
bel14.setAttribute("type", "text")
bel14.setAttribute("id", "procedencia")
bel14.setAttribute("placeholder", "Procedencia")
bel14.setAttribute("required", "required")
bel14.setAttribute("pattern", "[A-Za-z].{3,49}")
bel14.setAttribute("name", "procedencia")
bel14.setAttribute("title", "Maximo 50 caracteres")
bel14.setAttribute("value", arguments[4])
bel14.setAttribute("class", "form-control")
ac(bel15, ["\n    ",bel13,"\n    ",bel14,"\n"])
var bel20 = document.createElement("div")
bel20.setAttribute("class", "form-group estatus")
var bel16 = document.createElement("label")
bel16.setAttribute("htmlFor", "estatus")
ac(bel16, ["Estatus"])
var bel19 = document.createElement("select")
bel19.setAttribute("id", "estatus")
bel19.setAttribute("name", "estatus")
bel19.setAttribute("class", "form-control")
var bel17 = document.createElement("option")
bel17.setAttribute("value", arguments[5])
ac(bel17, [arguments[6]])
var bel18 = document.createElement("option")
bel18.setAttribute("value", arguments[7])
ac(bel18, [arguments[8]])
ac(bel19, ["\n    ",bel17,"\n    ",bel18,"\n    "])
ac(bel20, ["\n    ",bel16,"\n    ",bel19,"\n"])
var bel23 = document.createElement("div")
bel23.setAttribute("class", "form-group send")
var bel21 = document.createElement("input")
bel21.setAttribute("type", "submit")
bel21.setAttribute("value", "Guardar")
bel21.setAttribute("class", "btn btn-primary btn-sm")
var bel22 = document.createElement("button")
bel22.setAttribute("id", "cancelar")
bel22.setAttribute("class", "btn btn-default btn-sm")
ac(bel22, ["Cancelar"])
ac(bel23, ["\n    ",bel21,"\n    ",bel22,"\n"])
ac(bel24, ["\n   ",bel2,"\n",bel6,"\n",bel9,"\n",bel12,"\n",bel15,"\n",bel20,"\n",bel23,"\n"])
      return bel24
    }(data.saludo,data.nombre,data.cargo,data.siglas,data.procedencia,data.estatus,data.estatus,opuesto,opuesto));

}