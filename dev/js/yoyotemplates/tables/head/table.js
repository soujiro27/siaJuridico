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

var el=yo`<table class="table table-striped table-bordered table-hover principal"><thead>
${th}
</thead>
<tbody>
	${td}
</tbody>
</table>`;

return el;


}