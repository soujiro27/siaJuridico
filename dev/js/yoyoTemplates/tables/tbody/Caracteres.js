var yo=require('yo-yo');

module.exports=function(data)
{
var el=yo`<tr data-id="${data.idCaracter}" data-campo="idCaracter" >
<td>${data.siglas}</td>
<td>${data.nombre}</td>
<td>${data.estatus}</td>
</tr>`;
return el;

}