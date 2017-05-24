<?php

require 'juridico/php/controllers/rutas.php';
require 'juridico/php/controllers/tables.php';
require 'juridico/php/controllers/updateForm.php';
require 'juridico/php/controllers/combos.php';
require 'juridico/php/models/get.php';
require 'juridico/php/models/insert.php';



/*----------carga el inicio -------------*/
$app->get('/juridico/:modulo',function($modulo) use ($app){
	$rutas=new Rutas();
	$rutas->render($modulo,$app);

});

/*-----------------carga la tabla principal -----------------*/
$app->get('/table/:modulo',function($modulo) use ($app){
	$camposTabla=new Tables();
	if($modulo=='Volantes'){
			$get = new Get();
			$get->getTablaVolantes();
	}else {
		$camposTabla->obtenerTabla($modulo);
	}

});

/*-----------------obtiene registro para update---------------*/

$app->get('/get/:modulo',function($modulo) use ($app){
	$update=new UpdateForm();
	$update->registroUpdate($modulo,$app);

});


/*-----------------hace el update ------------------*/
$app->post('/update/:modulo',function($modulo) use ($app){
	$rutas=new Rutas();
	$modulo=$rutas->separaModulo($modulo);
	$inserta=new Insert();
	$inserta->update($modulo,$app->request->post());

});



/*-------------------manda a insertar nuevo registro --------------*/

$app->post('/insert/:modulo',function($modulo) use ($app){
	$rutas=new Rutas();
	$modulo=$rutas->separaModulo($modulo);
	$inserta=new Insert();
	if($modulo=='Volantes'){
			$inserta->insertaVolantes($modulo,$app->request->post());
	}else{
		$inserta->insertaBd($modulo,$app->request->post());
	}

});





/*-------------- Obtiene un combo -------------------*/

$app->get('/getCombo',function() use ($app){
	$camposTabla=new Combos();
	$camposTabla->obtenerCombo($app->request->get());

});

$app->get('/combo/:modulo/:campo',function($modulo,$campo) use ($app){
	$camposTabla=new Combos();
	$camposTabla->obtenerComboCampo($modulo,$campo);

});

/*-----------------obitene el ultimo folio de una tabla -------------*/

$app->get('/folio/:modulo/:campo',function($modulo,$campo) use ($app){
	$obtiene=new Get();
	$obtiene->getLastFolio($modulo,$campo);

});



/*------------------obitiene las auditorias -----------------*/
$app->get('/getCombo/auditorias',function() use ($app){
	$obtiene=new Get();
	$obtiene->getComboAuditorias();

});

/*--------------obtiene auditoria por id------------*/

$app->get('/auditorias/:id',function($id) use ($app){
	$obtiene=new Get();
	$obtiene->getAuditoriaById($id);

});





?>
