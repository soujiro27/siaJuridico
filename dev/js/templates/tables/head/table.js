var yo=require('yo-yo');
var body=require('./../body/bodyTable.js');
var cadenas=require('./../../../controllers/tablas.js');

module.exports=function(datos){

let head=new cadenas();
var header=head.encabezadoTabla(datos);

var th="";
for(var x in header ){
	th+='<th>'+header[x]+'</th>';
}

var td=body(datos);


th=$.parseHTML(th);
td=$.parseHTML(td);

var el=(function () {
      
      var ac = require('c:\\xampp\\htdocs\\juridico\\node_modules\\yo-yoify\\lib\\appendChild.js')
      var bel2 = document.createElement("table")
bel2.setAttribute("class", "table table-striped table-bordered table-hover principal")
var bel0 = document.createElement("thead")
ac(bel0, ["\n",arguments[0],"\n"])
var bel1 = document.createElement("tbody")
ac(bel1, ["\n\t",arguments[1],"\n"])
ac(bel2, [bel0,"\n",bel1,"\n"])
      return bel2
    }(th,td));

return el;


}