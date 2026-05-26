// Contador de vogais

let palavra = "emanuel"
let contador = 0
for (let i = 0; i <= palavra.length - 1; i++) {
    if (palavra[i] == "a" || 
        palavra[i] == "e" ||
        palavra[i] == "i" || 
        palavra[i] == "o" || 
        palavra[i] == "u") {
        contador ++
    }
}
console.log(`A palavra ${palavra} tem ${contador} vogais`)