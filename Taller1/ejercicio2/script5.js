/**
 * Usa la función , f(x)=2x+1 dentro de una función, para evaluar los 20 primeros
enteros. Sugerencia: usar un bucle.
*/

function f(x){
    return (2*x) + 1
}

for(let indice = 1; indice <= 20; indice ++){
    let respuesta = f(indice);

    console.log("Si x es: " + indice + ", el resultado será: " + respuesta)
}