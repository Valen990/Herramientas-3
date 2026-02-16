/*let sumar = Function (a=0, b=0){
    return a + b;
} 
*/

/**
 * Funciones flecha
 * 
 * (parámetros) => {//cuerpo}
*/

/*
let sumarFlecha = (a = 0, b = 0) => {
    return a + b;
}

let sumarFlecha2 = (a = 0, b = 0) => a + b;
const resultadoSuma = sumarFlecha2(9+6)
console.log(resultadoSuma)
*/

//const imprimir = mensaje => mensaje

/**
 * Map, Filter, Reduce
*/
//const miArray = [1, 8, 9, 10, 15, 2, 6]

//Map
//Convertir a los múltiplos de 10
/*
const multiplos = miArray.map(numero => numero * 10)
console.log(multiplos)
*/
//forEach
//miArray.forEach(numero => console.log(numero))

//Es esto mismo de arriba :)
/*numero => {
    return numero * 10
}*/

//Filter
/*
const filtrados = miArray.filter(numero => numero > 8)
console.log(filtrados)
*/

//Hallemos la sumatorio de todos los números del array (la manera clásica e imperativa)
/*let sumatoria = 0
for(let i = 0; i < miArray.length; i++){
    sumatoria = sumatoria + miArray[i]
}
console.log(sumatoria)
*/

//Con Reduce
/*
const sumatoriaReduce = miArray.reduce((acumulador, actual) => acumulador + actual)
console.log(sumatoriaReduce)
*/

/**
 * Condicionales
*/
/*
const numero1 = 10
const numero2 = 1000
//If simple
if(numero1 <= numero2) {
    console.log('Número 1 es menor o igual que número 2')
} else{
    console.log('No es')
}
*/

//If - Else If
/*
if(numero1 > numero2) {
    console.log('numero1 < numero2')
} else if (numero1 < numero2){
    console.log('numero1 > numero2')
} else{
    console.log('Por defecto')
}
*/

//Switch - Case
/*
const valor = 3
switch(valor){
    case 1:
        console.log('Es 1')
        break
    case 2:
        console.log('Es 2')
        break
    case 3:
        console.log('Es 3')
        break
    default:
        console.log('No es ninguno')
}
*/

/**
 * Ciclos
*/
//For (Conocemos la cantidad que va a recorrer)
//for (let indice = valorIncial; indice >< limite; decremento o incremento)
/*
for(;;){ //Este es un bucle for infinito
    console.log('Holi, Pascual')
}
*/
/*
const array1 = [5, 'Holi', true]
for (let index = 0; index < array1.length ; index++){
    console.log(array1[index])
}
*/

//For Con Break
/*
for(let index = 0; index < array1.length ; index ++){
    if(array1[index] == 'Holi'){
        console.log(array1[index])
        break
    }   
    console.log('Continúa el ciclo')   
}
*/

//For Con Continue
/*
for(let index = 0; index < array1.length ; index ++){
    if(array1[index] == 'Holi'){
        console.log(array1[index])
        continue
    }   
    console.log('Continúa el ciclo')   
}
*/

//For - In (Es con el índice)
/*
for(let index in array1){
    console.log(array1[index])
}
*/

//For - Of (El valor directo del vector)
/*
for(let index of array1){
    console.log(array1[index])
}
*/

//Buscar Landas, Programación Funcional
//For Each
/*
array1.forEach(valor => console.log(valor))
*/

//While (No conocemos la cantidad que va a recorrer)
/*
while(condicion){
    //cuerpo
}
*/
/*
while(true){ //Este es el While Infinito
    console.log('Holi, Pascual')
}
*/

/*
let indice = 0
const otroArray = [1, 2, 3]
while(indice < otroArray.length){
    console.log(otroArray[indice])
    indice++
}
*/

//Do-While (Por lo menos una vez se ejecuta)
/*
do {
    //cuerpo
} while()
*/
let valor1 = 1
let valor2 = 5
do{
    console.log('Entrando A Do While')
} while (valor1 > valor2)