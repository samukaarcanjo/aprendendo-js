// Descobrir media dos numeros
let numero = [10,20,30,40,50,60,70,80,90]
let soma_numeros = 0

for (let i = 0 ; i <= numero.length - 1; i ++){
    soma_numeros += numero[i]
}

let media = soma_numeros / numero.length

console.log(media)

