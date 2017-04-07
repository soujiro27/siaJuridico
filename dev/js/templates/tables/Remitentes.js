var yo=require('yo-yo');
var body=require('./tbody/Remitentes.js');
module.exports=function(datos){
var cont=0;
var el=(function () {
      
      var ac = require('c:\\xampp\\htdocs\\juridico\\node_modules\\yo-yoify\\lib\\appendChild.js')
      var bel8 = document.createElement("table")
bel8.setAttribute("class", "table table-striped table-bordered table-hover principal")
var bel6 = document.createElement("thead")
var bel0 = document.createElement("th")
ac(bel0, ["Saludo"])
var bel1 = document.createElement("th")
ac(bel1, ["Nombre"])
var bel2 = document.createElement("th")
ac(bel2, ["Cargo"])
var bel3 = document.createElement("th")
ac(bel3, ["Siglas"])
var bel4 = document.createElement("th")
ac(bel4, ["Procedencia"])
var bel5 = document.createElement("th")
ac(bel5, ["Estatus"])
ac(bel6, ["\n\t",bel0,"\n\t",bel1,"\n\t",bel2,"\n\t",bel3,"\n\t",bel4,"\n\t",bel5,"\n"])
var bel7 = document.createElement("tbody")
ac(bel7, ["\n",arguments[0],"\n"])
ac(bel8, [bel6,"\n",bel7,"\n"])
      return bel8
    }(datos.map(function(datos,index,arr){
	return body(datos);
})));

return el;
}

/*
${datos.map(function(){
	body(datos[cont]);
	cont++;
})}
*/