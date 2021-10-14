// operador ... rest ( juntar )/ Spread espalhar
//usar rest com parametro de função 


//usa spread com objeto 

const funcionario = {
     nome: 'Maria',
     salario: 12348.99
}

const clone = {ativo: true, ...funcionario}//Estou pegando os atributos de funcionario e espalhando dentro de clone
console.log(clone)

//usar spread com array 
 
const grupoA = ['João', 'Pedro', 'Gloria'];//Estou pegando os atributos do array grupoA e espalhando dentro de Grupofinal
const grupoFinal = ['Maria', 'Rafaela', ...grupoA]
console.log(grupoFinal)