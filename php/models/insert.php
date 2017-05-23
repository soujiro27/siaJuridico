<?php

require 'juridico/php/controllers/procesaDatos.php';

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

	public function insertaBd($modulo,$datos){
		$db=$this->conecta();
		/*--------------- funciones de comprobacion de registro duplicado--------------*/
		$getData=new Get();
		$duplicado=$getData->getDuplicado($modulo,$datos);
		$res=count($duplicado);
		if($res>0){
			$salida['insert']='false';
			echo json_encode($salida);
		}
		else
		{
		$datosInsert=new procesaDatosQuery();
		$campos=$datosInsert->obtieneCamposInsert($datos);
		$valores=$datosInsert->obtieneValoresQuery($datos);
		$pdo=$datosInsert->obtieneArregloPdo($datos);
		$sql="INSERT INTO sia_".$modulo."(".$campos."usrAlta, fAlta) VALUES(".$valores.":usrAlta, getdate())";
		$dbQuery = $db->prepare($sql);
		$pdo[':usrAlta']=$_SESSION ["idUsuario"];
		$dbQuery->execute($pdo);
		$salida['insert']='true';
		echo json_encode($salida);
		}
	}


	public function insertaVolantes($modulo,$datos){

		$db=$this->conecta();
		$procesa=new procesaDatosQuery();
		$datosVolante=$procesa->separaDatosVolante($datos);

		$campos=$procesa->obtieneCamposInsert($datosVolante);

		$valores=$procesa->obtieneValoresQuery($datosVolante);

		$pdo=$procesa->obtieneArregloPdo($datosVolante);

		$sql='INSERT INTO sia_'.$modulo.'('.$campos.'usrAlta, fAlta) VALUES('.$valores.':usrAlta, getdate())';

		$dbQuery = $db->prepare($sql);
		$pdo[':usrAlta']=$_SESSION ["idUsuario"];
		$dbQuery->execute($pdo);
		//echo "\nPDO::errorInfo():\n";
	 	//print_r($dbQuery->errorInfo());
		$obt=new Get();
		$folio=$obt->getLastFolioVolantes();
		$idVolante=$folio[0]['folio'];
		$datosDocumentosVolante=$procesa->separaDatosInsertVolantesDocumentos($datos);
		$datosDocumentosVolante['idVolante']=$idVolante;
		$tabla='VolantesDocumentos';
		$campos=$procesa->obtieneCamposInsert($datosDocumentosVolante);
		$valores=$procesa->obtieneValoresQuery($datosDocumentosVolante);
		$pdo=$procesa->obtieneArregloPdo($datosDocumentosVolante);
		$sql='INSERT INTO sia_'.$tabla.'('.$campos.'usrAlta, fAlta) VALUES('.$valores.':usrAlta, getdate())';

		$dbQuery = $db->prepare($sql);
		$pdo[':usrAlta']=$_SESSION ["idUsuario"];

		$dbQuery->execute($pdo);
		$salida['insert']='true';
		echo json_encode($salida);
		
	}


	public function update($modulo,$datos){
		$db=$this->conecta();
		/*--------------- funciones de comprobacion de registro duplicado--------------*/
		$getData=new Get();
		$duplicado=$getData->getDuplicado($modulo,$datos);
		$res=count($duplicado);
		if($res>0){
			$salida['insert']='false';
			echo json_encode($salida);
		}else{
		$datosInsert=new procesaDatosQuery();
		$valores=$datosInsert->obtieneValoresQueryUpdate($datos);
		$where=$datosInsert->obtieneValoresWhereUpdate($datos);
		$pdo=$datosInsert->obtieneArregloPdo($datos);
		$sql="UPDATE sia_".$modulo." SET ".$valores."usrModificacion=:usrModificacion,fModificacion=getdate() WHERE ".$where;
		$dbQuery = $db->prepare($sql);
		$pdo[':usrModificacion']=$_SESSION ["idUsuario"];
		$dbQuery->execute($pdo);

		$salida['insert']='true';
		echo json_encode($salida);
		}
	}


}

?>
