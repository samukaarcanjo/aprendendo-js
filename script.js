// criar função que diz o número maior da array

let numeros = [10,20,322,100,50]

function maiorNumero(array) {
    let maior = array[0]
    for (let i = 0; i <= array.length -1; i++) {
        if (array[i] > maior){
            maior = array[i]
        }
    }
    return maior
}

let resultado = maiorNumero(numeros)
console.log(resultado)