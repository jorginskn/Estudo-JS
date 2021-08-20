let numeros = [4, 12, 6, 5];
let maiorNumero = 0;

numeros.forEach((numeroAtual) => {
    if (numeroAtual > maiorNumero){
        maiorNumero = numeroAtual
    }
})

console.log(maiorNumero)