var yo=require('yo-yo');

module.exports=function(data){
var option="<option value=0>Seleccione Remitente</option>";
$.each(data, function(index, val) {
     option+='<option value='+data[index].idRemitente+'>'+data[index].cargo+'</option>';
    });

return option;

}