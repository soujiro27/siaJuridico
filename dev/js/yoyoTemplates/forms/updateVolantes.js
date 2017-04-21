var yo=require('yo-yo');
var comboRemitente=require('./../combos/Remitentes.js');
var comboCaracter=require('./../combos/Caracter.js');
var comboTurnado=require('./../combos/Turnado.js');
var comboAccion=require('./../combos/Accion.js');
module.exports=function(data){

if(data.estatus=='ACTIVO')
{
    var opuesto='INACTIVO'
}
else {
 var opuesto='ACTIVO'   
}

$.get({
    url:'/getComboRemitente',
    async:false,
    success:function(data){
        data=$.parseJSON(data);
       options=comboRemitente(data);
      
    }

});


var nombre,cargo,dependencia;

$.get({
    url:'/getDatosRemitente/'+data.idRemitente,
    async:false,
    success:function(data){
        data=$.parseJSON(data);
        nombre=data[0].nombre;
        cargo=data[0].cargo;
        dependencia=data[0].procedencia;
    }
});

$.get({
    url:'/getComboCaracter',
    async:false,
    success:function(data)
    {
        data=$.parseJSON(data);
        caracter=comboCaracter(data);
    }
});


$.get({
    url:'/getComboTurnado',
    async:false,
    success:function(data){
    data=$.parseJSON(data);
    turnado=comboTurnado(data);
    }
});


$.get({
    url:'/getComboAccion',
    async:false,
    success:function(data){
        data=$.parseJSON(data);
        accion=comboAccion(data);
    }
});




options=$.parseHTML(options);
caracter=$.parseHTML(caracter)
turnado=$.parseHTML(turnado);
accion=$.parseHTML(accion);

asunto=data.asunto;
console.log(asunto);
console.log(asunto.length);
asunto=asunto.trim();
console.log(asunto.length);

return yo`<form method="POST" class="form-inline" id="UpdateVolantes">

<div class="contentVolante">

<div class="form-group Folio">
    <label for="Folio">Folio</label>
    <input type="number" id="Folio" name="folio" required class="form-control" value="${data.folio}" disabled="true">
</div>


<div class="form-group numDocumento">
    <label for="numDocumento">Numero de Documento</label>
    <input type="text" id="numDocumento" name="numDocumento" required class="form-control" value="${data.numDocumento}" disabled="true">
</div>

<div class="form-group fDocumento">
    <label for="fDocumento">Fecha de Documento</label>
    <input type="text" id="fDocumento" name="fDocumento" required class="form-control" pattern="(?:19|20)[0-9]{2}-(?:(?:0[1-9]|1[0-2])-(?:0[1-9]|1[0-9]|2[0-9])|(?:(?!02)(?:0[1-9]|1[0-2])-(?:30))|(?:(?:0[13578]|1[02])-31))" value="${data.fDocumento}">
</div>

<div class="form-group anexos">
    <label for="anexos">Numero de Anexos</label>
    <input type="number" id="anexos" name="anexos" required class="form-control" value="${data.anexos}">
</div>

<div class="form-group fRecepcion">
    <label for="fRecepcion">Fecha de Recepcion</label>
    <input type="text" id="fRecepcion" name="fRecepcion" required class="form-control" pattern="(?:19|20)[0-9]{2}-(?:(?:0[1-9]|1[0-2])-(?:0[1-9]|1[0-9]|2[0-9])|(?:(?!02)(?:0[1-9]|1[0-2])-(?:30))|(?:(?:0[13578]|1[02])-31))" value="${data.fRecepcion}">
</div>

<div class="form-group hRecepcion">
    <label for="hRecepcion">Hora de Recepcion</label>
    <input type="time" id="hRecepcion" name="hRecepcion" required class="form-control" value="${data.hRecepcion}">
</div>


<div class="form-group idRemitente">
    <label for="idRemitente">Remitente</label>
    <select class="form-control" name="idRemitente" id="idRemitente" required>
   ${options}
    </select>
</div>

<div class="form-group NombreRemitente">
    <label for="NombreRemitente">Nombre</label>
    <input type="text" id="NombreRemitente"  class="form-control" disabled="true" value="${nombre}">
</div>


<div class="form-group cargo">
    <label for="cargo">Cargo</label>
    <input type="text" id="cargo"  class="form-control" disabled="true" value="${cargo}">
</div>

<div class="form-group dependencia">
    <label for="dependencia">Dependencia</label>
    <input type="text" id="dependencia"  class="form-control" disabled="true" value="${dependencia}">
</div>

<div class="form-group Destinatario">
    <label for="Destinatario">Destinatario</label>
    <input type="text" id="Destinatario"  name="destinatario" class="form-control" placeholder="Destinatario" value="${data.destinatario}">
</div>

<div class="form-group Asunto">
    <label for="Asunto">Asunto</label>
    <textarea class="form-control" rows="3" name="asunto" required placeholder="Asunto" >${asunto}</textarea>
</div>

<div class="form-group idCaracter">
    <label for="idCaracter">Caracter</label>
    <select class="form-control" name="idCaracter" id="idCaracter" required>
    ${caracter}
    </select>
</div>

<div class="form-group idTurnado">
    <label for="idTurnado">Turnado a:</label>
    <select class="form-control" name="idTurnado" id="idTurnado" required>
    ${turnado}
    </select>
</div>

<div class="form-group idAccion">
    <label for="idAccion">Instruccion</label>
    <select class="form-control" name="idAccion" id="idAccion" required>
    ${accion}
    </select>
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


</div>
</form>`;

}