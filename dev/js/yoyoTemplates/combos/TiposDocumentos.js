var yo=require('yo-yo');

module.exports=function(data){
var option="";
$.each(data, function(index, val) {
     $.each(data[index], function(index, val) {
          option+='<option value='+data[index].idTipoDocto' id='+data[index].idTipoDocto+'>'+data[index].nombre+'</option>';
     });
});


return option;

}