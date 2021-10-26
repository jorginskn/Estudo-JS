function gerarNumeroEntre(min, max, tempo) { //metodo gerar numero

       // como inverter o  minimo e o maximo
    
    return new Promise(resolve => {//retorna uma promise
        setTimeout(function(){
        const fator = max - min + 1
        const aleatorio = parseInt(Math.random() * fator) + min
        resolve(aleatorio)
    }, tempo)
} )       
}

function gerarVariosNumeros(){
    return Promise.all([
        gerarNumeroEntre(1, 60, 4000),
        gerarNumeroEntre(1, 60, 1000),
        gerarNumeroEntre(1, 60, 5000),
        gerarNumeroEntre(1, 60, 3000),
        gerarNumeroEntre(1, 60, 3000),
        gerarNumeroEntre(1, 60, 100),
        gerarNumeroEntre(1, 60, 1500),
        
    ])
}
gerarVariosNumeros().then(numeros => console.log(numeros))