<?php  



class Rutas{


	private $catalogos=['Caracteres','Acciones','SubTiposDocumentos'];
	private $tablas=['tiposdocumentos','Volantes','areas'];

	public function render($nombre,$app){
		$app->render('./juridico/templates/main.php',array('nombre' => $nombre, 'tipo' => 'Catálogo de ' ));
	}
	

	public function separaModulo($modulo){
		
		foreach ($this->catalogos as $key => $value) {
			if($value==$modulo){
				$modulo='Cat'.$modulo;
				return $modulo;}
		}

		foreach ($this->tablas as $key => $value) {
			if($value==$modulo){
				return $modulo;}
		}


	}



	function __destruct() {
      // print "Destruyendo " . $this->name . "\n";
   }

}

?>