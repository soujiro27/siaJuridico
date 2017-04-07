var yo=require('yo-yo');

module.exports=function(){
return yo`<form method="POST" class="form-inline" id="Volantes">
<div class="form-group idDocumento">
    <label for="idDocumento">Tipo de Documento</label>
    <select class=form-control name=idDocumento id="idDocumento" required>
    </select>
</div>

<div class="form-group subDocumento">
    <label for="subDocumento">Tipo de SubDocumento</label>
    <select class=form-control name=subDocumento id="subDocumento" required>
    </select>
</div>


<div class="form-group send">
    <input type="submit" class="btn btn-primary btn-sm" value="Guardar">
    <button class="btn btn-default btn-sm" id="cancelar">Cancelar</button>
</div>
</form>`;

}