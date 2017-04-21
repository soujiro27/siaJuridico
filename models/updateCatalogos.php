<?php  

class UpdateCatalogos{

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


	public function updateCat($tabla,$campos,$campoId,$id,$pdo)
	{
		$db=$this->conecta();
		$sql="UPDATE sia_Cat".$tabla." SET ".$campos."usrModificacion=:usrModificacion, fModificacion=getdate() WHERE ".$campoId."=".$id;
		$dbQuery = $db->prepare($sql);
		$pdo[':usrModificacion']=$_SESSION ["idUsuario"];
		$dbQuery->execute($pdo);
	}

	public function updateTable($tabla,$campos,$campoId,$id,$pdo)
	{
		$db=$this->conecta();
		$sql="UPDATE sia_".$tabla." SET ".$campos."usrModificacion=:usrModificacion, fModificacion=getdate() WHERE ".$campoId."=".$id;
		$dbQuery = $db->prepare($sql);
		$pdo[':usrModificacion']=$_SESSION ["idUsuario"];
		$dbQuery->execute($pdo);
	}
}


?>