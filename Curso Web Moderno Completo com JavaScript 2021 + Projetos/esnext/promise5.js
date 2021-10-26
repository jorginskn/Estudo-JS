function funcionarOuNão(valor, chanceErro){// chamei uma função com dois parametros valor e chance de erro 
    return new Promise((resolve,reject)=>{//essa função vai me tornar uma promise 
        if(Math.random() < chanceErro){// se um numero aleatorio for menor que a chance de erro 
            reject('Ocorreu um erro!')// chamei o reject e mandei um recado
        }else{//caso contrario imprima 
            resolve(valor)//a variavel valor    
        }
    })
}

funcionarOuNão('testando', 0.9)
    .then(v => console.log(`Valor: ${v}`))
    .catch(err => console.log(`Erro: ${err}`))