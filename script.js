// objetos em arrays

let usuarios = [
    { nome : "Samuel", idade : 22},
    { nome : 'Guilherme', idade : 25},
    { nome : "Nathaly", idade : 20}
]

let nomes = usuarios.map((usuario) => {
    return usuario.nome
})

console.log(nomes)