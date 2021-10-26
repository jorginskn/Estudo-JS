function funcionarOuNão(valor, chanceErro){
    return new Promise((resolve,reject)=>{
        if(Math.random() < chanceErro){
            reject('Ocorreu um erro!')
        }else{
            resolve(valor)
        }
    })
}

funcionarOuNão('testando', 0.9)
    .then(v => console.log(`Valor: ${v}`))
    .catch(err => console.log(`Erro: ${err}`))