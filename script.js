// Usando reduce()

let numeros = [5,10,15]

let somaTodos = numeros.reduce((somatodos,numero) => {
    return somatodos + numero
},0)

console.log(somaTodos)