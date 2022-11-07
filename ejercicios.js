const titleModal = document.getElementById("loginModalLabel");
const modalLogin = document.getElementById("loginModal");
const btnLogin = document.getElementById("btn_login");
const btnEjercicios = document.getElementById("ejercicios");
const btnClose = document.getElementById("btn_close");
const btnLogout= document.getElementById("btn_logout");

/**********************Constantes Para Login *******************************/

const formIngresar = document.getElementById("form_ingresar");
const usuario = document.getElementById("input_user");
const password = document.getElementById("input_password");
const btnIngresar = document.getElementById("btn_ingresar");
const btnRegistro = document.getElementById("btn_registro");
const dataLogin=JSON.parse(localStorage.getItem('dataLogin'))

/**********************Constantes Para Registro *******************************/

const usuario2 = document.getElementById("input_user_2");
const password2 = document.getElementById("input_password_2");
const formRegistrar = document.getElementById("form_registro");
const btnIngresar2 = document.getElementById("btn_ingresar_2");
const btnRegistro2 = document.getElementById("btn_registro_2");


/********************** Funciones de los Ejercicios de JS *******************************/

const getYearBisiesto = () => {
    const year = Number(prompt('Ingrese el Año'));
    const validateYear = (year % 400 === 0) ? true : (year % 100 === 0) ? false : year % 4 === 0;
    if (validateYear) {
        alert('El año ' + year + ' es Bisiesto')
    } else {
        alert('El año ' + year + ' no Bisiesto')
    }

}


function calculadora(nro_ejercicio, x, y) {
    let resultado = 0;

    switch (nro_ejercicio) {
        case "suma":
            resultado = x + y
            alert(resultado)
            break;
        case "resta":
            resultado = x - y
            alert(resultado)
            break;
        case "multiplicacion":
            resultado = x * y
            alert(resultado);
            break;
        case "division":
            resultado = x / y
            alert(resultado)
            break;
        case "residuo":
            resultado = x % y
            alert(resultado)
            break;
        case "exponenciacion":
            resultado = x ** y
            alert(resultado)
            break;

    }
}

const  calcOperation = () => {
    let nro_ejercicio = prompt("ingrese el  ejercicio que quiere ejecutar: \r\n 1.suma \r\n 2.resta \r\n 3.multiplicacion \r\n 4.division \r\n 5.residuo \r\n 6.exponenciacion")
    if (nro_ejercicio != "suma" && nro_ejercicio != "resta" && nro_ejercicio != "multiplicacion" && nro_ejercicio != "division" && nro_ejercicio != "residuo" && nro_ejercicio != "exponenciacion") {

        resultado = -1
        alert(resultado)

    } else {
        let x = parseFloat(prompt("Ingresa Num1"))
        let y = parseFloat(prompt("Ingresa Num2"))
        calculadora(nro_ejercicio, x, y)
    }

}



const calcPrice = () => {
    let totalProductos = prompt('Ingrese el Total de Productos');
    let index = 0;
    let total=0;
    const arrayList=[]
    if (totalProductos > 0) {
        while (index < totalProductos) {
            const nameProduct = prompt(`Ingrese el nombre del producto ${index+1}`);
            const price=Number(prompt(`Ingrese el precio de ${nameProduct}`))
            total=total+price;
            arrayList.push({nameProduct,price})
            index++;
        }

        alert(`Su Total es S/. ${total}`)
    } else {
        alert('Numero Total no válido')
    }
}

/********************** Menu Ejercicios de JS *******************************/

const readMenu = () => {
    const option = prompt('Ingrese el numero de la opcion:  \r\n 1.Año Bisiesto. \r\n 2.Calculadora  \r\n 3.Calcular Precio Total \r\n');
    switch (option) {
        case '1':
            getYearBisiesto();
            break;
        case '2':
            calcOperation();
            break;
        case '3':
            calcPrice();
            break;
        default:
            alert('Opcion No valido')
            break;
    }
}

/********************** Funciones para el Login y Registro *******************************/

const showFormRegistro = () => {
    formIngresar.style.display="none";
    formRegistrar.style.display="block";
    titleModal.textContent="REGISTRO";
}


const hideFormRegistro = () => {
    formIngresar.style.display="block";
    formRegistrar.style.display="none";
    titleModal.textContent="LOGIN";
}

const showBtnLogout=(name) =>{
    btnLogin.style.display="none";
    btnLogout.innerHTML =  `<a class="nav-link text-white" href="#" id="btn_login">${name} <i class="bi bi-box-arrow-right text-white ml-3"></a>`;
    btnLogout.style.display="block";
}

const verifyLogin = () => {
    if (usuario.value == dataLogin.name && password.value == dataLogin.password) {
        showBtnLogout(dataLogin.name);
        formIngresar.reset();
        btnClose.click();
    } else {
        alert('credenciales incorrectas');
    }
}


/********************** Funcion Init *******************************/

const init = () => {
    formIngresar.addEventListener('submit', (e) => {
        e.preventDefault();
        if(dataLogin){
           verifyLogin();
        }else{
            alert('No se encuentra Registrado');
        }
    })

    formRegistrar.addEventListener('submit', (e) => {
        e.preventDefault();
        const dataUser = {
            name:usuario2.value,
            password:password2.value
        }
        showBtnLogout(usuario2.value);
        btnClose.click();
        formRegistrar.reset();
        localStorage.setItem('dataLogin',JSON.stringify(dataUser));
    })

    btnEjercicios.addEventListener("click", function () {
        readMenu();
    });

    btnRegistro.addEventListener("click", function () {
        showFormRegistro();
    });

    btnIngresar2.addEventListener("click", function () {
        hideFormRegistro();
    });

    btnLogout.addEventListener("click", function () {
        btnLogout.style.display="none";
        btnLogin.style.display="block";
    });

    /***Si ya se encuentra registado se carga su nombre en el navbar** */

    if(dataLogin){
        showBtnLogout(dataLogin.name)
    }
        
}

document.addEventListener("DOMContentLoaded", init());