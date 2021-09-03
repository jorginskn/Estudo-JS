const pai = {
    nome: "Antonio",
    corCabelo:"Branco"
}
const filha1 = Object.create(pai, {nome:{value:"Giovana", wrintable: false, enumerable: true}})

for ( let key in filha1){
    filha1.hasOwnProperty(key) ?
    console.log(key) : console.log(`${filha1.nome} Recebido por herança ${key}`)
}