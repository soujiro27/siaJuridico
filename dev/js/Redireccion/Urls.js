/**
 * Created by JCRAMIREZO on 17/05/2017.
 */


module.exports=class Redirecionar{

    Main(){
        location.href="http://localhost:88/juridico/"+ruta;
    }
    updateForm(id){
    	  location.href="http://localhost:88/juridico/update/"+ruta+"/"+id;
    }
}