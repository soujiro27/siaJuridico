<?php

require 'juridico/controllers/add.php';
require 'juridico/models/get.php';
require 'juridico/controllers/update.php';

$app->get('/getRemitentes',function() use ($app){
	$nombre=limpiaUrlGet($_SERVER["REQUEST_URI"]);
	$obtieneDatos=new GetData();
	$obtieneDatos->getCat($nombre);
});

$app->get('/getRemitentes/:tabla/:campo/:id',function($tabla,$campo,$id) use ($app){
	$nombre=limpiaUrlGet($_SERVER["REQUEST_URI"]);
	$obtieneDatos=new GetData();
	$obtieneDatos->getCatById($tabla,$campo,$id);
});

$app->post('/getRemitentes/:tabla/:campo/:id',function($tabla,$campo,$id) use ($app){
	$nombre=limpiaUrlGet($_SERVER["REQUEST_URI"]);
		$update= new Update();
		$datos=$app->request->post();
		$update->updateEnCatalogo($tabla,$campo,$id,$datos);
});




$app->map('/catRemitentes',function() use($app){
	$nombre=limpiaUrl($_SERVER["REQUEST_URI"]);
	if($app->request->isGet())
	{
		$app->render('/juridico/templates/main.php',array('nombre' => $nombre, 'tipo' => 'Catálogo de ' ));
	}
	elseif($app->request->isPost()){
		$insercion= new Add();
		$insercion->insertaEnCatalogo($app->request->post(),$nombre);
	}
	

})->via('GET','POST');

/*-----------------Caracteres----------------*/

$app->map('/catCaracteres',function() use($app){
	$nombre=limpiaUrl($_SERVER["REQUEST_URI"]);
	if($app->request->isGet())
	{
		$app->render('/juridico/templates/main.php',array('nombre' => $nombre, 'tipo' => 'Catálogo de ' ));
	}
	elseif($app->request->isPost()){
		$insercion= new Add();
		$insercion->insertaEnCatalogo($app->request->post(),$nombre);
	}
	

})->via('GET','POST','PUT');


$app->get('/getCaracteres',function() use ($app){
	$nombre=limpiaUrlGet($_SERVER["REQUEST_URI"]);
	$obtieneDatos=new GetData();
	$obtieneDatos->getCat($nombre);
});

$app->get('/getCaracteres/:tabla/:campo/:id',function($tabla,$campo,$id) use ($app){
	$nombre=limpiaUrlGet($_SERVER["REQUEST_URI"]);
	$obtieneDatos=new GetData();
	$obtieneDatos->getCatById($tabla,$campo,$id);
});


$app->post('/getCaracteres/:tabla/:campo/:id',function($tabla,$campo,$id) use ($app){
	$nombre=limpiaUrlGet($_SERVER["REQUEST_URI"]);
		$update= new Update();
		$datos=$app->request->post();
		$update->updateEnCatalogo($tabla,$campo,$id,$datos);
});


/*--------------Turnados------------------------*/

$app->map('/catTurnados',function() use($app){
	$nombre=limpiaUrl($_SERVER["REQUEST_URI"]);
	if($app->request->isGet())
	{
		$app->render('/juridico/templates/main.php',array('nombre' => $nombre, 'tipo' => 'Catálogo de ' ));
	}
	elseif($app->request->isPost()){
		$insercion= new Add();
		$insercion->insertaEnCatalogo($app->request->post(),$nombre);
	}
	

})->via('GET','POST','PUT');


$app->get('/getTurnados',function() use ($app){
	$nombre=limpiaUrlGet($_SERVER["REQUEST_URI"]);
	$obtieneDatos=new GetData();
	$obtieneDatos->getCat($nombre);
});

$app->get('/getTurnados/:tabla/:campo/:id',function($tabla,$campo,$id) use ($app){
	$nombre=limpiaUrlGet($_SERVER["REQUEST_URI"]);
	$obtieneDatos=new GetData();
	$obtieneDatos->getCatById($tabla,$campo,$id);
});


$app->post('/getTurnados/:tabla/:campo/:id',function($tabla,$campo,$id) use ($app){
	$nombre=limpiaUrlGet($_SERVER["REQUEST_URI"]);
		$update= new Update();
		$datos=$app->request->post();
		$update->updateEnCatalogo($tabla,$campo,$id,$datos);
});




