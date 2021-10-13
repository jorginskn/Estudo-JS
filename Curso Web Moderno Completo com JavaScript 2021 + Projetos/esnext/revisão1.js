// let e const  variaveis

const { templateSettings } = require("lodash")

//Var tem escopo de funçao e global e let tem escopo de bloco função e global
 {
     var a = 2
    let b = 3 
    console.log(b)

 }
console.log(a)

//template String 
const produto ='ipad'
console.log(`${produto}`)


//Destructuring tirar dentro de uma estrutura algo seja um objeto array  string 
//TIROU DE UMA STRING
const [l, e,  ...tras] = "COd3r"
console.log(l, e, tras)
//ARRAY
const [x,  y] = [1, 2, 3]
console.log(x, y)
//Objeto
const {idade: i, nome } = {nome:'Ana', idade: 9}
console.log(i, nome)
