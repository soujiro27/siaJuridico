var yo=require('yo-yo');
var body=require('./tbody/Volantes.js');
module.exports=function(datos){
var cont=0;
var el=(function () {
      
      var ac = require('c:\\xampp\\htdocs\\juridico\\node_modules\\yo-yoify\\lib\\appendChild.js')
      var bel10 = document.createElement("table")
bel10.setAttribute("class", "table table-striped table-bordered table-hover principal")
var bel8 = document.createElement("thead")
var bel0 = document.createElement("th")
ac(bel0, ["Documento"])
var bel1 = document.createElement("th")
ac(bel1, ["Tipo Documento"])
var bel2 = document.createElement("th")
ac(bel2, ["Num. Oficio"])
var bel3 = document.createElement("th")
ac(bel3, ["Remitente"])
var bel4 = document.createElement("th")
ac(bel4, ["Asunto"])
var bel5 = document.createElement("th")
ac(bel5, ["Caracter"])
var bel6 = document.createElement("th")
ac(bel6, ["Turnado"])
var bel7 = document.createElement("th")
ac(bel7, ["Instruccion"])
ac(bel8, ["\n\t",bel0,"\n\t",bel1,"\n\t",bel2,"\n\t",bel3,"\n\t",bel4,"\n\t",bel5,"\n\t",bel6,"\n\t",bel7,"\n"])
var bel9 = document.createElement("tbody")
ac(bel9, ["\n",arguments[0],"\n"])
ac(bel10, [bel8,"\n",bel9,"\n"])
      return bel10
    }(datos.map(function(datos,index,arr){
	return body(datos);
})));

return el;
}

