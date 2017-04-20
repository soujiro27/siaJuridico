var yo=require('yo-yo');

module.exports=function(data){
var option="<option value=0>Seleccione Opcion</option>";
$.each(data, function(index, val) {
     option+='<option value='+data[index].idAccion+'>'+data[index].nombre+'</option>';
    });

return option;

}