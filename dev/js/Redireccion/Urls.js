/**
 * Created by JCRAMIREZO on 17/05/2017.
 */


module.exports=class Redirecionar{

    Main(){
        //location.href="http://172.16.6.33/juridico/"+ruta; 
        location.href="http://localhost:88/juridico/"+ruta;
    }
    updateForm(id){

    	  location.href="http://localhost:88/juridico/update/"+ruta+"/"+id;
    	  //location.href="http://172.16.6.33/juridico/update/"+ruta+"/"+id;
    }

    reporteConfronta(dato){
    	//location.href="http://172.16.6.33/juridico/"+ruta; 
        window.open("http://localhost:88/juridico/php/reportes/Confronta.php"+"?param1="+dato);
        location.href="http://localhost:88/juridico/"+ruta;
    }
}

