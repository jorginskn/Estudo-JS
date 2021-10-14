function real (partes, ...valores){
    const resultado = []// Vou colocar os elementos dentro de um array e da um join para reconstruir a frase
    valores.forEach((valor, indice)=> { //valores. forEach para percorrer os valores me dando o valor e o indice
        valor = isNaN(valor) ? valor : `RS${valor.toFixed(2)}`//Valor = se não for valor numero  retorna o valor : mas  se for chama real  e o valor 
        resultado.push(partes[indice], valor)
    })
    return resultado.join('')
}

const preco = 29.99;
const precoParcela = 11;
console.log(real  `1x de ${preco} ou 3x de ${precoParcela}.`)