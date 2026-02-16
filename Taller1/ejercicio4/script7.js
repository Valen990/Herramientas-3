/**
 * Dado una lista, imprimir en consola si es simétrico o no. Para este caso es
simétrico si al recorrerlo de derecha a izquierda es igual que recorrerlo de
izquierda a derecha.
Ejemplo:
{"a", "b", "d", "d", "b", "a"} // simétrica
{"a", "x", "b"} // No es simétrica
*/

let lista = prompt("Ingrese el contenido de la lista (separadas por comas, por fis):");
let cara = lista.split(",")

let espejo = [...cara].reverse();

let simetrica = true;

for(let indice = 0; indice < cara.length; indice++){
    if(cara[indice].trim() !== espejo [indice].trim()){
        simetrica = false;
        break;
    }
}

if(simetrica){
    alert("La lista es simétrica, wujuuuuu")
} else{
    alert("La lista no es simétrica, lo siento")
}