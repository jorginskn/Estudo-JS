const pessoa ={
    nome: 'Jorge',
    idade: 22,
    peso: 77,

}

console.log(Object.keys(pessoa))
console.log(Object.values(pessoa))
console.log(Object.entries(pessoa))


Object.entries(pessoa).forEach(e =>{
    console.log(`${e[0]}: ${e[1]}`)

})

Object.defineProperty(pessoa, 'dataNascimento', {
    enumerable: true,
    writrable: false,
    value: '07/06/1999'
})

pessoa.dataNascimento = '07/06/2029'
console.log(pessoa.dataNascimento)
console.log(Object.keys(pessoa))

//Object.assing (ECMAScript 2015)
const dest = {a:1}
const o1 = {b:2}
const o2 = {c: 3, a: 4}
const obj = Object.assign(dest, o1, o2)
 