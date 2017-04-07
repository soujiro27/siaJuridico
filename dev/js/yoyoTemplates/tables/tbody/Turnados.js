var yo=require('yo-yo');

module.exports=function(data)
{
var el=yo`<tr data-id="${data.idTurnado}" data-campo="idTurnado" >
<td>${data.siglas}</td>
<td>${data.nombre}</td>
<td>${data.estatus}</td>
</tr>`;
return el;

}