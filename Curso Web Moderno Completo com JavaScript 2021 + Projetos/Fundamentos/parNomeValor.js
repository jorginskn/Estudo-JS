//par nome/valor 
const saudacao = 'Opa'// contexto léxico 1

function exec(){
    const saudacao ="Falaa"// contexto léxico 2
    return saudacao
}

//Objetos sãõ grupos aninhados de pares nomes/valoro
const cliente =  {
    nome:"Jorge",
    idade:22,
    peso:77,
    endereco: {
        logradouro: "Candanga",
        rua:"QR 5 CONJ C CASA 67"

    }
}
console.log(saudacao)
console.log(exec())
console.log(cliente)