function esperarPor(tempo = 2000) {
    return new Promise(function (resolve) {
        setTimeout(() => resolve(), tempo)
    })
}

/* esperarPor(2000) */
/*     .then(() => console.log('Executando Promise1...')) */
/*     .then(esperarPor) */
/*     .then(() => console.log('Executando Promise2...')) */
/*     .then(esperarPor) */
/*     .then(() => console.log('Executando Promise3...')) */

function retornarValor(){
    return new Promise(resolve =>{
        setTimeout(()=> resolve(10),5000)
    })
}



async function executar() {
    let valor = await retornarValor()
    await esperarPor(1500)
    console.log(`Async/Await1 ${valor}`)
    await esperarPor(1500)
    console.log(`Async/Await2 ${valor + 1}`)
    await esperarPor(1500)
    console.log(`async/Await3 ${valor + 2}`)
    return valor + 3 
}

async function executarDeVerdade(){
    const valor = await executar()
    console.log(valor)
}
executarDeVerdade()