var yo=require('yo-yo');

module.exports=function(data)
{
var el=(function () {
      
      var ac = require('c:\\xampp\\htdocs\\juridico\\node_modules\\yo-yoify\\lib\\appendChild.js')
      var bel2 = document.createElement("tr")
bel2.setAttribute("data-id", arguments[2])
bel2.setAttribute("data-campo", "idAccion")
var bel0 = document.createElement("td")
ac(bel0, [arguments[0]])
var bel1 = document.createElement("td")
ac(bel1, [arguments[1]])
ac(bel2, ["\n",bel0,"\n",bel1,"\n"])
      return bel2
    }(data.nombre,data.estatus,data.idAccion));
return el;

}