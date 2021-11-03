// fs = file system é um modulo node
const fs = require('fs');
//criação de objeto
const produto = {
    nome: 'Celular',
    preco: 1249.99,
    desconto: 0.15
}
//TRANSFORMANDO OBJETO EM  JSON
//Metodo writeFile salva o arquivo em disco 
fs.writeFile(__dirname + '/arquivoGerado.json', JSON.stringify(produto), err  => {
    console.log(err || 'Arquivo Salvo')
})