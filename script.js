const pedidos = [
    { produto: "Notebook", preco: 3500 },
    { produto: "Mouse", preco: 120 },
    { produto: "Teclado", preco: 250 }
]

// Objetivo:
// Somar o valor total dos produtos.
//
let precoTot = pedidos.reduce((somatodos,produto) => {
    return somatodos += produto.preco
},0)

console.log(precoTot)
// Resultado esperado:
// 3870

