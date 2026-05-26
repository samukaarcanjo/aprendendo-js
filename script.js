// Contador letras especificas

let numeros = [101,20,30,40]
let maior_numero = numeros[0]
for (let i = 0 ; i <= numeros.length - 1; i ++){
    if (numeros[i] > maior_numero ){
        maior_numero = numeros[i]
    }
}
console.log(maior_numero)