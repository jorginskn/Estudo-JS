/*Desenvolva uma função que recebe dois parâmetros, um é a quantidade de horas trabalhadas por um
funcionário num mês, e o quanto ele recebe por hora. O retorno da função deve ser a string "Salário igual a R$
X", em que X é o quanto o funcionário ganhou no mês.
Exemplos:
calcularSalario(150, 40.5) // retornará "Salário igual a R$ 6075"*/

const calcularSalario = function(horasTrabalhadasMes, salarioHora){
     horasTrabalhadasMes = 150 ;
     salarioHora = 40.5; 
     

      return   horasTrabalhadasMes * salarioHora  ;
}
console.log("Salario igual a", calcularSalario())


