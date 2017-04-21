<?php 

require 'juridico/models/updateCatalogos.php';

class Update extends CompruebaDatos{
	
	public function updateEnCatalogo($tabla,$campo,$id,$datos){
		$res=$this->realizaComprobacion($datos,$tabla);
		if($res==true)
		{
			$nombreCampo=$this->obtieneCampoValorUpdate($datos);
			$pdo=$this->obtieneArrayPdo($datos);
			$update=new UpdateCatalogos();
			$update->updateCat($tabla,$nombreCampo,$campo,$id,$pdo);
			$response['update']="true";
		}
		else
		{
			$response['update']="false";
		}
		//var_dump($res);
		echo json_encode($response);
	}

	public function updateEnVolantes($tabla,$campo,$id,$datos){
		$nombreCampo=$this->obtieneCampoValorUpdate($datos);
		$pdo=$this->obtieneArrayPdo($datos);
		//var_dump($nombreCampo);
		//echo '<br><br>';
		//var_dump($pdo);
		$update=new UpdateCatalogos();
		$update->updateTable($tabla,$nombreCampo,$campo,$id,$pdo);
		$response['update']="true";
		echo json_encode($response);
	}


}

 ?>