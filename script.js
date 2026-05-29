const produtos = [
    { nome: "Notebook", preco: 3500, categoria: "tecnologia" },
    { nome: "Mouse", preco: 120, categoria: "tecnologia" },
    { nome: "Cadeira", preco: 900, categoria: "moveis" },
    { nome: "Teclado", preco: 250, categoria: "tecnologia" },
    { nome: "Mesa", preco: 700, categoria: "moveis" }
]

// Objetivo:
// Crie uma variável que contenha apenas os produtos
// da categoria "tecnologia"
let tecnologia = produtos.filter((item) => {
    return item.categoria === "tecnologia"
})

console.log(tecnologia)
//
// Resultado esperado:
// [
//   { nome: "Notebook", preco: 3500, categoria: "tecnologia" },
//   { nome: "Mouse", preco: 120, categoria: "tecnologia" },
//   { nome: "Teclado", preco: 250, categoria: "tecnologia" }
// ]