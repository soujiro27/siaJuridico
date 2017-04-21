var yo=require('yo-yo');
var body=require('./tbody/Volantes.js');
module.exports=function(datos){
var cont=0;
var el=yo`<table class="table table-striped table-bordered table-hover principal"><thead>
	<th>Documento</th>
	<th>Tipo Documento</th>
	<th>Num. Oficio</th>
	<th>Remitente</th>
	<th>Asunto</th>
	<th>Caracter</th>
	<th>Turnado</th>
	<th>Instruccion</th>
</thead>
<tbody>
${datos.map(function(datos,index,arr){
	return body(datos);
})}
</tbody>
</table>`;

return el;
}

