var yo=require('yo-yo');

module.exports=function(data){
var option="<option value=>Seleccione Remitente</option>";
$.each(data, function(index, val) {
     option+='<option value='+data[index].idRemitente+' id='+data[index].idRemitente+'>'+data[index].cargo+'</option>';
    });

return option;

}