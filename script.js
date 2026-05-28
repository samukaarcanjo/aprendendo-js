// criar uma arrow function

const soma = (a,b) => a + b

console.log(soma(10,20))

const parOuImpar = (a) => {
    if (a % 2 === 0) {
        return "Par"
    }else {
        return "Impar"
    }
}

const parOuImpar = (a) =>
    a % 2 === 0 ? "par" : "impar"

