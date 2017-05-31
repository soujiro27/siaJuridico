var yo=require('yo-yo');

module.exports=function(){

return yo`

<div>
<div class="headerIrac" >

<div class="form-group addIrac">
    <button class="btn btn-primary btn-sm" id="addIrac" > Agregar Observacion </button>
    <button class="btn btn-primary btn-sm" id="print" > Imprimir  </button>
    <button class="btn btn-primary btn-sm" id="cerrarVolante" > Cerrar Volante </button>
    <button class="btn btn-primary btn-sm" id="cancelar" > Salir </button>
</div>



</div>

<div class="contentIrac" id="contentIrac" >

</div>

</div>`;
}