// Contador letras especificas

let palavra = "banana"
let contador = 0
let letra = "a"
for (let i = 0 ; i <= palavra.length - 1; i ++ ){
    if (palavra[i] == letra) {
        contador ++
    }
}
console.log(`Essa palavra tem ${contador} letras A`)
