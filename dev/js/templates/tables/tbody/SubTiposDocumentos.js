var yo=require('yo-yo');

module.exports=function(data)
{
var el=(function () {
      
      var ac = require('c:\\xampp\\htdocs\\juridico\\node_modules\\yo-yoify\\lib\\appendChild.js')
      var bel3 = document.createElement("tr")
bel3.setAttribute("data-id", arguments[3])
bel3.setAttribute("data-campo", "idSubTipoDocumento")
var bel0 = document.createElement("td")
ac(bel0, [arguments[0]])
var bel1 = document.createElement("td")
ac(bel1, [arguments[1]])
var bel2 = document.createElement("td")
ac(bel2, [arguments[2]])
ac(bel3, ["\n",bel0,"\n",bel1,"\n",bel2,"\n"])
      return bel3
    }(data.idTipoDocto,data.nombre,data.estatus,data.idSubTipoDocumento));
return el;

}