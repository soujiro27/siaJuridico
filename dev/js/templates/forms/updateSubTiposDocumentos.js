var yo=require('yo-yo');
var tiposDocumentos=require('./../combos/TiposDocumentos.js');
module.exports=function(data){

if(data.estatus.trim()=='ACTIVO')
{
    var opuesto='INACTIVO'
}
else {
 var opuesto='ACTIVO'   
}

var ruta=localStorage.getItem("ruta");
$.get({
    url:'/gettiposdocumentos',
    async:false,
    success:function(data)
    {
        data=JSON.parse(data);

        options=tiposDocumentos(data);
       
    }
})

options=$.parseHTML(options);
return (function () {
      
      var ac = require('c:\\xampp\\htdocs\\juridico\\node_modules\\yo-yoify\\lib\\appendChild.js')
      var bel14 = document.createElement("form")
bel14.setAttribute("method", "POST")
bel14.setAttribute("id", "UpdateSubTiposDocumentos")
bel14.setAttribute("class", "form-inline")
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
ac(bel1, ["\n    ",arguments[0],"\n    "])
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
bel4.setAttribute("value", arguments[1])
bel4.setAttribute("class", "form-control")
ac(bel5, ["\n    ",bel3,"\n    ",bel4,"\n"])
var bel10 = document.createElement("div")
bel10.setAttribute("class", "form-group estatus")
var bel6 = document.createElement("label")
bel6.setAttribute("htmlFor", "estatus")
ac(bel6, ["Estatus"])
var bel9 = document.createElement("select")
bel9.setAttribute("id", "estatus")
bel9.setAttribute("name", "estatus")
bel9.setAttribute("class", "form-control")
var bel7 = document.createElement("option")
bel7.setAttribute("value", arguments[2])
ac(bel7, [arguments[3]])
var bel8 = document.createElement("option")
bel8.setAttribute("value", arguments[4])
ac(bel8, [arguments[5]])
ac(bel9, ["\n    ",bel7,"\n    ",bel8,"\n    "])
ac(bel10, ["\n    ",bel6,"\n    ",bel9,"\n"])
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
ac(bel14, ["\n   ",bel2,"\n",bel5,"\n",bel10,"\n",bel13,"\n\n"])
      return bel14
    }(options,data.nombre,data.estatus,data.estatus,opuesto,opuesto));

}