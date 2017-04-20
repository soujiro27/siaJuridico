var yo=require('yo-yo');

module.exports=function(){
return yo`<form method="POST" class="form-inline" id="UpdateVolantes">
<div class="headerVolante">
<div class="form-group idDocumento">
    <label for="idDocumento">Tipo de Documento</label>
    <select class=form-control name=idDocumento id="idDocumento" required>
    </select>
</div>

<div class="form-group subDocumento">
    <label for="subDocumento">Tipo de SubDocumento</label>
    <select class=form-control name=idSubTipoDocumento id="subDocumento" required>
    </select>
</div>

<div class="form-group Promocion">
    <label for="subDocumento">Promocion de Accion</label>
    <select class="form-control" name="promocion" id="promocion" required>
        <option value="NO"> Escoga Opcion </option>
        <option value="SI"> SI </option>
        <option value="NO"> NO </option>
    </select>
</div>



<div class="form-group cveAuditoria">
    <label for="cveAuditoria">Clave de Auditoria</label>
    <select class=form-control name=cveAuditoria id="cveAuditoria" required>
    </select>
</div>

</div>

<div class="datosAuditoria">

<div class="form-group idUnidad">
    <label for="idUnidad">Sujeto de Fiscalizacion</label>
    <input type="text" id="idUnidad"  class="form-control" disabled="true">
</div>

<div class="form-group idObjeto">
    <label for="idObjeto">Rubro</label>
    <input type="text" id="idObjeto"  class="form-control" disabled="true">
</div>

</div>



<div class="contentVolante">

<div class="form-group Folio">
    <label for="Folio">Folio</label>
    <input type="number" id="Folio" name="folio" required class="form-control">
</div>


<div class="form-group numDocumento">
    <label for="numDocumento">Numero de Documento</label>
    <input type="text" id="numDocumento" name="numDocumento" required class="form-control">
</div>

<div class="form-group fDocumento">
    <label for="fDocumento">Fecha de Documento</label>
    <input type="text" id="fDocumento" name="fDocumento" required class="form-control" pattern="(?:19|20)[0-9]{2}-(?:(?:0[1-9]|1[0-2])-(?:0[1-9]|1[0-9]|2[0-9])|(?:(?!02)(?:0[1-9]|1[0-2])-(?:30))|(?:(?:0[13578]|1[02])-31))">
</div>

<div class="form-group anexos">
    <label for="anexos">Numero de Anexos</label>
    <input type="number" id="anexos" name="anexos" required class="form-control">
</div>

<div class="form-group fRecepcion">
    <label for="fRecepcion">Fecha de Recepcion</label>
    <input type="text" id="fRecepcion" name="fRecepcion" required class="form-control" pattern="(?:19|20)[0-9]{2}-(?:(?:0[1-9]|1[0-2])-(?:0[1-9]|1[0-9]|2[0-9])|(?:(?!02)(?:0[1-9]|1[0-2])-(?:30))|(?:(?:0[13578]|1[02])-31))">
</div>

<div class="form-group hRecepcion">
    <label for="hRecepcion">Hora de Recepcion</label>
    <input type="time" id="hRecepcion" name="hRecepcion" required class="form-control">
</div>


<div class="form-group idRemitente">
    <label for="idRemitente">Remitente</label>
    <select class="form-control" name="idRemitente" id="idRemitente" required>
    </select>
</div>

<div class="form-group NombreRemitente">
    <label for="NombreRemitente">Nombre</label>
    <input type="text" id="NombreRemitente"  class="form-control" disabled="true">
</div>


<div class="form-group cargo">
    <label for="cargo">Cargo</label>
    <input type="text" id="cargo"  class="form-control" disabled="true">
</div>

<div class="form-group dependencia">
    <label for="dependencia">Dependencia</label>
    <input type="text" id="dependencia"  class="form-control" disabled="true">
</div>

<div class="form-group Destinatario">
    <label for="Destinatario">Destinatario</label>
    <input type="text" id="Destinatario"  name="destinatario" class="form-control" placeholder="Destinatario">
</div>

<div class="form-group Asunto">
    <label for="Asunto">Asunto</label>
    <textarea class="form-control" rows="3" name="asunto" required placeholder="Asunto"></textarea>
</div>

<div class="form-group idCaracter">
    <label for="idCaracter">Caracter</label>
    <select class="form-control" name="idCaracter" id="idCaracter" required>
    </select>
</div>

<div class="form-group idTurnado">
    <label for="idTurnado">Turnado a:</label>
    <select class="form-control" name="idTurnado" id="idTurnado" required>
    </select>
</div>

<div class="form-group idAccion">
    <label for="idAccion">Instruccion</label>
    <select class="form-control" name="idAccion" id="idAccion" required>
    </select>
</div>











<div class="form-group send">
    <input type="submit" class="btn btn-primary btn-sm" value="Guardar">
    <button class="btn btn-default btn-sm" id="cancelar">Cancelar</button>
</div>


</div>
</form>`;

}