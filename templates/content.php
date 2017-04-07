<?php  

$usrActual = $_SESSION ["idUsuario"];
$main='
<div class="row">
	<div class="col-md-9 col-md-offset-2">
		<div class="widget">
			<div class="widget-head">
				  <div class="pull-left">Lista de '.$nombre.' registrados</div>
				  <div class="widget-icons pull-right">
				 <div class="archivo" id="archivos"></div>
            <button type="button" class="btn btn-primary btn-sm" data-formload="'.$nombre.'" id=agregar>Agregar '.$nombre.'</button>
          </div>  
          <div class="clearfix"></div>
			</div>
		</div>

<div class="widget-content">	
	<div class="table-responsive" style="height: 400px; overflow: auto; overflow-x:hidden;">		
    </div>
    <div class="formularioPrincipal">
    </div>
</div>
</div>';

echo $main;
?>
