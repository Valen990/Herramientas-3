/**
 * Usa la función , f(x)=2x+1 dentro de una función, para evaluar los 20 primeros enteros. Sugerencia: usar un bucle.
*/

/*Mi código*/
/*
function f(x){
    return (2*x) + 1
}

for(let indice = 1; indice <= 20; indice ++){
    let respuesta = f(indice);

    console.log("Si x es: " + indice + ", el resultado será: " + respuesta)
}
*/

/*Código del profe*/
const result = document.getElementById('result')

function f(x) {
    //implementar 2x+1
    return 2*x + 1
}

// implementar el for (bucle)
function ejecutar() {
    let resultado = ''
    for(let numero = 1; numero <= 20; numero++) {
       // console.log(f(numero))
        resultado = `${resultado} - ${f(numero)}`
    }
    result.innerHTML = resultado
}