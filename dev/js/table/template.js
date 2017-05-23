var yo=require('yo-yo');
var headers=require('./headers');
var body=require('./body');
module.exports=function(data){

var th=$.parseHTML(headers(data[0]));
var el = yo`
	<table class="table table-striped table-bordered table-hover principal">
	<thead>
		<tr>
			${th}
		</tr>
	</thead>
	<tbody>
		${data.map(function(json){
			return body(json)
		})}
	</tbody>
	</table>`;
//console.log(el);
return el;
}