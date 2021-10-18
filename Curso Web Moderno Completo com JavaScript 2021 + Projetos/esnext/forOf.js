// enquanto for in   intera em cima de indice o for of impera em cima de valores

//em cima de uma string 
for (let letra of  "Cod3r"){
    console.log(letra)
}


const assuntosEcma  = ['Map', 'set', 'Promise'] // declarando array
for (let i  in assuntosEcma){  
    console.log(i)
}

for (let assunto of assuntosEcma){// assunto pegando os valores assuntosEcma atráves de of 
    console.log(assunto)
}
const  assuntosMap = new Map([
    ['Map',{abordado:true}],
    ['Set',{abordado: true}],
    ['Promise', {abordado: false}]
])

//percorrendo o map
for (let assunto of assuntosMap){
    console.log(assunto)
}//Percorrendo chave
for (let chave of  assuntosMap.keys() ){
    console.log(chave)
}//Percorrendo valor
for (let value of assuntosMap.values()){
    console.log(value)
}//Percorrendo as entrada entries 
for (let[ch, vl]of assuntosMap.entries()){
    console.log(ch, vl)
}

const s = new Set(['a', 'b', 'c'])//Construtor
for (let letra of s ){
    console.log(letra)
}


 