const alunos = [ 
    {nome: "João", nota: 7.3, bolsista: true},
    {nome: "Maria", nota:9.2, bolsista: false},
    {nome: "Pedro", nota: 9.8, bolsista: true},
    {nome: "Ana", nota: 8.7, bolsista: false}
]

//Desafio 1: Todos os Alunos são bolsistas?
const todosBolsistas = (resultado, bolsista)=> resultado && bolsista
console.log(alunos.map(a => a.bolsista).reduce(todosBolsistas)) 

//Desafio 2 : Algum aluno é bolsista ?
const algumBosista = (resultado, bolsista) => resultado || bolsista
console.log(alunos.map(a => a.bolsista).reduce(algumBosista))   
