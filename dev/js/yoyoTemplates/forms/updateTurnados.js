var yo=require('yo-yo');

module.exports=function(data){


if(data.estatus=='ACTIVO')
{
    var opuesto='INACTIVO'
}
else {
 var opuesto='ACTIVO'   
}

return yo`<form method="POST" class="form-inline" id="UpdateTurnados">
      <div class="form-group siglas">
    <label for="siglas">Siglas</label>
    <input type="text" class="form-control" id="siglas" placeholder="siglas" required pattern="[A-Za-z].{1-2}" name="siglas" title="Maximo 2 caracteres" value="${data.siglas}">
</div>
<div class="form-group nombre">
    <label for="nombre">Nombre </label>
    <input type="text" class="form-control" id="nombre" placeholder="Nombre" required pattern="[A-Za-z].{1,50}" name="nombre" title="Nombre Incorrecto o Caracteres maximos" value="${data.nombre}">
</div>
<div class="form-group estatus">
    <label for="estatus">Estatus</label>
    <select id="estatus" name="estatus" class="form-control">
    <option value="${data.estatus}">${data.estatus}</option>
    <option value="${opuesto}">${opuesto}</option>
    </select>
</div>
<div class="form-group send">
    <input type="submit" class="btn btn-primary btn-sm" value="Guardar">
    <button class="btn btn-default btn-sm" id="cancelar">Cancelar</button>
</div>
</form>`;

}