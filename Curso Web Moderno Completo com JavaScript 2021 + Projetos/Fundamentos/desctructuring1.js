// novo Recurso do ES2015

const pessoa = {
    nome: "Maria Luisa",
    idade : 20, 
    endereco:{
        logradouro: "Arniqueiras Recanto verde",
        numero:1000
    }
}
const {nome, idade}= pessoa 
console.log(nome, idade)

const {nome: n, idade:   i} = pessoa
console.log(n, i)

const {sobrenome, bemHumorada = true }= pessoa
console.log(sobrenome, bemHumorada)

const {endereco:{logradouro, numero, cep}}= pessoa 
console.log(logradouro, numero, cep)


