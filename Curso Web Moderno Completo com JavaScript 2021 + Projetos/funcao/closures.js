// Closure é um escopo criado quando uma função é declara 
// Esse escopo permite a função acessar e manipular variáveis externas à função

// Contexto Léxico em ação!

const x = 'Global'

function fora (){
    const x = 'Local'
    function dentro (){
        return x
    }
    return dentro 
}

const minhaFuncao = fora ()
console.log(minhaFuncao())