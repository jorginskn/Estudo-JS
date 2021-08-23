// coleção dinâmica de pares chave/valor 
const produto = new Object
    produto.nome = "Cadeira "
    produto['marca de produto'] = 'Generica'
    produto.preco = 220

console.log(produto)
delete produto.preco
delete produto['marca de produto']
console.log(produto)

const carro = {
        modelo: 'A4',
        valor: 89000,
        proprietario:{
            nome: 'Jorge',
            idade: 22,
            enderereco:{
                logradouro: 'Candangolândia',
                numero: "5 Conjunto c casa 67"

            }

        },
        condutores:[{
            nome: 'Caio',
            idade: 21 
        }, {
             nome:'João',
             idade: 18 
        }],
        calcularValorSeguro: function(){
            //...
        }   
}
carro.proprietario.enderereco.numero = 1000 
carro['proprietario']['enderereco']['logradouro'] = 'Brasília/DF'
console.log(carro)

// delete carro.condutores
delete carro.proprietario.enderereco
delete carro.calcularValorSeguro
console.log(carro)
console.log(carro.condutores.length)
