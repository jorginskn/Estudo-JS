const anonimo = process.argv.indexOf('-a') !== -1
//console.log(anonimo)

    if (anonimo){
        process.stdout.write('Fala Anonimo!\n')
        process.exit()//Pode finalizar a aplicação com process.exit
    }else{
        process.stdout.write('informe o seu nome: ')
        process.stdin.on('data', data =>{//Entrada padrão apartir do evento on data
            const nome = data.toString().replace('\n', '')

            process.stdout.write(`  Fala ${nome}!!!!\n`)//saida padrão usando process.stdout.write 
            process.exit()
        })
    }