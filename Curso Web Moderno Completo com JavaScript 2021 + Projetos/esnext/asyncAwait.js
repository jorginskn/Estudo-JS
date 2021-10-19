// sem promise...
const http = require('http')

const getTurma = letra => {
    const url = `http://files.cod3r.com.br/curso-js/turma${letra}.json`
    return new Promise((resolve, reject) => { // promise recebe 2 atributos resolve e reject sempre
        http.get(url, res => {


            let resultado = ''
            res.on('data', dados => {
                resultado += dados
            })
            res.on('end', () => {
                try {
                    resolve(JSON.parse(resultado))
                } catch (e) {
                    reject(e)
                }
            })
        })
    })
}
//Recurso do ES8
// Objetivo de simplicar o uso de promises 
let obterAlunos = async() =>{//colocar await e essa função vai para o proximo passo se estiver resolvida ou rejeitado 
    const ta = await getTurma ('A')
    const tb = await getTurma ('B')
    const tc= await getTurma ('C')
    return [].concat(ta, tb, tc)

} // retorna um objeto AsyncFunction em cima disso chama-se o then para executar
obterAlunos()
        .then(alunos => alunos.map(a => a.nome))
        .then(nomes => console.log(nomes))
