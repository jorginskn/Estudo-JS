// tagged template  - A IDEIA DESSA FUNCIONALIDADE É PROCESSAR UMA TEMPLATE STRING  DENTRO DE UMA FUNÇÃO 

function tag(partes, ...valores){
    console.log(partes)
    console.log(valores)
    return 'Outra String'
}
const Aluno = 'Gui';
const situação = 'Aprovado'
console.log(tag `${Aluno} está ${situação}. `)