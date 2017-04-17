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

<div class="form-group Promocion">
    <label for="subDocumento">Promocion de Accion</label>
    <select class="form-control" name="promocion" id="promocion" required>
        <option val="0"> Escoga Opcion </option>
        <option val="SI"> SI </option>
        <option val="NO"> NO </option>
    </select>
</div>

<div class="form-group Folio">
    <label for="Folio">Numero de Folio</label>
    <input type="number" id="Folio" name="Folio" required class="form-control">
</div>


<div class="form-group numDocumento">
    <label for="numDocumento">Numero de Documento</label>
    <input type="text" id="numDocumento" name="numDocumento" required class="form-control">
</div>

<div class="form-group fDocumento">
    <label for="fDocumento">Fecha de Documento</label>
    <input type="text" id="datepicker" name="fDocumento" required class="form-control">
</div>

<div class="form-group anexos">
    <label for="anexos">Numero de Anexos</label>
    <input type="number" id="anexos" name="anexos" required class="form-control">
</div>

<div class="form-group fRecepcion">
    <label for="fRecepcion">Fecha de Recepcion</label>
    <input type="text" id="datepicker" name="fRecepcion" required class="form-control">
</div>

<div class="form-group hRecepcion">
    <label for="hRecepcion">Hora de Recepcion</label>
    <input type="time" id="hRecepcion" name="hRecepcion" required class="form-control">
</div>













<div class="form-group send">
    <input type="submit" class="btn btn-primary btn-sm" value="Guardar">
    <button class="btn btn-default btn-sm" id="cancelar">Cancelar</button>
</div>

</form>`;

}