const pilotos = ['Vettel', 'Alonso', 'Raikkonen', 'Massa']
pilotos.pop()
console.log(pilotos)

pilotos.push('Vestappen') // massa quebrou o carro 
console.log(pilotos)

pilotos.shift()// Remove o primeiro! 
console.log(pilotos)

pilotos.unshift('Hamilton')
console.log(pilotos)

//splice pode adicionar e remover elemtnos 

//adicionar 
pilotos.splice(2, 0, 'Bottas', 'Massa')
console.log(pilotos)
//remover 
pilotos.splice(3, 1)
console.log(pilotos)// massa quebrou

const algunsPilotos1 = pilotos.slice(2) // novo array
console.log(algunsPilotos1)

const algunsPilotos2 = pilotos.slice(1, 4)
console.log(algunsPilotos2)