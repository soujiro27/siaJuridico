var yo=require('yo-yo');



module.exports=function(data){


var hConfronta=data.hConfronta;
hConfronta=hConfronta.substring(5,0);

return yo`<form method="POST" class="form-inline" id="UpdateNota">

<div class="form-group notaInformativa">
    <label for="notaInformativa">nota Informativa</label>
    <input type="text" class="form-control" id="notaInformativa" placeholder="nota Informativa"   name="notaInformativa"  value="${data.notaInformativa}" >
</div>

<div class="form-group nombre">
    <label for="nombre">Nombre</label>
    <input type="text" class="form-control" id="nombre" placeholder="Nombre" required pattern="[A-Za-z].{1,49}" name="nombreResponsable" title="Formato Incorrecto" value="${data.nombreResponsable}" >
</div>

<div class="form-group cargo">
    <label for="cargo">Cargo</label>
    <input type="text" class="form-control" id="cargo" placeholder="cargo" required pattern="[A-Za-z].{1,49}" name="cargoResponsable" title="Formato Incorrecto" value="${data.cargoResponsable}" >
</div>

<div class="form-group hConfronta">
    <label for="hConfronta">Hora de Confronta</label>
    <input type="time" class="form-control" id="hConfronta" placeholder="hConfronta" required pattern="[A-Za-z].{1,49}" name="hConfronta" title="Formato Incorrecto" value="${hConfronta}" >
</div>


<div class="form-group siglas">
    <label for="siglas">Siglas</label>
    <input type="text" class="form-control" id="siglas" placeholder="siglas" required " name="siglas" title="Nombre Incorrecto o Caracteres maximos" value="${data.siglas}" >
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


