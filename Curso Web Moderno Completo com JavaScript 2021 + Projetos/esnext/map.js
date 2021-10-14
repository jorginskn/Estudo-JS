const tecnologias = new Map()
tecnologias.set('react', {framework: false})
tecnologias.set('Angular',{framework: true})
console.log(tecnologias.get('react'))//metodo get 


const chavesVariadas = new Map([
    [function () { }, 'Função'],
    [{}, 'Objeto'],
    [123, 'Número']
])


chavesVariadas.forEach((vl, ch)=>{
    console.log(ch, vl)
})

console.log(chavesVariadas.has(123))// has  é a função que diz se o elemento ta contido ou não
chavesVariadas.delete(123)
console.log(chavesVariadas.has(123))
console.log(chavesVariadas.size)//quantos elementos estão presentes dentro do map
chavesVariadas.set(123, 'a')
chavesVariadas.set(123, 'b')
console.log(chavesVariadas)