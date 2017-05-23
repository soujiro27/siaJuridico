var yo=require('yo-yo');
module.exports=function(data){
	

	function render(llave){
		return '<th id='+llave+'>'+llave+'</th>';
	}

	var el='';
	$.each(data, function(index, val) {
		 el+=render(index);
	});

	
	return el;
}