/*
 + Tipos de datos
 - Numéricos: enteros (-2, 5) y flotantes (2.5, 0.8)
 - String: "Holi", 'Bye'
 - Booleanos: True, False
 - Undefined, Null
*/

//Declaración de variables
/*
const constante1 = 5.3
console.log(typeof(constante1))
console.log(constante1)
*/

/*
let mensaje = 'Holi, '
var mensaje2 = 'Corazón'
console.log(mensaje + mensaje2)
console.log(typeof(mensaje))
*/

/*
var a = 8
var a = 'Holi'
console.log(a)
*/

/*
let b = 95
//let b = true --> No se puede redeclarar
console.log(b)
*/

/*
var c = 8
{
    //scope (alcance)
    var c = false
}
console.log(c)
*/

/*
let d = 777
{
    let d = 'Otra cosa'
}
console.log(d)
*/

/**
 * Objetos
 */
const persona = {
    nombre : 'Valen',
    edad : 18,
    caminar: function(){
        console.log('Caminando...')
    }
}

let animal = {}
//console.log(persona)
//console.log(persona.edad)
//console.log(persona.caminar)

//console.log(typeof(persona))

//Arreglos
/*
let cosas = [1, 2, 3, 4, 5, 'Valen', true, null, [], {}]
const personas = [
    {
        nombre : 'Ximena',
        edad : 18,
        hablar: function(){
        console.log('Hablando...')
        }
    }
] //or New Array
console.log(typeof(personas))

console.log(5 - '4')
console.log('5' - 4)
console.log('5' - '4')
console.log(5 + '4')

console.log(cosas[4])
*/

/**
 * Funciones
*/
/*
function nombreFuncion(){
    console.log('Llamando a la función 1')
}

function nombreFuncion2(a, b, c = 'Por defecto'){
    console.log(a, b, c)
}

nombreFuncion()
nombreFuncion2(1, 5)
nombreFuncion2(1, 8, 'Julio')

let sumar = function(a= 0, b= 0){
    return a + b
}

console.log(typeof(sumar))
*/