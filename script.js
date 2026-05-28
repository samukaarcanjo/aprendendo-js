// Usando map,filter,reduce para filtrar pares e impares, dobrar valores e somar todos 

let numeros = [1,2,3,4,5,6]

let pares = numeros.filter((numero) => {
    return numero % 2 === 0
})
let impares = numeros.filter((numero) => {
    return numero % 2 != 0
})

let dobroPares = pares.map((numero) => {
    return numero * 2
})

let dobroImpares = impares.map((numero) => {
    return numero * 2
})

let somaPares = dobroPares.reduce((somatodos,numero) => {
    return somatodos + numero
},0)
let somaImpares = dobroImpares.reduce((somatodos,numero) => {
    return somatodos + numero
},0)

console.log(somaPares)
console.log(somaImpares)