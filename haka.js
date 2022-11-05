//Programa que calcula si un año es bisiesto 
   const calcular=document.getElementById("calcular") ;
   const year=document.getElementById("año") ;


calcular.onclick = function() {       
    if(year.value ===""){
            Swal.fire({
                title: "Ayuda",
                text: "Indicanos un año primero",
                icon:"alert"        
            });
            return;
   }


    if(((year.value%4==0)&&(year.value%100!=0))||year.value%400==0)
    { document.getElementById('mensaje').value= "'"+ `${year.value}` +"'" + " ES UN AÑO BISIESTO"  ;
      document.getElementById('año').value= "" ;
     }           
    else    { document.getElementById('mensaje').value= "'"+ `${year.value}` +"'"  + " NO ES UN AÑO BISIESTO"; 
    document.getElementById('año').value= "" ;
   

} }
 