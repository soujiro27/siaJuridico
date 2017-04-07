var yo=require('yo-yo');
var body=require('./tbody/SubTiposDocumentos.js');
module.exports=function(datos){
var cont=0;
var el=(function () {
      
      var ac = require('c:\\xampp\\htdocs\\juridico\\node_modules\\yo-yoify\\lib\\appendChild.js')
      var bel5 = document.createElement("table")
bel5.setAttribute("class", "table table-striped table-bordered table-hover principal")
var bel3 = document.createElement("thead")
var bel0 = document.createElement("th")
ac(bel0, ["Tipo Documento"])
var bel1 = document.createElement("th")
ac(bel1, ["Nombre"])
var bel2 = document.createElement("th")
ac(bel2, ["Estatus"])
ac(bel3, ["\n\t",bel0,"\n\t",bel1,"\n\t",bel2,"\n"])
var bel4 = document.createElement("tbody")
ac(bel4, ["\n",arguments[0],"\n"])
ac(bel5, [bel3,"\n",bel4,"\n"])
      return bel5
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