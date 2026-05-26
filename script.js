// Descobrir menor numero da array

let numeros = [101,20,30,40,-5]
let menor_numero = numeros[0]

for (let i = 0 ; i <= numeros.length - 1; i ++){
    if (numeros[i] < menor_numero ){
        menor_numero = numeros[i]
    }
}
console.log(menor_numero)