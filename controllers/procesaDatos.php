<?php  

class ProcesaDatos{

	public function procesaCampos(array $datos){
	$campos="";
	foreach ($datos as $key => $value) {
		$campos=$campos.$key.'='.':'.$key." AND ";
	}
	$camposProcesados=substr($campos,0,-4);
	return $camposProcesados;
	}

	public function obtieneArrayPdo(array $valores){
		foreach ($valores as $key => $value) {
			$datos[':'.$key]=$value;
		}
		return $datos;
	}

	public function obtieneCamposQuery(array $datos){
		$campos="";
		foreach ($datos as $key => $value) {
			$campos=$campos.$key.", ";
		}
		return $campos;
	}

	public function obtieneValoresQuery(array $data){
		$valores="";
		foreach ($data as $key => $value) {
			$valores=$valores.':'.$key.', ';
		}
		return $valores;
	}


	public function obtieneCampoValorUpdate($data){
		$set="";
		foreach ($data as $key => $value) {
			$set=$set.$key.'=:'.$key.', ';
		}
		return $set;
	}




public function campoId($url)
	{
		$nombre=str_replace("/cat","",$url);
		if($nombre=='Remitentes'){
			$id="idRemitente";

		}
		elseif ($nombre=='Caracteres') {
			$id="idCaracter";
		}
		elseif ($nombre=='Turnados') {
			$id='idTurnado';
		}
		elseif ($nombre=='Acciones') {
			$id='idAccion';
		}

		return $id;

	}

function limpiaUrlGet($url){
	$nombre=str_replace("/get","",$url);
	return $nombre;
}

}

?>