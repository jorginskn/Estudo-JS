function gerarNumeroEntre(min, max, numerosProibidos) { //metodo gerar numero
    if (min > max) {
        [max, min] = [min, max]// como inverter o  minimo e o maximo
    }
    return new Promise((resolve,reject) => {//retorna uma promise
        const fator = max - min + 1
        const aleatorio = parseInt(Math.random() * fator) + min
        if(numerosProibidos.includes(aleatorio)){
            reject('Número Repetido!')
        }{
            resolve(aleatorio)
        }
    })
}


async function gerarMegaSena(qtdeNumeros, tentativas = 1){
    try{
        const numeros = []
        for(let _ of Array(qtdeNumeros).fill()){
          numeros.push(await gerarNumeroEntre(1, 60, numeros))
    }
    return numeros
    }catch(e) {
        if(tentativas > 10){
            throw "Não deu certo"
        }
        gerarMegaSena(qtdeNumeros, tentativas + 1)
    }
}

gerarMegaSena(15)
 .then(console.log)
 .catch(console.log)

