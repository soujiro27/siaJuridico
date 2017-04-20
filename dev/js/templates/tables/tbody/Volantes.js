var yo=require('yo-yo');

module.exports=function(data)
{
var el=(function () {
      
      var ac = require('c:\\xampp\\htdocs\\juridico\\node_modules\\yo-yoify\\lib\\appendChild.js')
      var bel7 = document.createElement("tr")
bel7.setAttribute("data-id", arguments[7])
bel7.setAttribute("data-campo", "idVolante")
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
var bel6 = document.createElement("td")
ac(bel6, [arguments[6]])
ac(bel7, ["\n",bel0,"\n",bel1,"\n",bel2,"\n",bel3,"\n",bel4,"\n",bel5,"\n",bel6,"\n"])
      return bel7
    }(data.idDocumento,data.numDocumento,data.fDocumento,data.asunto,data.idCaracter,data.idTurnado,data.idAccion,data.idVolante));
return el;

}