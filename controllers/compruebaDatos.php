<?php  
require 'juridico/controllers/procesaDatos.php';
class CompruebaDatos extends ProcesaDatos{

	public function realizaComprobacion(array $datos,$nombre){
		$db=$this->conecta();
		$campos=$this->procesaCampos($datos);
		$valores=$this->obtieneArrayPdo($datos);
		$valida=$this->compruebaCat($nombre,$campos,$valores,$db);
		return $valida;
	}


	public function compruebaCat($tabla,$campos,$datos,$db){
	$sql="SELECT * FROM sia_Cat".$tabla." WHERE ".$campos;
	$dbQuery = $db->prepare($sql);
	$dbQuery->execute($datos);
	$res=$dbQuery->fetchAll(PDO::FETCH_ASSOC);
	$cantidad=count($res);
	if($cantidad>0){return false;}else{return true;}
	}

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


}

?>