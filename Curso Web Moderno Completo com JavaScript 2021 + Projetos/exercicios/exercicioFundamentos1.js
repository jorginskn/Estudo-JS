/*Crie uma função que retorna a string "Olá, " concatenada com um argumento text (a ser passado para a
função) e com ponto de exclamação "!" no final.*/

const saudacao = function (cumprimentar, nome){
    cumprimentar = "Olá,  ";
    nome = "Leornado!"
    return  cumprimentar + nome
}

console.log(saudacao())