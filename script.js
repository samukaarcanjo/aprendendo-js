// criar função que identifica par ou impar

function parOuImpar(a) {
    if (a % 2 === 0) {
        return "Par"
    }else {
        return "Impar"
    }
}

let resultado = parOuImpar(111)

console.log(resultado)