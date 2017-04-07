var yo=require('yo-yo');

module.exports=function(data)
{
var el=yo`<tr data-id="${data.idSubTipoDocumento}" data-campo="idSubTipoDocumento" >
<td>${data.idTipoDocto}</td>
<td>${data.nombre}</td>
<td>${data.estatus}</td>
</tr>`;
return el;

}