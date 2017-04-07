var yo=require('yo-yo');
var body=require('./tbody/Turnados.js');
module.exports=function(datos){
var cont=0;
var el=yo`<table class="table table-striped table-bordered table-hover principal"><thead>
	<th>Sigla</th>
	<th>Nombre</th>
	<th>Estatus</th>
</thead>
<tbody>
${datos.map(function(datos,index,arr){
	return body(datos);
})}
</tbody>
</table>`;

return el;
}

/*
${datos.map(function(){
	body(datos[cont]);
	cont++;
})}
*/