// Contar frequencia. Contar a frequencia que cada numero aparece dentro da lista. Adicionalo a um objeto e somar sua frequencia. 

let numeros = [10,34,10,20,43,11,20,500,34]
let frequencia = {}

for (let i = 0; i <= numeros.length -1; i ++) {
    if (frequencia[numeros[i]]) {
        frequencia[numeros[i]] += 1
    }
    else {
        frequencia[numeros[i]] = 1
    }
}
console.log(frequencia)