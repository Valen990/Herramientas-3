/**
 * Crear un algoritmo que dado un número n, 
 * imprima los 15 primeros múltiplos. 
 * Si el número es cero o menor, 
 * lance un excepción con un mensaje 
 * donde advierta que el número debe 
 * ser mayor a cero
 */
const numero = document.getElementById('numero')
const resultado = document.getElementById('resultado')

function hallarMultiplos() {
    let res = ''
    let n = numero.value
    if (n <= 0) {
        resultado.innerHTML = '<div class="alert alert-danger" role="alert">el número debe ser mayor a cero</div>'
       throw new Exception('el número debe ser mayor a cero')
    }
    for (let multiplo = 1; multiplo <= 15; multiplo++) {
        res = res + '-' + n * multiplo  
    }
    resultado.innerHTML = `<div class="alert alert-success" role="alert">
  ${res}
</div>`
}

/*
console.log(n*1)
console.log(n*2)
console.log(n*3)
//...
console.log(n*15)*/


