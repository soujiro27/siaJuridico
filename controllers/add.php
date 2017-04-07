<?php 
require 'juridico/controllers/compruebaDatos.php';
require 'juridico/Models/insert.php';

class Add extends CompruebaDatos{
	
	public function insertaEnCatalogo(array $datos,$tabla){
		$res=$this->realizaComprobacion($datos,$tabla);
		if($res==true)
		{
			$campos=$this->obtieneCamposQuery($datos);
			$valores=$this->obtieneValoresQuery($datos);
			$pdo=$this->obtieneArrayPdo($datos);
			$inserta= new Insert();
			$inserta->insertCat($tabla,$campos,$valores,$pdo);
			$salida['salida']="true";

		}
		else
		{
			$salida['salida']="false";
		}

		echo json_encode($salida);
	}
}

 ?>