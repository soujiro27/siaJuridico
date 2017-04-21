<?php 
require 'juridico/controllers/compruebaDatos.php';
require 'juridico/Models/insert.php';
class Add extends CompruebaDatos{
	
	public function insertaEnCatalogo(array $datos,$tabla){
		$res=$this->realizaComprobacion($datos,$tabla);
		//var_dump($res);
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

	public function insertaEnVolantes(array $datos,$tabla)
	{
		$res=$this->realizaComprobacionVolante($datos,$tabla);
		if($res==true)
		{
			$datosVolante=$this->separaDatosInsertVolante($datos);

			$campos=$this->obtieneCamposQuery($datosVolante);
			$valores=$this->obtieneValoresQuery($datosVolante);
			$pdo=$this->obtieneArrayPdo($datosVolante);
			$inserta= new Insert();
			$inserta->insertTable($tabla,$campos,$valores,$pdo);
			$get=new GetData();
			$id=$get->getLastIdVolante();
			$idVolante=$id[0]["ultimo"];
			$datosDocumentosVolante=$this->separaDatosInsertVolantesDocumentos($datos);
			$datosDocumentosVolante['idVolante']=$idVolante;
			$tabla='VolantesDocumentos';
			$campos=$this->obtieneCamposQuery($datosDocumentosVolante);
			$valores=$this->obtieneValoresQuery($datosDocumentosVolante);
			$pdo=$this->obtieneArrayPdo($datosDocumentosVolante);
			$inserta->insertTable($tabla,$campos,$valores,$pdo);
			$salida['salida']="true";

		}else{
			$salida['salida']="false";
		}
		echo json_encode($salida);
	}
}

 ?>