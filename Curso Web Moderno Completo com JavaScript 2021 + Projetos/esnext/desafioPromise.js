const fs = require('fs')
const path = require('path') //Chamandos os modulos node




function lerArquivo(caminho) { //Função ler arquivo passando o caminho como parametro
    return new Promise(resolve => { //e como retorno chamei uma promise com o parametro resolve 
        fs.readFile(caminho, function (_, conteudo) {//fs.Readfile metodo node  para ler arquivos passando caminho e uma função como parametro  e a função recebe counteudo
            resolve(conteudo.toString())

        })
    })
}


const caminho = path.join(__dirname, 'dados.txt')

lerArquivo(caminho)//Peguei o arquivo
    .then(conteudo => conteudo.split('\n'))//separou as linhas
    .then(linhas => linhas.join(','))// Juntei as linhas e separei por  as linhas por virgula
    .then(conteudo => `O Valo final é: ${conteudo}`)
    .then(console.log)
   