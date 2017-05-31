var yo=require('yo-yo');



module.exports=function(data){


return yo`<form method="POST" class="form-inline" id="UpdateNota">

<div class="form-group notaInformativa">
    <label for="notaInformativa">nota Informativa</label>
    <input type="text" class="form-control" id="notaInformativa" placeholder="nota Informativa"   name="notaInformativa"  value="${data.notaInformativa}" >
</div>

<div class="form-group nombre">
    <label for="nombre">Nombre</label>
    <input type="text" class="form-control" id="nombre" placeholder="Nombre" required pattern="[A-Za-z].{1,49}" name="nombre" title="Formato Incorrecto" value="${data.nombre}" >
</div>

<div class="form-group cargo">
    <label for="cargo">Cargo</label>
    <input type="text" class="form-control" id="cargo" placeholder="cargo" required pattern="[A-Za-z].{1,49}" name="cargo" title="Formato Incorrecto" value="${data.cargo}" >
</div>

<div class="form-group siglas">
    <label for="siglas">Siglas</label>
    <input type="text" class="form-control" id="siglas" placeholder="siglas" required " name="siglas" title="Nombre Incorrecto o Caracteres maximos" value="${data.siglas}" >
</div>

<div class="form-group fDocumento">
    <label for="fDocumento">fecha del Documento</label>
    <input type="text" class="form-control" id="fDocumento" placeholder="fecha" required  name="fDocumento" value=${data.fDocumento} >
</div>

<div class="form-group idVolante">
    <input type="hidden" class="form-control" id="idVolante" placeholder="nota Informativa"   name="idVolante" value="${data.idVolante}" >
</div>

<div class="form-group send">
    <input type="submit" class="btn btn-primary btn-sm" value="Actualizar">
    <button class="btn btn-default btn-sm" id="cancelar">Cancelar</button>
</div>

</form>`;

}


