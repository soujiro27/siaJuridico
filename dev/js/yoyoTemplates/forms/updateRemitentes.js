var yo=require('yo-yo');

module.exports=function(data){


if(data.estatus=='ACTIVO')
{
    var opuesto='INACTIVO'
}
else {
 var opuesto='ACTIVO'   
}

return yo`<form method="POST" class="form-inline" id="UpdateRemitentes">
   <div class="form-group saludo">
    <label for="saludo">Saludo</label>
    <input type="text" class="form-control" id="saludo" placeholder="saludo" required pattern="[A-Za-z].{1,10}" name="saludo" title="Maximo 10 caracteres" value="${data.saludo}">
</div>
<div class="form-group nombre">
    <label for="nombre">Nombre <strong>(Nombre  Apellido Paterno  Apellido Materno)</strong></label>
    <input type="text" class="form-control" id="nombre" placeholder="Nombre" required pattern="[A-Za-z].{10,49}" name="nombre" title="Nombre Incorrecto o Caracteres maximos" value="${data.nombre}">
</div>
<div class="form-group cargo">
    <label for="cargo">Cargo</label>
    <input type="text" class="form-control" id="cargo" placeholder="Cargo" required pattern="[A-Za-z].{5,99}" name="cargo" title="Maximo 100 carcateres" value="${data.cargo}">
</div>
<div class="form-group siglas">
    <label for="cveCargo">Siglas Cargo</label>
    <input type="text" class="form-control" id="siglas" placeholder="Siglas" required pattern="[A-Za-z].{1,9}" name="siglas" title="Maximo 10 caracteres" value="${data.siglas}">
</div>
<div class="form-group procedencia">
    <label for="procedencia">Procedencia</label>
    <input type="text" class="form-control" id="procedencia" placeholder="Procedencia" required pattern="[A-Za-z].{3,49}" name="procedencia" title="Maximo 50 caracteres" value="${data.procedencia}">
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