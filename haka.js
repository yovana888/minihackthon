const btnIngresar = document.querySelector('#btn-ingresar');
const formIngresar = document.querySelector('#form-ingresar');
const usuario = document.querySelector('#inputusuario');
const password = document.querySelector('#inputpassword');

const user = {
    username: 'admin',
    password: 'admin123',

}



const init = ()=>{
    formIngresar.addEventListener('submit',(e)=>{
        e.preventDefault();
         if(usuario.value==user.username && password.value == user.password){
             console.log('login');
         }
         else{
             alert('credenciales incorrectas');
         }
        console.log(usuario.value)
    })
}

document.addEventListener("DOMContentLoaded", init());