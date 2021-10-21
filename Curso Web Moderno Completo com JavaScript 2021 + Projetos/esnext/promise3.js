function gerarNumeroEntre(min, max) { //metodo gerar numero
    if (min > max) {
        [max, min] = [min, max]// como inverter o  minimo e o maximo
    }
    return new Promise(resolve => {//retorna uma promise
        const fator = max - min + 1
        const aleatorio = parseInt(Math.random() * fator) + min
        resolve(aleatorio)
    })
}


gerarNumeroEntre(1, 60)
    .then(num => num * 10)
    .then(numX10 => `O numero gerado foi ${numX10}`)
    .then(console.log)