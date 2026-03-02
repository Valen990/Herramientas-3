/**
 * Dado una lista, imprimir en consola si es 
 * simétrico o no. Para este caso es
simétrico si al recorrerlo de derecha a 
izquierda es igual que recorrerlo de
izquierda a derecha.
Ejemplo:
{"a", "b", "d", "d", "b", "a"} // simétrica
{"a", "x", "b"} // No es simétrica
 */
const simetrico = ['a', 'b', 'd', 'd', 'b', 'a']
//const simetrico = ['a', 'x', 'b']

function esSimetrico( array = []) {
    // implementar la lógica
    // return true si es, return false si NO es
    for (let i = 0; i < array.length / 2; i++) {
        if (array[i] !== array[array.length - 1 - i]) {
            return false;
        }
    }
    return true;
}

if(esSimetrico(simetrico)) {
    console.log("Si es simétrico") 
} else {
   console.log("NO es simétrico") 
}
