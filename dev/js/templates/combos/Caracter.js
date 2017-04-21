var yo=require('yo-yo');

module.exports=function(data){
var option="<option value=''>Seleccione Opcion</option>";
$.each(data, function(index, val) {
     option+='<option value='+data[index].idCaracter+' id='+data[index].idCaracter+'>'+data[index].nombre+'</option>';
    });

return option;

}