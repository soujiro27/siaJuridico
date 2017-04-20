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

	public function getTable($tabla){
		$db=$this->conecta();
		$sql="SELECT * FROM sia_".$tabla;
		$datos=$this->consultaRetorno($sql);
		echo json_encode($datos);
	}

	public function getCatById($tabla,$campo,$id){
		$db=$this->conecta();
		$sql="SELECT * FROM sia_Cat".$tabla." WHERE ".$campo."='".$id."'";
		$datos=$this->consultaRetorno($sql);
		echo json_encode($datos);
	}


public function getTableById($tabla,$campo,$id){
		$db=$this->conecta();
		$sql="SELECT * FROM sia_".$tabla." WHERE ".$campo."='".$id."'";
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


	public function getComboRemitente()
	{
		$db=$this->conecta();
		$sql="SELECT idRemitente,cargo from sia_CatRemitentes WHERE estatus='ACTIVO'";
		$datos=$this->consultaRetorno($sql);
		echo json_encode($datos);
	}


	public function getComboCaracter()
	{
		$db=$this->conecta();
		$sql="SELECT idCaracter,nombre from sia_CatCaracteres WHERE estatus='ACTIVO'";
		$datos=$this->consultaRetorno($sql);
		echo json_encode($datos);
	}


	public function getComboTurnado()
	{
		$db=$this->conecta();
		$sql="SELECT idTurnado,siglas from sia_CatTurnados WHERE estatus='ACTIVO'";
		$datos=$this->consultaRetorno($sql);
		echo json_encode($datos);
	}

	public function getComboAccion(){
		$db=$this->conecta();
		$sql="SELECT idAccion,nombre from sia_CatAcciones WHERE estatus='ACTIVO'";
		$datos=$this->consultaRetorno($sql);
		echo json_encode($datos);
	}

	public function getComboAuditoria(){
		$cuenta=$_SESSION["idCuentaActual"];
		$db=$this->conecta();
		$sql="SELECT idAuditoria,clave,idUnidad from sia_auditorias where idCuenta='$cuenta' and clave <>'NULL'";
		$datos=$this->consultaRetorno($sql);
		echo json_encode($datos);
	}

	public function getDatosAuditoriaById($id)
	{
		$cuenta=$_SESSION["idCuentaActual"];
		$db=$this->conecta();
		$sql="SELECT a.idAuditoria auditoria, COALESCE(convert(varchar(20),a.clave),convert(varchar(20),a.idAuditoria)) claveAuditoria, 
 dbo.lstSujetosByAuditoria(a.idAuditoria) sujeto, dbo.lstObjetosByAuditoria(a.idAuditoria) objeto
 FROM sia_programas p
 INNER JOIN sia_auditorias a on p.idCuenta=a.idCuenta and p.idPrograma=a.idPrograma
 INNER JOIN sia_areas ar on a.idArea=ar.idArea
 INNER JOIN  sia_auditoriasauditores aa ON a.idCuenta=aa.idCuenta and a.idAuditoria=aa.idAuditoria
 LEFT JOIN sia_tiposauditoria ta on a.tipoAuditoria= ta.idTipoAuditoria
 WHERE a.idCuenta='$cuenta' and a.idAuditoria='$id' GROUP BY a.idAuditoria, a.clave,ta.nombre,a.idProceso,a.idEtapa,ar.nombre";
	$datos=$this->consultaRetorno($sql);
	echo json_encode($datos);

	}


	public function getLastIdVolante()
	{
		$db=$this->conecta();
		$sql="SELECT MAX(idVolante) as ultimo from sia_Volantes";
		$datos=$this->consultaRetorno($sql);
		return $datos;
	}


	function limpiaUrlGet($url){
	$nombre=str_replace("/get","",$url);
	return $nombre;
}


}












?>