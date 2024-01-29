
function buscarCep(cep, callback) {

    setTimeout(() => {
        /**
         * No callback o primeiro parametro e sempre o error.
         */
        callback(null, cep)
    }, 500)

}

function buscarEndereco(cep, callback) {

    setTimeout(() => {

        console.log("Buscar Endereco pelo cep: " + cep)

        const endereco = {
            cep,
            rua: 'vila união',
            numero: 28
        }

        callback(null, endereco)
    }, 1000)
}

function pessoaEndereco(endereco, callback) {

    setTimeout(() => {

        const pessoa = {
            nome: 'João',
            idade: 20,
            ...endereco
        }

        callback(null, pessoa)

    }, 2000)

}


buscarCep(63540000, (error, cep) => {

    buscarEndereco(cep, (error, endereco) => {

        pessoaEndereco(endereco, (error, pessoa) => {
            console.log(pessoa)
        })

    })

})
