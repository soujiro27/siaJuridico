<?php



class Tables extends Rutas{

	private $Caracteres=['idCaracter','siglas','nombre','estatus'];
	private $Acciones=['idAccion','nombre','estatus'];
	private $SubTiposDocumentos=['idSubTipoDocumento','idTipoDocto','nombre','estatus'];


	public function obtenerTabla($modulo){
		if($modulo=='Caracteres'){$campos=$this->Caracteres;}
		elseif ($modulo=='Acciones') {$campos=$this->Acciones;}
		elseif ($modulo=='SubTiposDocumentos') {$campos=$this->SubTiposDocumentos;}
		$tabla=$this->separaModulo($modulo);
		$campos=$this->camposQueryTabla($campos);
		$obtener= new Get();
		$obtener->getTable($tabla,$campos);

	}

	public function camposQueryTabla($campos){
		$sql="";
		foreach ($campos as $key => $value) {
			$sql=$sql.$value.', ';
		}
		$sql=substr($sql,0,-2);
		return $sql;
	}

}



 ?>
