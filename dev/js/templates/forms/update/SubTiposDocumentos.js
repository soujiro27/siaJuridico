var yo=require('yo-yo');
var objCombo=require('./../../../models/objetoCombos.js');
var comboObj=new objCombo();

var cpm=require('./../../componentes/Components.js');
var componente=new cpm();
module.exports=function(data){


if(data.prmocion=='SI'){
    var promo='NO';
}else{
    var promo ='SI';
}



if(data.estatus.trim()=='ACTIVO'){
    var opuesto='INACTIVO'
}else {
    var opuesto='ACTIVO'   
}

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

var render=componente.selectTipoDocUpdate('idTipoDocto','idDocumento',selec,data.idTipoDocto);



return (function () {
      
      var ac = require('c:\\xampp\\htdocs\\juridico\\node_modules\\yo-yoify\\lib\\appendChild.js')
      var bel18 = document.createElement("form")
bel18.setAttribute("method", "POST")
bel18.setAttribute("id", "UpdateSubTiposDocumentos")
bel18.setAttribute("class", "form-inline")
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
bel3.setAttribute("value", arguments[1])
bel3.setAttribute("class", "form-control")
ac(bel4, ["\n    ",bel2,"\n    ",bel3,"\n"])
var bel9 = document.createElement("div")
bel9.setAttribute("class", "form-group promocion")
var bel5 = document.createElement("label")
bel5.setAttribute("htmlFor", "estatus")
ac(bel5, ["Promocion"])
var bel8 = document.createElement("select")
bel8.setAttribute("id", "promocion")
bel8.setAttribute("name", "promocion")
bel8.setAttribute("required", "required")
bel8.setAttribute("class", "form-control")
var bel6 = document.createElement("option")
bel6.setAttribute("value", arguments[2])
ac(bel6, [arguments[3]])
var bel7 = document.createElement("option")
bel7.setAttribute("value", arguments[4])
ac(bel7, [arguments[5]])
ac(bel8, ["\n    ",bel6,"\n    ",bel7,"\n    "])
ac(bel9, ["\n    ",bel5,"\n    ",bel8,"\n"])
var bel14 = document.createElement("div")
bel14.setAttribute("class", "form-group estatus")
var bel10 = document.createElement("label")
bel10.setAttribute("htmlFor", "estatus")
ac(bel10, ["Estatus"])
var bel13 = document.createElement("select")
bel13.setAttribute("id", "estatus")
bel13.setAttribute("name", "estatus")
bel13.setAttribute("class", "form-control")
var bel11 = document.createElement("option")
bel11.setAttribute("value", arguments[6])
ac(bel11, [arguments[7]])
var bel12 = document.createElement("option")
bel12.setAttribute("value", arguments[8])
ac(bel12, [arguments[9]])
ac(bel13, ["\n    ",bel11,"\n    ",bel12,"\n    "])
ac(bel14, ["\n    ",bel10,"\n    ",bel13,"\n"])
var bel17 = document.createElement("div")
bel17.setAttribute("class", "form-group send")
var bel15 = document.createElement("input")
bel15.setAttribute("type", "submit")
bel15.setAttribute("value", "Guardar")
bel15.setAttribute("class", "btn btn-primary btn-sm")
var bel16 = document.createElement("button")
bel16.setAttribute("id", "cancelar")
bel16.setAttribute("class", "btn btn-default btn-sm")
ac(bel16, ["Cancelar"])
ac(bel17, ["\n    ",bel15,"\n    ",bel16,"\n"])
ac(bel18, ["\n   ",bel1,"\n",bel4,"\n\n",bel9,"\n\n\n\n",bel14,"\n",bel17,"\n\n"])
      return bel18
    }(render,data.nombre,data.promocion,data.promocion,promo,promo,data.estatus,data.estatus,opuesto,opuesto));

}