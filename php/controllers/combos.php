<?php 



class Combos extends Rutas{



	public function obtenerCombo($modulo,$data){
		$tabla=$this->separaModulo($modulo);
		$campos=$this->camposComboObjeto($data);
		$campos=$this->camposQueryTabla($campos);
		$where=$this->whereComboObjeto($data);
		$obtener= new Get();
		$obtener->getCombo($tabla,$campos,$where);

	}



	public function obtenerComboCampo($modulo,$campo){
		if($modulo=='SubTiposDocumentos'){
			$campos=$this->SubTiposDocumentos;
			$where=$this->SubTiposDocumentosWhere;
			$where['idTipoDocto']=$campo;
		}
		$tabla=$this->separaModulo($modulo);
		$campos=$this->camposQueryTabla($campos);
		$obtener= new Get();
		$obtener->getCombo($tabla,$campos,$where);

	}




	public function camposQueryTabla($campos){
		$sql="";
		foreach ($campos as $key => $value) {
			$sql=$sql.$value.', ';
		}
		$sql=substr($sql,0,-2);
		return $sql;
	}


	public function camposComboObjeto($data){
		foreach ($data['campos'] as $key => $value) {
			$campos[$key]=$value;
		}
		return $campos;
	}

	public function whereComboObjeto($data){
		$cont=0;
		foreach ($data as $key => $value) {
			if($cont==1){
				$where[$key]=$value;
			}
			$cont++;	
		}
		return $where;

	}

}



 ?>