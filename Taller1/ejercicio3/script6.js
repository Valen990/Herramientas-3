/**
 * Realizar la calculadora clásica: sumar, restar, multiplicar, dividir.
*/

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