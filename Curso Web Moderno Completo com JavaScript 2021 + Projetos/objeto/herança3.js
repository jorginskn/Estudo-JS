const pai = { nome:'Jorge', corCabelo:'Preto'}

const filha1 = Object.create(pai)
filha1.nome = 'Ana'
console.log(filha1.corCabelo)

const filha2 = Object.create(pai,{
    nome:{value: 'Bia', writrable:false, enumerable: true}})

console.log(filha2.nome)
filha2.nome = "Carla"
console.log(`${filha2.nome} tem cabelo ${filha2.corCabelo}`)

console.log(Object.keys(filha1))
console.log(Object.keys(filha2))
console.log(Object.keys(pai))


for ( let key in filha2){
    filha2.hasOwnProperty(key) ?
    console.log(key) : console.log(`Por herança: ${key}`)

}