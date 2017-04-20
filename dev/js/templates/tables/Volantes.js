var yo=require('yo-yo');
var body=require('./tbody/Volantes.js');
module.exports=function(datos){
var cont=0;
var el=(function () {
      
      var ac = require('c:\\xampp\\htdocs\\juridico\\node_modules\\yo-yoify\\lib\\appendChild.js')
      var bel9 = document.createElement("table")
bel9.setAttribute("class", "table table-striped table-bordered table-hover principal")
var bel7 = document.createElement("thead")
var bel0 = document.createElement("th")
ac(bel0, ["Documento"])
var bel1 = document.createElement("th")
ac(bel1, ["Num. Oficio"])
var bel2 = document.createElement("th")
ac(bel2, ["Fecha"])
var bel3 = document.createElement("th")
ac(bel3, ["Asunto"])
var bel4 = document.createElement("th")
ac(bel4, ["Caracter"])
var bel5 = document.createElement("th")
ac(bel5, ["Turnado"])
var bel6 = document.createElement("th")
ac(bel6, ["Instruccion"])
ac(bel7, ["\n\t",bel0,"\n\t",bel1,"\n\t",bel2,"\n\t",bel3,"\n\t",bel4,"\n\t",bel5,"\n\t",bel6,"\n"])
var bel8 = document.createElement("tbody")
ac(bel8, ["\n",arguments[0],"\n"])
ac(bel9, [bel7,"\n",bel8,"\n"])
      return bel9
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