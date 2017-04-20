

module.exports=function(data){
var option="<option value=0>Seleccione Opcion</option>";
$.each(data, function(index, val) {
     option+='<option value='+data[index].idAuditoria+' data-unidad='+data[index].idUnidad+'>'+data[index].clave+'</option>';
    });

return option;

}