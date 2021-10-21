const  primeiroElemento = arrayOuString => arrayOuString[0]
const  primeiraLetra = string => string[0]
const letraMinuscula = letra => letra.toLowerCase()

 new Promise(function (resolve) { // função p recebe uma promessa 
    resolve(['Ana', 'Bia', 'Carlos', 'Daniel']) //Essa promessa  pode chamar arrays objetos ou numeors
})
    .then(segundoElemento)
    .then(primeiraLetra) // usando then para chamar a promessa   
    .then(letraMinuscula)
    .then(console.log)