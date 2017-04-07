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
		echo json_encode($response);
	}
}

 ?>