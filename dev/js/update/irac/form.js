var yo=require('yo-yo');

module.exports=function(){

return yo`
<form method="POST" class="form-inline" id="insertIrac">



<div class="form-group pagina">
    <label for="pagina">Pagina</label>
    <input type="number"  id="pagina" name="pagina" required class="form-control"  >
</div>


<div class="form-group parrafo">
    <label for="parrafo">Parrafo</label>
    <input type="text" id="parrafo" name="parrafo" required class="form-control" >
</div>


<div class="form-group Asunto">
    <label for="Asunto">Observacion</label>
    <textarea class="form-control" rows="3" name="observacion" required placeholder="Observacion"></textarea>
</div>

<div class="form-group send">
    <input type="submit" class="btn btn-primary btn-sm" value="Guardar">
    <button class="btn btn-default btn-sm" id="cancelar">Cancelar</button>
</div>


</form>`
}