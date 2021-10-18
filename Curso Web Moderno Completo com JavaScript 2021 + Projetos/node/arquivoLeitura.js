const fs = require('fs')
const caminho = __dirname + '/arquivo.json'
//sicrono.. Não é recomendado pois ler o arquivo completamente  se o arquivo for grande vai causar um grande impacto na requisição

const conteudo = fs.readFileSync(caminho, 'utf-8')
console.log(conteudo)


//Assicrona... passando callback    
fs.readFile(caminho, 'utf-8', (err, counteudo) =>{
const config = JSON.parse(conteudo)
console.log(`${config.db.host} : ${config.db.port}`)
})
// Ler o arquivo JSON e converte para objeto exemplo configurações do banco de dados 
const config = require('./arquivo.json')
console.log(config.db.host)

// Ler diretorio com callback
fs.readdir(__dirname, (err, arquivos)=>{
    console.log('Conteudo para pasta...')
    console.log(arquivos)
})