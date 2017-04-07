<?php


class Getdata{

	public function conecta(){
			try{
				require 'src/conexion.php';
				$db = new PDO("sqlsrv:Server={$hostname}; Database={$database}", $username, $password );
				return $db;
			}catch (PDOException $e) {
				print "ERROR: " . $e->getMessage();
				die();
			}
		}

function consultaRetorno($sql){
		$db=$this->conecta();
		$query=$db->prepare($sql);
		$query->execute();
		return $query->fetchAll(PDO::FETCH_ASSOC);
	}

	public function getCat($tabla){
		$db=$this->conecta();
		$sql="SELECT * FROM sia_Cat".$tabla;
		$datos=$this->consultaRetorno($sql);
		echo json_encode($datos);
	}

	public function getCatById($tabla,$campo,$id){
		$db=$this->conecta();
		$sql="SELECT * FROM sia_Cat".$tabla." WHERE ".$campo."='".$id."'";
		$datos=$this->consultaRetorno($sql);
		echo json_encode($datos);
	}


	public function getComboTiposDocumentos($tabla)
	{
		$db=$this->conecta();
		$sql="SELECT idTipoDocto,nombre FROM sia_".$tabla." WHERE estatus='ACTIVO' and tipo<>'JURIDICO'";
		$datos=$this->consultaRetorno($sql);
		echo json_encode($datos);
	}


		public function getComboSubTiposDocumentos($doc)
	{
		$db=$this->conecta();
		$sql="SELECT idSubTipoDocumento,nombre FROM sia_CatSubTiposDocumentos WHERE estatus='ACTIVO' and idTipoDocto='".$doc."'";
		$datos=$this->consultaRetorno($sql);
		echo json_encode($datos);
	}

	function limpiaUrlGet($url){
	$nombre=str_replace("/get","",$url);
	return $nombre;
}


}












?>