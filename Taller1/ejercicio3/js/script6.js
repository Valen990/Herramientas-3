/**
 * Realizar la calculadora clásica: sumar, restar, multiplicar, dividir.
*/

/* Este es mi código */
/* 
function calculadora(num1, num2, calculo){
    let respuesta;

    switch(calculo){
        case "suma":
            respuesta = num1 + num2;
        break;
        case "resta":
            respuesta = num1 - num2;
        break;
        case "multiplicacion":
        case "multiplicación":
            respuesta = num1 * num2;
        break;
        case "division":
        case "división":
            if (num2 === 0) return "No podemos dividir por cero.";
            respuesta = num1 / num2;
        break;
        default:
        return "Operación no válida";
    }
    return "El resultado de: " + calculo + ", es: " + respuesta;
}

let num1 = Number(prompt("Ingresa el primer número, por fis: "))
let num2 = Number(prompt("Ingresa el segundo número, por fis: "))
let opciones = prompt("¿Qué cálculo quieres hacer? (suma, resta, multiplicacion, division):");

let mensajito = calculadora(num1, num2, opciones)
alert(mensajito)
*/

/*Código del profe*/
function sumar(a = 0, b = 0) {
    return a + b
}

function restar(a = 0, b = 0) {
    return a - b
}

function multiplicar(a = 0, b = 0) {
    return a * b
}

function dividir(a = 0, b = 1) {
    if (b === 0) return "No podemos dividir por cero.";
    return a / b
}

const numero1 = document.getElementById('numero1')
const numero2 = document.getElementById('numero2')
const result = document.getElementById('result')

function operar(event) {
    const n1 = Number(numero1.value)
    const n2 = Number(numero2.value)
    //console.log(event.value)
    let valor = Number(event.value)
    let operacion = 0
    switch(valor) {
        case 1:
            operacion = sumar(n1, n2)
            break
        case 2:
            operacion = restar(n1, n2)
            break
        case 3:
            operacion = multiplicar(n1, n2)
            break
        case 4:
            operacion = dividir(n1, n2)
            break
        default:
            operacion = 0
    }
    result.innerHTML = 'El resultado es: ' + operacion
}