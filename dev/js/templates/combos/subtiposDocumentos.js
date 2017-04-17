var yo=require('yo-yo');

module.exports=function(data){
var option="<option value=0>Seleccione Documento</option>";
$.each(data, function(index, val) {
     option+='<option value='+data[index].nombre+'>'+data[index].nombre+'</option>';
    });

return option;

}