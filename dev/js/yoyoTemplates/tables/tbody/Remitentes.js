var yo=require('yo-yo');

module.exports=function(data)
{
var el=yo`<tr data-id="${data.idRemitente}" data-campo="idRemitente" >
<td>${data.saludo}</td>
<td>${data.nombre}</td>
<td>${data.cargo}</td>
<td>${data.siglas}</td>
<td>${data.procedencia}</td>
<td>${data.estatus}</td>
</tr>`;
return el;

}