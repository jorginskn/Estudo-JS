/*Crie uma função que recebe um número (de 1 a 12 e retorne o mês correspondente como uma string. Por
exemplo, se a entrada for 2, a função deverá retornar "fevereiro", pois este é o 2° mês.
Exemplos*/

const retornaMes = function (nomeDoMes) {
    switch (nomeDoMes) {
        case 12:
            console.log("Dezembro")
            break;
        case 11:
            console.log("Novembro")
            break;
        case 10:
            console.log("Outubro")
            break;
        case 9:
            console.log("Setembro")
            break;
        case 8:
            console.log("Agosto")
            break;
        case 7:
            console.log("Julho")
            break;
        case 6:
            console.log("Junho")
            break;
        case 5:
            console.log("Maio")
            break;
        case 4:
            console.log("Abril")
            break;
        case 3:
            console.log("Março")
            break;
        case 2:
            console.log("Fevereiro")
            break;
        case 1:
            console.log("Janeiro")
            return nomeDoMes
    }

}
retornaMes(1)