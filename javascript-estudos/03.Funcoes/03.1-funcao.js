
//Função declarativa
function nome(){
    return "Edson"
}

console.log(nome())


//Função anonima

const soma = function(v1, v2){
    return v1 + v2
}

console.log(soma(2, 3))


//Função arrow

const multiplicar = (...valores) => {

    let res = 1

    for (const v of valores) {
        res *= v
    }

    return res
}

console.log(multiplicar(2, 3, 4, 5, 6))


//função autoinvocadas

/**
 * Essa função protege o scopo local do scopo global, tudo que for feito dentro delas
 * não reflete fora.
 */


