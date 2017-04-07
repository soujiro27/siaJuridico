<?php  

class Insert{

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


	public function insertCat($tabla,$campos,$valores,$pdo)
	{
		$db=$this->conecta();
		$sql="INSERT INTO sia_Cat".$tabla."(".$campos."usrAlta, fAlta) VALUES(".$valores.":usrAlta, getdate())";
		$dbQuery = $db->prepare($sql);
		$pdo[':usrAlta']=$_SESSION ["idUsuario"];
		$dbQuery->execute($pdo);
		//echo "\nPDO::errorInfo():\n";
    	//print_r($dbQuery->errorInfo());
	}
}


?>