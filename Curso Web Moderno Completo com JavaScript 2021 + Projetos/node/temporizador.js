//disparar de 5 em 5 seg  as 13 hrs ignorar o dia do mês e o mês  vai executar na quarta feira 
const schedule = require('node-schedule')

const tarefa1 = schedule.scheduleJob('*/5 * 14 * * 3', function () { //New Date.getseconds mostra os segundos sendo executandos
    console.log('Executando tarefa 1!', new Date().getSeconds(), new Date().getHours()) // Oque eu colocar dentro dessa função ele vai executar exemplo acessar o bando de dos etc
})
//Temporizador setTimeout  com uma função  que tem tarefa1 dentro dela com um metodo para cancelar a ação
setTimeout(function () {
    tarefa1.cancel()
    console.log("Cancelando Tarefa")
}, 20000)


const regra = new schedule.RecurrenceRule()//
regra.dayOfWeek = [new schedule.Range(1, 5)]
regra.hour = 14
regra.second = 30

const tarefa2 = schedule.scheduleJob(regra, function () {
    console.log("Executando tarefa 2!", new Date().getSeconds())
})