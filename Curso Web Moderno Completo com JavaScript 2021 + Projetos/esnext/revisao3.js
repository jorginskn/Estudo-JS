//ES8: Object.values me da os valores atributos do objet/Object.Entries
const obj = {a: 1, b: 2, c: 3,} 
console.log(Object.values(obj))
console.log(Object.entries(obj))

// Melhorias  na notação literal de objeto 
const nome = 'Carla'
const pessoa ={
    nome,
    ola(){
        return 'Oi gente !'
    }
}
console.log(pessoa.nome, pessoa.ola())

//Class 
class Animal {}
class Cachorro extends Animal{
    falar(){
        return 'Au Au!'
    }
}
console.log(new Cachorro().falar)