var template=require('./../templates/forms/Remitentes.js');
var Caracteres=require('./../templates/forms/Caracteres.js');
var Turnados=require('./../templates/forms/Turnados.js');
var Acciones=require('./../templates/forms/Acciones.js');
var SubTiposDocumentos=require('./../templates/forms/SubTiposDocumentos.js');
var Volantes=require('./../templates/forms/Volantes.js');
var modals=require('./../templates/modals/duplicado.js');
var modelos=require('./../models/insert.js');
var getAll=require('./../models/get.js');

var model=new modelos(); 
var get= new getAll();



var funciones=function(){
	
	return{

		formAdd:function(){
			var ruta=localStorage.getItem("ruta");
			var msgDuplicado=modals();
			if(ruta=='Remitentes'){var el=template();}
			else if (ruta=='Caracteres') {var el=Caracteres();	}
			else if(ruta=='Turnados'){var el=Turnados();}
			else if(ruta=='Acciones'){var el=Acciones();}
			else if (ruta=='Volantes') {var el=Volantes();}
			else if(ruta=='SubTiposDocumentos'){var el =SubTiposDocumentos();}
			console.log(ruta);
			this.muestraForm();
			if (ruta=='Volantes' || ruta=="SubTiposDocumentos"){
				this.cargaComboTipoDocumento();
			}



			$('button#agregar').hide();
			$('div.formularioPrincipal').append(msgDuplicado);
			$('div.formularioPrincipal').append(el).slideDown('slow');
			$('button#cancelar').on('click',this.btnCancelar);
			$('form input[type=text]').on('keyup',function(){
				var letra=$(this).val();
				$(this).val(letra.toUpperCase());
			});
			$('form#'+ruta).on('submit',this.insert);
		},

		muestraForm:function(){
			$('div.table-responsive').slideUp('slow');
		},

		getRuta:function(){
			this.ruta=localStorage.getItem("ruta");
			return this.ruta;
		},

		insert:function(e){
			e.preventDefault();
			var datos=$(this).serialize();
			var tabla=localStorage.getItem("ruta");
			model.insertCat(datos,tabla);
		},

		btnCancelar:function(e){
			e.preventDefault();
			var ruta=localStorage.getItem("ruta");
			location.href="http://localhost:88/cat"+ruta;
			
		},
		cargaTabla:function(){
			get.getCat();
			
		},
		cargaComboTipoDocumento:function(){
			get.getComboDocumentos();
			
		}

		


	}
}

module.exports=funciones;