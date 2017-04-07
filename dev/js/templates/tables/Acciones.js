var yo=require('yo-yo');
var body=require('./tbody/Acciones.js');
module.exports=function(datos){
var cont=0;
var el=(function () {
      
      var ac = require('c:\\xampp\\htdocs\\juridico\\node_modules\\yo-yoify\\lib\\appendChild.js')
      var bel4 = document.createElement("table")
bel4.setAttribute("class", "table table-striped table-bordered table-hover principal")
var bel2 = document.createElement("thead")
var bel0 = document.createElement("th")
ac(bel0, ["Nombre"])
var bel1 = document.createElement("th")
ac(bel1, ["Estatus"])
ac(bel2, ["\n\t",bel0,"\n\t",bel1,"\n"])
var bel3 = document.createElement("tbody")
ac(bel3, ["\n",arguments[0],"\n"])
ac(bel4, [bel2,"\n",bel3,"\n"])
      return bel4
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