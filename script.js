// find()

let usuarios = [
    { nome: "Samuel", idade: 22 },
    { nome: "Lucas", idade: 17 },
    { nome: "Ana", idade: 25 }
]

let nome = usuarios.find(usuario => usuario.nome === "Ana")
console.log(nome.idade)