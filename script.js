// Filtrar dados. Analizar as duplicatas e entregar uma array que tenha apenas as duplicatas. Mas, apenas uma delas, não as duas iguais 

let numeros = [10,34,10,20,43,11,20,500,34]
let duplicatas = []

for (let i = 0; i <= numeros.length -1; i ++){ 
    for (let j = 0; j <= numeros.length -1; j ++){
        if (numeros[i] == numeros[j] && i != j) {
            if (duplicatas.includes(numeros[i]) == false) {
                duplicatas.push(numeros[i])
            }
        }
    }
}

console.log(duplicatas)