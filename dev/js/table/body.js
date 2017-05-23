var yo=require('yo-yo');
module.exports=function(data){
	
	

	function render(data){
		var tr='';
		var td='';
		//tr+='<tr>';
		for(var x in data){
			tr+='<tr data-id='+data[x]+' data-nombre='+x+'>';
			break;	
		}
		

		$.each(data, function(index, val) {
			 td+='<td id='+index+'>'+val+'</td>';
		});
		tr+=td+'</tr>';

		return tr;
	}

	return $.parseHTML(render(data));



}