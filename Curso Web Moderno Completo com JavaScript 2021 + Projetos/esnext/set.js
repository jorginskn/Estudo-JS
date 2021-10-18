// Não aceita repetição e não é indexada[i]
const times = new Set()
times.add('Vasco')
times.add('São Paulo').add('Palmeiras').add('Corithias').add('Flamengo')
console.log(times.has('Vasco'))
console.log(times)

const nomes = ['Jorge', 'Caio', 'Giovana', 'Caio']
const nomesSet = new Set(nomes)
console.log(nomesSet)
