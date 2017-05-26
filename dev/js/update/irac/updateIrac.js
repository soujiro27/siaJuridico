var yo=require('yo-yo');

module.exports=function(data){


if(data.estatus=='ACTIVO')
{
    var opuesto='INACTIVO'
}
else {
 var opuesto='ACTIVO'   
}


return yo`
<form method="POST" class="form-inline" id="UpdateIrac">



<div class="form-group pagina">
    <label for="pagina">Pagina</label>
    <input type="number"  id="pagina" name="pagina" required class="form-control"  value="${data.pagina}" >
</div>


<div class="form-group parrafo">
    <label for="parrafo">Parrafo</label>
    <input type="text" id="parrafo" name="parrafo" required class="form-control" value="${data.parrafo}" >
</div>


<div class="form-group Asunto">
    <label for="Asunto">Observacion</label>
    <textarea class="form-control" rows="3" name="observacion" required placeholder="Observacion">${data.observacion}</textarea>
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


</form>`
}