function imprimirSoma (a , b ){
    console.log(a + b)
}

imprimirSoma(2, 2)
imprimirSoma(2, 10)

// Armazenando uma funcao arrow em uma variavel 
const soma = (a, b)=>{
    return a + b 
}
console.log(soma(2, 3))