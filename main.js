let cajaDatos = document.querySelector('.input-box');
let cajaNumero1 = document.querySelector('.operand-box');
let cajaOperacion = document.querySelector('.operator-box');
console.log(cajaNumero1);

let ingreso = (digito) => {
    var numeroUno = cajaDatos.value += digito;
    console.log(numeroUno);
    return numeroUno;
}


let borrarDatos = () => {
    cajaDatos.value = "";
    console.log('');
}

let reset = () => {
    cajaDatos.value = "";
    cajaNumero1.innerHTML = "";
    cajaOperacion.innerHTML = "";
}



let operacion = (operacion) => {
    let numeroUno = cajaDatos.value;
    console.log(numeroUno);
    if (operacion === '+') {
        cajaOperacion.textContent = '+';
        cajaNumero1.textContent = numeroUno;
        borrarDatos();
        numeroDos = cajaDatos.value;
    } else if (operacion === '-') {
        cajaOperacion.textContent = '-';
        cajaNumero1.textContent = numeroUno;
        borrarDatos();
        numeroDos = cajaDatos.value;
    } else if (operacion === '*') {
        cajaOperacion.textContent = 'x';
        cajaNumero1.textContent = numeroUno;
    } else {
        cajaOperacion.textContent = '/';
        cajaNumero1.textContent = numeroUno;
        borrarDatos();
        let numeroDos = cajaDatos.value;
        return numeroDos = cajaDatos.value;;
    }
    console.log(numeroDos);
    return numeroDos
};

function suma(num1, num2) {
    cajaDatos.value = num1 + num2;
}

function resta(num1, num2) {
    cajaDatos.value = num1 - num2;
}

function multiplicacion(num1, num2) {
    cajaDatos.value = num1 * num2;
}


function division(num1, num2) {
    cajaDatos.value = num1 / num2;
}