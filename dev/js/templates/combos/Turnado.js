var yo=require('yo-yo');

module.exports=function(data){
var option="<option value=''>Seleccione Opcion</option>";
$.each(data, function(index, val) {
     option+='<option value='+data[index].idTurnado+' id='+data[index].idTurnado+'>'+data[index].siglas+'</option>';
    });

return option;

}