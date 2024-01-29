

function buscarEnderecoPeloCep(cep) {

    return new Promise((resolve, reject) => {

        setTimeout(() => {


            console.log("BUSCANDO ENDEREÇO PELO CEP: " + cep);

            const endereco = {
                cep: cep,
                logradouro: "Rua ABC",
                bairro: "Bairro ABC",
                localidade: "Localidade ABC",
                uf: "UF ABC"
            }

            resolve(endereco)

        }, 1000)
    });
}

function buscarPessoaPelaRua(endereco) {

    return new Promise((resolve, reject) => {

        setTimeout(() => {

            console.log("BUSCANDO PESSOA PELA RUA", endereco.logradouro);

            const pessoa = {
                nome: "joão",
                sobrenome: "silva",
                idade: 30,
                ...endereco
            }

            resolve(pessoa)


        }, 2000)

    })

}

buscarEnderecoPeloCep(6354000).then(endereco => {
    return buscarPessoaPelaRua(endereco)
}).then(pessoa => {
    console.log("============Exempo 01 promise com then e catch ==============")
    console.log(pessoa);
}).catch(error => {
    console.log(error)
})



async function retornaDadosPessoa() {

    const endereco = await buscarEnderecoPeloCep(63280000)

    const pessoa = await buscarPessoaPelaRua(endereco)

    console.log("============Exempo 02 promise com async e await ==============")

    console.log(pessoa)
}

retornaDadosPessoa()
