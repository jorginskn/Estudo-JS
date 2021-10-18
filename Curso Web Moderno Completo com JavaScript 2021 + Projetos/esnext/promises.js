function falarDepoisDe (segundos, frase){//Função recebe 2 parametros e retorna uma promessa
    return new Promise((resolve, reject) => {
            setTimeout(() =>{//Dentro da promessa coloquei um setTimeout para ter um delay para simular o tempo de processamento
                resolve(frase)//Quando a promessa for atendida ela vai chamar esssa função
            }, segundos * 1000)  
    })
}   

falarDepoisDe(3, 'Que legal!') //passei para chamar depois de 3 seg e a frase q legal
    .then(frase => frase.concat('?!?'))// para acessar o resultado de uma promessa atendida usa-se then 
    .then(outraFrase => console.log(outraFrase))
    .catch(e => console.log(e)) //Tratando erro