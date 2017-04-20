var yo=require('yo-yo');

module.exports=function(data)
{
var el=yo`<tr data-id="${data.idVolante}" data-campo="idVolante" >
<td>${data.idDocumento}</td>
<td>${data.numDocumento}</td>
<td>${data.fDocumento}</td>
<td>${data.asunto}</td>
<td>${data.idCaracter}</td>
<td>${data.idTurnado}</td>
<td>${data.idAccion}</td>
</tr>`;
return el;

}