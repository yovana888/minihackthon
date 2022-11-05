const btnIngresar = document.getElementById('btn-ingresar');
const formIngresar = document.getElementById('formingresar');
const usuario = document.getElementById("inputuser");
const password = document.getElementById("inputpassword");
const btnLogin = document.getElementById("btn-login");
const btnEjercicios = document.getElementById("ejercicios");
const user = {
    username: 'admin',
    password: 'admin123',

}

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

const init = () => {
    formIngresar.addEventListener('submit', (e) => {
        e.preventDefault();
        if (usuario.value == user.username && password.value == user.password) {
            btnLogin.textContent = user.username;
        } else {
            alert('credenciales incorrectas');
        }
    })

    btnEjercicios.addEventListener("click", function () {
        readMenu();
    });
}

document.addEventListener("DOMContentLoaded", init());