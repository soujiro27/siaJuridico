var yo=require('yo-yo');
var objCombo=require('./../../../models/objetoCombos.js');
var comboObj=new objCombo();

var cpm=require('./../../componentes/Components.js');
var componente=new cpm();
module.exports=function(data){


if(data.prmocion=='SI'){
    var promo='NO';
}else{
    var promo ='SI';
}



if(data.estatus.trim()=='ACTIVO'){
    var opuesto='INACTIVO'
}else {
    var opuesto='ACTIVO'   
}

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

var render=componente.selectTipoDocUpdate('idTipoDocto','idDocumento',selec,data.idTipoDocto);



return yo`<form method="POST" class="form-inline" id="UpdateSubTiposDocumentos">
   <div class="form-group idDocumento">
    <label for="idDocumento">Tipo de Documento</label>
    ${render}
</div>
<div class="form-group nombre">
    <label for="nombre">Nombre</label>
    <input type="text" class="form-control" id="nombre" placeholder="Nombre" required pattern="[A-Za-z].{1,49}" name="nombre" title="Nombre Incorrecto o Caracteres maximos" value="${data.nombre}">
</div>

<div class="form-group promocion">
    <label for="estatus">Promocion</label>
    <select id="promocion" name="promocion" class="form-control" required>
    <option value="${data.promocion}">${data.promocion}</option>
    <option value="${promo}">${promo}</option>
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

</form>`;

}