/*-------------------------Acciones-----------------*/


$app->map('/catAcciones',function() use($app){
	$nombre=limpiaUrl($_SERVER["REQUEST_URI"]);
	if($app->request->isGet())
	{
		$app->render('/juridico/templates/main.php',array('nombre' => $nombre, 'tipo' => 'Catálogo de ' ));
	}
	elseif($app->request->isPost()){
		$insercion= new Add();
		$insercion->insertaEnCatalogo($app->request->post(),$nombre);
	}
	

})->via('GET','POST','PUT');


$app->get('/getAcciones',function() use ($app){
	$nombre=limpiaUrlGet($_SERVER["REQUEST_URI"]);
	$obtieneDatos=new GetData();
	$obtieneDatos->getCat($nombre);
});

$app->get('/getAcciones/:tabla/:campo/:id',function($tabla,$campo,$id) use ($app){
	$nombre=limpiaUrlGet($_SERVER["REQUEST_URI"]);
	$obtieneDatos=new GetData();
	$obtieneDatos->getCatById($tabla,$campo,$id);
});


$app->post('/getAcciones/:tabla/:campo/:id',function($tabla,$campo,$id) use ($app){
	$nombre=limpiaUrlGet($_SERVER["REQUEST_URI"]);
		$update= new Update();
		$datos=$app->request->post();
		$update->updateEnCatalogo($tabla,$campo,$id,$datos);
});

/*------------------SubDocumentos--------------------------*/


$app->map('/catSubTiposDocumentos',function() use($app){
	$nombre=limpiaUrl($_SERVER["REQUEST_URI"]);
	if($app->request->isGet())
	{
		$app->render('/juridico/templates/main.php',array('nombre' => $nombre, 'tipo' => 'Catálogo ' ));
	}
	elseif($app->request->isPost()){
		$insercion= new Add();
		$insercion->insertaEnCatalogo($app->request->post(),$nombre);
	}
})->via('GET','POST','PUT');

$app->get('/getSubTiposDocumentos',function() use ($app){
	$nombre=limpiaUrlGet($_SERVER["REQUEST_URI"]);
	$obtieneDatos=new GetData();
	$obtieneDatos->getCat($nombre);
});


$app->get('/getSubTiposDocumentos/:tabla/:campo/:id',function($tabla,$campo,$id) use ($app){
	$nombre=limpiaUrlGet($_SERVER["REQUEST_URI"]);
	$obtieneDatos=new GetData();
	$obtieneDatos->getCatById($tabla,$campo,$id);
});


$app->post('/getSubTiposDocumentos/:tabla/:campo/:id',function($tabla,$campo,$id) use ($app){
	$nombre=limpiaUrlGet($_SERVER["REQUEST_URI"]);
		$update= new Update();
		$datos=$app->request->post();
		$update->updateEnCatalogo($tabla,$campo,$id,$datos);
});

















/*-----------------------Volantes---------------------*/
$app->map('/catVolantes',function() use($app){
	$nombre=limpiaUrl($_SERVER["REQUEST_URI"]);
	if($app->request->isGet())
	{
		$app->render('/juridico/templates/main.php',array('nombre' => $nombre, 'tipo' => 'Catálogo de ' ));
	}
	elseif($app->request->isPost()){
		$insercion= new Add();
		$insercion->insertaEnCatalogo($app->request->post(),$nombre);
	}
	

})->via('GET','POST','PUT');



$app->get('/gettiposdocumentos',function() use ($app){
	$nombre=limpiaUrlGet($_SERVER["REQUEST_URI"]);
	$obtieneDatos=new GetData();
	$obtieneDatos->getComboTiposDocumentos($nombre);
});


$app->get('/subtiposdocumentos/:doc',function($doc) use ($app){
	$obtieneDatos=new GetData();
	$obtieneDatos->getComboSubTiposDocumentos($doc);
});



/*-----------------------funciones----------------------*/



function limpiaUrl($url){
	$nombre=str_replace("/cat","",$url);
	return $nombre;
}

function limpiaUrlGet($url){
	$nombre=str_replace("/get","",$url);
	return $nombre;
}




?>
