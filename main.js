//Ventana Modal
// Chapamos al modal
const modal = document.getElementById('myModal');

// chapamos al boton que va a desplegar el modal
const btn = document.getElementById('myBtn');

// chapamos las botones que van a cerrar el modal
const span = document.getElementsByClassName("close")[0];
const cerrar = document.getElementById("cerrar");
//const guardar = document.getElementById("guardar");

// disparamos con un click el modal
btn.onclick = function() {  modal.style.display = "block";}


// disparamos el cierre del modal
span.onclick = function() {  modal.style.display = "none";  }
cerrar.onclick = function(){  modal.style.display = "none";}
