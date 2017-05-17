module.exports=class Components{

	label(obj){
		var labelForm='<label for="'+obj.for+'">'+obj.text+'</label>';
		return $.parseHTML(labelForm);
	}
	select(obj){
		var select='<select class=form-control name='+obj.name+' id='+obj.id+' required></select>';
		return $.parseHTML(select);
	}
}