//Desacomplando os metodos
const falar = {
    falar() {
        console.log(`${nome} acabou de falar!!!`)
    }
}

const comer = {
    comer() {
        console.log(`${nome} acabou de falar!!!`)
    }
}

const beber = {
    beber() {
        console.log(`${nome} acabou de falar!!!`)
    }
}

//Copiando os objetos para um objeto final
const pessoaPrototype = Object.assign({}, falar, comer, beber)

//Mesma coisa com ...spread
//const pessoaPrototype = {...falar, ...comer, ...beber}

/**
 * Declara a função fabrica.
 */
function criaPessoa(nome, idade) {

    /**
     * Object.create - cria um prototype apartir de um objeto existente.
     */
    return Object.create(pessoaPrototype, {
        nome: { value: nome },
        idade: { value: idade }
    })
}

const pessoa1 = criaPessoa('João', 25)

console.log()

console.log("=============EXEMPLO 02 ================")

function criaProduto(nome, preco) {

    const produtoProto = {
        metodo01() {
            return this.nome
        }
    }

    return Object.create(produtoProto, {
        nome: { value: nome },
        preco: { value: preco }
    })
}

const prod1 = criaProduto('Café', 10)

console.log(prod1)