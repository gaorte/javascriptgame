var opcion1 = "Piedra";
var opcion2 = "Papel";
var opcion3 = "Tijeras";
var maquina = Math.random();


 function juego(humano){  // apoyado en el metodo math.random dependiendo del resultado aleatorio se asigna  valores piedra papel y tijeras

       if ( maquina<0.333333333333333) {
        maquina = "Piedra";
          } 
         else if(maquina<0.666666666666666 && maquina>0.333333333333333){
           maquina = "Papel";
         }
          else {
           maquina =  "Tijeras";
            }
          console.log("Tu elegiste " + humano )
          console.log("Maquina eligio " + maquina )
    
    
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
