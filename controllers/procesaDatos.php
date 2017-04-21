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

	public function separaDatosVolante($data){
		$comprobar=['idDocumento','numDocumento','folio','fDocumento','idRemitente','destinatario','idCaracter','idTurnado','idAccion'];
		$cont=count($comprobar);
		foreach ($data as $key => $value) {
			for ($i=0; $i <$cont ; $i++) { 
				if($key==$comprobar[$i]){
					$datosComprobacion[$key]=$value;
				}
			}
		}
		return $datosComprobacion;
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


	public function separaDatosInsertVolante(array $data){
		$comprobar=['idDocumento','folio','numDocumento','fDocumento','anexos','idRemitente','destinatario','asunto','idCaracter','idTurnado','idAccion','fRecepcion','hRecepcion'];
		$cont=count($comprobar);
		foreach ($data as $key => $value) {
			for ($i=0; $i <$cont ; $i++) { 
				if($key==$comprobar[$i]){
					$datosComprobacion[$key]=$value;
				}
			}
		}
		return $datosComprobacion;
	}

	public function separaDatosInsertVolantesDocumentos(array $data){
		$comprobar=['idSubTipoDocumento','promocion','cveAuditoria'];
		$cont=count($comprobar);
		foreach ($data as $key => $value) {
			for ($i=0; $i <$cont ; $i++) { 
				if($key==$comprobar[$i]){
					$datosComprobacion[$key]=$value;
				}
			}
		}
		return $datosComprobacion;
	}

function limpiaUrlGet($url){
	$nombre=str_replace("/get","",$url);
	return $nombre;
}

}

?>