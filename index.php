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
	$camposTabla->obtenerTabla($modulo);

});

/*-----------------obtiene registro para update---------------*/

$app->get('/get/:modulo',function($modulo) use ($app){
	$update=new UpdateForm();
	$update->registroUpdate($modulo,$app);

});


/*-------------- Obtiene un combo -------------------*/

$app->get('/combo/:modulo',function($modulo) use ($app){
	$camposTabla=new Combos();
	$camposTabla->obtenerCombo($modulo,$app->request->get());

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


/*-----------------hace el update ------------------*/
$app->post('/update/:modulo',function($modulo) use ($app){
	$rutas=new Rutas();
	$modulo=$rutas->separaModulo($modulo);
	$inserta=new Insert();
	$inserta->update($modulo,$app->request->post());

});



/*-------------------manda a insertar nuevo registro --------------*/
$app->post('/table/:modulo',function($modulo) use ($app){
	$rutas=new Rutas();
	$modulo=$rutas->separaModulo($modulo);
	$inserta=new Insert();
	$inserta->insertaBd($modulo,$app->request->post());

});


$app->post('/tableVolantes/:modulo',function($modulo) use ($app){
	$rutas=new Rutas();
	$modulo=$rutas->separaModulo($modulo);
	$inserta=new Insert();
	$inserta->insertaVolantes($modulo,$app->request->post());

});



?>