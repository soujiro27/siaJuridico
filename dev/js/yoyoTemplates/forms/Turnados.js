var yo=require('yo-yo');

module.exports=function(){
return yo`<form method="POST" class="form-inline" id="Turnados">
   <div class="form-group siglas">
    <label for="siglas">Siglas</label>
    <input type="text" class="form-control" id="siglas" placeholder="siglas" required pattern="[A-Za-z].{1,10}" name="siglas" title="Maximo 10 caracteres">
</div>
<div class="form-group nombre">
    <label for="nombre">Nombre </label>
    <input type="text" class="form-control" id="nombre" placeholder="Nombre" required pattern="[A-Za-z].{1,50}" name="nombre" title="Nombre Incorrecto o Caracteres maximos" >
</div>

<div class="form-group send">
    <input type="submit" class="btn btn-primary btn-sm" value="Guardar">
    <button class="btn btn-default btn-sm" id="cancelar">Cancelar</button>
</div>
</form>`;

}