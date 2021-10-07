//Importei  o JSON E  O AXIOS
const url = "http://files.cod3r.com.br/curso-js/funcionarios.json ";
const axios = require('axios');
// Declarei as variaveis com pais genero e salario  e fiz a logica para pedir o retorno
const portugues = f => f.pais === 'Portugal'
const homens = f => f.genero === 'M'
const maiorSalario = (func, funcAtual) => {
    return func.salario > funcAtual.salario ? func : funcAtual
}
//Fazer a requisição
axios.get(url).then(response => {
    const funcionarios = response.data
    console.log(funcionarios)
    //Homem Português com maior salario 
    // filter  para filtar as informaçoes exemplo(portugues , homens (maiorSalario))
    const func = funcionarios
        .filter(portugues)
        .filter(homens)
        .reduce(maiorSalario)

    console.log(func)
})