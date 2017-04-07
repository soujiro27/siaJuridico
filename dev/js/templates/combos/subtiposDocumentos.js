var yo=require('yo-yo');

module.exports=function(data){
var option="<option value=0>Seleccione Documento</option>";
$.each(data, function(index, val) {
     option+='<option value='+data[index].idTipoDocto+'>'+data[index].nombre+'</option>';
    });

return option;

}