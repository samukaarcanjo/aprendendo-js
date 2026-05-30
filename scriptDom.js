let adicionar_tarefas = document.getElementById("adicionar_tarefas")

let botao = document.getElementById("botao")

let lista = document.getElementById("lista")

botao.addEventListener("click", () => {

    if (adicionar_tarefas.value.trim() === "") {
        alert("Por favor digite uma taréfa ")
        return
    } 

    let item = document.createElement("li")
    item.innerText = adicionar_tarefas.value

    let botao_excluir = document.createElement("button")
    botao_excluir.innerText = "Excluir"

    botao_excluir.addEventListener("click", () => {
        item.remove()
    })

    item.appendChild(botao_excluir)
    lista.appendChild(item)

    adicionar_tarefas.value = ""
})

adicionar_tarefas.addEventListener("keydown", (evento) => {
    if (evento.key === "Enter") {
        botao.click()
    }
})

