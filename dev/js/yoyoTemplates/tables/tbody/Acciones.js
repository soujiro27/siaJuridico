var yo=require('yo-yo');

module.exports=function(data)
{
var el=yo`<tr data-id="${data.idAccion}" data-campo="idAccion" >
<td>${data.nombre}</td>
<td>${data.estatus}</td>
</tr>`;
return el;

}