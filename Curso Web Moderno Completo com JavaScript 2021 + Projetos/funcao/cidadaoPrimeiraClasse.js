// Função em JS é first-Class Object (Citizens)
// High- order function 

// Criar de forma literal 

function fun1(){ }

// Armazenar em uma variavel
const fun2 = function (){ }

// Armazenar em um Array 
const array = [function(a, b) { return a + b}, fun1 , fun2]
console.log( array[0](2, 3))

// Armazenar em um Atributo de objetos
const obj = {}
obj.falar = function () {return 'Opa'}
console.log(obj.falar())

// Passar função como param 
function run (fun){
    fun()
}
run(function(){console.log('Executando...')})

// Uma função pode retornar/conter uma função 
function soma (a, b){
    return function (c) {
        console.log(a + b + c)
    }
}
soma(2, 3)(4) 
const cincoMais = soma (2, 3)
cincoMais(4)
