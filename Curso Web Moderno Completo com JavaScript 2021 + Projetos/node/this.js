console.log(this === global)
console.log(this === module)

console.log(this === module.exports)
console.log(this === exports)

function logThis() {
    console.log('Dentro de  uma função...   ')
    console.log(this === exports)
    console.log(this === module.exports)
    console.log(this === global)
}
logThis()

//this dentro de uma função  estou acessando global  e fora estou acessando module.exports ou seja transformando o atributo em algo publico
//