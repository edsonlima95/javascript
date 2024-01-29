
type Create = {
    nome: string,
    idade?: number //Tipo undefined
}

function create(nome: string, idade?: number): Create {
    return {
        nome: nome,
        idade: idade //opcional
    }
}

console.log(create('João', 25))

function soma(x: any) {

    if (typeof x === 'number') return x * x

    return null
}

if(soma('testo') === null){
    console.log("conta invalida")
}else {
    console.log("conta valida")
}