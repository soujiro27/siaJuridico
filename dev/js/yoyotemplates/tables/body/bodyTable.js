var yo=require('yo-yo');



module.exports=function(datos)
{

var cont=1;

var body="";
$.each(datos, function(index, val) {
	 $.each(datos[index], function(llave, valor) {
	 	 if(cont==1){
	 	 	body+='<tr data-id='+valor+' data-nombre='+llave+'>';
	 	 	cont++;
	 	 }
	 	 else{
	 	 	body+='<td>'+valor+'</td>';
	 	 }
	 });
	 body+='</tr>';
	 cont=1;
});

return body;


}