var opcion1 = "Piedra";
var opcion2 = "Papel";
var opcion3 = "Tijeras";
var maquina = Math.random();


function asignacion(){
    if ( maquina<0.333333333333333) {
        maquina = opcion1;
    } 
    else if(maquina<0.666666666666666 && maquina>0.333333333333333){
        maquina=opcion2;
    }
    else {
        maquina=opcion3;
    }
    }
    function maquinaVshumano(humano) {
           if (maquina===humano){
        
            console.log("Tu elegiste lo mismo que la maquina... es un empate"); 
        
           }   else if (maquina === opcion3 && humano===opcion1){
           
               console.log("Ganaste eligiendo Piedra");
           
                  }else if (maquina === opcion1 && humano === opcion2) {
               
                      console.log("Ganaste eligiendo Papel");
               
                        } else if (maquina === opcion2 && humano === opcion3) {
                  
                           console.log("Ganaste eligiendo Tijeras");
                
                          } else {
                           console.log("Gana Maquina"); 
                          }

    }
