var yo=require('yo-yo');

module.exports=function(data)
{
var el=(function () {
      
      var ac = require('c:\\xampp\\htdocs\\juridico\\node_modules\\yo-yoify\\lib\\appendChild.js')
      var bel6 = document.createElement("tr")
bel6.setAttribute("data-id", arguments[6])
bel6.setAttribute("data-campo", "idRemitente")
var bel0 = document.createElement("td")
ac(bel0, [arguments[0]])
var bel1 = document.createElement("td")
ac(bel1, [arguments[1]])
var bel2 = document.createElement("td")
ac(bel2, [arguments[2]])
var bel3 = document.createElement("td")
ac(bel3, [arguments[3]])
var bel4 = document.createElement("td")
ac(bel4, [arguments[4]])
var bel5 = document.createElement("td")
ac(bel5, [arguments[5]])
ac(bel6, ["\n",bel0,"\n",bel1,"\n",bel2,"\n",bel3,"\n",bel4,"\n",bel5,"\n"])
      return bel6
    }(data.saludo,data.nombre,data.cargo,data.siglas,data.procedencia,data.estatus,data.idRemitente));
return el;

}