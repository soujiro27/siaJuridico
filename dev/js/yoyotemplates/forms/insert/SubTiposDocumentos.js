var yo=require('yo-yo');

var objCombo=require('./../../../models/objetoCombos.js');
var comboObj=new objCombo();

var cpm=require('./../../componentes/Components.js');
var componente=new cpm();

module.exports=function(){


var selec;
var combo=comboObj.tiposDocumentos();

$.ajax({
    url:'/combo/'+'tiposdocumentos',
    data:combo,
    async:false,
    success:function(data){
        data=$.parseJSON(data);
        selec=data;
    }
});

var render=componente.selectTipoDoc('idTipoDocto','idDocumento',selec);

return yo`<form method="POST" class="form-inline" id="SubTiposDocumentos">
   <div class="form-group idDocumento">
    <label for="idDocumento">Tipo de Documento</label>
    ${render}
</div>
<div class="form-group nombre">
    <label for="nombre">Nombre</label>
    <input type="text" class="form-control" id="nombre" placeholder="Nombre" required pattern="[A-Za-z].{1,49}" name="nombre" title="Nombre Incorrecto o Caracteres maximos" >
</div>

<div class="form-group promocion">
    <label for="estatus">Promocion</label>
    <select id="promocion" name="promocion" class="form-control" required>
    <option value="">Escoga Opcion</option>
    <option value="SI">SI</option>
    <option value="NO">NO</option>
    </select>
</div>
<div class="form-group send">
    <input type="submit" class="btn btn-primary btn-sm" value="Guardar">
    <button class="btn btn-default btn-sm" id="cancelar">Cancelar</button>
</div>

</form>`;

}


function test()
{
    alert('no se que onda');
}