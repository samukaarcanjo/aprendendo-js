let nome = document.getElementById("nome")

let botao = document.getElementById("botao")
let titulo = document.getElementById("titulo")

botao.addEventListener("click", () => {
    console.log(nome.value)
    titulo.innerText = `Olá ${nome.value}`
})