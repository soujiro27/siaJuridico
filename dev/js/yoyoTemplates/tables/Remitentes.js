var yo=require('yo-yo');
var body=require('./tbody/Remitentes.js');
module.exports=function(datos){
var cont=0;
var el=yo`<table class="table table-striped table-bordered table-hover principal"><thead>
	<th>Saludo</th>
	<th>Nombre</th>
	<th>Cargo</th>
	<th>Siglas</th>
	<th>Procedencia</th>
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